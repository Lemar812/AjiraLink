import type { Metadata } from "next";
import { CtaBand } from "@/components/site/cta-band";
import { FeatureCard, type IconCardData } from "@/components/site/cards";
import { PageHero } from "@/components/site/page-hero";
import { SiteShell } from "@/components/site/site-shell";
import { SectionTitle } from "@/components/ui/section-title";
import { systemRoutes } from "@/data/landing";

export type MarketingPageConfig = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  sections: Array<{
    eyebrow: string;
    title: string;
    copy: string;
    cards?: IconCardData[];
    points?: string[];
  }>;
  finalCta?: {
    title: string;
    copy: string;
    primary: { label: string; href: string };
    secondary?: { label: string; href: string };
  };
};

export function createPageMetadata(title: string, description: string): Metadata {
  return {
    title: `${title} | AjiraLink`,
    description,
  };
}

export function MarketingPage({ config }: { config: MarketingPageConfig }) {
  return (
    <SiteShell>
      <PageHero
        eyebrow={config.eyebrow}
        title={config.title}
        copy={config.description}
        image={config.image}
        primaryCta={config.primaryCta}
        secondaryCta={config.secondaryCta}
      />

      {config.sections.map((section) => (
        <section key={section.title} className="relative px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionTitle eyebrow={section.eyebrow} title={section.title} copy={section.copy} />
            {section.cards ? (
              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {section.cards.map((card, index) => (
                  <FeatureCard key={card.title} card={card} index={index} />
                ))}
              </div>
            ) : null}
            {section.points ? (
              <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-2">
                {section.points.map((point) => (
                  <div key={point} className="glass-panel rounded-4xl p-6" data-gsap-reveal>
                    <p className="leading-8 text-white/68">{point}</p>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        </section>
      ))}

      <CtaBand
        eyebrow="Move forward"
        title={config.finalCta?.title ?? "Your Future Starts Here."}
        copy={
          config.finalCta?.copy ??
          "Create your profile, browse opportunities, or partner with AjiraLink to expand youth access."
        }
        primary={
          config.finalCta?.primary ?? { label: "Create Your Profile", href: systemRoutes.youthRegister }
        }
        secondary={
          config.finalCta?.secondary ?? { label: "Browse Opportunities", href: systemRoutes.opportunities }
        }
      />
    </SiteShell>
  );
}
