import Link from "next/link";

type PortfolioPageProps = {
  title: string;
  eyebrow: string;
  description: string;
};

export default function PortfolioPage({
  title,
  eyebrow,
  description,
}: PortfolioPageProps) {
  return (
    <main className="min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,#29313f_0%,#12151b_42%,#050609_100%)] px-4 py-8 text-slate-100 sm:px-6 lg:px-8">
      <div className="mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-5xl flex-col items-center justify-center gap-6">
        <div className="crt-monitor w-full" aria-label={`${title} portfolio monitor`}>
          <div className="crt-topbar">
            <span className="crt-vent" />
            <span className="crt-brand">SELEMAN.SYSTEM</span>
            <span className="crt-power" aria-hidden="true" />
          </div>

          <div className="crt-bezel">
            <div className="crt-screen">
              <div className="crt-scanlines" aria-hidden="true" />
              <div className="crt-glow" aria-hidden="true" />

              <div className="relative z-10 flex min-h-[min(52vh,520px)] flex-col justify-center p-5 sm:p-8 lg:p-12">
                <p className="font-mono text-xs uppercase tracking-[0.28em] text-amber-200/80">
                  {eyebrow}
                </p>
                <h1 className="mt-5 text-4xl font-bold text-white sm:text-5xl">
                  {title}
                </h1>
                <p className="mt-6 max-w-2xl text-base leading-8 text-slate-100/86 sm:text-lg">
                  {description}
                </p>
                <Link
                  className="mt-9 inline-flex w-fit items-center justify-center rounded-sm border border-emerald-200/60 bg-emerald-200/10 px-5 py-3 font-mono text-xs font-bold uppercase tracking-[0.16em] text-emerald-100 transition hover:bg-emerald-200/20 focus:outline-none focus:ring-2 focus:ring-emerald-100"
                  href="/"
                >
                  ← Home
                </Link>
              </div>
            </div>
          </div>

          <div className="crt-controls" aria-hidden="true">
            <span />
            <span />
            <span />
            <span className="crt-knob" />
          </div>
        </div>

        <div className="crt-neck" aria-hidden="true" />
        <div className="crt-base" aria-hidden="true" />
      </div>
    </main>
  );
}
