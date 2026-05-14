import { Metadata } from 'next';
import FAQsPageClient from './page.client';

export const metadata: Metadata = {
  title: 'Preguntas Frecuentes (FAQs) | Consultoría y Regulación Energética',
  description: 'Respuestas expertas sobre regulación CNE, cumplimiento ASEA, SASISOPA, defensa legal técnica e infraestructura CFE en México. Resolvemos sus dudas críticas del sector.',
  keywords: [
    'FAQs APEN',
    'preguntas frecuentes CNE',
    'que es la CNE energetica',
    'permisos gasolinera CNE',
    'clausura ASEA que hacer',
    'SASISOPA obligatorio',
    'defensa legal tecnica energetica',
    'padron CFE contratistas',
    'project finance energia mexico',
    'timbrado facturas gasolina abril 2026'
  ],
  openGraph: {
    title: 'Centro de Respuesta Técnica y Regulatoria | APEN',
    description: 'Guía completa sobre el nuevo marco regulatorio de la CNE, operativos ASEA y soluciones de infraestructura en México.',
    images: ['/visual/imagenes/faqs-hero.jpg'],
  }
};

export default function FAQsPage() {
  return <FAQsPageClient />;
}
