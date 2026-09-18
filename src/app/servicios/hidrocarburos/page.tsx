import type { Metadata } from 'next';
import HidrocarburosPage from './page.client';

export const metadata: Metadata = {
  title: 'Permisos CNE Hidrocarburos y Cumplimiento ASEA | Gasolineras y Gas LP México',
  description: 'Permisos CNE, cumplimiento ASEA y comercialización de coque de petróleo. Compra, venta, manejo, importación y exportación de petcoke con acceso a suministro PEMEX y logística especializada.',
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
    'coque de petróleo compra venta México',
    'comercializadora petcoke México',
    'importación exportación coque de petróleo',
    'suministro coque de petróleo PEMEX',
    'manejo logístico petcoke',
  ],
  alternates: {
    canonical: 'https://apen.mx/servicios/hidrocarburos',
  },
  openGraph: {
    title: 'Permisos CNE y Cumplimiento ASEA para Hidrocarburos | APEN México',
    description: 'Permisos CNE, cumplimiento ASEA y comercialización directa de coque de petróleo: compra, venta, manejo, importación y exportación de petcoke.',
    url: 'https://apen.mx/servicios/hidrocarburos',
    siteName: 'APEN',
    locale: 'es_MX',
    type: 'website',
    images: [
      {
        url: 'https://apen.mx/visual/imagenes/apen-logo.png',
        width: 1200,
        height: 630,
        alt: 'APEN - Permisos CNE y ASEA para Hidrocarburos México',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Permisos CNE, SASISOPA y Cumplimiento ASEA | APEN Hidrocarburos',
    description: 'Permisos CNE, SASISOPA y comercialización de coque de petróleo con acceso a suministro PEMEX, logística y fuentes alternativas.',
    images: ['https://apen.mx/visual/imagenes/apen-logo.png'],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Inicio",
      "item": "https://apen.mx"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Servicios",
      "item": "https://apen.mx/servicios"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Permisos CNE para Hidrocarburos y Cumplimiento ASEA",
      "item": "https://apen.mx/servicios/hidrocarburos"
    }
  ]
};
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Permisos CNE para Hidrocarburos y Cumplimiento ASEA",
  "provider": {
    "@id": "https://apen.mx/#organization"
  },
  "areaServed": {
    "@type": "Country",
    "name": "México"
  },
  "description": "Permisos CNE, cumplimiento ASEA y comercialización directa de coque de petróleo. APEN compra, vende, maneja, importa y exporta petcoke con acceso a suministro PEMEX y fuentes alternativas."
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <HidrocarburosPage />
    </>
  );
}
