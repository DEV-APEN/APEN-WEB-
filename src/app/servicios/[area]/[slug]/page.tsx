import { notFound } from "next/navigation";
import { services, getService } from "@/data/services";
import { detailMetadata } from "@/lib/service-metadata";
import ServiceArticle from "@/components/services/ServiceArticle";
export const dynamicParams = false;
export function generateStaticParams() { return services.map(s => ({ area:s.area, slug:s.slug })); }
export function generateMetadata({ params }: { params: { area:string; slug:string } }) {
  const service = getService(params.area, params.slug); if (!service) notFound();
  return detailMetadata(service);
}
export default function Page({ params }: { params: { area:string; slug:string } }) {
  const service = getService(params.area, params.slug); if (!service) notFound();
  return <ServiceArticle service={service} />;
}

