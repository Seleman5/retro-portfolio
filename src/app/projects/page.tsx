import type { Metadata } from "next";
import Link from "next/link";

const projects = [
  {
    number: "01",
    name: "TTC Route Alerts",
    platform: "iOS / SwiftUI",
    description:
      "An iOS app that lets users save TTC routes and view live service alerts only for the routes they care about.",
    highlights: [
      "Built with SwiftUI",
      "Fetches TTC GTFS-Realtime alert data",
      "Decodes alert feeds with SwiftProtobuf",
      "Saves user-selected routes locally",
      "Matches alerts using route-number logic and subway aliases",
      "Includes normal, minor alert, and major alert severity states",
      "Supports manual refresh and pull-to-refresh",
      "Designed with a clean TTC-inspired UI",
    ],
  },
  {
    number: "02",
    name: "Retro Portfolio",
    platform: "Web / Next.js",
    description:
      "A personal portfolio website built with Next.js, TypeScript, and Tailwind CSS, designed as a professional retro CRT computer interface.",
    highlights: [
      "Built with the Next.js App Router",
      "Uses responsive CSS and Tailwind styling",
      "Includes separate About, Experience, Projects, Skills, and Contact pages",
      "Uses a custom beige CRT-inspired design",
      "Focused on clean UI, personality, and professional presentation",
    ],
  },
];

export const metadata: Metadata = {
  title: "Projects | Seleman Shinwarie",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,#29313f_0%,#12151b_42%,#050609_100%)] px-4 py-8 text-slate-100 sm:px-6 lg:px-8">
      <div className="mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-6xl flex-col items-center justify-center gap-6">
        <div className="crt-monitor w-full max-w-5xl" aria-label="Projects portfolio monitor">
          <div className="crt-topbar">
            <span className="crt-vent" />
            <span className="crt-brand">SELEMAN.SYSTEM</span>
            <span className="crt-power" aria-hidden="true" />
          </div>

          <div className="crt-bezel">
            <div className="crt-screen">
              <div className="crt-scanlines" aria-hidden="true" />
              <div className="crt-glow" aria-hidden="true" />

              <div className="relative z-10 flex min-h-[min(62vh,680px)] flex-col p-5 text-[#d8fff0] sm:p-7 lg:p-10">
                <div className="flex flex-col gap-4 border-b border-emerald-200/15 pb-5 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.28em] text-amber-200/80">
                      03 // Project archive
                    </p>
                    <h1 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
                      Projects
                    </h1>
                  </div>
                  <div className="flex flex-col items-start gap-3 sm:items-end">
                    <Link
                      className="inline-flex w-fit items-center justify-center rounded-sm border border-emerald-200/60 bg-emerald-200/10 px-4 py-2 font-mono text-xs font-bold uppercase tracking-[0.16em] text-emerald-100 transition hover:bg-emerald-200/20 focus:outline-none focus:ring-2 focus:ring-emerald-100"
                      href="/"
                    >
                      ← Home
                    </Link>
                    <p className="font-mono text-xs uppercase tracking-[0.16em] text-emerald-100/65">
                      02 entries loaded
                    </p>
                  </div>
                </div>

                <div className="mt-5 grid gap-4 xl:grid-cols-2">
                  {projects.map((project) => (
                    <article
                      className="rounded-sm border border-emerald-200/18 bg-slate-950/35 p-5 shadow-[inset_0_0_24px_rgba(16,185,129,0.04)]"
                      key={project.name}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <h2 className="text-xl font-semibold text-white">
                          {project.name}
                        </h2>
                        <span className="font-mono text-xs font-bold tracking-[0.2em] text-amber-200/80">
                          {project.number}
                        </span>
                      </div>
                      <p className="mt-2 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-emerald-200/75">
                        {project.platform}
                      </p>
                      <p className="mt-4 text-sm leading-6 text-slate-100/82">
                        {project.description}
                      </p>
                      <div className="mt-5 border-t border-emerald-200/12 pt-4">
                        <p className="font-mono text-[0.68rem] font-bold uppercase tracking-[0.18em] text-amber-200/80">
                          Highlights
                        </p>
                        <ul className="mt-3 grid gap-2 text-sm leading-5 text-slate-100/76">
                          {project.highlights.map((highlight) => (
                            <li className="flex gap-2" key={highlight}>
                              <span aria-hidden="true" className="text-emerald-300">
                                ›
                              </span>
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </article>
                  ))}
                </div>

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
