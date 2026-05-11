import { createPageMetadata, MarketingPage } from "@/components/site/marketing-page";
import { pages } from "@/data/pages";

export const metadata = createPageMetadata("Investors / Support Us", pages.investors.description);

export default function InvestorsSupportUsPage() {
  return <MarketingPage config={pages.investors} />;
}
