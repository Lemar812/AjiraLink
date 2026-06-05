import { AboutUsPageContent } from "@/components/site/about-us-page";
import { createPageMetadata } from "@/components/site/marketing-page";

export const metadata = createPageMetadata(
  "About Us",
  "AjiraLink is a social entrepreneurship initiative bridging the gap between youth and opportunity providers across Africa.",
);

export default function AboutUsPage() {
  return <AboutUsPageContent />;
}
