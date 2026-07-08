import type { Metadata } from "next";
import Link from "next/link";

const skillGroups = [
  {
    title: "Languages",
    tone: "Experienced with core programming and scripting languages.",
    skills: ["Java", "JavaScript", "TypeScript", "Python", "SQL", "C", "C++"],
  },
  {
    title: "Frontend",
    tone: "Hands-on with modern, responsive web interfaces.",
    skills: [
      "React",
      "Next.js",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Responsive design",
      "Component-based UI development",
    ],
  },
  {
    title: "Backend & APIs",
    tone: "Working knowledge of API-driven application development.",
    skills: [
      "Node.js",
      "Express",
      "RESTful APIs",
      "API design and integration",
      "JWT authentication",
      "MVC architecture",
      "Backend workflow validation",
    ],
  },
  {
    title: "Databases",
    tone: "Hands-on with relational and NoSQL data workflows.",
    skills: [
      "PostgreSQL",
      "MongoDB",
      "Firestore",
      "Relational data modeling",
      "NoSQL data modeling",
      "SQL queries and backend data validation",
    ],
  },
  {
    title: "Testing & Quality Engineering",
    tone: "Experienced with quality-focused delivery and validation.",
    skills: [
      "Selenium",
      "Postman",
      "API testing",
      "Test automation",
      "Regression testing",
      "UI testing",
      "Defect investigation",
      "Root-cause analysis",
      "End-to-end workflow validation",
    ],
  },
  {
    title: "Tools & Workflow",
    tone: "Comfortable working across collaborative delivery workflows.",
    skills: [
      "Git",
      "GitHub",
      "CI/CD pipelines",
      "Agile/Scrum",
      "Jira",
      "Confluence",
      "Debugging",
      "Code reviews",
      "Release support",
    ],
  },
  {
    title: "Mobile & App Development",
    tone: "Hands-on with iOS application development and live data handling.",
    skills: [
      "Swift",
      "SwiftUI",
      "Xcode",
      "iOS app development",
      "Local data persistence",
      "GTFS-Realtime data handling",
      "SwiftProtobuf",
    ],
  },
  {
    title: "Cloud & Security",
    tone: "Familiar with cloud support and secure development fundamentals.",
    skills: [
      "AWS fundamentals",
      "Cloud support concepts",
      "Cybersecurity fundamentals",
      "Authentication concepts",
      "Secure development awareness",
    ],
  },
];

const specialties = [
  "Full-stack web development",
  "API testing and integration",
  "Quality engineering",
  "Test automation",
  "SQL-based validation",
  "Debugging and defect analysis",
  "User-focused application development",
  "Production release support",
];

export const metadata: Metadata = {
  title: "Skills | Seleman Shinwarie",
};

export default function SkillsPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,#29313f_0%,#12151b_42%,#050609_100%)] px-4 py-8 text-slate-100 sm:px-6 lg:px-8">
      <div className="mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-6xl flex-col items-center justify-center gap-6">
        <div className="crt-monitor w-full max-w-5xl" aria-label="Skills portfolio monitor">
          <div className="crt-topbar">
            <span className="crt-vent" />
            <span className="crt-brand">SELEMAN.SYSTEM</span>
            <span className="crt-power" aria-hidden="true" />
          </div>

          <div className="crt-bezel">
            <div className="crt-screen">
              <div className="crt-scanlines" aria-hidden="true" />
              <div className="crt-glow" aria-hidden="true" />

              <div className="relative z-10 flex min-h-[min(74vh,840px)] flex-col p-5 text-[#d8fff0] sm:p-7 lg:p-10">
                <div className="border-b border-emerald-200/15 pb-5">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="font-mono text-xs uppercase tracking-[0.28em] text-amber-200/80">
                        04 // Toolkit
                      </p>
                      <h1 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
                        Skills
                      </h1>
                    </div>
                    <Link
                      className="inline-flex w-fit items-center justify-center rounded-sm border border-emerald-200/60 bg-emerald-200/10 px-4 py-2 font-mono text-xs font-bold uppercase tracking-[0.16em] text-emerald-100 transition hover:bg-emerald-200/20 focus:outline-none focus:ring-2 focus:ring-emerald-100"
                      href="/"
                    >
                      ← Home
                    </Link>
                  </div>
                  <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-100/82 sm:text-base">
                    My technical skills span full-stack development, automation,
                    API testing, databases, debugging, and quality-focused
                    software delivery.
                  </p>
                </div>

                <div className="mt-5 grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
                  {skillGroups.map((group) => (
                    <article
                      className="rounded-sm border border-emerald-200/18 bg-slate-950/35 p-5 shadow-[inset_0_0_24px_rgba(16,185,129,0.04)]"
                      key={group.title}
                    >
                      <h2 className="text-lg font-semibold text-white">
                        {group.title}
                      </h2>
                      <p className="mt-2 font-mono text-[0.68rem] uppercase leading-5 tracking-[0.14em] text-amber-200/75">
                        {group.tone}
                      </p>
                      <ul className="mt-4 flex flex-wrap gap-2">
                        {group.skills.map((skill) => (
                          <li
                            className="rounded-sm border border-emerald-200/14 bg-emerald-200/[0.04] px-2.5 py-1.5 text-xs leading-5 text-slate-100/82"
                            key={skill}
                          >
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </article>
                  ))}
                </div>

                <section className="mt-4 rounded-sm border border-emerald-200/18 bg-slate-950/30 p-5 shadow-[inset_0_0_24px_rgba(16,185,129,0.035)]">
                  <div className="flex flex-wrap items-end justify-between gap-3">
                    <div>
                      <p className="font-mono text-[0.68rem] font-bold uppercase tracking-[0.18em] text-amber-200/80">
                        Specialties
                      </p>
                      <h2 className="mt-2 text-lg font-semibold text-white">
                        Development and delivery strengths
                      </h2>
                    </div>
                    <p className="font-mono text-xs uppercase tracking-[0.16em] text-emerald-100/60">
                      Quality-driven build mode
                    </p>
                  </div>

                  <ul className="mt-4 grid gap-2 text-sm leading-5 text-slate-100/76 sm:grid-cols-2 lg:grid-cols-4">
                    {specialties.map((specialty) => (
                      <li className="flex gap-2" key={specialty}>
                        <span aria-hidden="true" className="text-emerald-300">
                          ›
                        </span>
                        <span>{specialty}</span>
                      </li>
                    ))}
                  </ul>
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
