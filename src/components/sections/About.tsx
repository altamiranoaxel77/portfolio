'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { personal } from '@/data/personal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { slideUp, slideInLeft, revealOnScroll, stagger } from '@/utils/motion';

export function About() {
  const t = useTranslations('about');

  return (
    <section id="about" className="section-container py-24 sm:py-32">
      <SectionHeading eyebrow={t('eyebrow')} title={t('title')} />

      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        {/* Foto */}
        <motion.div
          variants={slideInLeft}
          {...revealOnScroll}
          className="relative mx-auto w-full max-w-xs"
        >
          <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-soft">
            {/* 👉 Podés reutilizar la misma foto o usar otra en /public/images/ */}
            <Image
              src={personal.photo}
              alt={personal.name}
              width={360}
              height={440}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </motion.div>

        {/* Texto */}
        <motion.div
          variants={stagger}
          {...revealOnScroll}
          className="space-y-4 text-base leading-relaxed text-muted"
        >
          {(['p1', 'p2', 'p3', 'p4'] as const).map((key) => (
            <motion.p key={key} variants={slideUp}>
              {t(key)}
            </motion.p>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
