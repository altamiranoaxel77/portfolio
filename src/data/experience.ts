import type { ExperienceItem, StudyItem } from '@/types';

export const studies: StudyItem[] = [
  {
    kind: { es: 'Universidad', en: 'University' },
    institution: 'Universidad Nacional del Nordeste (UNNE)',
    title: {
      es: 'Licenciatura en Sistemas de Información',
      en: 'Bachelor in Information Systems',
    },
    date: { es: '2022 — Actualidad (4° año)', en: '2022 — Present (4th year)' },
    description: {
      es: 'Formación en programación, bases de datos e ingeniería de software. Promedio académico: 8,17.',
      en: 'Training in programming, databases and software engineering. Academic GPA: 8.17.',
    },
  },
    {
    kind: { es: 'Idioma', en: 'Language' },
    institution: 'Extensión Universitaria — UNNE',
    title: {
      es: 'Inglés — 2° nivel (en curso)',
      en: 'English — Level 2 (in progress)',
    },
    date: { es: '2026', en: '2026' },   // 👉 ajustá el año si corresponde
    description: {
      es: 'Formación en inglés general y técnico orientada a la comprensión de documentación y comunicación en entornos de tecnología.',
      en: 'General and technical English training focused on documentation comprehension and communication in tech environments.',
    },
  },

    {
    kind: { es: 'Hackathon', en: 'Hackathon' },
    institution: 'HackIAthon — Devlights',
    title: {
      es: 'Participante — 2ª edición',
      en: 'Participant — 2nd edition',
    },
    date: { es: 'Agosto 2026', en: 'August 2026' },
    description: {
      es: 'Segunda edición de la hackathon de programación con Inteligencia Artificial del NEA, organizada por Devlights en Corrientes.',
      en: 'Second edition of the AI programming hackathon of the NEA region, organized by Devlights in Corrientes.',
    },
  },  
  {
    kind: { es: 'Certificación', en: 'Certification' },
    institution: 'Amazon Web Services (AWS)',
    title: {
      es: 'AWS Certified AI Practitioner (en curso)',
      en: 'AWS Certified AI Practitioner (in progress)',
    },
    date: { es: '2026', en: '2026' },
    description: {
      es: 'Fundamentos de Inteligencia Artificial y Machine Learning, IA generativa y uso responsable de sistemas de IA.',
      en: 'Fundamentals of AI and Machine Learning, generative AI and responsible use of AI systems.',
    },
  },
  {
    kind: { es: 'Bootcamp', en: 'Bootcamp' },
    institution: 'Devlights',
    title: { es: 'Bootcamp Data Analyst', en: 'Data Analyst Bootcamp' },
    date: { es: '2025', en: '2025' },
    description: {
      es: 'Python para análisis de datos, consultas SQL sobre bases de datos y visualización y análisis exploratorio de datos.',
      en: 'Python for data analysis, SQL queries on databases, and data visualization and exploratory analysis.',
    },
  },
];