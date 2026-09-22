export function Background() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)]" />

      <div className="animate-blob absolute -top-32 left-1/2 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-cyan-500/14 blur-[120px]" />
      <div className="animate-blob absolute top-1/3 -left-40 h-[26rem] w-[26rem] rounded-full bg-violet-600/14 blur-[120px] [animation-delay:4s]" />
      <div className="animate-blob absolute bottom-0 right-0 h-[28rem] w-[28rem] rounded-full bg-fuchsia-500/10 blur-[130px] [animation-delay:8s]" />
      <div className="animate-blob absolute top-2/3 left-1/3 h-[22rem] w-[22rem] rounded-full bg-sky-500/10 blur-[110px] [animation-delay:12s]" />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_0%,rgba(4,7,13,0.6)_70%)]" />
    </div>
  );
}