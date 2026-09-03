import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { SITE_URL, getMarkdownForPath, normalizePath } from '@/lib/agent-markdown';

export const dynamic = 'force-dynamic';

/**
 * Variante en text/markdown de cada página pública (protocolo acceptmarkdown.com).
 *
 * Se alcanza de tres formas:
 *  - `Accept: text/markdown` sobre la URL normal (rewrite desde el middleware)
 *  - sufijo `.md` en la URL (rewrite desde el middleware)
 *  - directamente: /api/md?path=/servicios
 *
 * `Vary: Accept` es obligatorio: sin él un CDN puede servir la variante HTML
 * cacheada a un agente que pidió markdown, o al revés.
 */
export function GET(request: NextRequest) {
  // Tras un rewrite del middleware la query no llega al handler: la ruta
  // solicitada viaja en la cabecera interna `x-markdown-path`. El parámetro
  // `?path=` sigue funcionando para llamadas directas.
  const requestedPath =
    request.headers.get('x-markdown-path') || request.nextUrl.searchParams.get('path') || '/';
  const { status, body } = getMarkdownForPath(requestedPath);
  const normalized = normalizePath(requestedPath);
  const canonical = `${SITE_URL}${normalized === '/' ? '' : normalized}`;

  return new NextResponse(body, {
    status,
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      Vary: 'Accept, Accept-Encoding',
      'Cache-Control':
        status === 200
          ? 'public, max-age=300, s-maxage=3600, stale-while-revalidate=86400'
          : 'no-store',
      ...(status === 200 ? { Link: `<${canonical}>; rel="canonical"` } : {}),
      'X-Robots-Tag': 'noindex',
    },
  });
}
