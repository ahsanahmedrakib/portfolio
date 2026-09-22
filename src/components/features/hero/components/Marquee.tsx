const items = [
  "React.js",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "NestJS",
  "Express.js",
  "MongoDB",
  "REST API",
  "Swagger",
  "Node.js",
  "Git & GitHub",
  "Vite",
  "Framer Motion",
];

export function Marquee() {
  const row = [...items, ...items];

  return (
    <div className="group relative overflow-hidden border-y border-white/5 bg-white/[0.02] py-5 [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
      <div className="animate-marquee group-hover:[animation-play-state:paused] flex w-max items-center gap-10 whitespace-nowrap">
        {row.map((item, i) => (
          <span key={`${item}-${i}`} className="group/flag flex items-center gap-10">
            <span className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 transition-colors group-hover/flag:text-slate-300">
              {item}
            </span>
            <span className="h-1.5 w-1.5 rotate-45 rounded-sm bg-gradient-to-br from-cyan-400 to-violet-500 transition-transform duration-300 group-hover/flag:rotate-[135deg]" />
          </span>
        ))}
      </div>
    </div>
  );
}