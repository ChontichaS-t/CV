"use client";

interface Project {
  num: string;
  title: string;
  course: string;
  role: string;
  summary: string;
  highlights: string[];
  tech: string[];
}

const projects: Project[] = [
  {
    num: "01",
    title: "Badminton Tournament Management",
    course: "Capstone Project",
    role: "Full-Stack Developer & Analyst",
    summary: "A tournament management system supporting registration, automated scheduling, and real-time live match scores.",
    highlights: [
      "Designed relational schemas, REST APIs, and role-based permissions.",
      "Built automated scheduling algorithms (Round Robin / Single Elimination) and a real-time live match score center."
    ],
    tech: ["React", "Next.js", "Go", "PostgreSQL", "Redis", "TypeScript"]
  },
  {
    num: "02",
    title: "Residential Management System",
    course: "Systems Analysis",
    role: "System Analyst & Developer",
    summary: "A secure, layered web platform for managing resident profiles, lease contracts, and utility billing operations.",
    highlights: [
      "Architected backend services using Gin and GORM with JWT cookie authentication.",
      "Developed tracking modules for contracts, visitor logs, common areas, and invoicing."
    ],
    tech: ["React", "TypeScript", "Go Gin", "GORM", "SQLite", "JWT"]
  },
  {
    num: "03",
    title: "Computer Leasing Management System",
    course: "Software Engineering",
    role: "Full-Stack Developer",
    summary: "Co-developed a full-stack decoupled web platform featuring 10 integrated modules for IT procurement and asset leasing.",
    highlights: [
      "Delivered features incrementally using Agile/Scrum methodologies across bi-weekly sprints.",
      "Conducted server testing using Raspberry Pi environments to validate deployment."
    ],
    tech: ["React", "Spring Boot", "PostgreSQL", "Raspberry Pi", "Git/GitHub", "Docker"]
  },
  {
    num: "04",
    title: "Cloud-native Check-in Platform",
    course: "Cloud Architecture",
    role: "Cloud & Backend Developer",
    summary: "A cloud-native student check-in system designed with microservices, auto-deployment, and visual monitoring.",
    highlights: [
      "Containerized backend modules with Docker and deployed services inside Kubernetes.",
      "Automated tasks via Jenkins and Ansible, and set up Prometheus / Grafana tracking dashboards."
    ],
    tech: ["Go", "Node.js", "Docker", "Kubernetes", "Jenkins", "Ansible"]
  },
  {
    num: "05",
    title: "Interactive Cyber Investigation",
    course: "Cyber Security",
    role: "Frontend & AI Developer",
    summary: "A gamified training platform guiding users through cyber investigations with puzzles and terminal interfaces.",
    highlights: [
      "Built terminal simulations and interactive investigation dashboards using React.",
      "Integrated Gemini API to power responsive, real-time AI hint assistants."
    ],
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "Gemini API"]
  },
  {
    num: "06",
    title: "Omakase Reservation System",
    course: "Database Systems",
    role: "Database Designer & Developer",
    summary: "A relational database schema optimized to model and process high-end fine dining reservation workflows.",
    highlights: [
      "Designed normalized ER Diagrams mapping customers, tables, menus, and payments.",
      "Wrote structured SQL queries managing booking constraints and payment details."
    ],
    tech: ["MySQL", "SQL"]
  }
];

export default function AcademicProjects() {
  return (
    <section id="projects" className="mx-auto max-w-container-max px-gutter py-stack-lg border-t border-outline-variant/20">
      <div className="mb-12">
        <h2 className="font-headline-lg text-headline-lg text-primary">Academic Projects</h2>
      </div>

      {/* Responsive Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <article
            key={project.num}
            className="group flex flex-col justify-between h-full p-6 rounded-none bg-neutral-950 hover:bg-neutral-900 border border-neutral-800/80 hover:shadow-soft transition-all duration-300"
          >
            <div>
              {/* Header: Course & Index */}
              <div className="flex items-center justify-between gap-4 border-b border-neutral-800/80 pb-4 mb-4">
                <span className="text-[11px] font-label-md font-semibold uppercase tracking-wider text-zinc-400">
                  {project.course}
                </span>
                <span className="font-label-md text-label-md font-bold text-zinc-500">
                  {project.num}
                </span>
              </div>

              {/* Title & Role */}
              <h3 className="font-bold text-lg text-white transition-colors leading-snug">
                {project.title}
              </h3>
              <p className="text-xs font-medium text-orange-400 mt-1 mb-4">
                {project.role}
              </p>

              {/* Summary description */}
              <p className="text-sm text-zinc-300 mb-4 leading-relaxed">
                {project.summary}
              </p>

              {/* Short highlights list */}
              <ul className="space-y-2 mb-6">
                {project.highlights.map((highlight, index) => (
                  <li key={index} className="text-sm text-zinc-300 flex items-start gap-2 leading-relaxed">
                    <span className="text-orange-500/80 select-none mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500/80" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech pills at footer */}
            <div className="flex flex-wrap gap-1.5 pt-4 border-t border-neutral-800/80 mt-auto">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-2 py-0.5 text-[10px] font-mono uppercase rounded bg-neutral-900 text-zinc-300 border border-neutral-800"
                >
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
