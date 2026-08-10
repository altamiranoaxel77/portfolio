import { getRequestConfig } from 'next-intl/server';
import { cookies } from 'next/headers';
import type { Locale } from '@/types';

export const locales: Locale[] = ['es', 'en'];
export const defaultLocale: Locale = 'es';
export const LOCALE_COOKIE = 'NEXT_LOCALE';

/** Lee el idioma desde la cookie (sin prefijo en la URL). */
export function getCurrentLocale(): Locale {
  const cookieLocale = cookies().get(LOCALE_COOKIE)?.value as Locale | undefined;
  return cookieLocale && locales.includes(cookieLocale) ? cookieLocale : defaultLocale;
}

export default getRequestConfig(async () => {
  const locale = getCurrentLocale();
  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});