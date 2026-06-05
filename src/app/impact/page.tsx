import { ImpactPageContent } from "@/components/site/future-work-pages";
import { createPageMetadata } from "@/components/site/marketing-page";
import { pages } from "@/data/pages";

export const metadata = createPageMetadata("Impact", pages.impact.description);

export default function ImpactPage() {
  return <ImpactPageContent />;
}
