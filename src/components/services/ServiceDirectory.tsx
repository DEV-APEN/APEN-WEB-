"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Search } from "lucide-react";
import { serviceAreas, serviceKindLabels } from "@/data/service-areas";
import type { Service } from "@/data/services";
import { kindIcons } from "@/data/service-icons";
import FilterSelect from "./FilterSelect";
import styles from "./catalog.module.css";
type Entry = Pick<Service, "id" | "area" | "category" | "slug" | "title" | "summary">;
const normalized = (value: string) => value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
export default function ServiceDirectory({ entries, areaId }: { entries: Entry[]; areaId?: string }) {
  const [query, setQuery] = useState("");
  const [kind, setKind] = useState("");
  const [selectedArea, setSelectedArea] = useState(areaId || "");
  useEffect(() => {
    const resetForAnchor = () => {
      if (!window.location.hash) return;
      setQuery("");
      setKind("");
      setSelectedArea(areaId || "");
      requestAnimationFrame(() => document.getElementById(window.location.hash.slice(1))?.scrollIntoView());
    };
    window.addEventListener("hashchange", resetForAnchor);
    return () => window.removeEventListener("hashchange", resetForAnchor);
  }, [areaId]);
  const areas = serviceAreas.filter(a => !selectedArea || a.id === selectedArea);
  const kinds = Object.entries(serviceKindLabels).filter(([id]) => areas.some(a => a.categories.some(c => c.kind === id)));
  const visible = entries.filter(s => {
    const category = serviceAreas.find(a => a.id === s.area)!.categories.find(c => c.id === s.category)!;
    return (!selectedArea || s.area === selectedArea) && (!kind || category.kind === kind) &&
      normalized(s.title + " " + s.summary).includes(normalized(query.trim()));
  });
  return <div className={styles.wrap} id="catalogo">
    <div className={styles.tools}>
      <label className={styles.search}><span className="flex items-center gap-2"><Search size={16} aria-hidden />Buscar servicio</span>
        <input type="search" value={query} onChange={e => setQuery(e.target.value)} placeholder="Permiso, mantenimiento, coque..." /></label>
      {!areaId && <FilterSelect label="Sector" value={selectedArea}
        options={[{ value: "", label: "Todos los sectores" }, ...serviceAreas.map(a => ({ value: a.id, label: a.title, accent: a.accent }))]}
        onChange={value => { setSelectedArea(value); setKind(""); }} />}
      <FilterSelect label="Tipo de servicio" value={kind}
        options={[{ value: "", label: "Todos los servicios" }, ...kinds.map(([id, label]) => ({ value: id, label }))]}
        onChange={setKind} />
    </div>
    <p className={styles.count} role="status">{visible.length} servicios</p>
    {!visible.length && <p className={styles.empty}>No encontramos servicios con esos criterios. <button className={styles.secondaryLink} onClick={() => { setQuery(""); setKind(""); setSelectedArea(areaId || ""); }}>Limpiar filtros</button></p>}
    {areas.map(area => area.categories.map(category => {
      const items = visible.filter(s => s.area === area.id && s.category === category.id);
      if (!items.length) return null;
      const KindIcon = kindIcons[category.kind];
      return <section key={area.id + category.id} id={areaId ? category.id : area.id + "-" + category.id} className={styles.group}>
        <div className={styles.groupHead}><span className={styles.groupIcon} aria-hidden><KindIcon size={20} /></span><h2>{!areaId && area.navTitle + " / "}{category.title}</h2><span>{items.length} servicios</span></div>
        <div className={styles.list}>{items.map(s => <article key={s.id} className={styles.item}>
          <h3><Link href={`/servicios/${s.area}/${s.slug}`} prefetch={false}>{s.title}<ArrowUpRight size={19} aria-hidden /></Link></h3>
          <p>{s.summary}</p>
        </article>)}</div>
      </section>;
    }))}
  </div>;
}
