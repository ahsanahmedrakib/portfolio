import { Mail, MapPin, MessageSquare, Phone } from "lucide-react";
import Link from "next/link";
import { profile } from "@/components/features/profile";
import {
  FacebookIcon,
  GithubIcon,
  LinkedInIcon,
  MessengerIcon,
  WhatsAppIcon,
  XIcon,
} from "@/components/icons";
import { ContactForm } from "./ContactForm";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const contactCards = [
  {
    icon: Mail,
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone.replace(/[^+\d]/g, "")}`,
  },
  {
    icon: MapPin,
    label: "Location",
    value: profile.location,
    href: null,
  },
];

const socialLinks = [
  { icon: GithubIcon, href: profile.socials.github, label: "GitHub" },
  { icon: LinkedInIcon, href: profile.socials.linkedin, label: "LinkedIn" },
  { icon: FacebookIcon, href: profile.socials.facebook, label: "Facebook" },
  { icon: XIcon, href: profile.socials.twitter, label: "Twitter" },
  { icon: WhatsAppIcon, href: profile.socials.whatsapp, label: "WhatsApp" },
  { icon: MessengerIcon, href: profile.socials.messenger, label: "Messenger" },
];

export function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Get in Touch"
          title={
            <>
              Let&apos;s build something <span className="text-gradient">amazing together</span>
            </>
          }
          description="Have a project in mind, an opportunity to discuss, or just want to say hello? My inbox is always open."
        />

        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal variant="left">
            <div className="space-y-4">
              {contactCards.map(({ icon: Icon, label, value, href }) => {
                const inner = (
                  <>
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/8 text-cyan-300">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider text-slate-500">{label}</p>
                      <p className="mt-0.5 break-all text-sm font-semibold text-white">{value}</p>
                    </div>
                  </>
                );
                return href ? (
                  <Link
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="glass flex items-center gap-4 rounded-2xl p-5 transition-colors hover:border-cyan-400/30"
                  >
                    {inner}
                  </Link>
                ) : (
                  <div key={label} className="glass flex items-center gap-4 rounded-2xl p-5">
                    {inner}
                  </div>
                );
              })}

              <div className="glass rounded-2xl p-5">
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/8 text-cyan-300">
                    <MessageSquare className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                      Socials
                    </p>
                    <p className="mt-0.5 text-sm font-semibold text-white">Follow me anywhere</p>
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap items-center gap-2">
{socialLinks.map(({ icon: Icon, href, label }) => (
                    <Link
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      title={label}
                      className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/3 text-slate-300 transition-colors hover:border-cyan-400/40 hover:text-cyan-300"
                    >
                      <Icon className="h-4 w-4" />
                    </Link>
                  ))}
                </div>
              </div>

<Link
                href={profile.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-sheen mt-2 flex items-center justify-center gap-2 rounded-2xl bg-linear-to-r from-cyan-500 to-violet-500 px-6 py-4 text-sm font-semibold text-white transition-all hover:shadow-[0_0_28px_rgba(34,211,238,0.5)]"
              >
                <Mail className="h-4 w-4" />
                Download My Resume
              </Link>
            </div>
          </Reveal>

          <Reveal variant="right" delay={0.1}>
            <div className="glass rounded-3xl p-6 sm:p-8">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}