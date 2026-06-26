const experiences = [
  {
    role: "Full Stack Developer",
    company: "CareMate",
    period: "2023 - Present",
    summary:
      "Leading the development of a comprehensive healthcare management system. Optimized API performance by 40% and implemented a responsive patient dashboard using React and Node.js.",
    skills: ["React", "Node.js", "AWS"],
  },
  {
    role: "Frontend Engineer",
    company: "Suratec",
    period: "2021 - 2023",
    summary:
      "Architected modular UI components for a wearable technology platform. Collaborated with hardware engineers to visualize real-time sensor data.",
    skills: ["TypeScript", "Next.js", "D3.js"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-container-max px-gutter py-stack-lg">
      <div className="mb-12 flex items-end justify-between">
        <h2 className="font-headline-lg text-headline-lg text-primary">Work Experience</h2>
        <span className="font-mono text-label-md text-secondary">/career_path</span>
      </div>
      <div className="space-y-8">
        <div className="grid gap-6 rounded-xl border-b border-outline-variant/30 px-4 py-8 transition-colors hover:bg-surface-bright md:grid-cols-12 md:items-start">
          <div className="md:col-span-3">
            <p className="font-mono text-label-md text-secondary">2023 - Present</p>
          </div>
          <div className="md:col-span-6">
            <h3 className="font-headline-md text-headline-md mb-2 text-primary">Full Stack Developer</h3>
            <p className="font-body-md mb-4 text-secondary">CareMate</p>
            <p className="font-body-md text-on-surface-variant">{experiences[0].summary}</p>
          </div>
          <div className="flex flex-wrap gap-2 md:col-span-3 md:justify-end">
            {experiences[0].skills.map((skill) => (
              <span key={skill} className="rounded-full border border-outline-variant px-3 py-1 text-[12px] font-mono uppercase tracking-tighter">
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div className="grid gap-6 rounded-xl border-b border-outline-variant/30 px-4 py-8 transition-colors hover:bg-surface-bright md:grid-cols-12 md:items-start">
          <div className="md:col-span-3">
            <p className="font-mono text-label-md text-secondary">2021 - 2023</p>
          </div>
          <div className="md:col-span-6">
            <h3 className="font-headline-md text-headline-md mb-2 text-primary">Frontend Engineer</h3>
            <p className="font-body-md mb-4 text-secondary">Suratec</p>
            <p className="font-body-md text-on-surface-variant">{experiences[1].summary}</p>
          </div>
          <div className="flex flex-wrap gap-2 md:col-span-3 md:justify-end">
            {experiences[1].skills.map((skill) => (
              <span key={skill} className="rounded-full border border-outline-variant px-3 py-1 text-[12px] font-mono uppercase tracking-tighter">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
