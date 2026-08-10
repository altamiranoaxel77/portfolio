'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLocale, useTranslations } from 'next-intl';
import type { Locale, SkillLevel } from '@/types';
import { skills } from '@/data/skills';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { slideUp, stagger, revealOnScroll } from '@/utils/motion';

// Color del punto indicador según nivel
const levelDot: Record<SkillLevel, string> = {
  advanced: 'bg-accent',
  intermediate: 'bg-amber-400',
  learning: 'bg-muted',
};

export function Skills() {
  const t = useTranslations('skills');
  // El locale podría usarse para ordenar; las skills no llevan texto traducible salvo el nivel
  useLocale() as Locale;

  return (
    <section id="skills" className="section-container py-24 sm:py-32">
      <SectionHeading
        eyebrow={t('eyebrow')}
        title={t('title')}
        subtitle={t('subtitle')}
      />

      <motion.ul
        variants={stagger}
        {...revealOnScroll}
        className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
      >
        {skills.map((skill) => (
          <motion.li
            key={skill.name}
            variants={slideUp}
            whileHover={{ y: -6 }}
            className="glass group flex flex-col items-center gap-3 rounded-2xl p-5 text-center transition-shadow hover:shadow-glow"
          >
            {/* Icono desde devicon CDN. Reemplazable por SVGs locales. */}
            <Image
              src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${iconPath(skill.icon)}`}
              alt={skill.name}
              width={44}
              height={44}
              loading="lazy"
              unoptimized
              className="h-11 w-11 transition-transform duration-300 group-hover:scale-110"
            />
            <span className="text-sm font-medium text-foreground">
              {skill.name}
            </span>
            <span className="flex items-center gap-1.5 text-[11px] text-muted">
              <span
                className={`h-1.5 w-1.5 rounded-full ${levelDot[skill.level]}`}
              />
              {t(`level.${skill.level}`)}
            </span>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}

/**
 * Devuelve la ruta del icono en el repo de devicon.
 * La mayoría sigue el patrón <name>/<name>-original.svg.
 */
function iconPath(icon: string): string {
  const overrides: Record<string, string> = {
    nextjs: 'nextjs/nextjs-original.svg',
    express: 'express/express-original.svg',
    dotnetcore: 'dotnetcore/dotnetcore-original.svg',
    'dot-net': 'dot-net/dot-net-original.svg',
    csharp: 'csharp/csharp-original.svg',
    microsoftsqlserver: 'microsoftsqlserver/microsoftsqlserver-plain.svg',
    github: 'github/github-original.svg',
    tailwindcss: 'tailwindcss/tailwindcss-original.svg',
  };
  return overrides[icon] ?? `${icon}/${icon}-original.svg`;
}
