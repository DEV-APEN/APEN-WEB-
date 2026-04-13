import type { Metadata } from 'next';
import ServicesPage from './page.client';

export const metadata: Metadata = {
  title: 'Catálogo de Servicios Técnicos | Ingeniería, Consultoría y Mantenimiento CFE/ASEA',
  description: 'Soluciones integrales de infraestructura energética en México. Ingeniería de subestaciones, gestión de proyectos, cumplimiento normativo y mantenimiento especializado.',
  keywords: [
    'ingeniería subestaciones', 
    'mantenimiento eléctrico CFE', 
    'consultoría normativa ASEA', 
    'gestión de proyectos energéticos', 
    'planeación y licitación CFE',
    'obra civil electromecánica',
    'modernización de sistemas de control'
  ],
  openGraph: {
    title: 'Servicios Especializados APEN | Ingeniería y Consultoría Técnica',
    description: 'Catálogo global de soluciones para el sector energético. Precisión técnica y cumplimiento regulatorio total.',
    images: ['https://raw.githubusercontent.com/DEV-APEN/imagenes/refs/heads/main/apen/Logo%20de%20APEN%20fondo%20transparente.png'],
    url: 'https://apen.mx/servicios',
    siteName: 'APEN',
    locale: 'es_MX',
    type: 'website',
  }
};

export default function Page() {
  return <ServicesPage />;
}
