import { Mail, MapPin, Sparkles } from "lucide-react";
import Link from "next/link";
import { navLinks, systemRoutes } from "@/data/landing";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#051532] px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <Link href="/" className="flex items-center gap-2">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-[#FFC727] text-[#0A3D91]">
              <Sparkles size={18} />
            </span>
            <span className="text-xl font-black">AjiraLink</span>
          </Link>
          <p className="mt-5 max-w-md leading-7 text-white/58">
            A youth-focused digital employment and career development platform connecting talent to verified
            opportunity.
          </p>
          <div className="mt-6 grid gap-3 text-sm text-white/58">
            <span className="flex items-center gap-2">
              <Mail size={16} className="text-[#FFC727]" /> hello@ajiralink.africa
            </span>
            <span className="flex items-center gap-2">
              <MapPin size={16} className="text-[#FFC727]" /> Built for African youth
            </span>
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
                Employer Registration
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
                Career Resources
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
