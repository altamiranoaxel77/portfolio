'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import type { ReactNode } from 'react';

/**
 * Envuelve la app con next-themes:
 * - defaultTheme="dark"  → oscuro por defecto
 * - enableSystem         → detecta prefers-color-scheme la 1ª visita
 * - persiste la elección en localStorage automáticamente
 */
export function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange={false}
    >
      {children}
    </NextThemesProvider>
  );
}
