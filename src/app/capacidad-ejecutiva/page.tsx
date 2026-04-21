import type { Metadata } from 'next';
import CapacidadEjecutivaClient from './page.client';

export const metadata: Metadata = {
  title: 'Capacidad Ejecutiva | APEN — Consorcio de Ingeniería Energética',
  description: 'APEN integra tableros de alta tensión, infraestructura AT, mantenimiento industrial e ingeniería de pruebas bajo un solo sistema de dirección técnica con respaldo PEMEX.',
  keywords: [
    'capacidad ejecutiva energía', 'consorcio ingeniería energética México',
    'tableros media alta tensión', 'infraestructura alta tensión', 'subestaciones eléctricas',
    'mantenimiento industrial energía', 'ingeniería pruebas puesta en marcha',
    'integración PEMEX', 'proveedor estratégico PEMEX', 'obra eléctrica CFE',
    'APEN capacidad ejecutiva', 'proyectos energéticos México'
  ],
  openGraph: {
    title: 'Capacidad Ejecutiva | APEN',
    description: 'Consorcio integrado de ingeniería, construcción y cumplimiento normativo para proyectos energéticos críticos.',
    url: 'https://apen.mx/capacidad-ejecutiva',
  },
  alternates: { canonical: 'https://apen.mx/capacidad-ejecutiva' },
};

export default function CapacidadEjecutivaPage() {
  return <CapacidadEjecutivaClient />;
}
