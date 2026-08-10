import { NextResponse, type NextRequest } from 'next/server';

const LOCALE_COOKIE = 'NEXT_LOCALE';
const SUPPORTED = ['es', 'en'];
const DEFAULT = 'es';

/**
 * En la PRIMERA visita (sin cookie) detecta el idioma del navegador
 * desde el header Accept-Language y fija la cookie. A partir de ahí,
 * la preferencia del usuario manda. No usa prefijos de idioma en la URL.
 */
export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  const existing = request.cookies.get(LOCALE_COOKIE)?.value;
  if (existing && SUPPORTED.includes(existing)) {
    return response;
  }

  const accept = request.headers.get('accept-language') ?? '';
  const preferred = accept.split(',')[0]?.trim().slice(0, 2).toLowerCase();
  const locale = SUPPORTED.includes(preferred) ? preferred : DEFAULT;

  response.cookies.set(LOCALE_COOKIE, locale, {
    path: '/',
    maxAge: 60 * 60 * 24 * 365,
    sameSite: 'lax',
  });

  return response;
}

export const config = {
  // Evita ejecutar el middleware en assets y rutas internas
  matcher: ['/((?!_next|api|favicon.ico|.*\\..*).*)'],
};
