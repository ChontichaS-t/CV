const workExperiences = [
  {
    role: "UI/UX & Embedded Software Developer",
    company: "Health Link",
    period: "May 2026 - Present",
  },
  {
    role: "Full-Stack Developer",
    company: "Surasawat Village",
    period: "May 2025 - Jun 2025",
  },
  {
    role: "AI System Analyst & Backend Developer",
    company: "Suratech Company",
    period: "May 2025 - Jun 2025",
  },
  {
    role: "IT Support Assistant",
    company: "Suranaree University of Technology Hospital",
    period: "Feb 2025 - Mar 2025",
  },
];

const awards = [
  {
    icon: "trophy",
    title: "1st Place - R2M Innovation",
    description:
      "National university innovation competition champion for sustainable technology solutions.",
  },
  {
    icon: "bolt",
    title: "TechX Hackathon Finalist",
    description:
      "Recognized for building a scalable disaster response protocol using serverless architecture in 24 hours.",
  },
];

export default function Highlights() {
  return (
    <>
      <section className="bg-surface-container-lowest py-stack-lg border-y border-outline-variant/30">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="mb-10 flex items-end justify-between gap-6">
            <h2 className="font-headline-lg text-headline-lg text-primary leading-tight">
              Work Experience
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {workExperiences.map((experience) => (
              <article
                key={`${experience.company}-${experience.role}`}
                className="rounded-2xl border border-outline-variant/30 bg-surface-container px-5 py-6 transition-colors hover:bg-surface-bright"
              >
                <p className="font-mono text-label-md text-secondary">{experience.period}</p>
                <h3 className="mt-3 font-headline-md text-headline-md text-primary">{experience.role}</h3>
                <p className="mt-2 font-body-md text-secondary">{experience.company}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-stack-lg bg-primary text-on-primary">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="grid gap-12 items-center">
            <div>
              <h2 className="font-headline-lg text-headline-lg mb-8">Recognition & Awards</h2>
              <div className="space-y-8">
                {awards.map((award) => (
                  <div key={award.title} className="flex gap-6 items-start">
                    <div className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-full flex-shrink-0">
                      <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                        {award.icon}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-headline-md text-headline-md">{award.title}</h3>
                      <p className="text-on-primary/70 font-body-md">{award.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
