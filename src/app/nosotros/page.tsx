import type { Metadata } from 'next';
import NosotrosPage from './page.client';

export const metadata: Metadata = {
  title: 'Nosotros | Consultoría Regulatoria Energética ante ASEA, CNE y SENER | Grupo APEN S.A. de C.V.',
  description: 'Grupo APEN S.A. de C.V. — firma mexicana de consultoría regulatoria energética. Representamos empresarios del sector ante ASEA, CNE y SENER. Más de 3,000 trámites resueltos, 500 juicios ganados. Padrón CFE 4493015 · Achilles 00249023.',
  keywords: [
    'APEN empresa energética México',
    'consultoría ingeniería energética',
    'empresa certificada ISO energía',
    'historia APEN proyectos energéticos',
    'identidad corporativa energética',
    'equipo técnico energía México',
    'certificaciones ISO 9001 energía',
    'empresa CFE ASEA acreditada',
    'Padrón CFE proveedores',
    'Achilles PEMEX proveedor',
    'empresa de ingeniería energética en México',
    'administración de proyectos energéticos',
    'gestión de proyectos energéticos',
    'empresa de proyectos energéticos México',
    'ingeniería energética CDMX',
    'consultoría energética CDMX',
  ],
  alternates: {
    canonical: 'https://apen.mx/nosotros',
  },
  other: {
    subject: 'Consultoría energética y regulatoria México',
    classification: 'Energía, Consultoría, Regulación',
  },
  openGraph: {
    title: 'APEN Administradora de Proyectos Energéticos | Quiénes Somos',
    description: 'Grupo APEN, S.A. de C.V. — consultora energética mexicana especializada en permisos CNE, cumplimiento ASEA, ingeniería eléctrica CFE y defensa legal ante TFJA. Fundada 2024. CDMX.',
    url: 'https://apen.mx/nosotros',
    siteName: 'APEN',
    locale: 'es_MX',
    type: 'website',
    images: [
      {
        url: 'https://raw.githubusercontent.com/DEV-APEN/imagenes/refs/heads/main/apen/Logo%20de%20APEN%20fondo%20transparente.png',
        width: 1200,
        height: 630,
        alt: 'APEN - Identidad Corporativa',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nosotros | APEN — Empresa de Ingeniería Energética en México',
    description: 'Identidad, certificaciones y solidez operativa de APEN para el sector energético. Padrón CFE, Achilles PEMEX e ISO internacionales.',
    images: ['https://raw.githubusercontent.com/DEV-APEN/imagenes/refs/heads/main/apen/Logo%20de%20APEN%20fondo%20transparente.png'],
  },
};

export default function Page() {
  return <NosotrosPage />;
}
