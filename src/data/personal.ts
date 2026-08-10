import type { PersonalInfo, SocialLinks, Stat } from '@/types';

export const personal: PersonalInfo = {
  name: 'Axel Adrián Altamirano',

  roles: {
    es: ['Estudiante de Sistemas', 'Desarrollador de Software', 'Data Analyst'],
    en: ['Systems Student', 'Software Developer', 'Data Analyst'],
  },

  location: {
    es: 'Corrientes Capital, Argentina',
    en: 'Corrientes, Argentina',
  },

  email: 'altamirano.programador@gmail.com',

  cv: {
    es: '/cv/CV_Altamirano_Axel.pdf',   // 👉 confirmá que el nombre coincida con tu archivo en public/cv/
    en: '/cv/CV_Altamirano_Axel.pdf',
  },

  photo: '/images/profile.jpg',
  ogImage: '/images/og-image.jpg',
};

export const social: SocialLinks = {
  github: 'https://github.com/altamiranoaxel77',          // 👉 completá con tu GitHub
  linkedin: 'https://www.linkedin.com/in/axel-adrian-altamirano-633b4524b/',   // 👉 completá con tu LinkedIn
  email: 'altamirano.programador@gmail.com',
  whatsapp: '',
};

export const stats: Stat[] = [
  { value: '8.17', label: { es: 'Promedio académico', en: 'Academic GPA' } },
  { value: '18', label: { es: 'Materias aprobadas', en: 'Courses passed' } },
  { value: '4°', label: { es: 'Año de carrera', en: 'Year of degree' } },
  { value: '∞', label: { es: 'Ganas de aprender', en: 'Eagerness to learn' } },
];