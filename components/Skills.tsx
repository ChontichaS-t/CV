const skillGroups = [
  {
    title: "Frontend",
    skills: ["React / Next.js", "TypeScript", "Tailwind CSS", "Three.js"],
  },
  {
    title: "Backend",
    skills: ["Node.js / Express", "PostgreSQL", "Redis", "GraphQL"],
  },
  {
    title: "DevOps",
    skills: ["Docker / K8s", "AWS / Google Cloud", "CI/CD Pipelines", "Linux Admin"],
  },
  {
    title: "Tools",
    skills: ["Git / GitHub", "Figma", "Postman", "Sentry"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-container-max px-gutter py-stack-lg">
      <h2 className="font-headline-lg text-headline-lg mb-12 text-primary">Core Expertise</h2>
      <div className="grid gap-8 md:grid-cols-4">
        {skillGroups.map((group) => (
          <div key={group.title}>
            <h4 className="mb-4 border-l-2 border-primary pl-4 font-label-md text-label-md uppercase tracking-widest text-primary">
              {group.title}
            </h4>
            <ul className="space-y-3 font-body-md text-secondary">
              {group.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
        </div>
    </section>
  );
}
