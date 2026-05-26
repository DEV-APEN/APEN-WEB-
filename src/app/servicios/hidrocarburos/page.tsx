import type { Metadata } from 'next';
import HidrocarburosPage from './page.client';

export const metadata: Metadata = {
  title: 'Permisos CNE Hidrocarburos y Cumplimiento ASEA | Gasolineras y Gas LP México',
  description: 'Tramitación de permisos CNE para expendio de petrolíferos, gasolineras y gas LP. Implementación SASISOPA, licencias ambientales ASEA, MIA, PROY-NOM-023-ASEA-2025 y RENAGAS. Registro Achilles PEMEX 00249023.',
  keywords: [
    'permisos CNE hidrocarburos México 2026',
    'permiso CNE gasolinera expendio petrolíferos',
    'tramitar permiso CNE hidrocarburo México',
    'SASISOPA gasolineras obligatorio requisitos 2026',
    'implementación SASISOPA estación de servicio',
    'licencia ambiental ASEA gasolinera 2025 2026',
    'Manifestación de Impacto Ambiental ASEA hidrocarburos',
    'PROY-NOM-023-ASEA-2025 estaciones de servicio',
    'RENAGAS segunda fase regularización ambiental ASEA',
    'distribución gas LP permisos CNE México',
    'almacenamiento combustibles permisos ASEA México',
    'estudios de riesgo ASEA instalaciones hidrocarburos',
    'pre-registro OPE oficialía de partes electrónicas CNE',
    'permiso almacenamiento licuefacción regasificación CNE',
    'permiso comercialización petrolíferos CNE',
    'permiso transporte ductos hidrocarburos',
    'registro Achilles PEMEX proveedor cómo obtener',
    'timbrado CFDI gasolina facturación hidrocarburos',
    'NOM-003 NOM-005 normas gasolineras',
    'cumplimiento operación anual ASEA COA',
    'análisis riesgo sector hidrocarburos ASEA',
    'dictamen operación instalaciones ASEA',
    'consultoría ASEA CNE SENER hidrocarburos México',
    'permisos importación exportación petrolíferos SENER',
  ],
  alternates: {
    canonical: 'https://apen.mx/servicios/hidrocarburos',
  },
  openGraph: {
    title: 'Permisos CNE y Cumplimiento ASEA para Hidrocarburos | APEN México',
    description: 'Gestión completa de permisos CNE para gasolineras, gas LP y almacenamiento. SASISOPA, MIA, PROY-NOM-023-ASEA-2025 y RENAGAS. Registro Achilles PEMEX 00249023.',
    url: 'https://apen.mx/servicios/hidrocarburos',
    siteName: 'APEN',
    locale: 'es_MX',
    type: 'website',
    images: [
      {
        url: 'https://raw.githubusercontent.com/DEV-APEN/imagenes/refs/heads/main/apen/Logo%20de%20APEN%20fondo%20transparente.png',
        width: 1200,
        height: 630,
        alt: 'APEN - Permisos CNE y ASEA para Hidrocarburos México',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Permisos CNE, SASISOPA y Cumplimiento ASEA | APEN Hidrocarburos',
    description: 'Permisos CNE para gasolineras y gas LP, SASISOPA, licencias ASEA y RENAGAS. Achilles PEMEX 00249023. Cobertura nacional.',
    images: ['https://raw.githubusercontent.com/DEV-APEN/imagenes/refs/heads/main/apen/Logo%20de%20APEN%20fondo%20transparente.png'],
  },
};

export default function Page() {
  return <HidrocarburosPage />;
}
