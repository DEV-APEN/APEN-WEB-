import ServiceAreaPage from "@/components/services/ServiceAreaPage";
import { areaMetadata } from "@/lib/service-metadata";
export const metadata = areaMetadata("financiamiento-de-proyectos");
export default function Page() { return <ServiceAreaPage areaId="financiamiento-de-proyectos" />; }
