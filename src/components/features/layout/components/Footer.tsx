import { Heart } from "lucide-react";
import { profile } from "@/components/features/profile";
import { FacebookIcon, GithubIcon, LinkedInIcon, XIcon } from "@/components/icons";

const socials = [
  { icon: GithubIcon, href: profile.socials.github, label: "GitHub" },
  { icon: LinkedInIcon, href: profile.socials.linkedin, label: "LinkedIn" },
  { icon: FacebookIcon, href: profile.socials.facebook, label: "Facebook" },
  { icon: XIcon, href: profile.socials.twitter, label: "Twitter" },
];

const nav = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-5 sm:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-slate-400 transition-colors hover:text-cyan-300"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-300 transition-all hover:-translate-y-0.5 hover:border-cyan-400/40 hover:text-cyan-300"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>

        <div className="flex flex-col items-center gap-1 text-center">
          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5 text-xs text-slate-500">
            Designed & built with <Heart className="h-3.5 w-3.5 fill-rose-400 text-rose-400" /> using
            Next.js & Tailwind CSS v4
          </p>
        </div>
      </div>
    </footer>
  );
}