import Image from "next/image";
import { BadgeCheck, Code2, Crown, Megaphone, UsersRound } from "lucide-react";
import { ButtonLink } from "@/components/site/button-link";
import { createPageMetadata } from "@/components/site/marketing-page";
import { SiteShell } from "@/components/site/site-shell";
import { systemRoutes } from "@/data/landing";

const pageCopy =
  "AjiraLink is led by a passionate team committed to transforming youth employment access through technology, partnerships, career development, and opportunity creation.";

export const metadata = createPageMetadata("Team", pageCopy);

const teamCtaThemeStyles = `
  html[data-theme="light"] .team-final-cta-title,
  html[data-theme="dark"] .team-final-cta-title {
    color: #ffffff !important;
  }

  html[data-theme="light"] .team-final-cta-copy,
  html[data-theme="dark"] .team-final-cta-copy {
    color: rgb(226 232 240 / 86%) !important;
  }
`;

const teamMembers = [
  {
    name: "Baltazary Anitheti Twati",
    title: "Founder & Managing Director",
    badge: "Leadership",
    image: "/images/Team Members/Baltazary Twati.jpeg",
    alt: "Portrait of Baltazary Anitheti Twati, Founder and Managing Director at AjiraLink",
    objectPosition: "50% 38%",
  },
  {
    name: "Irene Macmillan Arbogast",
    title: "Executive Director",
    badge: "Strategy",
    image: "/images/Team Members/Irene Mulan.jpeg",
    alt: "Portrait of Irene Macmillan Arbogast, Executive Director at AjiraLink",
    objectPosition: "50% 44%",
  },
  {
    name: "Elisha Steven Lema",
    title: "Content Creator",
    badge: "Storytelling",
    image: "/images/Team Members/Elisha Lema.jpeg",
    alt: "Portrait of Elisha Steven Lema, Content Creator at AjiraLink",
    objectPosition: "30% center",
  },
  {
    name: "Anwari Iddi Mntangi",
    title: "Software Developer",
    badge: "Product",
    image: "/images/Team Members/Anwari Iddi.jpeg",
    alt: "Portrait of Anwari Iddi Mntangi, Software Developer at AjiraLink",
    objectPosition: "50% 45%",
  },
] as const;

const badgeIcons = [Crown, UsersRound, Megaphone, Code2] as const;

const imageSizes = "(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw";

export default function TeamPage() {
  return (
    <SiteShell>
      <style>{teamCtaThemeStyles}</style>
      <section className="relative overflow-hidden px-4 pb-20 pt-36 sm:px-6 sm:pt-40 lg:px-8">
        <Image
          src="/images/Ajiralink Website Photos/Hero Pictures/Hero-Picture-9.JPG"
          alt="The AjiraLink team building youth opportunity pathways"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="about-hero-overlay absolute inset-0" />
        <div className="about-hero-gradient absolute inset-0" />

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.28em] text-ajira-yellow">
              AjiraLink Team
            </p>
            <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-tight text-white sm:text-7xl">
              Meet the Team Behind AjiraLink
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">{pageCopy}</p>
            <ButtonLink
              href={systemRoutes.youthRegister}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#FFC727] px-5 py-2 text-sm font-black text-[#0A3D91] shadow-[0_18px_60px_rgba(255,199,39,0.26)] hover:bg-white"
            >
              Join AjiraLink
            </ButtonLink>

            <div className="mt-10 grid max-w-xl gap-3 sm:grid-cols-2">
              {[
                ["4", "core team members"],
                ["1", "shared mission"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="rounded-[1.6rem] border border-white/14 bg-white/10 p-5 shadow-[0_18px_60px_rgba(0,0,0,0.18)] backdrop-blur-xl"
                >
                  <p className="text-4xl font-black tracking-tight text-white">{value}</p>
                  <p className="mt-2 text-xs font-bold uppercase tracking-[0.18em] text-white/55">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2" aria-hidden="true">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="group relative overflow-hidden rounded-4xl border border-white/14 bg-white/10 p-2 shadow-[0_28px_90px_rgba(0,0,0,0.26)] backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-ajira-yellow/45 hover:shadow-[0_34px_110px_rgba(255,199,39,0.18)]"
              >
                <div className="relative aspect-4/5 overflow-hidden rounded-[1.55rem] bg-ajira-night/58">
                  <Image
                    src={member.image}
                    alt={member.alt}
                    fill
                    priority
                    sizes="(min-width: 1024px) 24vw, (min-width: 640px) 44vw, 92vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                    style={{ objectPosition: member.objectPosition }}
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-ajira-night/75 via-transparent to-transparent opacity-74" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-6xl text-center">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-ajira-yellow">
              The builders
            </p>
            <h2 className="text-4xl font-black leading-tight tracking-tight text-white lg:text-5xl">
              <span className="block lg:whitespace-nowrap">A compact team with product focus,</span>
              <span className="block lg:whitespace-nowrap">ecosystem trust, and youth-first execution.</span>
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/66">
              Each member brings a clear responsibility to the work of helping young people discover, prepare
              for, and access credible opportunities.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member, index) => {
              const Icon = badgeIcons[index];

              return (
                <article
                  key={member.name}
                  className="group glass-panel relative overflow-hidden rounded-[2.2rem] p-3 transition duration-500 hover:-translate-y-2 hover:border-ajira-yellow/45 hover:shadow-[0_34px_110px_rgba(255,199,39,0.16)]"
                >
                  <div className="absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-ajira-yellow/70 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                  <div className="relative overflow-hidden rounded-[1.8rem] border border-white/12 bg-ajira-night/58">
                    <div className="relative aspect-4/5 overflow-hidden">
                      <Image
                        src={member.image}
                        alt={member.alt}
                        fill
                        loading="eager"
                        sizes={imageSizes}
                        className="object-cover transition duration-700 group-hover:scale-105"
                        style={{ objectPosition: member.objectPosition }}
                      />
                    </div>
                    <div className="absolute inset-0 bg-linear-to-t from-ajira-night/92 via-ajira-night/10 to-transparent opacity-76" />
                    <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/14 bg-ajira-night/75 px-3 py-2 text-[0.68rem] font-black uppercase tracking-[0.16em] text-ajira-yellow backdrop-blur-xl">
                      <Icon size={14} aria-hidden="true" />
                      {member.badge}
                    </div>
                  </div>

                  <div className="relative p-5">
                    <div className="mb-5 flex items-center gap-2 text-ajira-yellow">
                      <BadgeCheck size={18} aria-hidden="true" />
                      <span className="h-px flex-1 bg-ajira-yellow/35" />
                    </div>
                    <h3 className="text-2xl font-black leading-tight tracking-tight text-white">
                      {member.name}
                    </h3>
                    <p className="mt-3 inline-flex rounded-full border border-white/14 bg-white/10 px-4 py-2 text-sm font-bold text-white/72 backdrop-blur-xl">
                      {member.title}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative px-4 pb-24 pt-10 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.8rem] border border-white/16 bg-ajira-night p-8 shadow-[0_40px_120px_rgba(0,0,0,0.35)] sm:p-12 lg:p-16">
          <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_auto]">
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-ajira-yellow">
                Youth opportunity
              </p>
              <h2 className="team-final-cta-title text-4xl font-black tracking-tight text-white sm:text-6xl">
                Built by a team committed to youth opportunity
              </h2>
              <p className="team-final-cta-copy mt-6 max-w-2xl text-lg leading-8 text-slate-200/85">
                Join AjiraLink and connect with a platform designed to make jobs, internships, mentorship, and
                career pathways easier to find and easier to trust.
              </p>
            </div>

            <ButtonLink href={systemRoutes.youthRegister} className="w-full sm:w-auto">
              Join AjiraLink Today
            </ButtonLink>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
