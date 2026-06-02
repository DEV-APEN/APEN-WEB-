import type { Metadata } from 'next';
import ContactoPage from './page.client';

export const metadata: Metadata = {
  title: 'Contacto | APEN Administradora de Proyectos Energéticos — Especialistas CNE y ASEA',
  description: 'Consultoría energética directa con especialistas de APEN: permisos CNE para generación y gasolineras, clausuras ASEA, SASISOPA, ingeniería eléctrica CFE y project finance energético en México. Respuesta técnica en 24 horas.',
  keywords: [
    'contacto APEN energía',
    'consulta técnica ingeniería energética',
    'proyectos CFE ASEA asesoría',
    'contactar especialistas hidrocarburos',
    'asesoría energética México',
    'solicitar cotización energía',
    'consultoría regulatoria energética',
    'contacto defensa legal energética',
    'ingeniería energética CDMX',
    'proyectos energéticos en Ciudad de México',
    'consultoría energética CDMX',
    'servicios energéticos México CDMX',
    'administración de proyectos energéticos CDMX',
    'empresa de ingeniería energética en México',
  ],
  alternates: {
    canonical: 'https://apen.mx/contacto',
  },
  other: {
    subject: 'Consultoría energética y regulatoria México',
    classification: 'Energía, Consultoría, Regulación',
  },
  openGraph: {
    title: 'APEN Administradora de Proyectos Energéticos | Contacto',
    description: 'Enlace directo con especialistas en infraestructura energética, cumplimiento ASEA/CFE, permisos de hidrocarburos y defensa legal técnica en México.',
    images: [
      {
        url: 'https://raw.githubusercontent.com/DEV-APEN/imagenes/refs/heads/main/apen/Logo%20de%20APEN%20fondo%20transparente.png',
        width: 1200,
        height: 630,
        alt: 'APEN - Contacto Técnico',
      },
    ],
    url: 'https://apen.mx/contacto',
    siteName: 'APEN',
    locale: 'es_MX',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contacto APEN | Ingeniería Energética en México',
    description: 'Escríbenos para proyectos de energía, hidrocarburos o regularización normativa. Respuesta técnica especializada.',
    images: ['https://raw.githubusercontent.com/DEV-APEN/imagenes/refs/heads/main/apen/Logo%20de%20APEN%20fondo%20transparente.png'],
  },
};

export default function Page() {
  return <ContactoPage />;
}
