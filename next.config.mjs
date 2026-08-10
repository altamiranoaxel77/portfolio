import createNextIntlPlugin from 'next-intl/plugin';

// Apunta al archivo de configuración de la request de next-intl
const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    // Si en el futuro usás imágenes remotas, agregá los dominios acá:
    // remotePatterns: [{ protocol: 'https', hostname: 'tu-cdn.com' }],
  },
  reactStrictMode: true,
};

export default withNextIntl(nextConfig);
