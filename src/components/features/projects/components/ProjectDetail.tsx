import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  ExternalLink,
  Layers,
  ListChecks,
  Sparkles,
  Target,
} from "lucide-react";
import type { Project } from "../data/projects.data";
import { cn } from "@/lib/utils";
import { GithubIcon } from "@/components/icons";
import { Reveal } from "@/components/ui/Reveal";

export function ProjectDetail({ project }: { project: Project }) {
  return (
    <article className="relative overflow-hidden pt-24">
      <div className="mx-auto max-w-5xl px-5 pb-24 sm:px-8">
        <Link
          href="/#projects"
          className="mb-8 inline-flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-cyan-300"
        >
          <ArrowLeft className="h-4 w-4" /> Back to projects
        </Link>

        <div
          className={cn(
            "relative mb-14 flex min-h-88 items-center justify-center overflow-hidden rounded-3xl bg-linear-to-br p-10 sm:min-h-104 sm:p-14",
            !project.image && project.gradient,
          )}
        >
          {project.image ? (
            <>
              <Image
                src={project.image}
                alt={`${project.name} cover`}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 64rem"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-ink-950 via-ink-950/80 to-ink-950/45" />
              <div className="absolute inset-0 bg-linear-to-br from-ink-950/70 via-transparent to-ink-950/50" />
            </>
          ) : (
            <>
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.3),transparent_55%)]" />
              <div className="bg-grid absolute inset-0 opacity-20" />
            </>
          )}
          <div className="absolute left-6 top-6 flex items-center gap-1.5">
            <span className="h-3 w-3 rounded-full bg-white/60" />
            <span className="h-3 w-3 rounded-full bg-white/60" />
            <span className="h-3 w-3 rounded-full bg-white/60" />
          </div>
          <div className="absolute right-6 top-6 rounded-full bg-ink-950/40 px-4 py-1.5 font-mono text-xs text-white backdrop-blur">
            {project.year} · {project.language}
          </div>

          <div className="relative text-center">
            <Reveal variant="scale" className="mx-auto mb-6 w-fit">
              <div className="flex h-24 w-24 items-center justify-center rounded-3xl border border-white/40 bg-white/15 font-display text-3xl font-bold text-white shadow-2xl backdrop-blur">
                {project.monogram}
              </div>
            </Reveal>
            <p className="mb-2 font-mono text-xs uppercase tracking-[0.3em] text-white/80">
              {project.category}
            </p>
            <h1 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
              {project.name}
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/85 sm:text-base">
              {project.tagline}
            </p>
          </div>
        </div>

        <div className="mb-10 flex flex-wrap items-center justify-center gap-3">
          {project.liveUrl && (
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-sheen inline-flex items-center gap-2 rounded-full bg-linear-to-r from-cyan-500 to-violet-500 px-6 py-3 text-sm font-semibold text-white transition-all hover:shadow-[0_0_24px_rgba(34,211,238,0.5)]"
            >
              <ExternalLink className="h-4 w-4" /> Visit Live Site
            </Link>
          )}
          {project.repoUrl && (
            <Link
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-slate-200 transition-colors hover:border-cyan-400/50 hover:text-white"
            >
              <GithubIcon className="h-4 w-4" /> Source Code
            </Link>
          )}
        </div>

        <TechStack stack={project.stack} />

        <Reveal variant="up">
          <section className="mb-14">
            <SectionTitle icon={Sparkles} label="Overview" title="What this project is">
              {project.overview.map((p) => (
                <p key={p.slice(0, 32)}>{p}</p>
              ))}
            </SectionTitle>
          </section>
        </Reveal>

        <Reveal variant="up">
          <section className="mb-14">
            <SectionTitle icon={Target} label="My Role" title="Where I added value" noParagraph>
              <ul className="space-y-2.5">
                {project.role.map((item) => (
                  <li key={item} className="flex items-start gap-3 leading-relaxed">
                    <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-cyan-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </SectionTitle>
          </section>
        </Reveal>

        <Reveal variant="up">
          <section className="mb-14">
            <SectionTitle icon={ListChecks} label="Responsibilities" title="What I built & owned" noParagraph>
              <ul className="grid gap-3 sm:grid-cols-2">
                {project.responsibilities.map((item) => (
                  <li
                    key={item.slice(0, 24)}
                    className="glass flex items-start gap-3 rounded-2xl p-4 text-sm leading-relaxed"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </SectionTitle>
          </section>
        </Reveal>

        <Reveal variant="up">
          <section className="mb-14">
            <SectionTitle icon={Layers} label="Features" title="Everything shipped" noParagraph>
              <div className="grid gap-3 sm:grid-cols-2">
                {project.features.map((feature) => (
                  <div
                    key={feature.slice(0, 32)}
                    className="glass flex items-start gap-3 rounded-2xl p-4 text-sm leading-relaxed"
                  >
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-cyan-400/20 to-violet-400/20 font-mono text-xs text-cyan-300">
                      ✓
                    </span>
                    {feature}
                  </div>
                ))}
              </div>
            </SectionTitle>
          </section>
        </Reveal>

        <Reveal variant="up">
          <section className="mb-14">
            <SectionTitle
              icon={Sparkles}
              label="Key Highlights"
              title="Why this project stands out"
              noParagraph
            >
              <div className="grid gap-4 sm:grid-cols-3">
                {project.highlights.map((h) => (
                  <div
                    key={h.title}
                    className="glass group rounded-3xl p-6 transition-colors hover:border-cyan-400/30"
                  >
                    <span className="mb-3 block h-1.5 w-8 rounded-full bg-linear-to-r from-cyan-400 to-violet-500" />
                    <h3 className="mb-2 font-display text-base font-bold text-white">{h.title}</h3>
                    <p className="text-sm leading-relaxed text-slate-400">{h.description}</p>
                  </div>
                ))}
              </div>
            </SectionTitle>
          </section>
        </Reveal>

        {project.impact && (
          <Reveal variant="up">
            <section className="mb-14">
              <div className="glass relative overflow-hidden rounded-3xl bg-linear-to-r from-cyan-500/10 via-violet-500/10 to-fuchsia-500/10 p-8">
                <div className="bg-grid absolute inset-0 opacity-30" />
                <div className="relative">
                  <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-cyan-300">
                    Outcome
                  </p>
                  <p className="text-base leading-relaxed text-slate-200 sm:text-lg">
                    {project.impact}
                  </p>
                </div>
              </div>
            </section>
          </Reveal>
        )}

        <div className="flex flex-col items-center justify-between gap-4 rounded-3xl border border-white/10 bg-white/2 p-8 sm:flex-row">
          <div>
            <p className="font-display text-lg font-bold text-white">Want to see this live?</p>
            <p className="text-sm text-slate-400">
              {project.liveUrl
                ? "Check out the deployed product or dig into the source code."
                : project.repoUrl
                  ? "Explore the source code on GitHub."
                  : "Reach out anytime to see this project in action."}
            </p>
          </div>
          <div className="flex gap-3">
            {project.liveUrl && (
              <Link
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-sheen inline-flex items-center gap-2 rounded-full bg-linear-to-r from-cyan-500 to-violet-500 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:shadow-[0_0_20px_rgba(34,211,238,0.5)]"
              >
                <ArrowUpRight className="h-4 w-4" /> Live Demo
              </Link>
            )}
            {project.repoUrl && (
              <Link
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold text-slate-200 transition-colors hover:border-cyan-400/50 hover:text-white"
              >
                <GithubIcon className="h-4 w-4" /> Repo
              </Link>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

function SectionTitle({
  icon: Icon,
  label,
  title,
  noParagraph,
  children,
}: {
  icon: typeof Sparkles;
  label: string;
  title: string;
  noParagraph?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-8">
      <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/6 px-3 py-1 font-mono text-xs uppercase tracking-[0.2em] text-cyan-300">
        <Icon className="h-3.5 w-3.5" /> {label}
      </span>
      <h2 className="mb-5 font-display text-2xl font-bold text-white sm:text-3xl">{title}</h2>
      {noParagraph ? (
        children
      ) : (
        <div className="space-y-4 text-base leading-relaxed text-slate-400 sm:text-lg">
          {children}
        </div>
      )}
    </div>
  );
}

function TechStack({ stack }: { stack: string[] }) {
  return (
    <div className="mb-14 flex flex-wrap items-center justify-center gap-2 border-y border-white/5 py-8">
      {stack.map((tech) => (
        <span
          key={tech}
          className="rounded-full border border-white/10 bg-white/4 px-4 py-2 text-xs font-medium text-slate-300 transition-colors hover:border-cyan-400/40 hover:text-white"
        >
          {tech}
        </span>
      ))}
    </div>
  );
}