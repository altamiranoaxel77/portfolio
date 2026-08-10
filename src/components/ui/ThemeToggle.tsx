'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

/**
 * Alterna entre modo claro y oscuro.
 * next-themes guarda la preferencia en localStorage y la aplica
 * antes de pintar para evitar parpadeos.
 */
export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const t = useTranslations('nav');
  const [mounted, setMounted] = useState(false);

  // Evita desajuste de hidratación: el tema real se conoce en cliente
  useEffect(() => setMounted(true), []);

  const isDark = resolvedTheme === 'dark';

  return (
    <button
      type="button"
      aria-label={t('theme')}
      title={t('theme')}
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="grid h-10 w-10 place-items-center rounded-full border border-border bg-surface text-foreground transition-colors hover:bg-surface-hover hover:text-accent"
    >
      {mounted ? (
        <motion.span
          key={isDark ? 'moon' : 'sun'}
          initial={{ rotate: -90, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          transition={{ duration: 0.25 }}
        >
          {isDark ? <Moon size={18} /> : <Sun size={18} />}
        </motion.span>
      ) : (
        // Placeholder neutro durante el render del servidor
        <span className="h-[18px] w-[18px]" />
      )}
    </button>
  );
}
