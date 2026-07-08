import type { Metadata } from "next";
import Link from "next/link";

const roles = [
  {
    company: "First National Financial LP",
    role: "Software Engineer - Quality & Automation",
    dates: "Dec 2024 - Present",
    location: "Toronto, ON",
    description:
      "I work in a regulated financial technology environment, focusing on test automation, API validation, SQL-based data verification, defect investigation, and reliable software delivery. My role combines quality engineering with hands-on technical debugging, automation, and collaboration across the software development life cycle.",
    highlights: [
      "Build and maintain automated UI and API test coverage using tools such as Selenium and Postman",
      "Validate REST APIs, business logic, and end-to-end workflows for financial applications",
      "Write SQL queries to verify backend data integrity and support root-cause analysis",
      "Investigate defects, reproduce issues, and collaborate with developers to resolve problems",
      "Support CI/CD and release workflows by helping catch issues earlier in the development process",
      "Participate in Agile sprint work, requirement clarification, regression testing, and release support",
      "Bring a quality-driven engineering mindset to production-facing software systems",
    ],
  },
  {
    company: "Order Group",
    role: "Full Stack Developer",
    dates: "Jan 2022 - May 2024",
    location: "",
    description:
      "Worked on full-stack web application features using modern JavaScript technologies, backend APIs, and database-driven workflows. This experience helped build my foundation in frontend development, backend services, API design, and production-minded software delivery.",
    highlights: [
      "Developed full-stack features using React, Next.js, Node.js, and Express",
      "Built and consumed RESTful APIs supporting authentication, data persistence, and application workflows",
      "Worked with PostgreSQL and Firestore for database-backed features",
      "Improved application performance through frontend refactoring, API optimization, and reducing redundant data transfers",
      "Collaborated with designers and developers to deliver features from implementation through testing and deployment",
      "Gained practical experience across frontend, backend, database, and deployment workflows",
    ],
  },
];

const certifications = [
  "AWS Cloud Support Associate - Professional Certificate",
  "Google Cybersecurity - Professional Certificate",
  "IBM Generative AI Engineering - Professional Certificate",
];

export const metadata: Metadata = {
  title: "Experience | Seleman Shinwarie",
};

export default function ExperiencePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,#29313f_0%,#12151b_42%,#050609_100%)] px-4 py-8 text-slate-100 sm:px-6 lg:px-8">
      <div className="mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-6xl flex-col items-center justify-center gap-6">
        <div className="crt-monitor w-full max-w-5xl" aria-label="Experience portfolio monitor">
          <div className="crt-topbar">
            <span className="crt-vent" />
            <span className="crt-brand">SELEMAN.SYSTEM</span>
            <span className="crt-power" aria-hidden="true" />
          </div>

          <div className="crt-bezel">
            <div className="crt-screen">
              <div className="crt-scanlines" aria-hidden="true" />
              <div className="crt-glow" aria-hidden="true" />

              <div className="relative z-10 flex min-h-[min(70vh,780px)] flex-col p-5 text-[#d8fff0] sm:p-7 lg:p-10">
                <div className="border-b border-emerald-200/15 pb-5">
                  <p className="font-mono text-xs uppercase tracking-[0.28em] text-amber-200/80">
                    02 // Work log
                  </p>
                  <h1 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
                    Experience
                  </h1>
                  <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-100/82 sm:text-base">
                    My experience combines full-stack development, automation,
                    API testing, SQL validation, debugging, and quality-focused
                    software delivery.
                  </p>
                </div>

                <div className="mt-5 grid gap-4">
                  {roles.map((item) => (
                    <article
                      className="rounded-sm border border-emerald-200/18 bg-slate-950/35 p-5 shadow-[inset_0_0_24px_rgba(16,185,129,0.04)]"
                      key={item.company}
                    >
                      <div className="grid gap-3 lg:grid-cols-[1fr_auto] lg:items-start">
                        <div>
                          <p className="font-mono text-[0.68rem] font-bold uppercase tracking-[0.18em] text-amber-200/80">
                            {item.dates}
                          </p>
                          <h2 className="mt-2 text-xl font-semibold text-white">
                            {item.company}
                          </h2>
                          <p className="mt-1 font-mono text-xs uppercase tracking-[0.14em] text-emerald-200/80">
                            {item.role}
                          </p>
                        </div>
                        {item.location ? (
                          <p className="font-mono text-xs uppercase tracking-[0.16em] text-emerald-100/60">
                            {item.location}
                          </p>
                        ) : null}
                      </div>

                      <p className="mt-4 text-sm leading-6 text-slate-100/82">
                        {item.description}
                      </p>

                      <ul className="mt-4 grid gap-2 text-sm leading-5 text-slate-100/76 md:grid-cols-2">
                        {item.highlights.map((highlight) => (
                          <li className="flex gap-2" key={highlight}>
                            <span aria-hidden="true" className="text-emerald-300">
                              ›
                            </span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </article>
                  ))}
                </div>

                <section className="mt-4 grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
                  <article className="rounded-sm border border-emerald-200/18 bg-slate-950/30 p-5 shadow-[inset_0_0_24px_rgba(16,185,129,0.035)]">
                    <p className="font-mono text-[0.68rem] font-bold uppercase tracking-[0.18em] text-amber-200/80">
                      Education
                    </p>
                    <h2 className="mt-2 text-lg font-semibold text-white">
                      Carleton University
                    </h2>
                    <p className="mt-2 text-sm leading-6 text-slate-100/78">
                      Bachelor of Computer Science, 2024
                    </p>
                  </article>

                  <article className="rounded-sm border border-emerald-200/18 bg-slate-950/30 p-5 shadow-[inset_0_0_24px_rgba(16,185,129,0.035)]">
                    <p className="font-mono text-[0.68rem] font-bold uppercase tracking-[0.18em] text-amber-200/80">
                      Certifications
                    </p>
                    <ul className="mt-3 grid gap-2 text-sm leading-5 text-slate-100/76">
                      {certifications.map((certification) => (
                        <li className="flex gap-2" key={certification}>
                          <span aria-hidden="true" className="text-emerald-300">
                            ›
                          </span>
                          <span>{certification}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                </section>

                <Link
                  className="mt-6 inline-flex w-fit items-center justify-center rounded-sm border border-emerald-200/60 bg-emerald-200/10 px-5 py-3 font-mono text-xs font-bold uppercase tracking-[0.16em] text-emerald-100 transition hover:bg-emerald-200/20 focus:outline-none focus:ring-2 focus:ring-emerald-100"
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
