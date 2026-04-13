import type { Metadata } from 'next';
import NosotrosPage from './page.client';

export const metadata: Metadata = {
  title: 'Nosotros | APEN',
  description:
    'Conoce a APEN, su identidad corporativa, certificaciones y respaldo técnico para proyectos energéticos en México.',
  openGraph: {
    title: 'Nosotros | APEN',
    description:
      'Identidad, certificaciones y solidez operativa de APEN para el sector energético.',
    url: 'https://apen.mx/nosotros',
    siteName: 'APEN',
    locale: 'es_MX',
    type: 'website',
    images: [
      'https://raw.githubusercontent.com/DEV-APEN/imagenes/refs/heads/main/apen/Logo%20de%20APEN%20fondo%20transparente.png',
    ],
  },
};

export default function Page() {
  return <NosotrosPage />;
}
