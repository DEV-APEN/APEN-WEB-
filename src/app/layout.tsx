import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import CookieConsent from '../components/CookieConsent';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://apen.mx'),
  title: {
    default: 'APEN | Consultoría e Ingeniería Energética en México — CFE, ASEA y Hidrocarburos',
    template: '%s | APEN',
  },
  description: 'APEN: expertos en infraestructura energética, ingeniería eléctrica e hidrocarburos. Cumplimiento normativo ASEA y CFE, gestión de proyectos industriales y defensa legal técnica para el sector energético en México.',
  keywords: [
    'administración de proyectos energéticos',
    'gestión de proyectos energéticos',
    'empresa de proyectos energéticos México',
    'consultoría energética México',
    'ingeniería energética México',
    'servicios energéticos México',
    'APEN administradora proyectos energéticos',
    'ingeniería energética CDMX',
    'proyectos energéticos Ciudad de México',
    'consultoría energética CDMX',
    'servicios energéticos México CDMX',
    'administración de proyectos energéticos CDMX',
    'empresa de ingeniería energética en México',
    'cumplimiento normativo ASEA CFE',
  ],
  authors: [{ name: 'APEN Technical Team', url: 'https://apen.mx' }],
  creator: 'APEN',
  publisher: 'APEN',
  category: 'Ingeniería y Consultoría Energética',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: 'https://apen.mx',
    languages: {
      'es-MX': 'https://apen.mx',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    url: 'https://apen.mx',
    siteName: 'APEN — Administradora de Proyectos Energéticos',
    title: 'APEN | Especialistas en Infraestructura Energética e Hidrocarburos en México',
    description: 'Socio estratégico en ingeniería, gestión y cumplimiento normativo para el sector energético mexicano. Padrón CFE 4493015 · ID Achilles 00249023 · ISO 9001/14001/45001.',
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
    title: 'APEN | Ingeniería y Consultoría Energética — CFE, ASEA, PEMEX',
    description: 'Expertos en cumplimiento ASEA/CFE, subestaciones, hidrocarburos y defensa legal técnica. Trazabilidad total para proyectos de alto impacto en México.',
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
  verification: {
    google: '',
  },
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://apen.mx/#organization',
  name: 'APEN — Administradora de Proyectos Energéticos',
  alternateName: 'APEN',
  url: 'https://apen.mx',
  logo: {
    '@type': 'ImageObject',
    url: 'https://raw.githubusercontent.com/DEV-APEN/imagenes/refs/heads/main/apen/Logo%20de%20APEN%20fondo%20transparente.png',
    width: 400,
    height: 400,
  },
  image: 'https://raw.githubusercontent.com/DEV-APEN/imagenes/refs/heads/main/apen/Logo%20de%20APEN%20fondo%20transparente.png',
  description: 'Consultoría avanzada en cumplimiento normativo ASEA/CFE e ingeniería integral para infraestructura energética e hidrocarburos en México.',
  foundingDate: '2015',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'MX',
    addressRegion: 'México',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    email: 'home@apen.mx',
    availableLanguage: 'Spanish',
    areaServed: 'MX',
  },
  areaServed: {
    '@type': 'Country',
    name: 'México',
  },
  knowsAbout: [
    'Ingeniería Eléctrica',
    'Infraestructura de Hidrocarburos',
    'Cumplimiento Normativo ASEA',
    'Proyectos CFE',
    'Mercado Eléctrico Nacional',
    'Gestión Ambiental Energética',
    'Defensa Legal Energética',
  ],
  hasCredential: [
    {
      '@type': 'EducationalOccupationalCredential',
      name: 'Padrón CFE',
      credentialCategory: 'Registro oficial CFE',
      identifier: '4493015',
    },
    {
      '@type': 'EducationalOccupationalCredential',
      name: 'Registro Achilles PEMEX',
      credentialCategory: 'Registro de proveedor PEMEX',
      identifier: '00249023',
    },
  ],
  sameAs: ['https://apen.mx'],
};

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://apen.mx/#website',
  url: 'https://apen.mx',
  name: 'APEN — Administradora de Proyectos Energéticos',
  description: 'Portal oficial de APEN: servicios de ingeniería, consultoría y cumplimiento normativo para el sector energético en México.',
  publisher: {
    '@id': 'https://apen.mx/#organization',
  },
  inLanguage: 'es-MX',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://apen.mx/?q={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
};

const professionalServiceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': 'https://apen.mx/#service',
  name: 'APEN — Administradora de Proyectos Energéticos',
  url: 'https://apen.mx',
  logo: 'https://raw.githubusercontent.com/DEV-APEN/imagenes/refs/heads/main/apen/Logo%20de%20APEN%20fondo%20transparente.png',
  image: 'https://raw.githubusercontent.com/DEV-APEN/imagenes/refs/heads/main/apen/Logo%20de%20APEN%20fondo%20transparente.png',
  description: 'Ingeniería integral, cumplimiento normativo ASEA/CFE y gestión de proyectos para infraestructura energética e hidrocarburos en México.',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'MX',
  },
  areaServed: {
    '@type': 'Country',
    name: 'México',
  },
  serviceType: [
    'Ingeniería Eléctrica',
    'Consultoría de Hidrocarburos',
    'Defensa Legal Energética',
    'Gestión de Proyectos Energéticos',
    'Cumplimiento Normativo ASEA',
  ],
  priceRange: '$$$',
  currenciesAccepted: 'MXN',
  paymentAccepted: 'Transferencia bancaria',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Servicios APEN',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Ingeniería y Obra Eléctrica',
          description: 'Diseño y construcción de subestaciones hasta 230 kV, líneas de transmisión y cumplimiento CFE.',
          url: 'https://apen.mx/servicios/energia',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Gestión y Regulación de Hidrocarburos',
          description: 'Permisos CNE y ASEA, SASISOPA, MIA y suministros PEMEX.',
          url: 'https://apen.mx/servicios/hidrocarburos',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Defensa Legal y Técnica Energética',
          description: 'Levantamiento de clausuras, demandas de nulidad ante TFJA e ingeniería correctiva.',
          url: 'https://apen.mx/servicios/legal',
        },
      },
    ],
  },
};

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://apen.mx/#localbusiness',
  name: 'APEN — Administradora de Proyectos Energéticos',
  image: 'https://raw.githubusercontent.com/DEV-APEN/imagenes/refs/heads/main/apen/Logo%20de%20APEN%20fondo%20transparente.png',
  url: 'https://apen.mx',
  telephone: '+52-55-0000-0000',
  email: 'contacto@apen.mx',
  priceRange: '$$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Av. Miguel Ángel de Quevedo 961, El Rosedal',
    addressLocality: 'Coyoacán',
    addressRegion: 'Ciudad de México',
    postalCode: '04330',
    addressCountry: 'MX',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 19.3456363,
    longitude: -99.1481541,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'],
      opens: '09:00',
      closes: '18:00',
    },
  ],
  areaServed: {
    '@type': 'Country',
    name: 'México',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Servicios APEN',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Ingeniería Eléctrica y Subestaciones CFE' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Gestión de Permisos de Hidrocarburos ante CNE y ASEA' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Defensa Legal y Técnica Energética ante TFJA' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Administración Integral de Proyectos Industriales' } },
    ],
  },
};


const speakableJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'APEN — Administradora de Proyectos Energéticos',
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', 'h2', '.speakable'],
  },
  url: 'https://apen.mx',
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
        <CookieConsent />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-YXR1JYJ5C4"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-YXR1JYJ5C4');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableJsonLd) }}
        />
      </body>
    </html>
  );
}
