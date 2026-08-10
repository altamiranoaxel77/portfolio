'use client';

import { useLocale, useTranslations } from 'next-intl';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';
import type { Locale } from '@/types';
import { personal, social } from '@/data/personal';

export function Footer() {
  const t = useTranslations('footer');
  const locale = useLocale() as Locale;
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="section-container flex flex-col items-center gap-6 py-10 sm:flex-row sm:justify-between">
        {/* Identidad */}
        <div className="text-center sm:text-left">
          <p className="font-display text-lg font-bold text-foreground">
            {personal.name}
          </p>
          <p className="mt-1 flex items-center justify-center gap-1.5 text-sm text-muted sm:justify-start">
            <MapPin size={14} />
            {personal.location[locale]}
          </p>
          <a
            href={`mailto:${social.email}`}
            className="mt-0.5 inline-block text-sm text-muted transition-colors hover:text-accent"
          >
            {social.email}
          </a>
        </div>

        {/* Redes */}
        <div className="flex gap-3">
          {[
            { href: social.github, icon: Github, label: 'GitHub' },
            { href: social.linkedin, icon: Linkedin, label: 'LinkedIn' },
            { href: `mailto:${social.email}`, icon: Mail, label: 'Email' },
          ].map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="grid h-10 w-10 place-items-center rounded-full border border-border bg-surface text-muted transition-colors hover:text-accent"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>

      <div className="border-t border-border py-5">
        <div className="section-container flex flex-col items-center gap-1 text-center text-xs text-muted">
          <p>© {year} {personal.name}. {t('rights')}</p>
          <p>{t('builtWith')}</p>
        </div>
      </div>
    </footer>
  );
}
