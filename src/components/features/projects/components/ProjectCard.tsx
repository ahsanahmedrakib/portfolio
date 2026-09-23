import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ExternalLink, Star } from "lucide-react";
import type { Project } from "../data/projects.data";
import { cn } from "@/lib/utils";
import { GithubIcon } from "@/components/icons";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="glass spotlight group relative flex h-full flex-col overflow-hidden rounded-3xl transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan-400/30 hover:shadow-[0_20px_60px_-20px_rgba(34,211,238,0.25)]">
      <Link
        href={`/projects/${project.slug}`}
        aria-label={`View case study: ${project.name}`}
        className="absolute inset-0 z-10"
      />
      <div className="relative h-44 overflow-hidden">
        {project.image ? (
          <>
            <Image
              src={project.image}
              alt={project.name}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-linear-to-t from-ink-950/70 via-transparent to-transparent" />
          </>
        ) : (
          <div
            className={cn(
              "relative flex h-44 items-center justify-center bg-linear-to-br p-6",
              project.gradient,
            )}
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.28),transparent_55%)]" />
            <div className="absolute inset-0 bg-grid opacity-20" />
            <div className="relative flex h-20 w-20 -rotate-3 items-center justify-center rounded-2xl border border-white/40 bg-white/15 font-display text-2xl font-bold text-white shadow-xl backdrop-blur transition-transform duration-300 group-hover:rotate-0 group-hover:scale-110">
              {project.monogram}
            </div>
          </div>
        )}
        <div className="absolute left-4 top-4 flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-white/50" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/50" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/50" />
        </div>
        <div className="absolute right-4 top-4 rounded-full bg-ink-950/40 px-2.5 py-1 font-mono text-[11px] font-medium text-white backdrop-blur">
          {project.category}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-2 flex items-center justify-between gap-2">
          <span className="rounded-full bg-white/5 px-3 py-1 font-mono text-xs text-cyan-300">
            {project.year} · {project.language}
          </span>
          <span className="inline-flex items-center gap-1 text-xs text-slate-500">
            <Star className="h-3.5 w-3.5 text-amber-400" /> Featured
          </span>
        </div>

        <h3 className="font-display text-lg font-bold text-white transition-colors group-hover:text-cyan-300">
          {project.name}
        </h3>
        <p className="mt-2 min-h-13 flex-1 text-sm leading-relaxed text-slate-400 line-clamp-2">
          {project.tagline}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/10 px-2.5 py-1 text-[11px] text-slate-400"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-5 flex items-center gap-3 border-t border-white/5 pt-4">
          <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-300">
            View case study <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </span>
          <span className="ml-auto flex items-center gap-2">
            {project.liveUrl && (
              <Link
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                aria-label="Live site"
                className="relative z-20 grid h-8 w-8 place-items-center rounded-lg border border-white/10 text-slate-300 transition-colors hover:border-emerald-400/40 hover:text-emerald-300"
              >
                <ExternalLink className="h-4 w-4" />
              </Link>
            )}
            {project.repoUrl && (
              <Link
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                aria-label="Repository"
                className="relative z-20 grid h-8 w-8 place-items-center rounded-lg border border-white/10 text-slate-300 transition-colors hover:border-cyan-400/40 hover:text-cyan-300"
              >
                <GithubIcon className="h-4 w-4" />
              </Link>
            )}
          </span>
        </div>
      </div>
    </div>
  );
}