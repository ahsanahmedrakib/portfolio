import Image from "next/image";
import { Sparkles, Workflow } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const tools = [
  {
    image: "/ai/opencode.png",
    name: "opencode CLI",
    role: "Terminal-based coding agent",
    accent: "hover:border-cyan-400/40",
  },
  {
    image: "/ai/claude.png",
    name: "Claude CLI",
    role: "Design, code & debug assistant",
    accent: "hover:border-orange-400/40",
  },
  {
    image: "/ai/gpt.png",
    name: "ChatGPT",
    role: "Ideation & problem solving",
    accent: "hover:border-emerald-400/40",
  },
  {
    image: "/ai/grok.png",
    name: "Grok",
    role: "Reasoning & research",
    accent: "hover:border-violet-400/40",
  },
  {
    image: "/ai/mcp.png",
    name: "MCP Servers",
    role: "Tools & context for agents",
    accent: "hover:border-fuchsia-400/40",
  },
  {
    image: "/ai/llm.png",
    name: "LLM Orchestration",
    role: "Multi-agent workflows",
    accent: "hover:border-sky-400/40",
  },
];

const workflow = [
  {
    step: "01",
    title: "Plan with context",
    description:
      "I load rich project context into the agent — architecture, conventions, and requirements — to keep every step grounded in the real codebase.",
  },
  {
    step: "02",
    title: "Build with agents",
    description:
      "opencode, Claude CLI, and other agents scaffold, implement, and refactor features autonomously while I guide the direction.",
  },
  {
    step: "03",
    title: "Debug & refine",
    description:
      "AI agents trace failures, suggest fixes, and run tests — turning long debugging cycles into minutes.",
  },
  {
    step: "04",
    title: "Review & ship",
    description:
      "I verify every commit, run lint and builds, and ship production-grade results — faster, without cutting quality.",
  },
];

export function AgenticDev() {
  return (
    <section id="agentic" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="AI Agentic Development"
          title={
            <>
              I write code <span className="text-gradient">smarter with AI agents</span>
            </>
          }
          description="By orchestrating opencode, Claude CLI, ChatGPT, and Grok — connected through MCP servers and LLM orchestration — I've shipped 7+ complete production projects with AI agents at the core of every workflow."
        />

        <div className="mx-auto mb-14 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3">
          {[
            { value: "7+", label: "Projects shipped with AI agents" },
            { value: "4×", label: "Faster feature delivery" },
            { value: "100%", label: "AI-driven from design to deploy" },
          ].map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.08} variant="up">
              <div className="glass rounded-2xl p-5 text-center transition-colors hover:border-cyan-400/30">
                <p className="font-display text-3xl font-bold">
                  <span className="text-gradient">{stat.value}</span>
                </p>
                <p className="mt-1 text-xs text-slate-400">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mb-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map(({ image, name, role, accent }, i) => (
            <Reveal key={name} delay={(i % 3) * 0.08} variant="up">
              <div
                className={`glass group h-full rounded-3xl p-6 transition-all hover:-translate-y-1 ${accent}`}
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white p-1.5">
                  <div className="relative h-full w-full">
                    <Image
                      src={image}
                      alt={name}
                      fill
                      sizes="36px"
                      className="object-contain"
                    />
                  </div>
                </div>
                <p className="font-display text-base font-bold text-white">{name}</p>
                <p className="mt-1 text-sm text-slate-400">{role}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal variant="up">
          <div className="glass overflow-hidden rounded-3xl">
            <div className="flex items-center gap-3 border-b border-white/5 px-7 py-5">
              <Sparkles className="h-5 w-5 text-cyan-300" />
              <h3 className="font-display text-lg font-bold text-white">
                My agentic workflow
              </h3>
            </div>
            <div className="grid gap-px bg-white/5 sm:grid-cols-2 lg:grid-cols-4">
              {workflow.map(({ step, title, description }) => (
                <div key={step} className="bg-ink-900/80 p-7">
                  <p className="mb-3 flex items-center gap-2 font-mono text-xs text-cyan-300">
                    <Workflow className="h-4 w-4" /> Step {step}
                  </p>
                  <p className="font-display text-base font-bold text-white">{title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}