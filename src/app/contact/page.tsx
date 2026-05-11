import { createPageMetadata, MarketingPage } from "@/components/site/marketing-page";
import { pages } from "@/data/pages";

export const metadata = createPageMetadata("Contact", pages.contact.description);

export default function ContactPage() {
  return <MarketingPage config={pages.contact} />;
}
