import type { Metadata } from 'next';
import DiagnosticoClient from './page.client';

export const metadata: Metadata = {
  title: 'Diagnóstico de Proyecto | APEN — Evaluación Técnica Energética',
  description: 'Solicite una evaluación técnica de su proyecto energético. APEN identifica viabilidad normativa, requerimientos técnicos y ruta de ejecución en 24 horas.',
  keywords: [
    'diagnóstico proyecto energético', 'evaluación técnica energía México',
    'consultoría energética CDMX', 'viabilidad proyecto eléctrico',
    'asesoría normativa CFE ASEA', 'evaluación PEMEX proveedores',
    'APEN diagnóstico técnico', 'ingeniería energética consulta'
  ],
  openGraph: {
    title: 'Diagnóstico de Proyecto | APEN',
    description: 'Evaluación técnica y normativa de proyectos energéticos en 24 horas.',
    url: 'https://apen.mx/diagnostico',
  },
  alternates: { canonical: 'https://apen.mx/diagnostico' },
};

export default function DiagnosticoPage() {
  return <DiagnosticoClient />;
}
