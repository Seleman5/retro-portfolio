import type { Metadata } from "next";
import Link from "next/link";

const contactRows = [
  {
    label: "Email",
    value: "selemanshinwarie@yahoo.ca",
    href: "mailto:selemanshinwarie@yahoo.ca",
  },
  {
    label: "Phone",
    value: "647-853-8260",
    href: "tel:+16478538260",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/seleman-shinwarie-5103112b8",
    href: "https://www.linkedin.com/in/seleman-shinwarie-5103112b8/",
  },
  {
    label: "GitHub",
    value: "github.com/Seleman5",
    href: "https://github.com/Seleman5",
  },
  {
    label: "Location",
    value: "Toronto, Ontario, Canada",
  },
];

export const metadata: Metadata = {
  title: "Contact | Seleman Shinwarie",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,#29313f_0%,#12151b_42%,#050609_100%)] px-4 py-8 text-slate-100 sm:px-6 lg:px-8">
      <div className="mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-5xl flex-col items-center justify-center gap-6">
        <div className="crt-monitor w-full" aria-label="Contact portfolio monitor">
          <div className="crt-topbar">
            <span className="crt-vent" />
            <span className="crt-brand">SELEMAN.SYSTEM</span>
            <span className="crt-power" aria-hidden="true" />
          </div>

          <div className="crt-bezel">
            <div className="crt-screen">
              <div className="crt-scanlines" aria-hidden="true" />
              <div className="crt-glow" aria-hidden="true" />

              <div className="relative z-10 flex min-h-[min(58vh,600px)] flex-col p-5 text-[#d8fff0] sm:p-8 lg:p-12">
                <div className="flex flex-col gap-4 border-b border-emerald-200/15 pb-5 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.28em] text-amber-200/80">
                      05 // Open channel
                    </p>
                    <h1 className="mt-3 text-4xl font-bold text-white sm:text-5xl">
                      Contact
                    </h1>
                  </div>
                  <Link
                    className="inline-flex w-fit items-center justify-center rounded-sm border border-emerald-200/60 bg-emerald-200/10 px-4 py-2 font-mono text-xs font-bold uppercase tracking-[0.16em] text-emerald-100 transition hover:bg-emerald-200/20 focus:outline-none focus:ring-2 focus:ring-emerald-100"
                    href="/"
                  >
                    ← Home
                  </Link>
                </div>

                <p className="mt-6 max-w-2xl text-base leading-8 text-slate-100/86 sm:text-lg">
                  Interested in connecting? You can reach me through email,
                  LinkedIn, or GitHub.
                </p>

                <section
                  className="mt-7 grid gap-3"
                  aria-label="Contact details"
                >
                  {contactRows.map((row) => (
                    <div
                      className="grid gap-2 rounded-sm border border-emerald-200/18 bg-slate-950/35 p-4 shadow-[inset_0_0_24px_rgba(16,185,129,0.04)] sm:grid-cols-[8rem_1fr]"
                      key={row.label}
                    >
                      <p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-amber-200/80">
                        {row.label}
                      </p>
                      {row.href ? (
                        <a
                          className="break-words text-sm leading-6 text-emerald-100 transition hover:text-emerald-200 focus:outline-none focus:ring-2 focus:ring-emerald-100/70"
                          href={row.href}
                          rel={
                            row.href.startsWith("http")
                              ? "noreferrer"
                              : undefined
                          }
                          target={
                            row.href.startsWith("http") ? "_blank" : undefined
                          }
                        >
                          {row.value}
                        </a>
                      ) : (
                        <p className="text-sm leading-6 text-slate-100/82">
                          {row.value}
                        </p>
                      )}
                    </div>
                  ))}
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
