import ServiceAreaPage from "@/components/services/ServiceAreaPage";
import { areaMetadata } from "@/lib/service-metadata";
export const metadata = areaMetadata("hidrocarburos");
export default function Page() { return <ServiceAreaPage areaId="hidrocarburos" />; }
