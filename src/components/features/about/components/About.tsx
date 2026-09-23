import { MapPin, Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { profile } from "@/components/features/profile";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CountUp } from "@/components/ui/CountUp";

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="About Me"
          title={
            <>
              Turning complex problems into{" "}
              <span className="text-gradient">elegant software</span>
            </>
          }
        />

        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <Reveal variant="left" className="space-y-5">
            {profile.about.map((p, i) => (
              <p key={i} className="text-base leading-relaxed text-slate-400 sm:text-lg">
                {p}
              </p>
            ))}
            <div className="flex flex-wrap gap-3 pt-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-slate-300">
                <MapPin className="h-4 w-4 text-cyan-400" /> {profile.location}
              </span>
              <Link
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-slate-300 transition-colors hover:border-cyan-400/40 hover:text-cyan-300"
              >
                <Mail className="h-4 w-4 text-cyan-400" /> {profile.email}
              </Link>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-slate-300">
                <Phone className="h-4 w-4 text-cyan-400" /> {profile.phone}
              </span>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 gap-4">
            {profile.highlights.map((h, i) => (
              <Reveal key={h.label} delay={i * 0.08} variant="scale">
                <div className="glass group rounded-2xl p-5 transition-all hover:-translate-y-1 hover:border-cyan-400/30">
                  <p className="font-display text-3xl font-bold">
                    <span className="text-gradient">
                      <CountUp
                        to={parseInt(h.value) || 0}
                        suffix={h.value.replace(/\d+/g, "")}
                      />
                    </span>
                  </p>
                  <p className="mt-1 text-sm text-slate-400">{h.label}</p>
                </div>
              </Reveal>
            ))}
            <Reveal delay={0.34} variant="scale" className="col-span-2">
              <div className="glass flex items-center gap-4 rounded-2xl p-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white p-1.5">
                  <div className="relative h-full w-full">
                    <Image
                      src="/ai/claude.png"
                      alt="Claude"
                      fill
                      sizes="36px"
                      className="object-contain"
                    />
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-white">AI Agentic Engineering</p>
                  <p className="text-sm text-slate-400">
                    opencode, Claude CLI, ChatGPT, Grok & MCP — 7+ projects shipped end to end by AI agents
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}