"use client";

import { useId, useState } from "react";
import { services } from "@/data/services";
import { serviceAreas } from "@/data/service-areas";

type LeadQualificationFieldsProps = {
  serviceId?: string;
  topic?: string;
  compact?: boolean;
  tone?: "light" | "dark";
};

const commercialReasons = [
  { value: "comprar_coque", label: "Comprar coque" },
  { value: "ofrecer_coque", label: "Vender / ofrecer material" },
  { value: "logistica_coque", label: "Logística de coque" },
  { value: "otro", label: "Otra consulta" },
];

export default function LeadQualificationFields({ serviceId, topic, compact = false, tone = "light" }: LeadQualificationFieldsProps) {
  const id = useId();
  const [chosenServiceId, setChosenServiceId] = useState("");
  const contextualServiceId = serviceId ?? (topic === "Coque de petróleo" ? "H54" : undefined);
  const currentServiceId = contextualServiceId ?? chosenServiceId;
  const dark = tone === "dark";
  const labelClass = `block text-xs font-bold ${dark ? "text-slate-300" : "text-[#0B2341]"}`;
  const fieldClass = `min-h-11 w-full min-w-0 rounded-lg border px-3 py-3 text-sm outline-none transition-colors focus:border-[#008CDE] focus:ring-2 focus:ring-[#008CDE]/30 ${dark
    ? "border-white/20 bg-[#061528] text-white"
    : "border-slate-300 bg-slate-50 text-slate-800"}`;

  return (
    <div className={`min-w-0 ${compact ? "space-y-3" : "space-y-5"}`}>
      {contextualServiceId ? (
        <input type="hidden" name="servicio_id" value={contextualServiceId} />
      ) : (
        <div className="min-w-0 space-y-2">
          <label htmlFor={`${id}-servicio`} className={labelClass}>Servicio de interés (opcional)</label>
          <select id={`${id}-servicio`} name="servicio_id" value={chosenServiceId}
            onChange={event => setChosenServiceId(event.target.value)} className={fieldClass}>
            <option value="">Consulta general / necesito orientación</option>
            {serviceAreas.map(area => (
              <optgroup key={area.id} label={area.title}>
                {services.filter(service => service.area === area.id).map(service => (
                  <option key={service.id} value={service.id}>{service.title}</option>
                ))}
              </optgroup>
            ))}
          </select>
        </div>
      )}

      {currentServiceId === "H54" && (
        <fieldset className="min-w-0 space-y-2">
          <legend className={`${labelClass} mb-2`}>Motivo comercial de coque *</legend>
          <div className={`grid gap-2 ${compact ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-2"}`}>
            {commercialReasons.map(reason => (
              <label key={reason.value} className={`flex min-h-11 min-w-0 cursor-pointer items-center gap-3 rounded-lg border px-3 py-2 text-sm leading-snug ${dark
                ? "border-white/20 text-slate-200"
                : "border-slate-300 text-slate-700"}`}>
                <input type="radio" name="motivo_comercial" value={reason.value} required
                  className="h-4 w-4 shrink-0 accent-[#008CDE] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#008CDE]" />
                <span className="min-w-0 break-words">{reason.label}</span>
              </label>
            ))}
          </div>
        </fieldset>
      )}
    </div>
  );
}
