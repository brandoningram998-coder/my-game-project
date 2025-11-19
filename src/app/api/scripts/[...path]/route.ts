import { NextRequest, NextResponse } from 'next/server';

const SCRIPT_BASE = 'https://assets.drkabuda.com/api/scripts/';

export async function GET(
  request: NextRequest,
  { params }: { params: { path?: string[] } }
): Promise<NextResponse> {
  const pathname = params.path?.join('/') ?? '';
  const targetUrl = new URL(pathname, SCRIPT_BASE).toString();

  try {
    const upstream = await fetch(targetUrl, {
      headers: {
        'user-agent': request.headers.get('user-agent') ?? 'Mozilla/5.0'
      },
      cache: 'no-store'
    });

    if (!upstream.ok) {
      return NextResponse.json({ error: 'Script fetch failed' }, { status: upstream.status });
    }

    const contentType = upstream.headers.get('content-type') ?? 'application/javascript';
    const body = await upstream.text();

    return new NextResponse(body, {
      headers: {
        'content-type': contentType,
        'cache-control': 'no-store'
      }
    });
  } catch (error) {
    console.error('Script proxy error:', error);
    return NextResponse.json({ error: 'Script fetch failed' }, { status: 502 });
  }
}
