import { MetadataRoute } from 'next';
import { consultations } from '@/data/consultas';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://apen.mx';
  const now = new Date();

  const routes: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/servicios`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/servicios/hidrocarburos`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/servicios/energia`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/servicios/legal`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/servicios/project-finance`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/nosotros`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/capacidad-ejecutiva`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/certificaciones`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/diagnostico`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/contacto`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/faqs`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/politica-de-privacidad`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/terminos-y-condiciones`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/consultas`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
  ];

  const verifiedConsultations = consultations.filter((c) => c.revisado);
  for (const c of verifiedConsultations) {
    routes.push({
      url: `${baseUrl}/consultas/${c.slug}`,
      lastModified: new Date(c.dateModified),
      changeFrequency: 'monthly',
      priority: 0.8,
    });
  }

  return routes;
}
