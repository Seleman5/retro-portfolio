import type { Metadata } from "next";
import Link from "next/link";

const navItems = [
  { label: "About", href: "/about" },
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/projects" },
  { label: "Skills", href: "/skills" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/contact" },
];

export const metadata: Metadata = {
  title: "Seleman Shinwarie | Software Test Engineer / Developer",
  description:
    "Professional portfolio for Seleman Shinwarie, a Software Test Engineer and Developer.",
};

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,#29313f_0%,#12151b_42%,#050609_100%)] px-4 py-8 text-slate-100 sm:px-6 lg:px-8">
      <div className="mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-6xl flex-col items-center justify-center gap-6">
        <div className="crt-monitor w-full max-w-5xl" aria-label="Retro CRT portfolio monitor">
          <div className="crt-topbar">
            <span className="crt-vent" />
            <span className="crt-brand">SELEMAN.SYSTEM</span>
            <span className="crt-power" aria-hidden="true" />
          </div>

          <div className="crt-bezel">
            <div className="crt-screen">
              <div className="crt-scanlines" aria-hidden="true" />
              <div className="crt-glow" aria-hidden="true" />

              <div className="relative z-10 flex min-h-[min(68vh,690px)] flex-col gap-8 p-5 text-[#d8fff0] sm:p-7 lg:p-10">
                <nav
                  className="flex flex-wrap items-center gap-2 border-b border-emerald-200/15 pb-4 text-xs font-semibold uppercase tracking-[0.12em] text-emerald-100/75 sm:gap-3 sm:tracking-[0.2em]"
                  aria-label="Portfolio sections"
                >
                  {navItems.map((item) => (
                    <Link
                      className="rounded-sm border border-emerald-200/10 bg-emerald-200/[0.03] px-2.5 py-1.5 transition hover:border-emerald-200/35 hover:bg-emerald-200/10 hover:text-emerald-50 focus:outline-none focus:ring-2 focus:ring-emerald-200/45"
                      href={item.href}
                      key={item.href}
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>

                <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
                  <div className="max-w-3xl">
                    <p className="mb-4 font-mono text-xs uppercase tracking-[0.28em] text-amber-200/80">
                      Portfolio boot sequence complete
                    </p>
                    <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                      Seleman Shinwarie
                    </h1>
                    <p className="mt-3 font-mono text-xs uppercase tracking-[0.12em] text-emerald-200 sm:text-base sm:tracking-[0.22em]">
                      Software Developer · Quality Engineering
                    </p>
                  </div>

                  <aside className="border-l border-emerald-200/15 pl-5 font-mono text-xs uppercase tracking-[0.18em] text-emerald-100/70 sm:text-sm">
                    <p className="text-emerald-200">Status</p>
                    <dl className="mt-4 grid gap-3">
                      <div className="flex items-center justify-between gap-4 border-b border-emerald-200/10 pb-2">
                        <dt>Focus</dt>
                        <dd className="text-right text-white">
                          Development + Quality
                        </dd>
                      </div>
                      <div className="flex items-center justify-between gap-4 border-b border-emerald-200/10 pb-2">
                        <dt>Mode</dt>
                        <dd className="text-right text-white">
                          Building Full-Stack Apps
                        </dd>
                      </div>
                      <div className="flex items-center justify-between gap-4 border-b border-emerald-200/10 pb-2">
                        <dt>Status</dt>
                        <dd className="text-right text-white">
                          Quality-Driven Engineer
                        </dd>
                      </div>
                    </dl>
                  </aside>
                </section>
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
