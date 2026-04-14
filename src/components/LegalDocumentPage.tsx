"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "./Header";
import MobileMenu from "./MobileMenu";
import Footer from "./Footer";

type LegalSection = {
  title: string;
  paragraphs: readonly string[];
  bullets?: readonly string[];
};

interface LegalDocumentPageProps {
  eyebrow: string;
  title: string;
  summary: string;
  effectiveDate: string;
  sections: readonly LegalSection[];
}

export default function LegalDocumentPage({
  eyebrow,
  title,
  summary,
  effectiveDate,
  sections,
}: LegalDocumentPageProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="relative min-h-screen w-full max-w-full overflow-x-hidden bg-white">
      <Header visible onOpenMenu={() => setIsMenuOpen(true)} />

      <section className="relative overflow-hidden border-b border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#f6f9fc_100%)] pb-14 pt-32 md:pb-20 md:pt-36">
        <div className="pointer-events-none absolute inset-0 opacity-40">
          <div className="absolute left-0 top-0 h-full w-full bg-[radial-gradient(circle_at_top_left,rgba(0,140,222,0.12),transparent_38%)]" />
          <div className="absolute right-0 top-0 h-full w-full bg-[radial-gradient(circle_at_top_right,rgba(11,35,65,0.08),transparent_32%)]" />
        </div>

        <div className="relative mx-auto flex w-full max-w-5xl flex-col gap-8 px-6 md:px-8">
          <div className="flex flex-wrap items-center gap-3 text-[10px] font-black uppercase tracking-[0.28em] text-[#008CDE]">
            <span>{eyebrow}</span>
            <span className="h-1 w-1 rounded-full bg-[#008CDE]/60" />
            <span className="text-slate-500">Vigente desde {effectiveDate}</span>
          </div>

          <div className="max-w-4xl">
            <h1 className="max-w-3xl text-4xl font-black uppercase leading-[0.95] tracking-tight text-[#0B2341] md:text-6xl">
              {title}
            </h1>
            <p className="mt-6 max-w-3xl text-sm font-medium leading-7 text-slate-600 md:text-base">
              {summary}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-[11px] font-bold text-slate-500">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 transition-colors hover:border-slate-300 hover:text-[#0B2341]"
            >
              Volver al sitio
            </Link>
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 rounded-full border border-[#0B2341] bg-[#0B2341] px-4 py-2 text-white transition-colors hover:border-[#008CDE] hover:bg-[#008CDE]"
            >
              Contacto institucional
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 md:py-20">
        <div className="mx-auto grid w-full max-w-5xl gap-12 px-6 md:grid-cols-[220px_minmax(0,1fr)] md:px-8">
          <aside className="md:sticky md:top-28 md:self-start">
            <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
              <p className="text-[10px] font-black uppercase tracking-[0.26em] text-[#008CDE]">
                Contenido
              </p>
              <nav className="mt-5 space-y-3">
                {sections.map((section, index) => (
                  <a
                    key={section.title}
                    href={`#legal-section-${index + 1}`}
                    className="block text-sm font-semibold leading-5 text-slate-600 transition-colors hover:text-[#0B2341]"
                  >
                    {section.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-[0_20px_60px_-45px_rgba(11,35,65,0.35)] md:p-10">
            <div className="space-y-12">
              {sections.map((section, index) => (
                <section
                  key={section.title}
                  id={`legal-section-${index + 1}`}
                  className="scroll-mt-28 border-b border-slate-100 pb-10 last:border-b-0 last:pb-0"
                >
                  <h2 className="text-2xl font-black uppercase tracking-tight text-[#0B2341] md:text-[1.9rem]">
                    {section.title}
                  </h2>

                  <div className="mt-5 space-y-4 text-[15px] leading-8 text-slate-600">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>

                  {section.bullets && (
                    <ul className="mt-5 space-y-3 border-l-2 border-[#008CDE]/30 pl-5 text-[15px] leading-7 text-slate-600">
                      {section.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </main>
  );
}
