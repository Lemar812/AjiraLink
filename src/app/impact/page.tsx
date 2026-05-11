import { createPageMetadata, MarketingPage } from "@/components/site/marketing-page";
import { pages } from "@/data/pages";

export const metadata = createPageMetadata("Impact", pages.impact.description);

export default function ImpactPage() {
  return <MarketingPage config={pages.impact} />;
}
