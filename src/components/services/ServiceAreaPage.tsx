import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, ChevronDown } from "lucide-react";
import ConsultasFrame from "@/components/ConsultasFrame";
import { getServiceArea, serviceAreas } from "@/data/service-areas";
import { services, getServicesForArea, serviceHref } from "@/data/services";
import { getAreaInstitutions } from "@/data/service-institutions";
import { kindIcons, sectorIcons } from "@/data/service-icons";
import ServiceDirectory from "./ServiceDirectory";
import styles from "./catalog.module.css";
export default function ServiceAreaPage({ areaId }: { areaId?: string }) {
  const area = areaId ? getServiceArea(areaId)! : undefined;
  const entries = area ? getServicesForArea(area.id) : services;
  const petcoke = services.find(s => s.id === "H54")!;
  const institutions = area ? getAreaInstitutions(entries) : [];
  const heading = area?.title.split(" ") || [];
  // El índice también abre con hero: la portada del catálogo no puede pesar
  // menos que las páginas de sector a las que lleva.
  const hero = area
    ? { image: area.image, alt: area.imageAlt }
    : { image: "/visual/imagenes/heroserv.webp", alt: "Infraestructura energética en operación" };
  const schema = { "@context": "https://schema.org", "@type": "CollectionPage", name: area?.title || "Servicios APEN",
    url: "https://apen.mx/servicios" + (area ? "/" + area.id : ""),
    mainEntity: { "@type": "ItemList", numberOfItems: entries.length, itemListElement: entries.map((s, i) => ({ "@type": "ListItem", position: i + 1, name: s.title, url: "https://apen.mx" + serviceHref(s) })) } };
  return <ConsultasFrame><div className={styles.page + " " + styles.areaPage} data-area={area?.id}>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
    <div className={styles.hero}>
      <Image src={hero.image} alt={hero.alt} fill priority sizes="100vw" className={styles.heroImage} />
      <header className={styles.intro + " " + styles.heroContent}>
      <span className={styles.eyebrow}>APEN · {entries.length} servicios · México</span>
      <h1 className={styles.brandHeading}>{area
        ? <>{heading[0]}{" "}<span className={styles.headingAccent}>{heading.slice(1).join(" ")}</span></>
        : <>Catálogo de{" "}<span className={styles.headingAccent}>Servicios</span></>}</h1>
      <p>{area?.description || "Cumplimiento regulatorio, ingeniería, defensa legal y financiamiento para proyectos de hidrocarburos y electricidad."}</p>
    </header>
    </div>
    {!area && <div className={styles.wrap}><div className={styles.areas}>{serviceAreas.map((a, index) => {
      const SectorIcon = sectorIcons[a.id];
      return <article key={a.id} className={styles.area} style={{ "--area-accent": a.accent, "--card-index": index } as React.CSSProperties}>
      <div className={styles.areaImage}><Image src={a.image} alt={a.imageAlt} fill sizes="(max-width:700px) 100vw, (max-width:1000px) 50vw, 300px" /></div>
      <div className={styles.areaBody}>
        <span className={styles.areaIcon} aria-hidden><SectorIcon size={22} /></span>
        <h2>{a.title}</h2><p>{a.description}</p>
        <Link href={"/servicios/" + a.id}>{getServicesForArea(a.id).length} servicios<ArrowRight size={17} aria-hidden /></Link>
      </div>
    </article>;
    })}</div></div>}
    {area && <nav aria-label="Categorías del sector" className={styles.wrap + " " + styles.categoryNav}><div className={styles.links}>{area.categories.map(c => { const KindIcon = kindIcons[c.kind]; return <a href={"#" + c.id} key={c.id}><KindIcon size={16} aria-hidden />{c.title}<ChevronDown size={16} aria-hidden /></a>; })}</div></nav>}
    {(!area || area.id === "hidrocarburos") && <section className={styles.feature}><div className={styles.wrap}>
      <span className={styles.eyebrow}>Comercialización directa</span><h2>Coque de petróleo (petcoke)</h2>
      <p>Compra, venta, manejo, importación y exportación. APEN opera como comercializadora directa de petcoke, con acceso a suministro PEMEX, capacidad de manejo logístico y fuentes alternativas de abastecimiento.</p>
      <Link className={styles.cta} href={serviceHref(petcoke)}>Suministro de coque de petróleo<ArrowRight size={18} aria-hidden /></Link>
    </div></section>}
    {area && institutions.length > 0 && <section className={styles.wrap + " " + styles.institutions}>
      <h2 className={styles.institutionsTitle}>Instituciones ante las que gestionamos</h2>
      <div className={styles.logos}>{institutions.map(institution => (
        <a key={institution.name} href={institution.url} target="_blank" rel="noopener noreferrer" className={styles.logo}
          aria-label={"Sitio oficial de " + institution.name + " (abre otra pestaña)"}>
          <div className={styles.logoArtwork}><Image src={institution.logo} width={144} height={56} alt={institution.name} /></div>
          <span>{institution.name}<ArrowUpRight size={15} aria-hidden /></span>
        </a>
      ))}</div>
      <p className={styles.note}>Referencias institucionales según el proyecto; los logotipos no implican afiliación, representación ni aval a APEN.</p>
    </section>}
    <ServiceDirectory entries={entries.map(({ id, area, category, slug, title, summary }) => ({ id, area, category, slug, title, summary }))} areaId={area?.id} />
  </div></ConsultasFrame>;
}
