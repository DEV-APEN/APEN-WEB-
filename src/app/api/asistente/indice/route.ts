import { NextResponse } from "next/server";
import { construirIndice } from "@/lib/asistente-indice";

// Se genera una sola vez en el build: el contenido solo cambia con un deploy.
export const dynamic = "force-static";

export function GET() {
  return NextResponse.json(construirIndice(), {
    headers: { "Cache-Control": "public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800" },
  });
}
