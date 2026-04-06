import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'APEN | Administradora de Proyectos Energéticos - Consultoría e Ingeniería Especializada',
    template: '%s | APEN'
  },
  description: ' Expertos en infraestructura energética, eléctrica e hidrocarburos. Ingeniería integral, cumplimiento ASEA/CFE y gestión de riesgos 360° para proyectos industriales críticos en México.',
  keywords: [
    'infraestructura energética', 
    'ingeniería eléctrica', 
    'consultoría ASEA', 
    'proyectos CFE México', 
    'hidrocarburos', 
    'gestión de proyectos energéticos',
    'interconexión SEN',
    'normatividad energética',
    'trazabilidad técnica',
    'obra electromecánica'
  ],
  authors: [{ name: 'APEN Technical Team' }],
  creator: 'APEN',
  publisher: 'APEN',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    url: 'https://apen.mx', // Cambiar por el dominio real
    siteName: 'APEN',
    title: 'APEN | Especialistas en Infraestructura Energética e Hidrocarburos',
    description: 'Socio estratégico en ingeniería, gestión y cumplimiento normativo para el sector energético. Seguridad, precisión y trazabilidad total.',
    images: [
      {
        url: 'https://raw.githubusercontent.com/DEV-APEN/imagenes/refs/heads/main/apen/Logo%20de%20APEN%20fondo%20transparente.png',
        width: 1200,
        height: 630,
        alt: 'APEN - Administradora de Proyectos Energéticos',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'APEN | Ingeniería y Consultoría Energética de Alto Nivel',
    description: 'Expertos en cumplimiento ASEA/CFE e infraestructura crítica. Trazabilidad técnica para proyectos de alto impacto.',
    images: ['https://raw.githubusercontent.com/DEV-APEN/imagenes/refs/heads/main/apen/Logo%20de%20APEN%20fondo%20transparente.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.className} overflow-x-hidden w-full`}>
        {children}
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "APEN | Administradora de Proyectos Energéticos",
              "url": "https://apen.mx",
              "logo": "https://raw.githubusercontent.com/DEV-APEN/imagenes/refs/heads/main/apen/Logo%20de%20APEN%20fondo%20transparente.png",
              "image": "https://raw.githubusercontent.com/DEV-APEN/imagenes/refs/heads/main/apen/Logo%20de%20APEN%20fondo%20transparente.png",
              "description": "Consultoría avanzada en cumplimiento normativo ASEA/CFE e ingeniería integral para infraestructura energética e hidrocarburos.",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "MX"
              },
              "knowsAbout": ["Ingeniería Eléctrica", "Hidrocarburos", "Cumplimiento Normativo", "ASEA", "CFE"],
              "areaServed": "México",
              "priceRange": "$$$"
            }),
          }}
        />
      </body>
    </html>
  );
}
