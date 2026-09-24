"use client";
import { useEffect, useRef, useState, type CSSProperties, type KeyboardEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, ArrowUpRight, BadgeCheck, Building2, ChevronDown, ClipboardCheck, Mail, Menu, MessageCircleQuestion } from "lucide-react";
import { serviceAreas, serviceKindLabels } from "@/data/service-areas";
import { kindIcons, sectorIcons } from "@/data/service-icons";
import MobileMenu from "./MobileMenu";
import styles from "./navigation.module.css";

const corporateLinks = [
  { title: "Nuestra firma", href: "/nosotros", description: "El equipo detrás de tu proyecto", icon: Building2 },
  { title: "Certificaciones ISO", href: "/certificaciones", description: "Estándares y acreditaciones", icon: BadgeCheck },
  { title: "Preguntas frecuentes", href: "/faqs", description: "Respuestas sobre nuestros servicios", icon: MessageCircleQuestion },
  { title: "Iniciar diagnóstico", href: "/diagnostico", description: "Cuéntanos qué necesita tu proyecto", icon: ClipboardCheck },
];

interface HeaderProps { visible: boolean; onOpenMenu?: () => void; }
export default function Header({ visible, onOpenMenu }: HeaderProps) {
  const [open, setOpen] = useState<string | null>(null);
  const [mobile, setMobile] = useState(false);
  const root = useRef<HTMLElement>(null);
  const lastTrigger = useRef<HTMLButtonElement | null>(null);
  const focusFirstLink = useRef(false);
  const pathname = usePathname();
  const close = () => setOpen(null);

  useEffect(() => { setOpen(null); setMobile(false); }, [pathname]);
  useEffect(() => {
    const breakpoint = window.matchMedia("(min-width:1280px)");
    const reset = () => { setOpen(null); setMobile(false); };
    breakpoint.addEventListener("change", reset);
    return () => breakpoint.removeEventListener("change", reset);
  }, []);
  useEffect(() => {
    if (!open) return;
    if (focusFirstLink.current) {
      root.current?.querySelector<HTMLElement>("#nav-" + open + " a")?.focus();
      focusFirstLink.current = false;
    }
    const outside = (event: PointerEvent) => { if (!root.current?.contains(event.target as Node)) setOpen(null); };
    const escape = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") { setOpen(null); lastTrigger.current?.focus(); }
    };
    document.addEventListener("pointerdown", outside);
    document.addEventListener("keydown", escape);
    return () => {
      document.removeEventListener("pointerdown", outside);
      document.removeEventListener("keydown", escape);
    };
  }, [open]);

  const area = serviceAreas.find(item => item.id === open);
  const SectorIcon = area ? sectorIcons[area.id] : Building2;
  const links = area ? area.categories.map(category => ({
    title: category.title, href: "/servicios/" + area.id + "#" + category.id,
    description: serviceKindLabels[category.kind], icon: kindIcons[category.kind],
  })) : corporateLinks;
  const featureHref = area ? "/servicios/" + area.id : "/nosotros";
  const triggerKeyDown = (event: KeyboardEvent<HTMLButtonElement>, id: string) => {
    if (event.key !== "ArrowDown") return;
    event.preventDefault();
    lastTrigger.current = event.currentTarget;
    if (open === id) root.current?.querySelector<HTMLElement>("#nav-" + id + " a")?.focus();
    else { focusFirstLink.current = true; setOpen(id); }
  };

  return <>
    <header ref={root} className={styles.header} style={{ visibility: visible ? "visible" : "hidden" }}
      onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget as Node)) close(); }}>
      {open && <button type="button" className={styles.backdrop} tabIndex={-1} aria-label="Cerrar menú desplegable" onClick={close} />}
      <div className={styles.inner}>
        <Link href="/" className={styles.brand} aria-label="APEN, inicio" onClick={close}>
          <Image src="/visual/imagenes/apen-logo.webp" alt="APEN" fill sizes="140px" priority />
        </Link>
        <nav className={styles.desktop} aria-label="Navegación principal">
          {serviceAreas.map(item => <button type="button" key={item.id} data-area={item.id} className={styles.trigger}
            aria-expanded={open === item.id} aria-controls={open === item.id ? "nav-" + item.id : undefined}
            onKeyDown={event => triggerKeyDown(event, item.id)}
            onClick={event => { lastTrigger.current = event.currentTarget; setOpen(open === item.id ? null : item.id); }}>
            {item.navTitle}<ChevronDown size={14} aria-hidden />
          </button>)}
          <button type="button" className={styles.trigger} aria-expanded={open === "apen"} aria-controls={open === "apen" ? "nav-apen" : undefined}
            onKeyDown={event => triggerKeyDown(event, "apen")}
            onClick={event => { lastTrigger.current = event.currentTarget; setOpen(open === "apen" ? null : "apen"); }}>
            APEN<ChevronDown size={14} aria-hidden />
          </button>
          {open && <div key={open} className={styles.dropdown} data-area={area?.id} id={"nav-" + open}>
            <div className={styles.dropInner}>
              <div className={styles.dropIntro}>
                <span className={styles.sectorIcon}><SectorIcon size={25} strokeWidth={1.7} aria-hidden /></span>
                <span className={styles.dropEyebrow}>{area ? "Especialidades APEN" : "Conoce APEN"}</span>
                <h2>{area?.title || "Grupo APEN"}</h2>
                <p>{area?.description || "La firma, el equipo y el respaldo de tu próximo proyecto energético."}</p>
                <Link className={styles.overviewLink} href={area ? featureHref : "/servicios"} onClick={close}>
                  {area ? "Explorar el sector" : "Ver todos los servicios"}<ArrowRight size={17} aria-hidden />
                </Link>
              </div>
              <div className={styles.dropMain}>
                <span className={styles.dropLabel}>{area ? "Servicios por especialidad" : "Firma y recursos"}</span>
                <div className={styles.dropLinks}>
                  {links.map((item, index) => <Link key={item.href} href={item.href} onClick={close}
                    className={styles.menuItem} style={{ "--item-delay": Math.min(index, 3) * 25 + "ms" } as CSSProperties}
                    aria-current={pathname === item.href ? "page" : undefined}>
                    <span className={styles.itemIcon}><item.icon size={21} strokeWidth={1.7} aria-hidden /></span>
                    <span className={styles.itemCopy}><strong>{item.title}</strong><small>{item.description}</small></span>
                    <ArrowUpRight size={17} className={styles.itemArrow} aria-hidden />
                  </Link>)}
                </div>
              </div>
              <Link className={styles.menuFeature} href={featureHref} onClick={close}>
                <Image src={area?.headerImage || "/visual/imagenes/nosotros.webp"} alt="" fill sizes="260px" />
                <span className={styles.featureCopy}>
                  <small>{area ? "Soluciones para tu proyecto" : "Nuestra firma"}</small>
                  <strong>{area?.navTitle || "Experiencia que respalda."}</strong>
                  <span>{area ? "Ver servicios" : "Conoce al equipo"}<ArrowRight size={18} aria-hidden /></span>
                </span>
              </Link>
            </div>
            <div className={styles.dropFooter}>
              <div>
                <a href="mailto:contacto@apen.mx" onClick={close}><Mail size={16} aria-hidden />contacto@apen.mx</a>
                <Link href="/diagnostico" onClick={close}>Hablemos de tu proyecto<ArrowRight size={17} aria-hidden /></Link>
              </div>
            </div>
          </div>}
        </nav>
        {/* Acciones a la derecha: así los menús de sector quedan centrados en el header. */}
        <div className={styles.actions}>
          <Link className={styles.energy} href="/consultas" aria-label="Energy Explica" onClick={close}>
            <Image src="/visual/imagenes/energy-explica-menu-button.png" alt="Energy Explica" fill sizes="150px" />
          </Link>
          <Link href="/contacto" className={styles.contact} onClick={close}>Contacto<ArrowUpRight size={15} aria-hidden /></Link>
        </div>
        <button type="button" className={styles.mobileTrigger} aria-label="Abrir menú" onClick={() => { close(); if (onOpenMenu) onOpenMenu(); else setMobile(true); }}><Menu size={26} /></button>
      </div>
    </header>
    {!onOpenMenu && <MobileMenu isOpen={mobile} onClose={() => setMobile(false)} />}
  </>;
}
