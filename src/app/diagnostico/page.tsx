import type { Metadata } from 'next';
import DiagnosticoClient from './page.client';

export const metadata: Metadata = {
  title: 'Diagnóstico de Proyecto Energético | APEN — Evaluación CNE, ASEA y CFE',
  description: 'Asesoría en energía gratuita: APEN evalúa la viabilidad regulatoria de tu proyecto ante CNE, ASEA y CFE — permiso de generación, cumplimiento SASISOPA, levantamiento de clausura o ingeniería eléctrica — y entrega una ruta de ejecución en 24 horas.',
  keywords: [
    'diagnóstico proyecto energético', 'evaluación técnica energía México',
    'consultoría energética CDMX', 'viabilidad proyecto eléctrico',
    'asesoría normativa CFE ASEA', 'evaluación PEMEX proveedores',
    'APEN diagnóstico técnico', 'ingeniería energética consulta'
  ],
  other: {
    subject: 'Consultoría energética y regulatoria México',
    classification: 'Energía, Consultoría, Regulación',
  },
  openGraph: {
    title: 'APEN Administradora de Proyectos Energéticos | Diagnóstico Regulatorio',
    description: 'Asesoría en energía gratuita: evaluación regulatoria ante CNE, ASEA y CFE con ruta de ejecución en 24 horas. Grupo APEN, S.A. de C.V.',
    url: 'https://apen.mx/diagnostico',
    siteName: 'APEN',
    locale: 'es_MX',
    type: 'website',
    images: [
      {
        url: 'https://apen.mx/visual/imagenes/apen-logo.png',
        width: 1200,
        height: 630,
        alt: 'APEN - Diagnóstico de Proyecto Energético',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'APEN | Diagnóstico Energético — CNE, ASEA y CFE en 24 horas',
    description: 'Evaluación gratuita de viabilidad regulatoria para proyectos de energía eléctrica e hidrocarburos en México.',
    images: ['https://apen.mx/visual/imagenes/apen-logo.png'],
  },
  alternates: { canonical: 'https://apen.mx/diagnostico' },
};

export default function DiagnosticoPage() {
  return <DiagnosticoClient />;
}
