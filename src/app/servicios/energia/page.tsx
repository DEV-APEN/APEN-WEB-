import type { Metadata } from 'next';
import EnergiaPage from './page.client';

export const metadata: Metadata = {
  title: 'Permisos CNE y Obra Eléctrica | Subestaciones CFE hasta 230 kV México',
  description: 'Tramitación de permisos CNE de generación, autoconsumo interconectado y acceso al MEM-CENACE. Ingeniería y obra eléctrica hasta 230 kV. Cumplimiento PYCON-SE-01. Licitaciones CFE 2026-2027. Padrón CFE 4493015.',
  keywords: [
    'permiso generación eléctrica CNE México 2026',
    'permiso autoconsumo solar fotovoltaico CNE',
    'autoconsumo interconectado Ley del Sector Eléctrico 2025',
    'interconexión MEM CENACE requisitos',
    'acceso red transmisión CFE proyectos renovables',
    'CELs certificados energías limpias 2025',
    'subestaciones eléctricas CFE licitaciones 2026',
    'construcción subestaciones 115kV 230kV México',
    'PYCON-SE-01 cumplimiento CFE',
    'DCCSED01 DCCSET01 normativa CFE',
    'licitaciones CFE transmisión eléctrica 2026 2027',
    'padrón CFE contratistas eléctricos',
    'obra electromecánica subestaciones México',
    'cogeneración CNE México permisos',
    'comercialización suministro eléctrico permiso CNE',
    'importación exportación energía eléctrica CNE',
    'Código de Red 2.0 CENACE cumplimiento',
    'ingeniería subestaciones eléctricas México',
    'líneas de transmisión alta tensión México',
    'tableros de control distribución eléctrica industrial',
    'consultoría sector eléctrico México',
    'Padrón CFE 4493015',
    'Mercado Eléctrico Mayorista MEM acceso',
    'obra eléctrica CFE empresa certificada',
  ],
  alternates: {
    canonical: 'https://apen.mx/servicios/energia',
  },
  openGraph: {
    title: 'Permisos CNE y Obra Eléctrica hasta 230 kV | APEN México',
    description: 'Tramitamos permisos CNE de generación y autoconsumo, gestionamos interconexión ante CENACE y ejecutamos obra eléctrica certificada hasta 230 kV. Licitaciones CFE 2026. Padrón 4493015.',
    url: 'https://apen.mx/servicios/energia',
    siteName: 'APEN',
    locale: 'es_MX',
    type: 'website',
    images: [
      {
        url: 'https://raw.githubusercontent.com/DEV-APEN/imagenes/refs/heads/main/apen/Logo%20de%20APEN%20fondo%20transparente.png',
        width: 1200,
        height: 630,
        alt: 'APEN - Permisos CNE e Ingeniería Eléctrica México',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Permisos CNE, Subestaciones CFE y MEM-CENACE | APEN',
    description: 'Permisos de generación, autoconsumo interconectado, obra eléctrica 230 kV y licitaciones CFE. Padrón CFE 4493015.',
    images: ['https://raw.githubusercontent.com/DEV-APEN/imagenes/refs/heads/main/apen/Logo%20de%20APEN%20fondo%20transparente.png'],
  },
};

export default function Page() {
  return <EnergiaPage />;
}
