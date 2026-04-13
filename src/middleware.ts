import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const host = request.headers.get('host');

  const proto = request.headers.get('x-forwarded-proto') || 'http';
  
  // Redirect http to https
  if (proto === 'http' && process.env.NODE_ENV === 'production') {
    url.protocol = 'https';
    return NextResponse.redirect(url, 301);
  }

  // Redirect www to non-www
  if (host && host.startsWith('www.')) {
    const newHost = host.replace('www.', '');
    url.host = newHost;
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

// Config to match all pages
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
