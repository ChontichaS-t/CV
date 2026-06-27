"use client";

import { useState } from "react";

interface ProjectCategory {
  title: string;
  items: string[];
}

interface Project {
  id: string;
  num: string;
  title: string;
  course: string;
  role: string;
  tech: string[];
  categories: ProjectCategory[];
}

const projects: Project[] = [
  {
    id: "capstone",
    num: "01",
    title: "Badminton Tournament Management Platform",
    course: "Capstone Project",
    role: "Full-Stack Developer & System Analyst",
    tech: ["React", "Next.js", "Go", "PostgreSQL", "Redis", "JWT", "TypeScript"],
    categories: [
      {
        title: "Requirement Gathering & Design",
        items: [
          "Conducted requirement gathering with tournament organizers to identify operational pain points.",
          "Designed business workflows covering player registration, tournament administration, scheduling, scoring, and reporting.",
          "Designed relational database schemas supporting tournaments, players, teams, matches, courts, schedules, staff, and rankings.",
          "Designed scalable RESTful APIs for tournament management."
        ]
      },
      {
        title: "Core Features & Dashboard",
        items: [
          "Developed player registration workflows and built automated tournament scheduling.",
          "Developed Round Robin management and Single Elimination bracket generation.",
          "Built real-time score management and tournament standings / ranking calculation.",
          "Designed public live match center and developed bracket visualization.",
          "Built organizer dashboards."
        ]
      },
      {
        title: "Architecture & Infrastructure",
        items: [
          "Implemented role-based access control supporting Public, Player, Staff, Organizer, and Administrator.",
          "Implemented Redis-based architecture for real-time data synchronization.",
          "Applied Clean Architecture principles throughout backend development.",
          "Collaborated across the SDLC from requirement analysis through deployment."
        ]
      }
    ]
  },
  {
    id: "systems-analysis",
    num: "02",
    title: "Residential Management System",
    course: "Systems Analysis",
    role: "System Analyst & Backend Developer",
    tech: ["React", "TypeScript", "Go Gin", "GORM", "SQLite", "JWT"],
    categories: [
      {
        title: "Business Logic & Structuring",
        items: [
          "Gathered and analyzed business requirements, system workflows, and user roles.",
          "Designed backend architecture using Handler, Use Case, Repository, Entity, Middleware, and Infrastructure layers."
        ]
      },
      {
        title: "Core Features & Operations",
        items: [
          "Developed resident, contract, announcement, and visitor management modules.",
          "Built common area reservation workflows, issue reporting modules, and operational dashboards supporting trend analysis.",
          "Implemented payment workflows supporting approval, rejection, receipt generation, and payment history."
        ]
      },
      {
        title: "Authentication & Security",
        items: [
          "Implemented Role-Based Access Control.",
          "Built authentication using JWT, Refresh Token, Cookie Authentication, and CSRF Protection."
        ]
      }
    ]
  },
  {
    id: "software-engineering",
    num: "03",
    title: "Alumni Relations Platform",
    course: "Software Engineering",
    role: "Full-Stack Developer",
    tech: ["Next.js", "React", "Prisma", "PostgreSQL", "Redis", "Docker", "GitHub Actions"],
    categories: [
      {
        title: "Full-Stack Implementation",
        items: [
          "Collaborated in developing a full-stack alumni management platform.",
          "Designed relational databases using Prisma ORM and implemented RESTful APIs.",
          "Developed authentication and authorization workflows."
        ]
      },
      {
        title: "Modules & Testing",
        items: [
          "Built Alumni Registration and Souvenir Management modules.",
          "Applied automated testing to ensure quality code throughout development."
        ]
      },
      {
        title: "DevOps & Life Cycle",
        items: [
          "Used Docker for containerized development.",
          "Participated in GitHub Actions CI workflows.",
          "Worked throughout the Software Development Life Cycle (SDLC)."
        ]
      }
    ]
  },
  {
    id: "cloud-architecture",
    num: "04",
    title: "Cloud-native Student Check-in Platform",
    course: "Cloud Architecture",
    role: "Cloud & Backend Developer",
    tech: ["Go", "Node.js", "Docker", "Kubernetes", "Jenkins", "Ansible", "SQLite"],
    categories: [
      {
        title: "Application Development",
        items: [
          "Developed backend REST APIs and frontend modules.",
          "Designed persistent storage for application data."
        ]
      },
      {
        title: "Containerization & Orchestration",
        items: [
          "Designed cloud-native application architecture.",
          "Containerized applications using Docker and participated in Kubernetes deployment."
        ]
      },
      {
        title: "Automation & Monitoring",
        items: [
          "Integrated Jenkins CI/CD workflows and applied infrastructure automation using Ansible.",
          "Participated in monitoring using Prometheus and Grafana."
        ]
      }
    ]
  },
  {
    id: "cyber-security",
    num: "05",
    title: "Interactive Cyber Investigation Platform",
    course: "Cyber Security",
    role: "Frontend & AI Integration Developer",
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "Gemini API"],
    categories: [
      {
        title: "Interactive Workflows",
        items: [
          "Developed interactive cybersecurity investigation workflows.",
          "Built puzzle-based system interactions and terminal simulation interfaces."
        ]
      },
      {
        title: "UI Design & AI",
        items: [
          "Designed reusable React component architecture.",
          "Implemented AI-assisted interactions using Gemini API.",
          "Built responsive user interfaces emphasizing usability."
        ]
      }
    ]
  },
  {
    id: "database-systems",
    num: "06",
    title: "Omakase Reservation System",
    course: "Database Systems",
    role: "Database Designer & Developer",
    tech: ["MySQL", "SQL"],
    categories: [
      {
        title: "Data Modeling",
        items: [
          "Gathered reservation system requirements and designed ER Diagrams.",
          "Designed normalized relational schemas and applied database normalization."
        ]
      },
      {
        title: "SQL & Relationships",
        items: [
          "Designed SQL structures supporting reservation workflows.",
          "Modeled relationships between customers, reservations, tables, menus, and payments."
        ]
      }
    ]
  }
];

export default function AcademicProjects() {
  const [activeTab, setActiveTab] = useState<string>("capstone");

  const activeProject = projects.find((p) => p.id === activeTab) || projects[0];

  return (
    <section id="projects" className="mx-auto max-w-container-max px-gutter py-stack-lg border-t border-outline-variant/20">
      <div className="mb-12">
        <h2 className="font-headline-lg text-headline-lg text-primary">Academic & Coursework Projects</h2>
        <p className="mt-2 text-body-md text-secondary">
          Selected academic systems designed, architected, and developed throughout my university curriculum.
        </p>
      </div>

      {/* Desktop Dashboard Grid (lg and above) */}
      <div className="hidden lg:grid lg:grid-cols-12 gap-8 items-start">
        {/* Left Side: Interactive Selector Cards */}
        <div className="lg:col-span-5 space-y-3">
          {projects.map((project) => {
            const isActive = project.id === activeTab;
            return (
              <button
                key={project.id}
                onClick={() => setActiveTab(project.id)}
                className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 flex items-start gap-4 ${
                  isActive
                    ? "bg-surface-container border-primary shadow-sm"
                    : "bg-surface-container-lowest border-outline-variant/30 hover:border-outline hover:bg-surface-container-low"
                }`}
                type="button"
              >
                <span className="font-mono text-label-md font-bold text-secondary opacity-60">
                  {project.num}
                </span>
                <div className="flex-1 min-w-0">
                  <span className="inline-block text-[11px] font-mono uppercase tracking-wider text-secondary mb-1">
                    {project.course}
                  </span>
                  <h3 className="font-semibold text-body-lg text-primary truncate">
                    {project.title}
                  </h3>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {project.tech.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 text-[10px] font-mono rounded bg-surface-container-high text-secondary border border-outline-variant/20"
                      >
                        {t}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-2 py-0.5 text-[10px] font-mono rounded bg-surface-container-high text-secondary opacity-75">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Side: Detailed Showcase Panel */}
        <div className="lg:col-span-7 bg-surface-container-lowest border border-outline-variant/30 rounded-3xl p-8 min-h-[580px] shadow-sm flex flex-col">
          <div className="border-b border-outline-variant/20 pb-6 mb-6">
            <div className="flex items-center justify-between gap-4">
              <span className="text-[12px] font-mono uppercase tracking-widest text-secondary bg-surface-container px-3 py-1 rounded-full border border-outline-variant/20">
                {activeProject.course}
              </span>
              <span className="font-mono text-headline-md text-secondary opacity-25">
                {activeProject.num}
              </span>
            </div>
            <h3 className="mt-4 font-headline-lg text-[26px] text-primary font-bold leading-tight">
              {activeProject.title}
            </h3>
            <p className="mt-2 text-body-md text-secondary flex items-center gap-2">
              <span className="font-medium text-primary">Role:</span> {activeProject.role}
            </p>
          </div>

          {/* Details Section */}
          <div className="flex-1 space-y-6">
            {activeProject.categories.map((category) => (
              <div key={category.title}>
                <h4 className="font-semibold text-body-lg text-primary mb-3 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  {category.title}
                </h4>
                <ul className="space-y-2.5 pl-4 border-l border-outline-variant/30">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="text-body-md text-on-surface-variant leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Tech Stack Footer */}
          <div className="border-t border-outline-variant/20 pt-6 mt-8">
            <h4 className="font-mono text-label-md text-secondary uppercase tracking-wider mb-3">
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {activeProject.tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 text-[12px] font-mono uppercase tracking-tighter rounded-full border border-outline-variant bg-surface"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet Accordion (less than lg) */}
      <div className="lg:hidden space-y-4">
        {projects.map((project) => {
          const isOpen = project.id === activeTab;
          return (
            <div
              key={project.id}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                isOpen
                  ? "bg-surface-container-lowest border-primary shadow-sm"
                  : "bg-surface-container border-outline-variant/30"
              }`}
            >
              {/* Accordion Header */}
              <button
                onClick={() => setActiveTab(isOpen ? "" : project.id)}
                className="w-full flex items-center justify-between p-5 text-left"
                type="button"
              >
                <div className="flex items-start gap-4">
                  <span className="font-mono text-label-md font-bold text-secondary opacity-60 mt-1">
                    {project.num}
                  </span>
                  <div>
                    <span className="block text-[10px] font-mono uppercase tracking-wider text-secondary mb-1">
                      {project.course}
                    </span>
                    <h3 className="font-semibold text-body-lg text-primary pr-4">
                      {project.title}
                    </h3>
                  </div>
                </div>
                <span
                  className={`material-symbols-outlined text-secondary transition-transform duration-300 ${
                    isOpen ? "rotate-180 text-primary" : ""
                  }`}
                >
                  expand_more
                </span>
              </button>

              {/* Accordion Content */}
              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="p-5 pt-0 border-t border-outline-variant/20 mt-1">
                    <p className="mt-4 text-body-md text-secondary">
                      <span className="font-semibold text-primary">Role:</span> {project.role}
                    </p>

                    <div className="mt-6 space-y-6">
                      {project.categories.map((category) => (
                        <div key={category.title}>
                          <h4 className="font-semibold text-body-lg text-primary mb-3 flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                            {category.title}
                          </h4>
                          <ul className="space-y-2.5 pl-4 border-l border-outline-variant/30">
                            {category.items.map((item, idx) => (
                              <li key={idx} className="text-body-md text-on-surface-variant leading-relaxed">
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 border-t border-outline-variant/20 pt-5">
                      <h4 className="font-mono text-label-md text-secondary uppercase tracking-wider mb-3">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="px-2.5 py-0.5 text-[11px] font-mono uppercase tracking-tighter rounded-full border border-outline-variant bg-surface"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
