'use client';

import { useEffect, useState } from 'react';
import { SECTION_IDS, type SectionId } from '@/utils/cn';

/**
 * Detecta qué sección está visible para resaltarla en el navbar.
 * Usa IntersectionObserver para ser eficiente (sin escuchar scroll).
 */
export function useActiveSection(): SectionId {
  const [active, setActive] = useState<SectionId>('home');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id as SectionId);
      },
      {
        // La sección se considera activa cuando su centro está en pantalla
        rootMargin: '-40% 0px -55% 0px',
        threshold: [0, 0.25, 0.5, 1],
      }
    );

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return active;
}
