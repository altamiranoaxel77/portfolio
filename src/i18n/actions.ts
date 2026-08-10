'use server';

import { cookies } from 'next/headers';
import { revalidatePath } from 'next/cache';
import type { Locale } from '@/types';
import { LOCALE_COOKIE, locales } from './request';

/**
 * Guarda el idioma elegido en una cookie (1 año) y revalida la página
 * para que el contenido del servidor se vuelva a renderizar traducido,
 * sin recargar manualmente y sin cambiar la URL.
 */
export async function setLocale(locale: Locale) {
  if (!locales.includes(locale)) return;
  cookies().set(LOCALE_COOKIE, locale, {
    path: '/',
    maxAge: 60 * 60 * 24 * 365,
    sameSite: 'lax',
  });
  revalidatePath('/');
}
