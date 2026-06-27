const experiences = [
  {
    role: "UI/UX & Embedded Software Developer",
    company: "Health Link",
    period: "May 2026 - Present",
    project: "Care Keeper",
    techStack: ["Python", "PySide6", "Raspberry Pi", "BLE", "Serial UART", "I2C", "REST API"],
    summary:
      "Developed a Raspberry Pi healthcare application focused on intuitive UI/UX for patient screening and registration workflows. Integrated hardware peripherals including a Thai ID reader, BP monitor, and BLE SpO₂ sensor, and optimized asynchronous sensor communication using QThread. Built end-to-end API workflows with backend services, with robust error handling and hardware monitoring for Wi-Fi, Bluetooth, and battery status.",
  },
  {
    role: "Full-Stack Developer",
    company: "Surasawat Village",
    period: "May 2025 - Jun 2025",
    project: "Residential Management & Utility Billing Platform",
    techStack: ["React", "TypeScript", "Tailwind", "Go (Gin)", "GORM", "SQLite", "Docker", "Cron"],
    summary:
      "Managed the full SDLC for a residential web application, collaborating with stakeholders to translate requirements into operational features. Architected clean-architecture backend services for resident profiles, automated utility billing, and payment tracking dashboards. Implemented automated cron jobs for monthly calculations, generated PDF invoices, and containerized services using Docker Compose.",
  },
  {
    role: "AI System Analyst & Backend Developer",
    company: "Suratech Company",
    period: "May 2025 - Jun 2025",
    project: "AI Health Analytics Backend Platform",
    techStack: ["Python", "FastAPI", "OpenAI GPT-4o", "SQLAlchemy", "PostgreSQL", "AWS S3", "JWT"],
    summary:
      "Developed robust backend RESTful APIs for an AI-powered healthcare analytics platform and operational dashboards. Integrated OpenAI GPT-4o and multilingual voice pipelines via AWS S3 to generate personalized self-care and injury risk assessments. Implemented persistent chat history for text and voice interactions and secured all API endpoints using JWT-based authentication.",
  },
  {
    role: "IT Support Assistant",
    company: "Suranaree University of Technology Hospital",
    period: "Feb 2025 - Mar 2025",
    project: null,
    techStack: [],
    summary:
      "Managed and maintained comprehensive documentation for organizational computer inventory data and installed systems. Supported daily IT operations by assisting with the assembly, setup, and configuration of desktop computers across various departments.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-container-max px-gutter py-stack-lg">
      <div className="mb-12 flex items-end justify-between">
        <h2 className="font-headline-lg text-headline-lg text-primary">Work Experience</h2>
      </div>
      <div className="space-y-8">
        {experiences.map((experience) => (
          <div key={`${experience.company}-${experience.role}`} className="grid gap-6 rounded-xl border-b border-outline-variant/30 px-4 py-8 transition-colors hover:bg-surface-bright md:grid-cols-12 md:items-start">
            <div className="md:col-span-3">
              <p className="font-mono text-label-md text-secondary">{experience.period}</p>
            </div>
            <div className="md:col-span-6">
              <h3 className="mb-2 font-headline-md text-headline-md text-primary">{experience.role}</h3>
              <p className="font-body-md mb-2 text-secondary">{experience.company}</p>
              {experience.project && <p className="font-body-md mb-4 text-secondary">Project: {experience.project}</p>}
              <p className="font-body-md text-on-surface-variant">{experience.summary}</p>
            </div>
            <div className="flex flex-wrap gap-2 md:col-span-3 md:justify-end">
              {experience.techStack.map((skill) => (
                <span key={skill} className="rounded-full border border-outline-variant px-3 py-1 text-[12px] font-mono uppercase tracking-tighter">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
