import { ContactPageContent } from "@/components/site/future-work-pages";
import { createPageMetadata } from "@/components/site/marketing-page";
import { pages } from "@/data/pages";

export const metadata = createPageMetadata("Contact", pages.contact.description);

export default function ContactPage() {
  return <ContactPageContent />;
}
