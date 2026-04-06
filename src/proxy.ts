import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const locales = ['ru', 'kk'];

export function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const hasLocale = locales.some(l => pathname.startsWith(`/${l}/`) || pathname === `/${l}`);
  if (!hasLocale) {
    return NextResponse.redirect(new URL(`/ru${pathname === '/' ? '' : pathname}`, request.url));
  }
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|images|fonts).*)'],
};
