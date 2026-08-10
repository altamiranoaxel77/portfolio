'use client';

import Image from 'next/image';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useLocale, useTranslations } from 'next-intl';
import { ExternalLink, Github } from 'lucide-react';
import type { Locale, ProjectCategory } from '@/types';
import { projects } from '@/data/projects';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { slideUp, revealOnScroll } from '@/utils/motion';
import { cn } from '@/utils/cn';

type Filter = 'all' | ProjectCategory;
const FILTERS: Filter[] = ['all', 'frontend', 'backend', 'fullstack', 'desktop'];

export function Projects() {
  const t = useTranslations('projects');
  const locale = useLocale() as Locale;
  const [filter, setFilter] = useState<Filter>('all');

  const visible =
    filter === 'all'
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="section-container py-24 sm:py-32">
      <SectionHeading
        eyebrow={t('eyebrow')}
        title={t('title')}
        subtitle={t('subtitle')}
      />

      {/* Filtros */}
      <div className="mb-10 flex flex-wrap gap-2">
        {FILTERS.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFilter(f)}
            aria-pressed={filter === f}
            className={cn(
              'rounded-full border px-4 py-1.5 text-sm font-medium transition-colors',
              filter === f
                ? 'border-accent bg-accent text-white'
                : 'border-border bg-surface text-muted hover:text-foreground'
            )}
          >
            {t(`filters.${f}`)}
          </button>
        ))}
      </div>

      {/* Grid de proyectos */}
      <motion.div
        layout
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">
          {visible.map((project) => (
            <motion.article
              key={project.id}
              layout
              variants={slideUp}
              {...revealOnScroll}
              exit={{ opacity: 0, scale: 0.95 }}
              whileHover={{ y: -8 }}
              className="group glass flex flex-col overflow-hidden rounded-2xl transition-shadow hover:shadow-glow"
            >
              {/* Imagen */}
              <div className="relative aspect-[16/10] overflow-hidden">
                {/* 👉 Reemplazá las imágenes en /public/projects/ */}
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              </div>

              {/* Contenido */}
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-lg font-semibold text-foreground">
                  {project.name}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                  {project.description[locale]}
                </p>

                {/* Tecnologías */}
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {project.tech.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full bg-accent/10 px-2.5 py-0.5 font-mono text-[11px] text-accent"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>

                {/* Botones */}
                <div className="mt-5 flex gap-2">
                  {project.demo && (
                    
                      < a href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full bg-accent px-3 py-2 text-xs font-semibold text-white transition-colors hover:bg-accent-hover"
                    >
                      <ExternalLink size={14} />
                      {t('viewProject')}
                    </a>
                  )}
                  {project.github && (
                    
                      <a href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${t('code')} — ${project.name}`}
                      className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full border border-border px-3 py-2 text-xs font-semibold text-foreground transition-colors hover:bg-surface-hover"
                    >
                      <Github size={14} />
                      {t('code')}
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
