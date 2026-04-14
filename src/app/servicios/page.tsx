import type { Metadata } from 'next';
import ServicesPage from './page.client';

export const metadata: Metadata = {
  title: 'Servicios de Ingeniería, Hidrocarburos y Defensa Legal Energética',
  description: 'Catálogo integral de servicios APEN para el sector energético mexicano: ingeniería de subestaciones, gestión de hidrocarburos ante CNE/ASEA, defensa legal técnica y cumplimiento normativo CFE. Padrón CFE 4493015 · Achilles 00249023.',
  keywords: [
    'servicios ingeniería energética México',
    'ingeniería subestaciones CFE',
    'mantenimiento eléctrico industrial',
    'consultoría normativa ASEA',
    'gestión proyectos energéticos',
    'planeación licitación CFE',
    'obra civil electromecánica',
    'modernización sistemas control eléctrico',
    'permisos hidrocarburos CNE',
    'defensa legal energética México',
    'regularización ASEA CRE',
    'ISO 9001 14001 45001 energía',
  ],
  alternates: {
    canonical: 'https://apen.mx/servicios',
  },
  openGraph: {
    title: 'Servicios Especializados APEN | Energía, Hidrocarburos y Legal',
    description: 'Tres unidades estratégicas: ingeniería eléctrica, gestión de hidrocarburos y defensa legal técnica. Cumplimiento normativo total para el sector energético en México.',
    images: [
      {
        url: 'https://raw.githubusercontent.com/DEV-APEN/imagenes/refs/heads/main/apen/Logo%20de%20APEN%20fondo%20transparente.png',
        width: 1200,
        height: 630,
        alt: 'APEN - Catálogo de Servicios Energéticos',
      },
    ],
    url: 'https://apen.mx/servicios',
    siteName: 'APEN',
    locale: 'es_MX',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Servicios APEN | Energía, Hidrocarburos y Defensa Legal',
    description: 'Ingeniería eléctrica, gestión de permisos CNE/ASEA y defensa jurídica especializada para el sector energético en México.',
    images: ['https://raw.githubusercontent.com/DEV-APEN/imagenes/refs/heads/main/apen/Logo%20de%20APEN%20fondo%20transparente.png'],
  },
};

export default function Page() {
  return <ServicesPage />;
}
