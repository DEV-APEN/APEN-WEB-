import type { Metadata } from 'next';
import CapacidadEjecutivaClient from './page.client';

export const metadata: Metadata = {
  title: 'Capacidad Ejecutiva | Licitaciones CFE y PEMEX | Grupo APEN S.A. de C.V.',
  description: 'APEN participa por cuenta propia en licitaciones CFE y PEMEX. Padrón No. 4493015 · Achilles ID 00249023. Infraestructura eléctrica hasta 230 kV, obra electromecánica y mantenimiento industrial. La misma firma que gestiona tus permisos regulatorios puede ejecutar el proyecto completo.',
  keywords: [
    'capacidad ejecutiva energía', 'consorcio ingeniería energética México',
    'tableros media alta tensión', 'infraestructura alta tensión', 'subestaciones eléctricas',
    'mantenimiento industrial energía', 'ingeniería pruebas puesta en marcha',
    'integración PEMEX', 'proveedor estratégico PEMEX', 'obra eléctrica CFE',
    'APEN capacidad ejecutiva', 'proyectos energéticos México'
  ],
  other: {
    subject: 'Consultoría energética y regulatoria México',
    classification: 'Energía, Consultoría, Regulación',
  },
  openGraph: {
    title: 'APEN Administradora de Proyectos Energéticos | Capacidad Ejecutiva',
    description: 'Ingeniería energética con ejecución propia: subestaciones 230 kV (Padrón CFE 4493015), infraestructura hidrocarburos y mantenimiento industrial en México.',
    url: 'https://apen.mx/capacidad-ejecutiva',
    siteName: 'APEN',
    locale: 'es_MX',
    type: 'website',
    images: [
      {
        url: 'https://apen.mx/visual/imagenes/apen-logo.png',
        width: 1200,
        height: 630,
        alt: 'APEN - Capacidad Ejecutiva Energética',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'APEN | Capacidad Ejecutiva — Subestaciones CFE y Proyectos Energéticos',
    description: 'Ingeniería energética con ejecución propia. Padrón CFE 4493015 · Achilles PEMEX 00249023.',
    images: ['https://apen.mx/visual/imagenes/apen-logo.png'],
  },
  alternates: { canonical: 'https://apen.mx/capacidad-ejecutiva' },
};

export default function CapacidadEjecutivaPage() {
  return <CapacidadEjecutivaClient />;
}
