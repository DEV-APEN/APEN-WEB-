import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Bot, BookOpenCheck, ClipboardCheck, ExternalLink, FileCheck2, FileSearch, Link2, Scale, ShieldCheck, TriangleAlert } from "lucide-react";
import type { Consultation } from "@/data/consultas";

const sectionIcons = [FileSearch, ClipboardCheck, ShieldCheck, BookOpenCheck];

function formatDate(date: string) {
  return new Intl.DateTimeFormat("es-MX", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));
}

export default function ConsultaArticle({ consultation }: { consultation: Consultation }) {
  return (
    <article className="bg-white pb-20 pt-28 md:pb-28 md:pt-32">
      <header className="border-b border-slate-200 pb-12 md:pb-16">
        <div className="mx-auto max-w-7xl px-6">
          <nav aria-label="Migas de pan" className="mb-8 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
            <Link href="/" className="hover:text-[#00AEEF]">Inicio</Link>
            <span aria-hidden="true" className="px-2">/</span>
            <Link href="/consultas" className="hover:text-[#00AEEF]">Energy Explica</Link>
            <span aria-hidden="true" className="px-2">/</span>
            <span className="text-[#0D3D8E]">{consultation.shortTitle}</span>
          </nav>

          <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_320px]">
            <div>
              <div className="mb-6 flex flex-wrap items-center gap-3">
                <span className="rounded bg-[#0D3D8E] px-3 py-1.5 font-mono text-[10px] font-black tracking-[0.15em] text-white">{consultation.code}</span>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">{consultation.sector}</span>
                <span className={`rounded-full border px-3 py-1 text-[9px] font-black uppercase tracking-[0.18em] ${
                  consultation.badgeTone === "critical"
                    ? "border-rose-200 bg-rose-50 text-rose-600"
                    : "border-sky-200 bg-sky-50 text-sky-700"
                }`}>
                  {consultation.badge}
                </span>
              </div>

              <div className="mb-7 flex max-w-3xl gap-4 rounded-lg border border-sky-100 bg-[#F2FAFF] p-5">
                <Bot aria-hidden="true" className="mt-0.5 shrink-0 text-[#00AEEF]" size={24} />
                <p className="text-sm font-semibold italic leading-relaxed text-[#0D3D8E]">Energy: “{consultation.energyLine}”</p>
              </div>

              <h1 className="max-w-5xl text-4xl font-black leading-[1.02] tracking-tight text-[#0D3D8E] md:text-6xl">{consultation.title}</h1>
            </div>

            <aside>
              <figure className="relative aspect-[4/3] overflow-hidden rounded-lg bg-slate-100">
                <Image
                  src={consultation.visual.image}
                  alt={consultation.visual.imageAlt}
                  fill
                  priority
                  sizes="(min-width: 1024px) 320px, 100vw"
                  className="object-cover"
                  style={{ objectPosition: consultation.visual.imagePosition ?? "center" }}
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-[#0D3D8E]/90 px-4 py-3 text-[9px] font-black uppercase tracking-[0.14em] text-white">
                  {consultation.visual.caption}
                </figcaption>
              </figure>

              <div className="mt-5 border-l-2 border-[#00AEEF] pl-5">
                <p className="text-[9px] font-black uppercase tracking-[0.25em] text-[#00AEEF]">Ficha regulatoria</p>
                <p className="mt-3 text-sm font-bold leading-relaxed text-[#0D3D8E]">Última actualización</p>
                <time className="mt-1 block text-sm text-slate-500" dateTime={consultation.dateModified}>{formatDate(consultation.dateModified)}</time>
                <Link href={consultation.relatedService.href} className="mt-5 inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.18em] text-[#00AEEF]">
                  {consultation.relatedService.label} <ArrowRight aria-hidden="true" size={14} />
                </Link>
              </div>
            </aside>
          </div>

          {!consultation.revisado && (
            <div className="mt-10 flex gap-4 rounded-lg border border-amber-300 bg-amber-50 p-5 text-amber-950" role="status">
              <TriangleAlert aria-hidden="true" className="mt-0.5 shrink-0" size={22} />
              <div>
                <p className="text-xs font-black uppercase tracking-[0.16em]">Ficha pendiente de revisión oficial</p>
                <p className="mt-2 text-sm font-semibold leading-relaxed">Este contenido es preliminar y no debe utilizarse como criterio legal o regulatorio hasta confirmar sus fuentes y fundamentos vigentes.</p>
              </div>
            </div>
          )}

          <div className="mt-10 flex flex-col gap-5 border-y border-slate-200 py-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-[9px] font-black uppercase tracking-[0.24em] text-slate-400">Autoridades relacionadas</p>
              <p className="mt-1 text-sm font-bold text-[#0D3D8E]">Consulta siempre la publicación vigente de cada institución.</p>
            </div>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
              {consultation.visual.authorities.map((authority) => (
                <a
                  key={authority.name}
                  href={authority.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Visitar el sitio oficial de ${authority.name}`}
                  className="relative block h-10 w-40 transition-opacity hover:opacity-70 sm:h-11 sm:w-44"
                >
                  <Image
                    src={authority.logo}
                    alt={`Logotipo oficial de ${authority.name}`}
                    fill
                    unoptimized={authority.logo.endsWith(".svg")}
                    sizes="176px"
                    className="object-contain object-left"
                  />
                </a>
              ))}
            </div>
          </div>
          <p className="mt-3 text-[10px] leading-relaxed text-slate-400">
            Los logotipos se muestran únicamente para identificar a las autoridades competentes; no implican afiliación ni respaldo institucional.
          </p>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 lg:grid-cols-[240px_minmax(0,1fr)] lg:py-16">
        <aside className="lg:sticky lg:top-28 lg:self-start" aria-label="Índice de la ficha">
          <p className="mb-4 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.22em] text-[#0D3D8E]"><BookOpenCheck aria-hidden="true" size={16} /> En esta ficha</p>
          <nav className="border-l border-slate-200 pl-4">
            <a href="#respuesta-rapida" className="mb-3 block text-sm font-semibold text-slate-500 hover:text-[#00AEEF]">Respuesta rápida</a>
            <a href="#ficha-regulatoria" className="mb-3 block text-sm font-semibold text-slate-500 hover:text-[#00AEEF]">Ficha regulatoria</a>
            {consultation.sections.map((section) => (
              <a key={section.id} href={`#${section.id}`} className="mb-3 block text-sm font-semibold text-slate-500 hover:text-[#00AEEF]">{section.title}</a>
            ))}
            <a href="#preguntas" className="mb-3 block text-sm font-semibold text-slate-500 hover:text-[#00AEEF]">Preguntas frecuentes</a>
            <a href="#fuentes" className="block text-sm font-semibold text-slate-500 hover:text-[#00AEEF]">Fuentes</a>
          </nav>
        </aside>

        <div className="min-w-0">
          <section id="respuesta-rapida" className="scroll-mt-28 rounded-lg border-l-4 border-[#00AEEF] bg-[#0D3D8E] p-7 text-white md:p-9">
            <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#72D5FF]">Respuesta rápida</p>
            <p className="mt-4 text-lg font-semibold leading-relaxed text-white md:text-xl">{consultation.quickAnswer}</p>
          </section>

          <section id="ficha-regulatoria" className="scroll-mt-28 py-12">
            <div className="mb-6 flex items-center gap-3">
              <Scale aria-hidden="true" className="text-[#00AEEF]" size={24} />
              <h2 className="text-2xl font-black uppercase tracking-tight text-[#0D3D8E] md:text-3xl">Ficha regulatoria</h2>
            </div>
            <div className="overflow-x-auto rounded-lg border border-slate-200" tabIndex={0} aria-label="Ficha regulatoria desplazable horizontalmente">
              <table className="min-w-[640px] border-collapse text-left md:min-w-0 md:w-full">
                <tbody>
                  {[...consultation.regulatoryRows, {
                    label: "Sanción",
                    value: consultation.sanction ?? "Fundamento por confirmar antes de utilizar esta ficha como criterio de cumplimiento.",
                  }].map((row) => (
                    <tr key={row.label} className="border-b border-slate-200 last:border-b-0">
                      <th scope="row" className="w-[32%] bg-slate-50 px-5 py-4 align-top text-[10px] font-black uppercase tracking-[0.15em] text-[#0D3D8E]">{row.label}</th>
                      <td className="px-5 py-4 text-sm font-medium leading-relaxed text-slate-600">{row.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {consultation.sections.map((section, index) => {
            const SectionIcon = sectionIcons[index % sectionIcons.length];
            return (
            <section key={section.id} id={section.id} className="scroll-mt-28 border-t border-slate-200 py-10">
              <p className="mb-2 font-mono text-[10px] font-black tracking-[0.2em] text-[#00AEEF]">BLOQUE_{String(index + 1).padStart(2, "0")}</p>
              <h2 className="flex items-start gap-3 text-2xl font-black leading-tight text-[#0D3D8E] md:text-3xl">
                <SectionIcon aria-hidden="true" className="mt-1 shrink-0 text-[#00AEEF]" size={24} />
                {section.title}
              </h2>
              <div className="mt-5 space-y-4 text-base leading-8 text-slate-600">
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
              {section.bullets && (
                <ul className="mt-6 space-y-3">
                  {section.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3 text-sm font-semibold leading-relaxed text-slate-600">
                      <FileCheck2 aria-hidden="true" className="mt-0.5 shrink-0 text-[#00AEEF]" size={18} />
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}
              {index === 1 && (
                <div className="mt-9 flex flex-col justify-between gap-5 rounded-lg border border-sky-100 bg-[#F2FAFF] p-6 md:flex-row md:items-center">
                  <p className="font-black leading-snug text-[#0D3D8E]">{consultation.intermediateCta}</p>
                  <Link href="/contacto" className="inline-flex shrink-0 items-center gap-2 text-[10px] font-black uppercase tracking-[0.18em] text-[#0D3D8E] hover:text-[#00AEEF]">Solicitar diagnóstico <ArrowRight aria-hidden="true" size={15} /></Link>
                </div>
              )}
            </section>
            );
          })}

          <section className="my-6 rounded-lg border border-[#00AEEF]/30 bg-[#EAF8FF] p-7 md:p-9">
            <div className="flex items-center gap-3">
              <ShieldCheck aria-hidden="true" className="text-[#00AEEF]" size={26} />
              <h2 className="text-xl font-black uppercase tracking-tight text-[#0D3D8E] md:text-2xl">La visión del Gabinete Técnico</h2>
            </div>
            <p className="mt-5 text-base font-semibold leading-8 text-[#0D3D8E]">{consultation.vision}</p>
          </section>

          <section className="border-t border-slate-200 py-10">
            <h2 className="flex items-center gap-3 text-xl font-black uppercase text-[#0D3D8E]"><Link2 aria-hidden="true" className="text-[#00AEEF]" /> Términos relacionados</h2>
            <div className="mt-5 flex flex-wrap gap-3">
              {consultation.related.map((item) => (
                <Link key={item.href} href={item.href} className="rounded-full border border-slate-200 px-4 py-2 text-[10px] font-black uppercase tracking-[0.14em] text-slate-600 transition-colors hover:border-[#00AEEF] hover:text-[#00AEEF]">{item.label}</Link>
              ))}
            </div>
          </section>

          <section id="preguntas" className="scroll-mt-28 border-t border-slate-200 py-10">
            <h2 className="text-2xl font-black uppercase tracking-tight text-[#0D3D8E] md:text-3xl">Preguntas frecuentes</h2>
            <div className="mt-6 divide-y divide-slate-200 border-y border-slate-200">
              {consultation.faqs.map((faq) => (
                <details key={faq.question} className="group py-5">
                  <summary className="cursor-pointer pr-8 font-black text-[#0D3D8E]">{faq.question}</summary>
                  <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600">{faq.answer}</p>
                </details>
              ))}
            </div>
          </section>

          <section id="fuentes" className="scroll-mt-28 border-t border-slate-200 py-10">
            <h2 className="text-xl font-black uppercase text-[#0D3D8E]">Fuentes</h2>
            <ul className="mt-5 space-y-3">
              {consultation.sources.map((source) => (
                <li key={source.url}>
                  <a href={source.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-[#006EB1] hover:underline">
                    {source.label} <ExternalLink aria-hidden="true" size={14} />
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-7 text-xs leading-relaxed text-slate-500">Última actualización: {formatDate(consultation.dateModified)}. Contenido informativo; no constituye asesoría legal. Verificar contra el DOF y la publicación vigente de la autoridad competente.</p>
          </section>

          <section className="mt-6 rounded-lg bg-[#0D3D8E] p-8 text-white md:p-10">
            <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#72D5FF]">Gabinete Técnico APEN</p>
            <h2 className="mt-3 max-w-3xl text-2xl font-black leading-tight text-white md:text-3xl">{consultation.finalCta}</h2>
            <Link href="/contacto" className="mt-7 inline-flex min-h-12 items-center gap-3 rounded-lg bg-[#00AEEF] px-6 py-3 text-[10px] font-black uppercase tracking-[0.2em] text-[#0D3D8E] transition-colors hover:bg-white hover:text-[#0D3D8E]">
              Contactar al Gabinete Técnico <ArrowRight aria-hidden="true" size={16} />
            </Link>
          </section>
        </div>
      </div>
    </article>
  );
}
