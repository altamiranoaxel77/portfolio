'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useLocale, useTranslations } from 'next-intl';
import { Download, Mail } from 'lucide-react';
import type { Locale } from '@/types';
import { personal, stats } from '@/data/personal';
import { slideUp, stagger, fadeIn } from '@/utils/motion';

export function Hero() {
  const t = useTranslations('hero');
  const locale = useLocale() as Locale;
  const roles = personal.roles[locale];

  // Rotación de roles tipo "máquina de escribir" simple
  const [roleIndex, setRoleIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      setRoleIndex((i) => (i + 1) % roles.length);
    }, 2600);
    return () => clearInterval(id);
  }, [roles.length]);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      {/* Grilla de fondo — elemento de firma */}
      <div className="grid-backdrop absolute inset-0 -z-10" aria-hidden />

      <div className="section-container grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Columna de texto */}
        <motion.div variants={stagger} initial="hidden" animate="show">

          <motion.p variants={slideUp} className="mt-6 text-lg text-muted">
            {t('greeting')}
          </motion.p>

          <motion.h1
            variants={slideUp}
            className="mt-1 font-display text-4xl font-bold tracking-tight text-foreground sm:text-6xl"
          >
            {personal.name}
          </motion.h1>

          {/* Rol rotativo */}
          <motion.div
            variants={slideUp}
            className="mt-3 flex h-9 items-center font-mono text-xl text-accent sm:text-2xl"
          >
            <span aria-hidden className="mr-2 text-muted">
              {'>'}
            </span>
            <motion.span
              key={roleIndex}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {roles[roleIndex]}
            </motion.span>
          </motion.div>

          <motion.p
            variants={slideUp}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted"
          >
            {t('intro')}
          </motion.p>

          {/* Botones */}
          <motion.div variants={slideUp} className="mt-8 flex flex-wrap gap-3">
            <a
              href={personal.cv[locale]}
              download
              className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-[1.03] hover:bg-accent-hover"
            >
              <Download size={18} />
              {t('downloadCv')}
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-surface-hover"
            >
              <Mail size={18} />
              {t('contact')}
            </a>
          </motion.div>

          {/* Estadísticas */}
          <motion.dl
            variants={fadeIn}
            className="mt-12 grid max-w-lg grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-4"
          >
            {stats.map((s) => (
              <div key={s.label[locale]}>
                <dt className="font-display text-2xl font-bold text-foreground">
                  {s.value}
                </dt>
                <dd className="mt-1 text-xs leading-tight text-muted">
                  {s.label[locale]}
                </dd>
              </div>
            ))}
          </motion.dl>
        </motion.div>

        {/* Columna de imagen */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-accent/20 blur-2xl" />
          <div className="relative overflow-hidden rounded-[1.75rem] border border-border bg-surface shadow-soft">
            {/* 👉 Reemplazá la foto en /public/images/profile.jpg */}
            <Image
              src={personal.photo}
              alt={personal.name}
              width={480}
              height={560}
              priority
              className="h-full w-full object-cover"
            />
          </div>
          {/* Etiqueta decorativa tipo código */}
          <div className="glass absolute -bottom-4 -left-4 rounded-xl px-4 py-2 font-mono text-xs text-muted">
            <span className="text-accent">const</span> dev ={' '}
            <span className="text-foreground">true</span>;
          </div>
        </motion.div>
      </div>
    </section>
  );
}
