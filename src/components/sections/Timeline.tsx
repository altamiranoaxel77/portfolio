'use client';

import { motion } from 'framer-motion';
import { useLocale, useTranslations } from 'next-intl';
import { Briefcase, GraduationCap } from 'lucide-react';
import type { Locale } from '@/types';
import { studies } from '@/data/experience';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { slideUp, stagger, revealOnScroll } from '@/utils/motion';

/* Componente de línea de tiempo genérico reutilizado por ambas secciones */
function TimelineItem({
  icon,
  title,
  subtitle,
  date,
  description,
  tag,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  date: string;
  description: string;
  tag?: string;
}) {
  return (
    <motion.li variants={slideUp} className="relative pl-12">
      {/* Punto e icono sobre la línea */}
      <span className="absolute left-0 top-0 grid h-9 w-9 place-items-center rounded-full border border-border bg-surface text-accent">
        {icon}
      </span>

      <div className="glass rounded-2xl p-5">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h3 className="font-display text-base font-semibold text-foreground">
            {title}
          </h3>
          <span className="font-mono text-xs text-muted">{date}</span>
        </div>
        <p className="mt-0.5 text-sm font-medium text-accent">{subtitle}</p>
        {tag && (
          <span className="mt-2 inline-block rounded-full bg-accent/10 px-2.5 py-0.5 font-mono text-[11px] text-accent">
            {tag}
          </span>
        )}
        <p className="mt-3 text-sm leading-relaxed text-muted">{description}</p>
      </div>
    </motion.li>
  );
}


export function Studies() {
  const t = useTranslations('studies');
  const locale = useLocale() as Locale;

  return (
    <section id="studies" className="section-container py-24 sm:py-32">
      <SectionHeading eyebrow={t('eyebrow')} title={t('title')} />

      <motion.ul
        variants={stagger}
        {...revealOnScroll}
        className="relative ml-[18px] space-y-6 border-l border-border pl-0"
      >
        {studies.map((item, i) => (
          <TimelineItem
            key={i}
            icon={<GraduationCap size={16} />}
            title={item.institution}
            subtitle={item.title[locale]}
            date={item.date[locale]}
            description={item.description[locale]}
            tag={item.kind[locale]}
          />
        ))}
      </motion.ul>
    </section>
  );
}
