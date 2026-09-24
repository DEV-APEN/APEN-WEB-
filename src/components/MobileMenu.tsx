"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Building2, ChevronDown, Droplets, Landmark, Scale, X, Zap } from "lucide-react";
import { serviceAreas } from "@/data/service-areas";
import styles from "./navigation.module.css";

const sectorIcons = { hidrocarburos: Droplets, energia: Zap, legal: Scale, "financiamiento-de-proyectos": Landmark };

export default function MobileMenu({ isOpen, onClose }: { isOpen:boolean; onClose:()=>void }) {
  const dialog = useRef<HTMLDivElement>(null);
  const closeRef = useRef(onClose);
  closeRef.current = onClose;
  useEffect(() => {
    if (!isOpen) return;
    const previous = document.activeElement as HTMLElement | null;
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialog.current?.querySelector<HTMLButtonElement>("button")?.focus();
    const keydown = (event: KeyboardEvent) => {
      if (event.key === "Escape") { event.preventDefault(); closeRef.current(); }
      if (event.key !== "Tab") return;
      const elements = Array.from(dialog.current?.querySelectorAll<HTMLElement>('a,button,summary,[tabindex="0"]') || []).filter(el => el.getClientRects().length > 0);
      const first = elements[0], last = elements[elements.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
    };
    document.addEventListener("keydown", keydown);
    return () => { document.body.style.overflow = overflow; document.removeEventListener("keydown", keydown); previous?.focus(); };
  }, [isOpen]);
  if (!isOpen) return null;
  return <div className={styles.overlay} onClick={onClose}>
    <div ref={dialog} className={styles.dialog} role="dialog" aria-modal="true" aria-labelledby="mobile-navigation-title" onClick={e=>e.stopPropagation()}>
      <div className={styles.dialogHead}><span id="mobile-navigation-title">Menú APEN</span><button onClick={onClose} aria-label="Cerrar menú"><X size={24} /></button></div>
      <nav className={styles.dialogBody} aria-label="Navegación móvil">
        <Link href="/servicios" onClick={onClose}>Todos los servicios</Link>
        {serviceAreas.map(area => {
          const SectorIcon = sectorIcons[area.id];
          return <details key={area.id} data-area={area.id}>
            <summary><span className={styles.mobileSectorIcon}><SectorIcon size={20} aria-hidden /></span>{area.title}<ChevronDown className={styles.mobileChevron} size={17} aria-hidden /></summary>
            <Link href={"/servicios/" + area.id} onClick={onClose}>Ver todos</Link>
            {area.categories.map(category => <Link key={category.id} href={"/servicios/" + area.id + "#" + category.id} onClick={onClose}>{category.title}</Link>)}
          </details>;
        })}
        <details><summary><span className={styles.mobileSectorIcon}><Building2 size={20} aria-hidden /></span>APEN<ChevronDown className={styles.mobileChevron} size={17} aria-hidden /></summary><Link href="/nosotros" onClick={onClose}>Nuestra firma</Link><Link href="/certificaciones" onClick={onClose}>Certificaciones ISO</Link><Link href="/faqs" onClick={onClose}>Preguntas frecuentes</Link></details>
        <Link href="/consultas" onClick={onClose} aria-label="Energy Explica"><Image src="/visual/imagenes/energy-explica-menu-button.png" alt="Energy Explica" width={200} height={64} className="object-contain" /></Link>
        <Link href="/contacto" onClick={onClose}>Contacto</Link><Link href="/diagnostico" onClick={onClose}>Iniciar diagnóstico</Link>
      </nav>
    </div>
  </div>;
}
