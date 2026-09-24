import ServiceAreaPage from "@/components/services/ServiceAreaPage";
import { areaMetadata } from "@/lib/service-metadata";
export const metadata = areaMetadata("energia");
export default function Page() { return <ServiceAreaPage areaId="energia" />; }
