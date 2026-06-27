const stats = [
  { value: "3+", label: "Years Exp" },
  { value: "12", label: "Projects Done" },
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
        <div className="max-w-container-max mx-auto px-gutter grid md:grid-cols-2 gap-12 items-center">
          <h2 className="font-headline-lg text-headline-lg text-primary leading-tight">
            Technical precision <br />meets minimalist <br />design philosophy.
          </h2>
          <div className="space-y-6">
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              My approach to development is rooted in the "California Minimalist" aesthetic -
              prioritizing content through extreme clarity and rhythmic use of typography. I believe
              that code should be as clean and intentional as the UI it powers.
            </p>
            <div className="flex gap-8 items-center pt-4">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-display-lg text-[40px] font-bold text-primary">{stat.value}</p>
                  <p className="font-label-md text-label-md text-secondary uppercase tracking-widest">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
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
