import type { Metadata } from 'next';
import ContactoPage from './page.client';

export const metadata: Metadata = {
  title: 'Contacto Técnico e Institucional | APEN',
  description: 'Comunícate con APEN para consultas técnicas, desarrollo de infraestructura y soluciones regulatorias para el sector energético en México.',
  keywords: [
    'contacto APEN', 
    'ingeniería energética', 
    'consulta técnica', 
    'proyectos CFE ASEA'
  ],
  openGraph: {
    title: 'Contacto Técnico | APEN',
    description: 'Enlace directo con especialistas en desarrollo de infraestructura y cumplimiento corporativo.',
    images: ['https://raw.githubusercontent.com/DEV-APEN/imagenes/refs/heads/main/apen/Logo%20de%20APEN%20fondo%20transparente.png'],
    url: 'https://apen.mx/contacto',
    siteName: 'APEN',
    locale: 'es_MX',
    type: 'website',
  }
};

export default function Page() {
  return <ContactoPage />;
}
