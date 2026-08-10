'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher';
import { useActiveSection } from '@/hooks/useActiveSection';
import { SECTION_IDS } from '@/utils/cn';
import { cn } from '@/utils/cn';

export function Navbar() {
  const t = useTranslations('nav');
  const active = useActiveSection();
  const [open, setOpen] = useState(false);

  // Las etiquetas de los enlaces viven en las traducciones (nav.*)
  const links = SECTION_IDS.map((id) => ({ id, label: t(id) }));

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="glass section-container mt-3 flex h-14 items-center justify-between rounded-full !px-3 sm:!px-5">
        {/* Logo / marca */}
        <a
          href="#home"
          className="ml-1 font-display text-lg font-bold tracking-tight text-foreground"
        >
          <span className="text-accent">{'{'}</span>
          AA
          <span className="text-accent">{'}'}</span>
        </a>

        {/* Enlaces — escritorio */}
        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                aria-current={active === link.id ? 'true' : undefined}
                className={cn(
                  'relative rounded-full px-3 py-1.5 text-sm font-medium transition-colors',
                  active === link.id
                    ? 'text-accent'
                    : 'text-muted hover:text-foreground'
                )}
              >
                {link.label}
                {active === link.id && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 -z-10 rounded-full bg-accent/10"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* Controles — siempre visibles en escritorio */}
        <div className="hidden items-center gap-2 lg:flex">
          <LanguageSwitcher />
          <ThemeToggle />
        </div>

        {/* Controles + hamburguesa — móvil */}
        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label={open ? t('close') : t('menu')}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-full border border-border bg-surface text-foreground"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Menú desplegable — móvil */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="section-container lg:hidden"
          >
            <div className="glass mt-2 rounded-2xl p-4">
              {/* Selector de idioma visible arriba del menú móvil */}
              <div className="mb-3 flex justify-center">
                <LanguageSwitcher />
              </div>
              <ul className="grid gap-1">
                {links.map((link) => (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      onClick={() => setOpen(false)}
                      className={cn(
                        'block rounded-xl px-4 py-2.5 text-sm font-medium transition-colors',
                        active === link.id
                          ? 'bg-accent/10 text-accent'
                          : 'text-muted hover:bg-surface-hover hover:text-foreground'
                      )}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
