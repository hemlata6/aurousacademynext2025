import { NextResponse } from 'next/server';

export function middleware(request) {
  const forwardedProto = request.headers.get('x-forwarded-proto');
  const host = request.headers.get('host') || '';

  // Keep local development flexible and only enforce HTTPS for deployed hosts.
  const isLocalHost = host.startsWith('localhost') || host.startsWith('127.0.0.1');

  if (!isLocalHost && forwardedProto === 'http') {
    const secureUrl = new URL(request.url);
    secureUrl.protocol = 'https:';
    return NextResponse.redirect(secureUrl, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)'],
};
