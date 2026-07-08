import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | Seleman Shinwarie",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,#29313f_0%,#12151b_42%,#050609_100%)] px-4 py-8 text-slate-100 sm:px-6 lg:px-8">
      <div className="mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-5xl flex-col items-center justify-center gap-6">
        <div className="crt-monitor w-full" aria-label="About portfolio monitor">
          <div className="crt-topbar">
            <span className="crt-vent" />
            <span className="crt-brand">SELEMAN.SYSTEM</span>
            <span className="crt-power" aria-hidden="true" />
          </div>

          <div className="crt-bezel">
            <div className="crt-screen">
              <div className="crt-scanlines" aria-hidden="true" />
              <div className="crt-glow" aria-hidden="true" />

              <div className="relative z-10 flex min-h-[min(62vh,660px)] flex-col p-5 text-[#d8fff0] sm:p-8 lg:p-12">
                <div className="flex flex-col gap-4 border-b border-emerald-200/15 pb-5 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.28em] text-amber-200/80">
                      01 // System profile
                    </p>
                    <h1 className="mt-3 text-4xl font-bold text-white sm:text-5xl">
                      About
                    </h1>
                  </div>
                  <Link
                    className="inline-flex w-fit items-center justify-center rounded-sm border border-emerald-200/60 bg-emerald-200/10 px-4 py-2 font-mono text-xs font-bold uppercase tracking-[0.16em] text-emerald-100 transition hover:bg-emerald-200/20 focus:outline-none focus:ring-2 focus:ring-emerald-100"
                    href="/"
                  >
                    ← Home
                  </Link>
                </div>

                <section className="my-auto grid gap-8 py-7 md:grid-cols-[minmax(180px,240px)_1fr] md:items-center lg:gap-10">
                  <div className="mx-auto w-full max-w-[220px] md:mx-0">
                    <div className="rounded-md border border-emerald-200/22 bg-[#d8cfad]/15 p-2 shadow-[0_0_28px_rgba(16,185,129,0.14),inset_0_0_18px_rgba(251,191,36,0.06)]">
                      <div className="relative aspect-square overflow-hidden rounded-sm border border-amber-100/25 bg-slate-950/45 shadow-[inset_0_0_28px_rgba(2,6,23,0.46)]">
                        <Image
                          alt="Seleman Shinwarie"
                          className="scale-125 object-cover"
                          fill
                          priority
                          sizes="(max-width: 768px) 220px, 240px"
                          src="/profile.png"
                          style={{ objectPosition: "center 18%" }}
                        />
                        <div
                          aria-hidden="true"
                          className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),transparent_34%,rgba(2,6,23,0.2))]"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className="max-w-2xl text-base leading-8 text-slate-100/86 sm:text-lg">
                      I&apos;m a Toronto-based software developer with a
                      Computer Science degree from Carleton University. My work
                      brings together full-stack development, quality
                      engineering, and automation with a strong focus on
                      building reliable, polished applications.
                    </p>
                    <p className="mt-5 max-w-2xl text-base leading-8 text-slate-100/78 sm:text-lg">
                      I have hands-on experience with frontend and backend
                      development, API testing, SQL validation, debugging, and
                      delivery workflows. I enjoy turning requirements into
                      clean user experiences and dependable software behavior.
                    </p>
                    <div className="mt-6 grid gap-3 sm:grid-cols-2">
                      {[
                        "Full-stack development",
                        "Quality engineering",
                        "API testing",
                        "SQL validation",
                        "Debugging",
                        "User-focused applications",
                      ].map((item) => (
                        <div
                          className="rounded-sm border border-emerald-200/14 bg-slate-950/30 px-3 py-2 font-mono text-xs uppercase tracking-[0.12em] text-emerald-100/75"
                          key={item}
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
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
