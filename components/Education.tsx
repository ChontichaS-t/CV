import React from "react";

export default function Education() {
  return (
    <section id="education" className="mx-auto max-w-container-max px-gutter py-stack-lg border-t border-outline-variant/20">
      <div className="mb-12">
        <h2 className="font-headline-lg text-headline-lg text-primary">Education</h2>
      </div>

      <div className="rounded-3xl bg-surface-container-low border border-outline-variant/20 p-8 md:p-12 hover:shadow-lg transition-all duration-300">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 md:gap-12">
          {/* Degree and University info */}
          <div className="space-y-4 flex-1">
            <div>
              <span className="inline-block rounded-full bg-primary/5 border border-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-primary mb-3">
                2022 — 2026
              </span>
              <h3 className="font-headline-md text-2xl md:text-3xl font-bold text-primary tracking-tight leading-tight">
                Bachelor of Engineering in Computer Engineering
              </h3>
              <p className="text-body-md text-secondary font-medium mt-1">
                B.Eng.CPE
              </p>
            </div>

            <div className="pt-2">
              <h4 className="font-semibold text-lg text-primary">
                Suranaree University of Technology
              </h4>
              <p className="text-body-md text-secondary flex items-center gap-1.5 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-4 h-4 shrink-0 text-outline">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                Nakhon Ratchasima, Thailand
              </p>
            </div>
          </div>

          {/* Divider line for desktop */}
          <div className="hidden md:block w-px h-20 bg-outline-variant/30 self-center" />

          {/* GPAX info card */}
          <div className="flex items-center gap-6 md:pl-4">
            <div className="flex flex-col items-center justify-center h-20 w-20 rounded-2xl bg-surface-container border border-outline-variant/20 shrink-0">
              <span className="text-2xl font-bold text-primary">3.77</span>
              <span className="text-[9px] font-mono text-secondary uppercase tracking-widest mt-0.5">GPAX</span>
            </div>
            <div>
              <p className="font-semibold text-primary text-[17px] leading-tight">First Class Honors</p>
              <p className="text-xs text-secondary mt-1 opacity-70">Academic Excellence Standing</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
