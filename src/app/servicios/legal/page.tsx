import type { Metadata } from 'next';
import LegalPage from './page.client';

export const metadata: Metadata = {
  title: 'Defensa Legal y Técnica Energética | Regularización ASEA y CRE',
  description: 'Defensa jurídica especializada para el sector energético en México: levantamiento de clausuras, demandas de nulidad ante TFJA, regularización ante ASEA, CRE y CNE, ingeniería correctiva As-Built y elaboración de dictámenes técnicos.',
  keywords: [
    'defensa legal sector energético México',
    'levantamiento clausuras ASEA',
    'demandas nulidad TFJA energético',
    'regularización ASEA CRE energía',
    'ingeniería correctiva as-built',
    'emplazamientos ASEA hidrocarburos',
    'multas regulatorias energía',
    'peritajes ingeniería energética',
    'ingeniería de detalle normalización',
    'SASISOPA expedientes integración',
    'regularización CNE SENER',
    'defensa administrativa energía',
    'nulidad actos autoridad energética',
    'memorias cálculo técnicas',
    'cumplimiento regulatorio energético',
    'normativas energéticas México',
    'regulación energética México',
    'consultoría en cumplimiento energético',
    'asesoría regulatoria sector energético',
    'cumplimiento CRE México',
    'cumplimiento normativo oil and gas',
    'servicios de cumplimiento regulatorio energético México',
    'asesoría en normativas energéticas México',
  ],
  alternates: {
    canonical: 'https://apen.mx/servicios/legal',
  },
  openGraph: {
    title: 'Defensa Legal y Regularización Energética | APEN',
    description: 'Contención jurídica e ingeniería correctiva para clausuras y sanciones ante ASEA, CRE y CNE. Levantamiento inmediato y regularización integral en México.',
    url: 'https://apen.mx/servicios/legal',
    siteName: 'APEN',
    locale: 'es_MX',
    type: 'website',
    images: [
      {
        url: 'https://raw.githubusercontent.com/DEV-APEN/imagenes/refs/heads/main/apen/Logo%20de%20APEN%20fondo%20transparente.png',
        width: 1200,
        height: 630,
        alt: 'APEN - Defensa Legal y Técnica Energética',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Defensa Legal Energética: Clausuras, TFJA y Regularización | APEN',
    description: 'Levantamiento de clausuras, demandas de nulidad e ingeniería As-Built para regularización ante ASEA, CRE y CNE en México.',
    images: ['https://raw.githubusercontent.com/DEV-APEN/imagenes/refs/heads/main/apen/Logo%20de%20APEN%20fondo%20transparente.png'],
  },
};

export default function Page() {
  return <LegalPage />;
}
