import { NextRequest, NextResponse } from 'next/server';

const MEDIA_BASE = 'https://assets.drkabuda.com/api/media/';

export async function GET(
  request: NextRequest,
  { params }: { params: { path?: string[] } }
): Promise<NextResponse> {
  const pathname = params.path?.join('/') ?? '';
  const targetUrl = new URL(pathname, MEDIA_BASE).toString();

  try {
    const upstream = await fetch(targetUrl, {
      headers: {
        'user-agent': request.headers.get('user-agent') ?? 'Mozilla/5.0'
      },
      cache: 'no-store'
    });

    if (!upstream.ok) {
      return NextResponse.json({ error: 'Media fetch failed' }, { status: upstream.status });
    }

    const contentType = upstream.headers.get('content-type') ?? 'application/octet-stream';
    const buffer = await upstream.arrayBuffer();

    return new NextResponse(buffer, {
      headers: {
        'content-type': contentType,
        'cache-control': 'no-store'
      }
    });
  } catch (error) {
    console.error('Media proxy error:', error);
    return NextResponse.json({ error: 'Media fetch failed' }, { status: 502 });
  }
}
