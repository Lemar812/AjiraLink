import { Mail, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { contactDetails, navLinks, systemRoutes } from "@/data/landing";

function InstagramIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.25" cy="6.75" r="1.25" fill="currentColor" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
      <path d="M14.2 8.2V6.7c0-.7.5-.9.9-.9h2.2V2.1L14.2 2C10.8 2 9.9 4.5 9.9 6.1v2.1H7.4V12h2.5v10h4.2V12h2.9l.4-3.8h-3.2Z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#051532] px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <Link href="/" className="group relative inline-flex items-center gap-3">
            <span className="absolute -inset-3 rounded-full bg-[#FFC727]/0 blur-2xl transition duration-300 group-hover:bg-[#FFC727]/10" />
            <span className="relative grid h-14 w-14 place-items-center rounded-full bg-white/6 ring-1 ring-white/10">
              <Image
                src="/images/logos/ajiralink-logo-transparent.png"
                alt="AjiraLink"
                width={112}
                height={112}
                sizes="56px"
                className="h-12 w-12 object-contain"
              />
            </span>
            <span className="relative text-2xl font-black tracking-[-0.03em] text-white">AjiraLink</span>
          </Link>
          <p className="mt-5 max-w-md leading-7 text-white/58">
            A youth-focused digital employment and career development platform connecting talent to verified
            opportunity.
          </p>
          <div className="mt-6 grid gap-3 text-sm text-white/58">
            <Link
              href={contactDetails.emailHref}
              className="flex items-center gap-2 transition hover:text-white"
            >
              <Mail size={16} className="text-[#FFC727]" /> {contactDetails.email}
            </Link>
            <span className="flex items-center gap-2">
              <MapPin size={16} className="text-[#FFC727]" /> {contactDetails.location}
            </span>
          </div>
          <div className="mt-5 flex items-center gap-3">
            <Link
              href={contactDetails.instagram}
              aria-label="AjiraLink Instagram"
              target="_blank"
              rel="noopener noreferrer"
              className="grid h-10 w-10 place-items-center rounded-full border border-white/12 bg-white/7 text-white/70 transition hover:-translate-y-0.5 hover:border-[#FFC727]/40 hover:text-[#FFC727]"
            >
              <InstagramIcon />
            </Link>
            <Link
              href={contactDetails.facebook}
              aria-label="AjiraLink Facebook"
              target="_blank"
              rel="noopener noreferrer"
              className="grid h-10 w-10 place-items-center rounded-full border border-white/12 bg-white/7 text-white/70 transition hover:-translate-y-0.5 hover:border-[#FFC727]/40 hover:text-[#FFC727]"
            >
              <FacebookIcon />
            </Link>
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <p className="mb-4 text-sm font-black text-white">Website</p>
            <div className="grid gap-3">
              {navLinks.slice(1, 7).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/55 transition hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="mb-4 text-sm font-black text-white">Platform</p>
            <div className="grid gap-3">
              <Link href={systemRoutes.login} className="text-sm text-white/55 transition hover:text-white">
                Login
              </Link>
              <Link
                href={systemRoutes.youthRegister}
                className="text-sm text-white/55 transition hover:text-white"
              >
                Youth Registration
              </Link>
              <Link
                href={systemRoutes.employerRegister}
                className="text-sm text-white/55 transition hover:text-white"
              >
                Register as Employer
              </Link>
              <Link
                href={systemRoutes.postOpportunity}
                className="text-sm text-white/55 transition hover:text-white"
              >
                Post an Opportunity
              </Link>
            </div>
          </div>
          <div>
            <p className="mb-4 text-sm font-black text-white">Growth</p>
            <div className="grid gap-3">
              <Link
                href="/investors-support-us"
                className="text-sm text-white/55 transition hover:text-white"
              >
                Investors / Support Us
              </Link>
              <Link href="/contact" className="text-sm text-white/55 transition hover:text-white">
                Contact
              </Link>
              <Link
                href={systemRoutes.careerResources}
                className="text-sm text-white/55 transition hover:text-white"
              >
                Access Career Resources
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-sm text-white/42">
        © {new Date().getFullYear()} AjiraLink. Where Talent Meets Opportunities.
      </div>
    </footer>
  );
}
