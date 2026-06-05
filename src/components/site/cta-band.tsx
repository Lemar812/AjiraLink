import { ButtonLink } from "@/components/site/button-link";

type CtaBandProps = {
  eyebrow?: string;
  title: string;
  copy: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
};

export function CtaBand({ eyebrow = "Next step", title, copy, primary, secondary }: CtaBandProps) {
  return (
    <section className="relative px-4 py-24 sm:px-6 lg:px-8">
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-[#0A3D91]" />
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.8rem] border border-white/16 bg-ajira-night p-8 shadow-[0_40px_120px_rgba(0,0,0,0.35)] sm:p-12 lg:p-16">
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#FFC727]/25 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-[#0A3D91] blur-3xl" />
        <div className="relative grid items-end gap-10 lg:grid-cols-[1fr_auto]">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-[#FFC727]">{eyebrow}</p>
            <h2 className="text-5xl font-black tracking-tight text-white sm:text-7xl">{title}</h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/66">{copy}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <ButtonLink href={primary.href}>{primary.label}</ButtonLink>
            {secondary ? (
              <ButtonLink href={secondary.href} variant="secondary">
                {secondary.label}
              </ButtonLink>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
