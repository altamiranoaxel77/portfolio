'use client';

import { useLocale, useTranslations } from 'next-intl';
import { useTransition } from 'react';
import { Languages } from 'lucide-react';
import type { Locale } from '@/types';
import { setLocale } from '@/i18n/actions';
import { cn } from '@/utils/cn';

/**
 * Cambia el idioma sin recargar la página: llama a un server action
 * que persiste la cookie y revalida. La cookie recuerda la elección.
 */
export function LanguageSwitcher() {
  const locale = useLocale() as Locale;
  const t = useTranslations('nav');
  const [isPending, startTransition] = useTransition();

  const change = (next: Locale) => {
    if (next === locale) return;
    startTransition(() => {
      void setLocale(next);
    });
  };

  return (
    <div
      role="group"
      aria-label={t('language')}
      className={cn(
        'flex items-center gap-1 rounded-full border border-border bg-surface p-1',
        isPending && 'opacity-60'
      )}
    >
      <Languages size={15} className="ml-1.5 text-muted" aria-hidden />
      {(['es', 'en'] as Locale[]).map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => change(l)}
          aria-pressed={locale === l}
          className={cn(
            'rounded-full px-2.5 py-1 text-xs font-semibold uppercase transition-colors',
            locale === l
              ? 'bg-accent text-white'
              : 'text-muted hover:text-foreground'
          )}
        >
          {l}
        </button>
      ))}
    </div>
  );
}
