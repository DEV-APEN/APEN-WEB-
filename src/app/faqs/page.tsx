import { Metadata } from 'next';
import FAQsPageClient from './page.client';

export const metadata: Metadata = {
  title: 'Preguntas Frecuentes | Permisos CNE, Clausuras ASEA y Regulación Energética México',
  description: 'Respuestas expertas sobre permisos CNE de generación y expendio de petrolíferos, levantamiento de clausuras ASEA, afirmativa ficta, SASISOPA obligatorio, padrón CFE contratistas, project finance energético y defensa legal ante el TFJA en México.',
  keywords: [
    'cómo obtener permiso generación eléctrica México 2026',
    'qué permisos necesita una gasolinera en México 2026',
    'cuánto tarda un permiso CNE en México',
    'qué es la afirmativa ficta ASEA y cómo usarla',
    'cómo levantar una clausura de ASEA en México',
    'SASISOPA obligatorio gasolineras requisitos',
    'qué es la CNE y cuáles son sus funciones México',
    'diferencia CRE y CNE sector energético México',
    'padrón CFE contratistas cómo registrarse',
    'project finance qué es energía renovable México',
    'afirmativa ficta ASEA impacto ambiental plazo',
    'clausura ASEA qué hacer pasos',
    'permiso autoconsumo solar interconectado CNE',
    'interconexión CENACE MEM requisitos participante',
    'CELs certificados energías limpias obligaciones',
    'timbrado CFDI gasolina facturación 2026',
    'preguntas frecuentes APEN consultoría energética',
    'defensa legal técnica energética México FAQ',
  ],
  alternates: {
    canonical: 'https://apen.mx/faqs',
  },
  openGraph: {
    title: 'Preguntas Frecuentes sobre Permisos CNE, ASEA y Regulación Energética | APEN',
    description: 'Respuestas de expertos sobre permisos CNE, clausuras ASEA, afirmativa ficta, SASISOPA, padrón CFE, project finance y defensa legal energética en México.',
    url: 'https://apen.mx/faqs',
    siteName: 'APEN',
    locale: 'es_MX',
    type: 'website',
    images: [
      {
        url: 'https://apen.mx/visual/imagenes/apen-logo.png',
        width: 1200,
        height: 630,
        alt: 'APEN - Preguntas Frecuentes Regulación Energética México',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FAQs: Permisos CNE, Clausuras ASEA y Regulación Energética | APEN',
    description: 'Resuelve tus dudas sobre permisos CNE, clausuras ASEA, afirmativa ficta, SASISOPA y defensa legal energética en México.',
    images: ['https://apen.mx/visual/imagenes/apen-logo.png'],
  },
};

export default function FAQsPage() {
  return <FAQsPageClient />;
}
