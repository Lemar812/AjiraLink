import { createPageMetadata, MarketingPage } from "@/components/site/marketing-page";
import { pages } from "@/data/pages";

export const metadata = createPageMetadata("About Us", pages.about.description);

export default function AboutUsPage() {
  return <MarketingPage config={pages.about} />;
}
