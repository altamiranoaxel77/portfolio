'use client';

import { motion } from 'framer-motion';
import { slideUp, revealOnScroll } from '@/utils/motion';

interface Props {
  eyebrow: string;
  title: string;
  subtitle?: string;
}

/** Cabecera consistente para cada sección (eyebrow + título + bajada). */
export function SectionHeading({ eyebrow, title, subtitle }: Props) {
  return (
    <motion.div
      variants={slideUp}
      {...revealOnScroll}
      className="mb-12 max-w-2xl"
    >
      <p className="eyebrow mb-3">{eyebrow}</p>
      <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {subtitle && <p className="mt-4 text-base text-muted">{subtitle}</p>}
    </motion.div>
  );
}
