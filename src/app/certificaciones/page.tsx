import type { Metadata } from 'next';
import CertificacionesPage from './page.client';

export const metadata: Metadata = {
  title: 'Certificaciones y Cumplimiento Normativo | APEN',
  description: 'Conoce el respaldo normativo y los estándares operativos de APEN. Gestión integral en ISO 9001, 14001, 45001 y alineación con ASEA, CFE y SENER.',
  keywords: [
    'certificaciones APEN', 
    'cumplimiento normativo', 
    'ISO 9001', 
    'ISO 14001', 
    'ISO 45001',
    'registros ASEA CFE',
    'gestión de calidad'
  ],
  openGraph: {
    title: 'Certificaciones y Cumplimiento Normativo | APEN',
    description: 'Respaldo normativo y estándares operativos internacionales en el sector energético.',
    images: ['https://raw.githubusercontent.com/DEV-APEN/imagenes/refs/heads/main/apen/Logo%20de%20APEN%20fondo%20transparente.png'],
    url: 'https://apen.mx/certificaciones',
    siteName: 'APEN',
    locale: 'es_MX',
    type: 'website',
  }
};

export default function Page() {
  return <CertificacionesPage />;
}
