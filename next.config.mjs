/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [

      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      }
    ],
  },
  // Rutas en inglés que los agentes de IA prueban para verificar un negocio
  // (/about, /contact, /privacy). Se redirigen a la página real en español.
  async redirects() {
    return [
      { source: '/about', destination: '/nosotros', statusCode: 301 },
      { source: '/about-us', destination: '/nosotros', statusCode: 301 },
      { source: '/sobre-nosotros', destination: '/nosotros', statusCode: 301 },
      { source: '/quienes-somos', destination: '/nosotros', statusCode: 301 },
      { source: '/contact', destination: '/contacto', statusCode: 301 },
      { source: '/contact-us', destination: '/contacto', statusCode: 301 },
      { source: '/privacy', destination: '/politica-de-privacidad', statusCode: 301 },
      { source: '/privacy-policy', destination: '/politica-de-privacidad', statusCode: 301 },
      { source: '/aviso-de-privacidad', destination: '/politica-de-privacidad', statusCode: 301 },
      { source: '/terms', destination: '/terminos-y-condiciones', statusCode: 301 },
      { source: '/terms-and-conditions', destination: '/terminos-y-condiciones', statusCode: 301 },
      { source: '/services', destination: '/servicios', statusCode: 301 },
      { source: '/faq', destination: '/faqs', statusCode: 301 },
      { source: '/pricing', destination: '/diagnostico', statusCode: 301 },
      { source: '/precios', destination: '/diagnostico', statusCode: 301 },
    ];
  },
  async headers() {
    // Vary: Accept en las páginas HTML — sin él un CDN puede entregar el HTML
    // cacheado a un agente que pidió text/markdown (acceptmarkdown.com).
    // Se conservan las claves que Next usa para el router (RSC) para no romper
    // el cacheo de los payloads de navegación.
    // Nota: el servidor de Next reescribe su propio Vary en las páginas del app
    // router, así que esta cabecera sólo surte efecto en la capa CDN del host.
    // Las respuestas markdown (/api/md) llevan su Vary: Accept propio siempre.
    const VARY_ACCEPT = {
      key: 'Vary',
      value: 'Accept, RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Url, Accept-Encoding',
    };
    const negotiatedPages = [
      '/',
      '/servicios',
      '/servicios/:path*',
      '/nosotros',
      '/capacidad-ejecutiva',
      '/certificaciones',
      '/diagnostico',
      '/contacto',
      '/faqs',
      '/consultas',
      '/consultas/:path*',
      '/politica-de-privacidad',
      '/terminos-y-condiciones',
    ];

    return [
      ...negotiatedPages.map((source) => ({ source, headers: [VARY_ACCEPT] })),
      {
        source: '/videos/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, s-maxage=31536000, stale-while-revalidate=604800',
          },
        ],
      },
      {
        source: '/visual/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, s-maxage=31536000, stale-while-revalidate=604800',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
