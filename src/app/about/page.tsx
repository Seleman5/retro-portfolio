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
                      I&apos;m Seleman Shinwarie, a Toronto-based software
                      developer with a Bachelor of Computer Science from
                      Carleton University. I enjoy building practical, reliable
                      software that solves real problems, from full-stack web
                      applications to mobile app experiences and API-driven
                      systems.
                    </p>
                    <p className="mt-5 max-w-2xl text-base leading-8 text-slate-100/78 sm:text-lg">
                      My background includes hands-on development with React,
                      Next.js, Node.js, Express, JavaScript, Java, SQL, and
                      modern development workflows. I like working across the
                      stack, connecting frontend interfaces with backend logic,
                      databases, and clean user-focused functionality.
                    </p>
                    <p className="mt-5 max-w-2xl text-base leading-8 text-slate-100/78 sm:text-lg">
                      Alongside development, I bring a strong quality
                      engineering mindset from working with automation, API
                      validation, SQL verification, debugging, and production
                      release support. That experience helps me build software
                      with reliability, maintainability, and real-world users in
                      mind.
                    </p>
                    <div className="mt-6 grid gap-3 sm:grid-cols-2">
                      {[
                        "Full-stack application development",
                        "API-driven software",
                        "Clean, user-focused interfaces",
                        "Reliable and maintainable systems",
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
