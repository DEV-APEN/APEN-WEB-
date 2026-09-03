import type { Metadata } from 'next';
import NotFoundPage from './not-found.client';

export const metadata: Metadata = {
  title: '404 — Página no encontrada',
  description:
    'La ruta solicitada no existe en apen.mx. Consulta el mapa de rutas del sitio: servicios, Energy Explica, certificaciones, diagnóstico y contacto. Índices para agentes en /sitemap.xml, /llms.txt y /agent-instructions.md.',
  // Necesario: sin esto la página hereda `index, follow` del layout raíz y
  // contradice el `noindex` que Next emite en la respuesta 404.
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return <NotFoundPage />;
}
