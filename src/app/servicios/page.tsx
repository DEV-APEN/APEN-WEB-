import type { Metadata } from 'next';
import ServicesPage from './page.client';

export const metadata: Metadata = {
  title: 'Consultoría Regulatoria Energética | CNE · ASEA · SENER | Grupo APEN S.A. de C.V.',
  description: 'Consultoría regulatoria energética en México: permisos CNE, cumplimiento ASEA, autorizaciones SENER y defensa legal ante TFJA y PJF. Más de 3,000 trámites resueltos. Grupo APEN S.A. de C.V. — Padrón CFE 4493015 · Achilles 00249023.',
  keywords: [
    'servicios energéticos México',
    'soluciones energéticas industriales',
    'planificación de proyectos energéticos',
    'consultoría en ingeniería energética',
    'mantenimiento eléctrico industrial',
    'consultoría normativa ASEA',
    'gestión proyectos energéticos',
    'permisos hidrocarburos CNE',
    'defensa legal energética México',
    'afirmativa ficta ASEA',
    'informe preventivo ASEA requisitos 2026',
    'manifestación de impacto social MISSE SENER',
    'permiso almacenamiento hidrocarburos CNE',
    'levantamiento de clausuras ASEA',
    'juicio amparo resolución CNE',
    'demanda nulidad TFJA sector energético',
    'consultoría regulatoria gasolineras México',
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
