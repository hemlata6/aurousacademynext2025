import { NextResponse } from 'next/server';

const LOCAL_HOSTS = new Set(['localhost', '127.0.0.1']);

export function middleware(request) {
  const { nextUrl, headers } = request;
  const forwardedProto = headers.get('x-forwarded-proto');
  const host = headers.get('host') || nextUrl.host;
  const hostname = nextUrl.hostname;

  if (LOCAL_HOSTS.has(hostname)) {
    return NextResponse.next();
  }

  if (forwardedProto && forwardedProto !== 'https') {
    const redirectUrl = new URL(request.url);
    redirectUrl.protocol = 'https:';
    redirectUrl.host = host;
    return NextResponse.redirect(redirectUrl, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)'],
};