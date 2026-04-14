import type { Metadata } from 'next';
import EnergiaPage from './page.client';

export const metadata: Metadata = {
  title: 'Ingeniería y Obra Eléctrica | Subestaciones y Transmisión CFE',
  description: 'Especialistas en infraestructura eléctrica hasta 230 kV en México. Ingeniería de subestaciones, obra electromecánica, cumplimiento PYCON-SE-01, gestión de permisos SENER y acceso al Mercado Eléctrico Nacional. Padrón CFE 4493015.',
  keywords: [
    'ingeniería subestaciones eléctricas México',
    'obra eléctrica CFE',
    'subestaciones 230kV',
    'líneas de transmisión eléctrica',
    'Padrón CFE 4493015',
    'mercado eléctrico nacional',
    'interconexión eléctrica comercial',
    'PYCON-SE-01',
    'DCCSED01',
    'MISSE EVIS',
    'permisos SENER generación eléctrica',
    'obra electromecánica México',
    'mantenimiento eléctrico industrial',
    'licitaciones CFE',
  ],
  alternates: {
    canonical: 'https://apen.mx/servicios/energia',
  },
  openGraph: {
    title: 'Ingeniería y Obra Eléctrica hasta 230 kV | APEN',
    description: 'Infraestructura eléctrica crítica: subestaciones, líneas de transmisión y gestión regulatoria ante CFE y SENER. Padrón CFE 4493015.',
    url: 'https://apen.mx/servicios/energia',
    siteName: 'APEN',
    locale: 'es_MX',
    type: 'website',
    images: [
      {
        url: 'https://raw.githubusercontent.com/DEV-APEN/imagenes/refs/heads/main/apen/Logo%20de%20APEN%20fondo%20transparente.png',
        width: 1200,
        height: 630,
        alt: 'APEN - Ingeniería y Obra Eléctrica',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ingeniería Eléctrica y Subestaciones CFE | APEN',
    description: 'Obra eléctrica hasta 230 kV, gestión ante Mercado Eléctrico Nacional y permisos SENER. Padrón CFE 4493015.',
    images: ['https://raw.githubusercontent.com/DEV-APEN/imagenes/refs/heads/main/apen/Logo%20de%20APEN%20fondo%20transparente.png'],
  },
};

export default function Page() {
  return <EnergiaPage />;
}
