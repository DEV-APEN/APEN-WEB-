import type { Metadata } from 'next';
import type { CSSProperties } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Mail } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { socialProfiles } from '@/data/social-profiles';
import styles from './redes.module.css';

const title = 'Redes sociales';
const description = 'Conecta con APEN en LinkedIn, TikTok, YouTube, X, Instagram y Facebook. Todos nuestros perfiles y Energy Explica en un solo lugar.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: 'https://apen.mx/redes' },
  openGraph: { title: 'Redes sociales | APEN', description, url: 'https://apen.mx/redes', type: 'website', locale: 'es_MX', images: ['/visual/imagenes/apen-logo.png'] },
  twitter: { card: 'summary', title: 'Redes sociales | APEN', description, images: ['/visual/imagenes/apen-logo.png'] },
};

export default function RedesPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Redes sociales de APEN',
    url: 'https://apen.mx/redes',
    isPartOf: { '@id': 'https://apen.mx/#website' },
    about: { '@id': 'https://apen.mx/#organization' },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: socialProfiles.map((profile, index) => ({
        '@type': 'ListItem', position: index + 1, name: `APEN en ${profile.name}`, url: profile.href,
      })),
    },
  };

  return <>
    <Header visible />
    <main className={styles.page} id="contenido-redes">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className={styles.container}>
        <header className={styles.intro}>
          <span className={styles.eyebrow}><span aria-hidden />Nuestra comunidad</span>
          <h1>APEN <span>en redes.</span></h1>
          <p>La energía nos conecta. Encuéntranos donde empieza tu conversación.</p>
        </header>

        <nav aria-label="Perfiles de redes sociales de APEN">
          <ul className={styles.grid}>
            {socialProfiles.map((profile, index) => <li key={profile.id} className={styles.item}
              style={{ '--brand': profile.color, '--tint': profile.tint, '--delay': `${index * 45}ms` } as CSSProperties}>
              <a className={styles.card} href={profile.href} target="_blank" rel="noopener noreferrer"
                aria-label={`${profile.name}: ${profile.handle} (abre en una pestaña nueva)`}>
                <div className={styles.cardTop}>
                  <span className={styles.logo}>
                    <Image src={`/visual/logos/social/${profile.id}.svg`} alt="" width={28} height={28} />
                  </span>
                  <ArrowUpRight className={styles.arrow} size={22} aria-hidden />
                </div>
                <div className={styles.cardCopy}>
                  <h2>{profile.name}</h2>
                  <span className={styles.handle}>{profile.handle}</span>
                  <p>{profile.description}</p>
                </div>
                <span className={styles.action}>{profile.action}<ArrowRight size={17} aria-hidden /></span>
              </a>
            </li>)}
          </ul>
        </nav>

        <section className={styles.energy} aria-labelledby="energy-redes-title">
          <Link href="/consultas" className={styles.energyArt} aria-label="Ir a Energy Explica">
            <Image src="/visual/imagenes/energy-explica-banner.webp" alt="Energy Explica, el anfitrión de las consultas APEN" width={1800} height={900} sizes="(max-width: 600px) 230px, 280px" />
          </Link>
          <div className={styles.energyCopy}>
            <span className={styles.eyebrow}>También en APEN</span>
            <h2 id="energy-redes-title">¿Una duda sobre energía?</h2>
            <p>Regulación, permisos y conceptos del sector, explicados por Energy.</p>
            <Link href="/consultas">Explorar Energy Explica<ArrowRight size={18} aria-hidden /></Link>
          </div>
        </section>

        <div className={styles.contact}>
          <span>¿Hablamos de tu proyecto?</span>
          <Link href="/contacto"><Mail size={18} aria-hidden />Contactar a APEN<ArrowUpRight size={17} aria-hidden /></Link>
        </div>
      </div>
    </main>
    <Footer />
  </>;
}
