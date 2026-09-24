import type { Metadata } from 'next';
import ContactoPage from './page.client';
import { getServiceById, getServiceCategory } from '@/data/services';
import type { ServiceKind } from '@/data/service-areas';

/** Área de interés del formulario que corresponde a cada tipo de servicio. */
const AREA_INTERES_POR_TIPO: Record<ServiceKind, string> = {
  regulatorio: 'legal',
  legal: 'legal',
  ejecucion: 'ingenieria',
  financiamiento: 'ventas',
  comercial: 'ventas',
};

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
        url: 'https://apen.mx/visual/imagenes/apen-logo.png',
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
    images: ['https://apen.mx/visual/imagenes/apen-logo.png'],
  },
};

export default function Page({ searchParams }: { searchParams: { servicio?: string } }) {
  const service = typeof searchParams.servicio === 'string' ? getServiceById(searchParams.servicio) : undefined;
  // Si la persona llega desde una ficha ya sabemos a qué área pertenece:
  // el mantenimiento tiene su propia opción, el resto se deduce del tipo.
  const category = service ? getServiceCategory(service) : undefined;
  const areaInteres = category
    ? category.id === 'mantenimiento-y-pruebas'
      ? 'mantenimiento'
      : AREA_INTERES_POR_TIPO[category.kind]
    : undefined;

  return (
    <ContactoPage
      selectedService={service ? { id: service.id, title: service.title } : undefined}
      areaInteres={areaInteres}
    />
  );
}
