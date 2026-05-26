import type { Metadata } from 'next';
import ProjectFinanceClient from "./page.client";

export const metadata: Metadata = {
  title: 'Project Finance Energético México | Estructuración Financiera y SPVs Renovables',
  description: 'Estructuración de project finance para proyectos de energía renovable en México: levantamiento de capital Equity & Debt, constitución de SPVs, due diligence técnico-financiero, fondeo NAFIN/Bancomext y bankabilidad de activos energéticos críticos.',
  keywords: [
    'project finance energía renovable México solar eólica',
    'estructuración financiera proyectos energéticos México',
    'financiamiento proyectos energéticos NAFIN Bancomext',
    'SPV estructura financiera proyecto energético México',
    'due diligence técnico proyecto solar México',
    'levantamiento capital equity debt infraestructura energética',
    'bankabilidad proyectos energía renovable México',
    'fondeo proyectos eléctricos industriales',
    'inversión infraestructura energética México 2026',
    'estructuración deuda capital proyectos renovables',
    'project finance subestaciones transmisión eléctrica',
    'vehículo propósito especial energía México SPV',
    'due diligence técnico financiero energía renovable',
    'financiamiento solar fotovoltaico industrial México',
    'project finance hidrocarburos gas México',
    'APEN finanzas estructuración energética',
    'consultoría financiera sector energético México',
    'fondeo licitaciones CFE obra pública energética',
  ],
  alternates: {
    canonical: 'https://apen.mx/servicios/project-finance',
  },
  openGraph: {
    title: 'Project Finance Energético y SPVs Renovables en México | APEN',
    description: 'Estructuración financiera, SPVs, due diligence técnico y levantamiento de capital Equity & Debt para proyectos de energía renovable e infraestructura eléctrica en México.',
    url: 'https://apen.mx/servicios/project-finance',
    siteName: 'APEN',
    locale: 'es_MX',
    type: 'website',
    images: [
      {
        url: 'https://raw.githubusercontent.com/DEV-APEN/imagenes/refs/heads/main/apen/Logo%20de%20APEN%20fondo%20transparente.png',
        width: 1200,
        height: 630,
        alt: 'APEN - Project Finance Energético México',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Project Finance y Estructuración Financiera Energética | APEN',
    description: 'SPVs, due diligence técnico-financiero, NAFIN/Bancomext y levantamiento de capital para proyectos renovables en México.',
    images: ['https://raw.githubusercontent.com/DEV-APEN/imagenes/refs/heads/main/apen/Logo%20de%20APEN%20fondo%20transparente.png'],
  },
};

export default function ProjectFinancePage() {
  return <ProjectFinanceClient />;
}
