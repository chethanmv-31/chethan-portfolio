export function HeroImage() {
  return (
    <div className="relative flex justify-center animate-float">
      <div className="absolute h-80 w-80 rounded-full bg-gradient-to-br from-blue-500/20 via-cyan-500/20 to-violet-500/20 blur-3xl" />

      <div className="relative flex h-[420px] w-[340px] flex-col items-center justify-center rounded-3xl border border-white/10 bg-white/[0.06] p-8 shadow-2xl shadow-black/30 backdrop-blur-2xl backdrop-saturate-150">
        <div className="flex h-40 w-40 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-6xl shadow-inner">
          👨‍💻
        </div>

        <h3 className="mt-8 text-2xl font-bold text-white">
          Chethan MV
        </h3>

        <p className="mt-2 text-zinc-400">
          Frontend Engineer
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          <span className="rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1 text-sm text-blue-400">
            React
          </span>

          <span className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-3 py-1 text-sm text-cyan-400">
            Next.js
          </span>

          <span className="rounded-full border border-violet-400/20 bg-violet-500/10 px-3 py-1 text-sm text-violet-400">
            TypeScript
          </span>
        </div>
      </div>
    </div>
  );
}