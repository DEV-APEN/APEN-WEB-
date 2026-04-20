import type { Metadata } from 'next';
import NosotrosPage from './page.client';

export const metadata: Metadata = {
  title: 'Nosotros | Identidad y Respaldo Técnico de APEN',
  description: 'Conoce a APEN: empresa especializada en ingeniería energética, consultoría de hidrocarburos y cumplimiento normativo en México. Certificaciones ISO 9001, 14001, 45001, Padrón CFE 4493015 e ID Achilles 00249023.',
  keywords: [
    'APEN empresa energética México',
    'consultoría ingeniería energética',
    'empresa certificada ISO energía',
    'historia APEN proyectos energéticos',
    'identidad corporativa energética',
    'equipo técnico energía México',
    'certificaciones ISO 9001 energía',
    'empresa CFE ASEA acreditada',
    'Padrón CFE proveedores',
    'Achilles PEMEX proveedor',
    'empresa de ingeniería energética en México',
    'administración de proyectos energéticos',
    'gestión de proyectos energéticos',
    'empresa de proyectos energéticos México',
    'ingeniería energética CDMX',
    'consultoría energética CDMX',
  ],
  alternates: {
    canonical: 'https://apen.mx/nosotros',
  },
  openGraph: {
    title: 'Nosotros | APEN — Identidad Corporativa y Certificaciones',
    description: 'Más de una década de experiencia en el sector energético mexicano. ISO 9001/14001/45001, Padrón CFE 4493015 e ID Achilles 00249023. Conoce quiénes somos.',
    url: 'https://apen.mx/nosotros',
    siteName: 'APEN',
    locale: 'es_MX',
    type: 'website',
    images: [
      {
        url: 'https://raw.githubusercontent.com/DEV-APEN/imagenes/refs/heads/main/apen/Logo%20de%20APEN%20fondo%20transparente.png',
        width: 1200,
        height: 630,
        alt: 'APEN - Identidad Corporativa',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nosotros | APEN — Empresa de Ingeniería Energética en México',
    description: 'Identidad, certificaciones y solidez operativa de APEN para el sector energético. Padrón CFE, Achilles PEMEX e ISO internacionales.',
    images: ['https://raw.githubusercontent.com/DEV-APEN/imagenes/refs/heads/main/apen/Logo%20de%20APEN%20fondo%20transparente.png'],
  },
};

export default function Page() {
  return <NosotrosPage />;
}
