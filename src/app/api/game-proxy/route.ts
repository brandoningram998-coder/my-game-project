import { NextRequest, NextResponse } from 'next/server';

const ALLOWED_HOSTS = new Set(['assets.drkabuda.com']);

function sanitizeJavascript(content: string): string {
  return content
    .replace(/window\.top/g, 'window.self')
    .replace(/top\.location/g, 'self.location')
    .replace(/parent\.location/g, 'self.location');
}

function normalizeRelativeUrl(url: string, base: URL): string {
  return new URL(url, base).toString();
}

function rewriteHtml(html: string, target: URL): string {
  const base = new URL('./', target);
  const attributePattern = /(src|href)=["']([^"']+)["']/gi;

  const rewritten = html.replace(attributePattern, (match, attr, value) => {
    try {
      if (value.startsWith('data:') || value.startsWith('mailto:') || value.startsWith('javascript:')) {
        return match;
      }
      let absoluteUrl = value;
      if (!/^(https?:)?\/\//i.test(value)) {
        absoluteUrl = normalizeRelativeUrl(value, base);
      }
      const resolved = new URL(absoluteUrl);
      if (!ALLOWED_HOSTS.has(resolved.hostname)) {
        return `${attr}="${absoluteUrl}"`;
      }
      const proxied = `/api/game-proxy?src=${encodeURIComponent(resolved.toString())}`;
      return `${attr}="${proxied}"`;
    } catch {
      return match;
    }
  });

  return sanitizeJavascript(rewritten);
}

function rewriteJavascript(js: string): string {
  return sanitizeJavascript(js);
}

export async function GET(request: NextRequest) {
  const src = request.nextUrl.searchParams.get('src');

  if (!src) {
    return NextResponse.json({ error: 'Missing src parameter' }, { status: 400 });
  }

  let targetUrl: URL;
  try {
    targetUrl = new URL(src);
  } catch {
    return NextResponse.json({ error: 'Invalid src parameter' }, { status: 400 });
  }

  if (!ALLOWED_HOSTS.has(targetUrl.hostname)) {
    return NextResponse.json({ error: 'Host not allowed' }, { status: 403 });
  }

  try {
    const upstream = await fetch(targetUrl.toString(), {
      headers: {
        'user-agent': request.headers.get('user-agent') ?? 'Mozilla/5.0'
      },
      cache: 'no-store'
    });

    if (!upstream.ok) {
      return NextResponse.json({ error: 'Upstream fetch failed' }, { status: upstream.status });
    }

    const contentType = upstream.headers.get('content-type') ?? 'application/octet-stream';

    if (/^(text|application)\/(javascript|ecmascript|x-javascript)/i.test(contentType)) {
      const body = await upstream.text();
      return new NextResponse(rewriteJavascript(body), {
        headers: {
          'content-type': contentType,
          'cache-control': 'no-store'
        }
      });
    }

    if (contentType.startsWith('text/html')) {
      const body = await upstream.text();
      return new NextResponse(rewriteHtml(body, targetUrl), {
        headers: {
          'content-type': contentType,
          'cache-control': 'no-store'
        }
      });
    }

    const buffer = await upstream.arrayBuffer();
    return new NextResponse(buffer, {
      headers: {
        'content-type': contentType,
        'cache-control': 'no-store'
      }
    });
  } catch (error) {
    console.error('Game proxy error:', error);
    return NextResponse.json({ error: 'Proxy fetch failed' }, { status: 502 });
  }
}
