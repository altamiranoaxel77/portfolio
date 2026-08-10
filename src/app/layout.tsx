import type { Metadata, Viewport } from 'next';
import { Space_Grotesk, Inter, JetBrains_Mono } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getCurrentLocale } from '@/i18n/request';
import { ThemeProvider } from '@/components/ThemeProvider';
import { personal } from '@/data/personal';
import './globals.css';

/* Tipografías: display geométrico + cuerpo legible + mono para datos */
const display = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});
const body = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});
const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

const SITE_URL = 'https://altamiranoaxelportfolio-developer.vercel.app/';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${personal.name} — Full Stack Developer`,
    template: `%s — ${personal.name}`,
  },
  description:
    'Portfolio de Axel Altamirano, desarrollador Full Stack especializado en React, Next.js, Node.js y .NET.',
  keywords: [
    'Full Stack Developer',
    'React',
    'Next.js',
    'Node.js',
    '.NET',
    'TypeScript',
    personal.name,
  ],
  authors: [{ name: personal.name }],
  openGraph: {
    type: 'website',
    title: `${personal.name} — Full Stack Developer`,
    description:
      'Desarrollador Full Stack especializado en React, Next.js, Node.js y .NET.',
    url: SITE_URL,
    siteName: personal.name,
    images: [{ url: personal.ogImage, width: 1200, height: 630, alt: personal.name }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${personal.name} — Full Stack Developer`,
    description:
      'Desarrollador Full Stack especializado en React, Next.js, Node.js y .NET.',
    images: [personal.ogImage],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#080b14' },
    { media: '(prefers-color-scheme: light)', color: '#f9fafb' },
  ],
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = getCurrentLocale();
  const messages = (await import(`../../messages/${locale}.json`)).default;

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className={`${display.variable} ${body.variable} ${mono.variable}`}
    >
      <body className="font-sans antialiased">
        <ThemeProvider>
          <NextIntlClientProvider locale={locale} messages={messages}>
            {children}
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
