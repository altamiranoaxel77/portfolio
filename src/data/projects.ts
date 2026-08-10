import type { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 'MediTurnos',
    image: '/projects/mediturnos.jpg',
    name: 'Mediturno',          // 👉
    description: {
      es: 'Sistema de gestión de turnos médicos multi-hospital. Backend en FastAPI + PostgreSQL con procedimientos almacenados, frontend en Vue.js, arquitectura en capas con patrones de diseño.', // 👉
      en: 'Multi-hospital medical appointment management system. Backend in FastAPI + PostgreSQL with stored procedures, frontend in Vue.js, layered architecture with design patterns.', // 👉
    },
    tech: ['Python', 'SQL'],                            // 👉 tecnologías reales del proyecto
    category: 'fullstack',                               // 'frontend' | 'backend' | 'fullstack' | 'desktop'
    demo: 'https://mediturno-eight.vercel.app/',                                           // 👉 dejá '' si no tiene demo online
    github: '',    // 👉
    featured: true,
  },
  {
    id: 'Altamirano Software',
    image: '/projects/altamiranosoftware.png',
    name: 'Altamirano Software',          // 👉
    description: {
      es: 'Langing page de emprendimiento personal "Altamirano Software"', // 👉
      en: '"Altamirano Software" personal entrepreneurship landing page', // 👉
    },
    tech: ['react'],                            // 👉 tecnologías reales del proyecto
    category: 'frontend',                                // 'frontend' | 'backend' | 'fullstack' | 'desktop'
    demo: 'https://altamiranosoftware.vercel.app/',                                           // 👉 dejá '' si no tiene demo online
    github: '',    // 👉
    featured: true,
  },
  {
    id: 'Unity Martial Arts',
    image: '/projects/unitymartialarts.png',
    name: 'Unity Martial Arts',          // 👉
    description: {
      es: 'Landing page para academia de taekwondo.', // 👉
      en: '"Landing page for taekwondo academy.', // 👉
    },
    tech: ['react'],                            // 👉 tecnologías reales del proyecto
    category: 'frontend',                                // 'frontend' | 'backend' | 'fullstack' | 'desktop'
    demo: 'https://unitymartialarts.vercel.app//',                                           // 👉 dejá '' si no tiene demo online
    github: '',    // 👉
    featured: true,
  },
  // 👉 Copiá este objeto por cada proyecto que subas.
];