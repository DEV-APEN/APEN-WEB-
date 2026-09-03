import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/** Calidad (q) declarada para un tipo MIME dentro de una cabecera Accept. */
function acceptQuality(accept: string, mime: string): number {
  for (const rawPart of accept.split(',')) {
    const [type, ...params] = rawPart.trim().split(';');
    if (type.trim().toLowerCase() !== mime) continue;
    const qParam = params.map((p) => p.trim()).find((p) => p.startsWith('q='));
    if (!qParam) return 1;
    const q = Number.parseFloat(qParam.slice(2));
    return Number.isNaN(q) ? 1 : q;
  }
  return 0;
}

/**
 * Negociación de contenido acceptmarkdown.com: se sirve markdown cuando el
 * cliente lo prefiere explícitamente sobre HTML.
 */
function prefersMarkdown(accept: string): boolean {
  if (!accept) return false;
  const normalized = accept.toLowerCase();
  const markdown = Math.max(
    acceptQuality(normalized, 'text/markdown'),
    acceptQuality(normalized, 'text/x-markdown')
  );
  if (markdown === 0) return false;
  return markdown > acceptQuality(normalized, 'text/html');
}

/** Ficheros estáticos servidos desde /public: no se negocian. */
const STATIC_MARKDOWN_FILES = new Set(['/agent-instructions.md']);
const HAS_EXTENSION = /\.[a-z0-9]+$/i;

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const { pathname } = url;
  const host = request.headers.get('host') ?? '';
  const protocol = request.headers.get('x-forwarded-proto') || 'http';
  const isLocal = host.startsWith('localhost') || host.startsWith('127.0.0.1');

  // 1. Forzar HTTPS  2. Forzar No-WWW (apen.mx en lugar de www.apen.mx)
  // (se omite en desarrollo local)
  if (!isLocal) {
    const isWww = host.startsWith('www.');
    const isHttp = protocol === 'http';

    if (isHttp || isWww) {
      const newHost = isWww ? host.replace('www.', '') : host;
      const newUrl = `https://${newHost}${pathname}${url.search}`;

      return NextResponse.redirect(newUrl, {
        status: 301, // Redirección Permanente para SEO
      });
    }
  }

  // 3. Variante markdown para agentes (acceptmarkdown.com)
  const isRscRequest =
    request.headers.has('rsc') || request.headers.has('next-router-prefetch');

  const isReadRequest = request.method === 'GET' || request.method === 'HEAD';

  if (isReadRequest && !isRscRequest && !STATIC_MARKDOWN_FILES.has(pathname)) {
    const isMdSuffix = pathname.endsWith('.md');
    const targetPath = isMdSuffix ? pathname.slice(0, -3) || '/' : pathname;

    if (isMdSuffix || (!HAS_EXTENSION.test(pathname) && prefersMarkdown(request.headers.get('accept') ?? ''))) {
      const rewriteUrl = url.clone();
      rewriteUrl.pathname = '/api/md';
      rewriteUrl.search = '';
      rewriteUrl.searchParams.set('path', targetPath);

      // La query no sobrevive al rewrite en todos los entornos: la ruta
      // solicitada viaja también en una cabecera interna.
      const requestHeaders = new Headers(request.headers);
      requestHeaders.set('x-markdown-path', targetPath);

      const markdownResponse = NextResponse.rewrite(rewriteUrl, {
        request: { headers: requestHeaders },
      });
      markdownResponse.headers.set('Vary', 'Accept, Accept-Encoding');
      return markdownResponse;
    }
  }

  // 4. La variante HTML también declara Vary: Accept para que un CDN no
  //    entregue HTML cacheado a un agente que pidió markdown.
  const response = NextResponse.next();
  const existingVary = response.headers.get('Vary');
  response.headers.set(
    'Vary',
    existingVary && !existingVary.toLowerCase().includes('accept,')
      ? `Accept, ${existingVary}`
      : 'Accept, RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Url, Accept-Encoding'
  );
  return response;
}

// Configurar en qué rutas se ejecuta el middleware
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - robots.txt, sitemap.xml (SEO files)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|visual|videos|articulos).*)',
  ],
};
