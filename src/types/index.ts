/**
 * Tipos centrales del portfolio.
 * La forma de los datos editables vive acá para tener autocompletado
 * y seguridad al editar los archivos de /src/data.
 */

export type Locale = 'es' | 'en';

/** Texto que cambia según idioma: { es: '...', en: '...' } */
export type Localized = Record<Locale, string>;

export type ProjectCategory = 'frontend' | 'backend' | 'fullstack' | 'desktop';

export type SkillLevel = 'advanced' | 'intermediate' | 'learning';

export interface PersonalInfo {
  name: string;
  /** Roles que rotan en el hero, por idioma */
  roles: Record<Locale, string[]>;
  location: Localized;
  email: string;
  /** Ruta al CV dentro de /public, por idioma */
  cv: Record<Locale, string>;
  photo: string;
  ogImage: string;
}

export interface SocialLinks {
  github: string;
  linkedin: string;
  email: string;
  /** Número en formato internacional sin signos, ej: 5493794000000 */
  whatsapp: string;
}

export interface Stat {
  /** Valor numérico o string corto, ej: "5+" */
  value: string;
  label: Localized;
}

export interface Skill {
  name: string;
  /** Nombre del icono en /public/tech/<icon>.svg o slug de devicon */
  icon: string;
  level: SkillLevel;
  category: ProjectCategory;
}

export interface Project {
  id: string;
  image: string;
  name: string;
  description: Localized;
  tech: string[];
  category: ProjectCategory;
  demo: string;
  github: string;
  /** Marca el proyecto como destacado */
  featured?: boolean;
}

export interface ExperienceItem {
  company: string;
  role: Localized;
  date: Localized;
  description: Localized;
}

export interface StudyItem {
  /** Tipo: universidad, curso, certificación, bootcamp */
  kind: Localized;
  institution: string;
  title: Localized;
  date: Localized;
  description: Localized;
}
