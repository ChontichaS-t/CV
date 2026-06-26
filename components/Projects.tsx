const projects = [
  {
    name: "Badminton Platform",
    description: "A real-time court booking and community management system designed for scale.",
    tag: "VUE.JS",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC3RVB4-Lvr0VOAUgFIoN6SeQ2IUnurkoPt_QviGxG60MQjx334sbV5xfWuCidUreRDwfGJiykPTt5U5QZMrc7hkv5rewl4Uj88g5N5BuHFHvZBm-BSDMZdqp6_jGEi5QDR9fxq_lOJd2OQ-WgHAy7QMMlun-d9u-8sNuBsQktiUYw32RaAV3RYZqGYdOPQ2sXAEp1fqegj83aGlPonmQFr_RVcWR9H3KMQaM1IV6kmu6GXifIPnf9UtEstuOajU6JcHg-Rm96bOzk",
  },
  {
    name: "Serverless Scaler",
    description: "Infrastructure-as-code tool for optimizing cloud function deployment and latency.",
    tag: "GO",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDOT6VpE8mWpqehH-1FZQQ7Mlpv2iCNUrtFLJnNjLGr8P_v3eejPWW1cl64VXp2yir9YpLdjS1RCDsv6T5nYJzdhQojThZUN_fOOXai4c2-c2z4wq7pudT1-DEkdtWxrvV6nfLhog8VUAOqAebBooGsC8MiixS-8KVhUhoHVpJrwZx2ayXdYuEoZobiWTcLsRdcND5u5d-Vgdjs6D1giltnp8SNrRnFe_fXBhX2Y7l_yECepoqR3m4t08ClX-ofHq4ck5w3_keUfU4",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-surface py-stack-lg">
      <div className="mx-auto max-w-container-max px-gutter">
        <div className="mb-12">
          <h2 className="font-headline-lg text-headline-lg mb-2 text-primary">Selected Works</h2>
          <p className="font-body-md text-secondary">A showcase of technical architecture and product design.</p>
        </div>
        <div className="grid gap-stack-md md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.name}
              className="group overflow-hidden rounded-3xl border border-outline-variant/20 bg-white transition-all duration-500 hover:shadow-xl"
            >
              <div className="relative h-[400px] overflow-hidden bg-surface-container">
                <img
                  alt={project.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src={project.image}
                />
              </div>
              <div className="p-8">
                <div className="mb-4 flex items-start justify-between">
                  <h3 className="font-headline-md text-headline-md text-primary">{project.name}</h3>
                  <a className="text-primary transition-transform hover:translate-x-1" href="#">
                    <span className="material-symbols-outlined">arrow_outward</span>
                  </a>
                </div>
                <p className="font-body-md mb-6 text-secondary">{project.description}</p>
                <div className="flex gap-3">
                  <span className="rounded-md bg-surface-container px-3 py-1 text-[12px] font-mono text-secondary">
                    {project.tag}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
