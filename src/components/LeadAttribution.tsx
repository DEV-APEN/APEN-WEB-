"use client";

import { useEffect } from "react";
import { captureLeadContext } from "@/lib/lead-context";

export default function LeadAttribution() {
  useEffect(() => { captureLeadContext(); }, []);
  return null;
}
