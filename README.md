# Portfolio — Full Stack Developer

Portfolio profesional construido con **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, **Framer Motion** y **next-intl**. Tema oscuro/claro, bilingüe (ES/EN), totalmente responsive y optimizado para SEO y rendimiento.

## Cómo ejecutar

```bash
npm install
npm run dev
```

Abrí http://localhost:3000

Para producción:

```bash
npm run build
npm start
```

> El primer `npm run build` descarga las fuentes de Google (Space Grotesk, Inter, JetBrains Mono). Necesitás conexión a internet la primera vez.

## Estructura

```
src/
├─ app/                 # Layout, página principal, estilos globales, SEO
├─ components/
│  ├─ sections/         # Hero, About, Skills, Projects, Timeline, Contact, Footer
│  ├─ ui/               # ThemeToggle, LanguageSwitcher, partículas, loader, etc.
│  ├─ Navbar.tsx
│  └─ ThemeProvider.tsx
├─ data/                # ⭐ CONTENIDO EDITABLE (sin tocar componentes)
│  ├─ personal.ts       #    datos personales, redes, estadísticas
│  ├─ skills.ts         #    tecnologías
│  ├─ projects.ts       #    proyectos
│  └─ experience.ts     #    experiencia y estudios
├─ hooks/               # useActiveSection (scroll-spy)
├─ i18n/                # configuración y server action de idioma
├─ types/               # tipos TypeScript
├─ utils/               # helpers y variantes de animación
└─ middleware.ts        # detecta idioma del navegador en la 1ª visita
messages/
├─ es.json              # traducciones español
└─ en.json              # traducciones inglés
public/
├─ images/              # 👉 reemplazá profile.jpg y og-image.jpg
├─ projects/            # 👉 reemplazá las imágenes de proyectos
└─ cv/                  # 👉 colocá tu CV en PDF (ES y EN)
```

## Qué editar

Toda tu información se edita en **`src/data/`** y **`messages/`**. No hace falta tocar los componentes.

1. **`src/data/personal.ts`** — nombre, roles, email, ubicación, rutas de CV y foto, redes y estadísticas.
2. **`src/data/skills.ts`** — agregá o quitá tecnologías. El campo `icon` usa el slug de [devicon](https://devicon.dev) (se cargan vía CDN).
3. **`src/data/projects.ts`** — agregá un proyecto copiando un objeto del array. El campo `category` alimenta los filtros.
4. **`src/data/experience.ts`** — experiencia laboral y estudios (timeline).
5. **`messages/es.json` / `messages/en.json`** — todos los textos de la interfaz.
6. **`public/`** — reemplazá imágenes y CV (los archivos actuales son placeholders).
7. **`src/app/layout.tsx`** — actualizá `SITE_URL` con tu dominio para el SEO/Open Graph.

## Tema e idioma

- **Tema:** oscuro por defecto. Detecta `prefers-color-scheme` la primera vez y recuerda la elección en `localStorage` (vía `next-themes`). Botón en el navbar (escritorio y móvil).
- **Idioma:** ES/EN sin recargar la página. Detecta el idioma del navegador en la primera visita (middleware) y recuerda la elección en una cookie. Selector en el navbar (escritorio y dentro del menú móvil).
- Los colores se definen con **variables CSS** en `src/app/globals.css` — cambiá la paleta ahí.

## Formulario de contacto

El formulario valida los campos en el cliente. El envío está marcado con un `TODO` en `src/components/sections/Contact.tsx`: conectá tu servicio (EmailJS, Resend o una API route propia en `src/app/api/contact/route.ts`).

## Características

Responsive mobile-first · Dark/Light · ES/EN · Scroll suave · Scroll-spy en navbar · Menú hamburguesa · Loader inicial · Botón volver arriba · Partículas sutiles de fondo · Glassmorphism · Filtros de proyectos · Timeline · SEO + Open Graph · Lazy loading · Navegación por teclado · `prefers-reduced-motion` respetado.
