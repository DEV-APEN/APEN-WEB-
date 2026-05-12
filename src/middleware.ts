import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const host = request.headers.get('host');
  const protocol = request.headers.get('x-forwarded-proto') || 'http';

  // 1. Forzar HTTPS
  // 2. Forzar No-WWW (apen.mx en lugar de www.apen.mx)
  const isWww = host?.startsWith('www.');
  const isHttp = protocol === 'http';

  if (isHttp || isWww) {
    const newHost = isWww ? host?.replace('www.', '') : host;
    const newUrl = `https://${newHost}${url.pathname}${url.search}`;
    
    return NextResponse.redirect(newUrl, {
      status: 301, // Redirección Permanente para SEO
    });
  }

  return NextResponse.next();
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
