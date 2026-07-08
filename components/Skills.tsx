import React from "react";

interface SkillItem {
  name: string;
  logo?: string;
  badge?: string;
  color?: string;
}

interface SkillGroup {
  title: string;
  icon: React.ReactNode;
  skills: SkillItem[];
}

const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    icon: (
      <svg className="w-5 h-5 text-orange-500 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    skills: [
      { name: "TypeScript", logo: "/logo/Language/typescript.svg" },
      { name: "JavaScript", logo: "/logo/Language/javascript.svg" },
      { name: "Go", logo: "/logo/Language/golang.svg" },
      { name: "C#", logo: "/logo/Language/csharp.svg" },
      { name: "Python", logo: "/logo/Language/python.svg" },
      { name: "Java", logo: "/logo/Language/java.svg" },
      { name: "C", logo: "/logo/Language/c.svg" },
    ],
  },
  {
    title: "Frontend",
    icon: (
      <svg className="w-5 h-5 text-orange-500 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <rect width="20" height="14" x="2" y="3" rx="2" />
        <line x1="8" x2="16" y1="21" y2="21" />
        <line x1="12" x2="12" y1="17" y2="21" />
      </svg>
    ),
    skills: [
      { name: "Next.js", logo: "/logo/Fronend/nextjs_icon_dark.svg" },
      { name: "React", logo: "/logo/Fronend/react_dark.svg" },
      { name: "HTML5", logo: "/logo/Fronend/html5.svg" },
      { name: "CSS3", logo: "/logo/Fronend/css_old.svg" },
      { name: "Tailwind CSS", logo: "/logo/Fronend/tailwindcss.svg" },
    ],
  },
  {
    title: "Backend",
    icon: (
      <svg className="w-5 h-5 text-orange-500 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <rect width="20" height="8" x="2" y="2" rx="2" />
        <rect width="20" height="8" x="2" y="14" rx="2" />
        <line x1="6" x2="6.01" y1="6" y2="6" strokeWidth="3" />
        <line x1="6" x2="6.01" y1="18" y2="18" strokeWidth="3" />
      </svg>
    ),
    skills: [
      { name: "Node.js", logo: "/logo/Backend/nodejs.svg" },
      { name: "Java Spring Boot", logo: "/logo/Backend/spring.svg" },
      { name: "Go Gin / GORM", logo: "/logo/Backend/gin.svg" },
      { name: "REST API", logo: "/logo/Backend/rest-api-icon.png" },
      { name: "JWT", logo: "/logo/Backend/icons8-json-web-token-240.png" },
    ],
  },
  {
    title: "Database & Devops",
    icon: (
      <svg className="w-5 h-5 text-orange-500 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
      </svg>
    ),
    skills: [
      { name: "PostgreSQL", logo: "/logo/Database&Devops/postgresql.svg" },
      { name: "MySQL", logo: "/logo/Database&Devops/mysql-icon-light.svg" },
      { name: "SQLite", logo: "/logo/Database&Devops/sqlite.svg" },
      { name: "Azure", logo: "/logo/Database&Devops/azure.svg" },
      { name: "Docker", logo: "/logo/Database&Devops/docker.svg" },
      { name: "Kubernetes", logo: "/logo/Database&Devops/kubernetes.svg" },
      { name: "Jenkins", logo: "/logo/Database&Devops/jenkins-icon.png" },
      { name: "Grafana", logo: "/logo/Database&Devops/grafana.svg" },
      { name: "Cloudflare", logo: "/logo/Database&Devops/cloudflare.svg" },
      { name: "Nginx", logo: "/logo/Database&Devops/nginx.svg" },
    ],
  },
  {
    title: "Tools & Networking",
    icon: (
      <svg className="w-5 h-5 text-orange-500 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    skills: [
      { name: "Git", logo: "/logo/Tools & Networking/git.svg" },
      { name: "GitHub", logo: "/logo/Tools & Networking/github_light.svg" },
      { name: "Figma", logo: "/logo/Tools & Networking/figma.svg" },
      { name: "IntelliJ IDEA", logo: "/logo/Tools & Networking/intellijidea.svg" },
      { name: "WebStorm", logo: "/logo/Tools & Networking/webstorm.svg" },
      { name: "Postman", logo: "/logo/Tools & Networking/postman.svg" },
      { name: "Draw.io", logo: "/logo/Tools & Networking/draw-io.png" },
      { name: "Cisco VLAN", logo: "/logo/Tools & Networking/cisco.png" },
      { name: "Arduino", logo: "/logo/Tools & Networking/arduino.png" },
      { name: "ESP32", badge: "ES", color: "#E7352C" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-container-max px-gutter py-stack-lg">
      <h2 className="font-headline-lg text-headline-lg mb-12 text-primary">Technical Skills & Technologies</h2>
      <div className="grid gap-8 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
        {skillGroups.map((group) => (
          <div key={group.title}>
            <div className="flex items-center gap-2 mb-4">
              {group.icon}
              <h4 className="font-label-md text-label-md uppercase tracking-wider text-primary font-bold">
                {group.title}
              </h4>
            </div>
            <ul className="space-y-3 font-body-md text-secondary">
              {group.skills.map((skill) => (
                <li key={skill.name} className="flex items-center gap-2.5 hover:text-primary transition-colors duration-150">
                  {skill.logo ? (
                    <img 
                      src={skill.logo} 
                      alt={`${skill.name} logo`} 
                      className="w-5 h-5 object-contain shrink-0 select-none" 
                    />
                  ) : (
                    <span 
                      style={{ 
                        backgroundColor: `${skill.color}15`, 
                        color: skill.color,
                        borderColor: `${skill.color}30`
                      }}
                      className="w-8.5 h-5 rounded-md flex items-center justify-center text-[8.5px] font-extrabold shrink-0 border select-none font-sans"
                    >
                      {skill.badge}
                    </span>
                  )}
                  <span className="text-[14px] font-medium leading-none">{skill.name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
