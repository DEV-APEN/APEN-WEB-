import type { Metadata } from 'next';
import CertificacionesPage from './page.client';

export const metadata: Metadata = {
  title: 'Certificaciones y Cumplimiento Normativo | ISO 9001, 14001 y 45001',
  description: 'APEN cuenta con certificaciones ISO 9001, ISO 14001 e ISO 45001, Padrón CFE 4493015, ID Achilles PEMEX 00249023 y registros ante ASEA, CNE y SENER. Garantía de calidad, seguridad y gestión ambiental en el sector energético mexicano.',
  keywords: [
    'certificaciones APEN energía',
    'ISO 9001 ingeniería energética',
    'ISO 14001 gestión ambiental energía',
    'ISO 45001 seguridad ocupacional',
    'Padrón CFE 4493015',
    'Achilles PEMEX 00249023',
    'registros ASEA CNE SENER',
    'cumplimiento normativo energía México',
    'gestión de calidad sector energético',
    'acreditaciones energéticas México',
    'trazabilidad técnica ISO',
  ],
  alternates: {
    canonical: 'https://apen.mx/certificaciones',
  },
  openGraph: {
    title: 'Certificaciones ISO y Registros Regulatorios | APEN',
    description: 'ISO 9001/14001/45001, Padrón CFE 4493015, ID Achilles PEMEX 00249023 y registros ante ASEA, CNE y SENER. Trazabilidad y cumplimiento garantizado.',
    images: [
      {
        url: 'https://raw.githubusercontent.com/DEV-APEN/imagenes/refs/heads/main/apen/Logo%20de%20APEN%20fondo%20transparente.png',
        width: 1200,
        height: 630,
        alt: 'APEN - Certificaciones y Cumplimiento Normativo',
      },
    ],
    url: 'https://apen.mx/certificaciones',
    siteName: 'APEN',
    locale: 'es_MX',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Certificaciones APEN | ISO, CFE, ASEA y PEMEX Achilles',
    description: 'Respaldo normativo completo: ISO 9001/14001/45001, Padrón CFE y registro Achilles PEMEX. Estándares internacionales para el sector energético.',
    images: ['https://raw.githubusercontent.com/DEV-APEN/imagenes/refs/heads/main/apen/Logo%20de%20APEN%20fondo%20transparente.png'],
  },
};

export default function Page() {
  return <CertificacionesPage />;
}
