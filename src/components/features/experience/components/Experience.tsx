import { profile } from "@/components/features/profile";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArrowUpRight, CheckCircle2, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Career Journey"
          title={
            <>
              Experience that{" "}
              <span className="text-gradient">delivers real impact</span>
            </>
          }
          description="From early frontend work to building enterprise-scale products for airlines and major corporate clients."
        />

        <div className="relative mx-auto max-w-3xl">
          <div className="absolute left-5 top-2 bottom-2 w-px bg-linear-to-b from-cyan-400/60 via-violet-500/40 to-transparent" />

          <div className="space-y-10">
            {profile.experience.map((job, i) => (
              <Reveal
                key={job.company}
                delay={i * 0.1}
                variant="left"
                className="relative pl-16"
              >
                <span className="absolute left-0 top-1 h-11 w-11 overflow-hidden rounded-full border border-cyan-400/30 bg-[#04070C] shadow-[0_0_18px_rgba(34,211,238,0.25)]">
                  <Image
                    src={job.image}
                    alt={job.company}
                    fill
                    sizes="44px"
                    className="object-contain p-2"
                  />
                </span>

                <div className="glass rounded-3xl p-6 transition-colors hover:border-cyan-400/25 sm:p-7">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="font-display text-lg font-bold text-white">
                      {job.title}
                    </h3>
                    <span className="rounded-full bg-cyan-400/10 px-3 py-1 font-mono text-xs text-cyan-300">
                      {job.period}
                    </span>
                  </div>
                  <p className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm font-medium text-slate-300">
                    {job.company}
                    <span className="inline-flex items-center gap-1 text-xs text-slate-500">
                      <MapPin className="h-3 w-3" /> {job.location}
                    </span>
                  </p>

                  <ul className="mt-5 space-y-2.5">
                    {job.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-3 text-sm leading-relaxed text-slate-400"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal variant="up">
            <h3 className="mb-10 text-center font-display text-2xl font-bold text-white sm:text-3xl">
              Notable products I&apos;ve contributed to{" "}
              <span className="text-gradient-technonext">TechnoNext</span>
            </h3>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {profile.workProjects.map((project, i) => (
              <Reveal key={project.name} delay={(i % 3) * 0.08} variant="up">
                <div className="glass group flex h-full flex-col overflow-hidden rounded-3xl transition-all hover:-translate-y-1 hover:border-violet-400/30">
                  <div className="relative h-36 shrink-0 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-ink-950/70 via-transparent to-transparent" />
                    <span className="absolute bottom-3 left-6 font-mono text-xs uppercase tracking-[0.2em] text-violet-200">
                      {project.name}
                    </span>
                    <ArrowUpRight className="absolute right-4 top-4 h-4 w-4 text-white/70 transition-colors group-hover:text-cyan-300" />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="mb-4 text-sm font-semibold text-white">
                      {project.tagline}
                    </p>
                    {project.liveUrl && (
                      <Link
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mb-4 inline-flex w-fit items-center gap-1.5 rounded-full border border-cyan-400/20 bg-cyan-400/6 px-3 py-1.5 text-xs font-semibold text-cyan-300 transition-colors hover:border-cyan-400/50 hover:text-white"
                      >
                        Visit live site <ArrowUpRight className="h-3.5 w-3.5" />
                      </Link>
                    )}
                    <ul className="mb-6 flex-1 space-y-2">
                      {project.overview.slice(0, 2).map((o) => (
                        <li
                          key={o.slice(0, 40)}
                          className="text-sm leading-relaxed text-slate-400"
                        >
                          {o}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2 border-t border-white/5 pt-4">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-white/10 px-2.5 py-1 text-[11px] text-slate-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
