import type { Metadata } from 'next';
import HidrocarburosPage from './page.client';

export const metadata: Metadata = {
  title: 'Gestión y Regulación de Hidrocarburos | Permisos CNE y ASEA',
  description: 'Servicios integrales para el sector hidrocarburos en México: permisos CNE y ASEA, estaciones de servicio, almacenamiento, Manifestación de Impacto Ambiental, SASISOPA e infraestructura PEMEX. ID Achilles 00249023.',
  keywords: [
    'permisos CNE hidrocarburos México',
    'consultoría ASEA hidrocarburos',
    'estaciones de servicio gasolineras permisos',
    'almacenamiento hidrocarburos',
    'SASISOPA implementación',
    'Manifestación de Impacto Ambiental MIA',
    'registro Achilles PEMEX 00249023',
    'distribución combustibles México',
    'NOM-003 NOM-005 hidrocarburos',
    'permisos OPE oficialía partes electrónicas',
    'ductos gasoductos distribución',
    'petroquímicos petrolíferos México',
    'licencias ambientales energía',
    'estudios de riesgo ASEA',
    'proyectos oil and gas México',
    'gestión de proyectos oil and gas',
    'consultoría oil and gas',
    'ingeniería para oil and gas',
    'supervisión de proyectos petroleros',
    'servicios técnicos oil and gas',
    'cumplimiento normativo oil and gas',
    'consultoría en proyectos oil and gas México',
  ],
  alternates: {
    canonical: 'https://apen.mx/servicios/hidrocarburos',
  },
  openGraph: {
    title: 'Permisos CNE, ASEA y Gestión de Hidrocarburos | APEN',
    description: 'Acreditación integral para instalaciones de hidrocarburos: permisos, impacto ambiental, SASISOPA y suministros PEMEX. Registro Achilles ID 00249023.',
    url: 'https://apen.mx/servicios/hidrocarburos',
    siteName: 'APEN',
    locale: 'es_MX',
    type: 'website',
    images: [
      {
        url: 'https://raw.githubusercontent.com/DEV-APEN/imagenes/refs/heads/main/apen/Logo%20de%20APEN%20fondo%20transparente.png',
        width: 1200,
        height: 630,
        alt: 'APEN - Gestión y Regulación de Hidrocarburos',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hidrocarburos: Permisos CNE, ASEA y PEMEX | APEN',
    description: 'Gestión regulatoria completa para el sector hidrocarburos. ID Achilles 00249023, registros OPE y cobertura nacional.',
    images: ['https://raw.githubusercontent.com/DEV-APEN/imagenes/refs/heads/main/apen/Logo%20de%20APEN%20fondo%20transparente.png'],
  },
};

export default function Page() {
  return <HidrocarburosPage />;
}
