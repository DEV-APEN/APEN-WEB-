import type { Metadata } from 'next';
import ServicesPage from './page.client';

export const metadata: Metadata = {
  title: 'Servicios de Consultoría Energética | CNE, ASEA, CFE e Ingeniería Eléctrica México',
  description: 'Consultoría energética integral en México: permisos CNE para hidrocarburos y sector eléctrico, cumplimiento ASEA (SASISOPA, MIA, clausuras), ingeniería eléctrica 230 kV, project finance y defensa legal ante TFJA. Padrón CFE 4493015 · Achilles PEMEX 00249023.',
  keywords: [
    'servicios energéticos México',
    'ingeniería energética industrial',
    'servicios de ingeniería energética',
    'soluciones energéticas industriales',
    'project management energético',
    'gestión de proyectos industriales',
    'administración de proyectos industriales',
    'control de proyectos energéticos',
    'supervisión de proyectos industriales',
    'planificación de proyectos energéticos',
    'PM energético México',
    'consultoría en ingeniería energética',
    'ingeniería subestaciones CFE',
    'mantenimiento eléctrico industrial',
    'consultoría normativa ASEA',
    'gestión proyectos energéticos',
    'permisos hidrocarburos CNE',
    'defensa legal energética México',
    'supervisión de obra energética',
    'gestión de construcción energética',
    'administración de obra industrial',
  ],
  alternates: {
    canonical: 'https://apen.mx/servicios',
  },
  other: {
    subject: 'Consultoría energética y regulatoria México',
    classification: 'Energía, Consultoría, Regulación',
  },
  openGraph: {
    title: 'APEN Administradora de Proyectos Energéticos | Servicios CNE, ASEA y CFE México',
    description: 'Consultoría energética integral: permisos CNE, cumplimiento ASEA, ingeniería eléctrica CFE, project finance y defensa legal ante TFJA. Grupo APEN, S.A. de C.V.',
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
