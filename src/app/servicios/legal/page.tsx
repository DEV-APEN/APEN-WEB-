import type { Metadata } from 'next';
import LegalPage from './page.client';

export const metadata: Metadata = {
  title: 'Levantamiento de Clausuras ASEA y Defensa Legal Energética | TFJA México',
  description: 'Levantamiento inmediato de clausuras ASEA, afirmativa ficta en impacto ambiental, demandas de nulidad ante el TFJA, juicio de amparo y defensa contra multas. Más de 200 autorizaciones ASEA gestionadas. Regularización energética en México.',
  keywords: [
    'levantamiento clausura ASEA gasolinera',
    'clausura ASEA qué hacer pasos inmediatos',
    'defensa legal clausura ASEA abogado energético',
    'afirmativa ficta ASEA impacto ambiental plazo',
    'qué es la afirmativa ficta ASEA cómo usarla',
    'demanda nulidad TFJA actos ASEA energía',
    'juicio amparo actos autoridad ASEA CNE SENER',
    'regularización ASEA gasolinera expediente integral',
    'procedimiento administrativo de sanción ASEA CNE',
    'defensa multas ASEA impugnar resoluciones',
    'ingeniería correctiva As-Built energía México',
    'dictamen técnico ASEA instalaciones hidrocarburos',
    'prevenciones requerimientos administrativos ASEA',
    'autorización impacto ambiental ASEA garantía resolución',
    'MIA Manifestación Impacto Ambiental ASEA gestión',
    'informe preventivo ASEA tramitación',
    'emplazamientos autoridad energética respuesta jurídica',
    'representación procedimientos sanción ASEA CNE SENER',
    'regularización CNE SENER defensa legal',
    'defensa legal sector energético México',
    'nulidad resoluciones autoridades energéticas México',
    'cumplimiento normativo energético defensa jurídica',
    'abogado energético especializado México',
  ],
  alternates: {
    canonical: 'https://apen.mx/servicios/legal',
  },
  openGraph: {
    title: 'Levantamiento Clausuras ASEA y Defensa Legal Energética | APEN',
    description: 'Levantamiento inmediato de clausuras, afirmativa ficta, demandas TFJA y juicio de amparo contra actos ASEA, CNE y SENER. +200 autorizaciones gestionadas. México.',
    url: 'https://apen.mx/servicios/legal',
    siteName: 'APEN',
    locale: 'es_MX',
    type: 'website',
    images: [
      {
        url: 'https://apen.mx/visual/imagenes/apen-logo.png',
        width: 1200,
        height: 630,
        alt: 'APEN - Defensa Legal Energética y Clausuras ASEA México',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clausuras ASEA, Afirmativa Ficta y Defensa Legal Energética | APEN',
    description: 'Levantamiento de clausuras ASEA, afirmativa ficta, nulidad TFJA y amparo contra actos de autoridad. +200 autorizaciones. Cobertura nacional.',
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
      "name": "Defensa Legal Energética",
      "item": "https://apen.mx/servicios/legal"
    }
  ]
};
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": [
    "Service",
    "LegalService"
  ],
  "name": "Defensa Legal Energética",
  "provider": {
    "@id": "https://apen.mx/#organization"
  },
  "areaServed": {
    "@type": "Country",
    "name": "México"
  },
  "description": "Levantamiento inmediato de clausuras, afirmativa ficta, demandas TFJA y juicio de amparo contra actos ASEA, CNE y SENER."
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
      <LegalPage />
    </>
  );
}

