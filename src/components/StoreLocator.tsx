"use client";

import { useEffect, useRef } from "react";

const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? "";

const CONFIGURATION = {
  locations: [
    {
      title: "APEN Administradora de Proyectos Energéticos",
      address1: "Av. Miguel Ángel de Quevedo 961, El Rosedal, Coyoacán, 04330 Ciudad de México, CDMX, Mexico",
      address2: "",
      coords: { lat: 19.3429217, lng: -99.1530504 },
      placeId: "ChIJ_XTCXXr_0YURgVJ5FNcC2H0",
    },
  ],
  mapOptions: {
    center: { lat: 19.3429217, lng: -99.1530504 },
    fullscreenControl: true,
    mapTypeControl: false,
    streetViewControl: false,
    zoom: 15,
    zoomControl: true,
    maxZoom: 17,
    mapId: "",
  },
  mapsApiKey: API_KEY,
  capabilities: {
    input: false,
    autocomplete: false,
    directions: false,
    distanceMatrix: false,
    details: true,
    actions: false,
  },
};

export default function StoreLocator() {
  const containerRef = useRef<HTMLDivElement>(null);
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current || !containerRef.current || !API_KEY) return;
    initialized.current = true;

    const container = containerRef.current;

    // Inyectar elementos directamente en el DOM
    container.innerHTML = `
      <gmpx-api-loader key="${API_KEY}" solution-channel="GMP_QB_locatorplus_v11_cABD"></gmpx-api-loader>
      <gmpx-store-locator map-id="DEMO_MAP_ID" style="width:100%;height:100%;display:block;"></gmpx-store-locator>
    `;

    // Cargar el script después de que los elementos están en el DOM
    const script = document.createElement("script");
    script.type = "module";
    script.src =
      "https://ajax.googleapis.com/ajax/libs/@googlemaps/extended-component-library/0.6.11/index.min.js";

    script.onload = async () => {
      try {
        await customElements.whenDefined("gmpx-store-locator");
        const locator = container.querySelector("gmpx-store-locator") as any;
        if (locator?.configureFromQuickBuilder) {
          locator.configureFromQuickBuilder(CONFIGURATION);
        }
      } catch (e) {
        console.error("StoreLocator init error:", e);
      }
    };

    document.head.appendChild(script);
  }, []);

  if (!API_KEY) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-slate-100 rounded-2xl text-slate-400 text-sm font-medium">
        Mapa no disponible — configura NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
      </div>
    );
  }

  return <div ref={containerRef} style={{ width: "100%", height: "100%" }} />;
}
