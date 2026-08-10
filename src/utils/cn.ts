/**
 * Une clases condicionalmente, filtrando valores falsy.
 * Versión liviana sin dependencias externas.
 */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(' ');
}

/** Lista de secciones del sitio, usada por navbar y scroll-spy. */
export const SECTION_IDS = [
  'home',
  'about',
  'skills',
  'projects',
  'studies',
  'contact',
] as const;

export type SectionId = (typeof SECTION_IDS)[number];
