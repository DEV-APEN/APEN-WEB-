import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, ChevronDown, Check, Plus, ClipboardList, FileCheck2, ListChecks, HelpCircle, BookOpen, MapPin, Layers, ExternalLink } from "lucide-react";
import ConsultasFrame from "@/components/ConsultasFrame";
import { getServiceArea, serviceKindLabels } from "@/data/service-areas";
import { type Service, getServiceCategory, getServicesForArea, serviceHref } from "@/data/services";
import { getConsultation } from "@/data/consultas";
import { getServiceInstitutions } from "@/data/service-institutions";
import styles from "./catalog.module.css";

const relatedById: Record<string, string[]> = {
  H03:["que-es-la-mia"], H04:["que-es-el-informe-preventivo"], H05:["estudio-riesgo-ambiental"],
  H11:["que-es-el-sasisopa"], H13:["nom-005-asea-2016"], H14:["bitacoras-asea"],
  H15:["que-es-pronagas","renagas-vs-pronagas"], H17:["permiso-cne-gasolinera"], H19:["permiso-carburacion-gas-lp"],
  H23:["permiso-distribucion-gas-lp"], H28:["calidad-combustibles-cne"], H29:["calidad-combustibles-cne"],
  H35:["cesion-permiso-cne"], H40:["controles-volumetricos-sat"], H41:["lista-l-cne-timbrado"],
  H51:["proveedor-pemex"], H52:["registro-achilles"], H53:["registro-achilles"], H54:["proveedor-pemex"],
  E01:["permiso-generacion-electrica"], E02:["permiso-autoconsumo-electrico"], E11:["interconexion-cenace"],
  E12:["interconexion-cenace"], E14:["que-es-el-codigo-de-red","cumplimiento-codigo-de-red"],
  E15:["cenace-y-mem"], E20:["generacion-distribuida"], E21:["almacenamiento-energia-permiso"],
  J03:["clausura-gasolinera-asea","reabrir-gasolinera-clausurada"], J06:["amparo-multa-asea"],
  J07:["amparo-multa-asea"], J08:["juicio-tfja-energia"], J09:["impugnar-resolucion-cne"],
};
const processByKind = {
  regulatorio: ["Revisión de la actividad, permisos existentes y documentación disponible.", "Integración del alcance técnico y documental aplicable al expediente.", "Gestión y seguimiento de observaciones dentro del alcance contratado."],
  ejecucion: ["Levantamiento de necesidades, condiciones del sitio y alcance del proyecto.", "Definición de ingeniería, recursos, programa y criterios de aceptación.", "Ejecución o supervisión del alcance contratado y entrega documental."],
  legal: ["Revisión del expediente, notificaciones y situación procesal.", "Definición de la estrategia y preparación de los documentos de defensa.", "Presentación y seguimiento de actuaciones conforme a la vía procedente."],
  financiamiento: ["Revisión del proyecto, estructura actual y necesidades de capital.", "Preparación del análisis y de los documentos para la operación propuesta.", "Acompañamiento en evaluación y negociación según el alcance acordado."],
  comercial: ["Confirmación de especificaciones, volumen, origen y destino del suministro.", "Evaluación de disponibilidad, condiciones comerciales y logística.", "Coordinación de la operación conforme a la propuesta aceptada."],
};
export default function ServiceArticle({ service: s }: { service: Service }) {
  const area = getServiceArea(s.area)!;
  const category = getServiceCategory(s);
  const related = getServicesForArea(s.area).filter(v => v.category === s.category && v.id !== s.id).slice(0,3);
  const relatedSlugs = relatedById[s.id] || (s.area === "financiamiento-de-proyectos" ? ["project-finance-energia","financiamiento-gasolinera"] : []);
  const articles = relatedSlugs.map(getConsultation).filter(a => a?.revisado);
  const authorityList = getServiceInstitutions(s);
  const contact = "/contacto?servicio=" + s.id + "#solicitud";
  const faqs = [
    { question: "¿Qué información necesito para iniciar?", answer: s.inputs.join(". ") + ". La revisión inicial permite identificar documentación adicional para el caso." },
    { question: "¿Qué entrega contempla este servicio?", answer: s.deliverable + " El alcance definitivo se establece en la propuesta." },
    { question: "¿Cómo se determinan el costo y el plazo?", answer: category.kind === "comercial" ? "La propuesta depende del volumen, especificación, disponibilidad y condiciones de entrega de la operación." : "Se definen después de revisar el proyecto, la documentación disponible y las actividades requeridas. Cuando interviene una autoridad o un tercero, sus tiempos y decisiones no dependen de APEN." },
  ];
  const schema = { "@context":"https://schema.org", "@graph": [
    { "@type":"Service", "@id":"https://apen.mx"+serviceHref(s)+"#servicio", name:s.title, description:s.summary, serviceType:category.title, url:"https://apen.mx"+serviceHref(s), provider:{"@id":"https://apen.mx/#organization"}, areaServed:{"@type":"Country",name:"México"} },
    { "@type":"BreadcrumbList", itemListElement:[["Inicio","/"],["Servicios","/servicios"],[area.title,"/servicios/"+area.id],[s.title,serviceHref(s)]].map(([name,path],i)=>({"@type":"ListItem",position:i+1,name,item:"https://apen.mx"+path})) },
    { "@type":"FAQPage",mainEntity:faqs.map(f=>({"@type":"Question",name:f.question,acceptedAnswer:{"@type":"Answer",text:f.answer}})) }
  ]};
  return (
    <ConsultasFrame>
      <div className={styles.page + " " + styles.detailPage} data-area={area.id}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
        <header className={styles.detailHeader}>
          <Image src={area.headerImage} alt="" fill priority sizes="100vw" className={styles.detailHeaderImage} />
          <div className={styles.wrap}>
            <div className={styles.detailKicker}><span style={{ backgroundColor: area.accent }} />{serviceKindLabels[category.kind]}</div>
            <h1 className={styles.brandHeading}><span className={styles.headingAccent}>{s.title}</span></h1>
            <p className={styles.detailSummary}>{s.summary}</p>
            <div className={styles.detailActions}>
              <Link href={contact} className={styles.cta}>
                {category.kind === "comercial" ? "Solicitar propuesta comercial" : "Consultar este servicio"}<ArrowRight size={18} aria-hidden />
              </Link>
              <a href="#requisitos" className={styles.secondaryLink}><ClipboardList size={18} aria-hidden />Qué necesito para iniciar<ChevronDown size={16} aria-hidden /></a>
            </div>
            <div className={styles.facts}>
              <span><Layers size={17} aria-hidden />{area.title}</span>
              <span><MapPin size={17} aria-hidden />México</span>
              <span><FileCheck2 size={17} aria-hidden />Alcance a la medida del proyecto</span>
            </div>
          </div>
        </header>
        <div className={styles.wrap}>
          <div className={styles.article}>
            <div className={styles.content}>
              <nav className={styles.links + " " + styles.articleNav} aria-label="En esta ficha">
                <a href="#alcance"><ListChecks size={16} aria-hidden />Alcance</a>
                <a href="#requisitos"><ClipboardList size={16} aria-hidden />Información inicial</a>
                <a href="#entregables"><FileCheck2 size={16} aria-hidden />Entregables</a>
                <a href="#preguntas"><HelpCircle size={16} aria-hidden />Preguntas frecuentes</a>
              </nav>
              <section id="alcance">
                <h2><ListChecks size={23} aria-hidden />Alcance del servicio</h2>
                <ol className={styles.process}>{processByKind[category.kind].map((step, index) => (
                  <li key={step}><span className={styles.stepNumber} aria-hidden>{String(index + 1).padStart(2, "0")}</span><p>{step}</p></li>
                ))}</ol>
                {s.id === "H54" && <div className={styles.prose}>
                  <p>El coque de petróleo es un subproducto sólido del proceso de refinación con demanda industrial como combustible y materia prima. APEN participa en su cadena de valor como empresa comercializadora por cuenta propia.</p>
                  <p>Nuestro acceso a PEMEX, como proveedor registrado con ID Achilles 00249023 en más de 120 categorías, se complementa con fuentes alternativas de suministro y capacidad de manejo logístico según el perfil de cada operación.</p>
                </div>}
              </section>
              <section id="requisitos">
                <h2><ClipboardList size={23} aria-hidden />Información para iniciar</h2>
                <ul className={styles.requirements}>{s.inputs.map(input => <li key={input}><Check size={18} aria-hidden /><span>{input}</span></li>)}</ul>
              </section>
              <section id="entregables" className={styles.deliverable}>
                <h2><FileCheck2 size={23} aria-hidden />Entregables</h2>
                <p>{s.deliverable}</p>
                <p className={styles.note}>El alcance, responsables, exclusiones, costo y calendario se acuerdan en la propuesta. Esta ficha no sustituye una revisión técnica o jurídica del caso ni implica una resolución favorable o aprobación de financiamiento.</p>
              </section>
              <section id="preguntas">
                <h2><HelpCircle size={23} aria-hidden />Preguntas frecuentes</h2>
                {faqs.map(f => <details key={f.question}><summary><span>{f.question}</span><Plus size={19} aria-hidden /></summary><p>{f.answer}</p></details>)}
              </section>
              {articles.length > 0 && <section>
                <h2><BookOpen size={23} aria-hidden />Energy Explica</h2>
                <div className={styles.readingLinks}>{articles.map(a => a && (
                  <Link key={a.slug} href={"/consultas/" + a.slug}><BookOpen size={19} aria-hidden /><span>{a.shortTitle}</span><ArrowUpRight size={18} aria-hidden /></Link>
                ))}</div>
              </section>}
            </div>
            <aside className={styles.side}>
              <div className={styles.sideBlock}>
                <span className={styles.eyebrow}>{area.title}</span><h2 className={styles.sideCategory}>{category.title}</h2>
                <Link href={"/servicios/" + area.id + "#" + category.id} className={styles.sideLink}><span>Ver servicios de esta categoría</span><ArrowUpRight size={17} aria-hidden /></Link>
              </div>
              {authorityList.length > 0 && <div className={styles.sideBlock}>
                <h2>Instituciones relacionadas</h2>
                <div className={styles.logos}>{authorityList.map(a => (
                  <a key={a.name} href={a.url} target="_blank" rel="noopener noreferrer" className={styles.logo} aria-label={"Sitio oficial de " + a.name + " (abre otra pestaña)"}>
                    <div className={styles.logoArtwork}><Image src={a.logo} width={144} height={56} alt={a.name} /></div>
                    <span>{a.name}<ExternalLink size={12} aria-hidden /></span>
                  </a>
                ))}</div>
                <p className={styles.note}>Referencias institucionales según el proyecto; los logotipos no implican afiliación, representación ni aval a APEN.</p>
              </div>}
              {related.length > 0 && <div className={styles.sideBlock}>
                <h2>Servicios relacionados</h2>
                {related.map(v => <Link key={v.id} href={serviceHref(v)} className={styles.sideLink}><span>{v.title}</span><ArrowUpRight size={17} aria-hidden /></Link>)}
              </div>}
              <div className={styles.contactBlock}>
                <h2>Hablemos de tu proyecto</h2>
                <p>Comparte la situación actual y el alcance que necesitas.</p>
                <Link href={contact} className={styles.cta}>Contactar a APEN<ArrowRight size={17} aria-hidden /></Link>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </ConsultasFrame>
  );
}
