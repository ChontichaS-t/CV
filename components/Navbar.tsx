const navigation = [
  { label: "Experience", href: "#experience" },
  { label: "Extracurriculars", href: "#extracurriculars" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header data-site-header className="fixed top-0 z-50 w-full border-b border-outline-variant/30 bg-surface/80 backdrop-blur-md transition-all duration-300 ease-in-out">
      <div className="mx-auto flex h-16 max-w-container-max items-center justify-between px-gutter">
        <a href="#top" className="text-headline-md font-headline-md tracking-tighter text-primary">
          Chonticha Sukchalee
        </a>
        <nav className="hidden items-center gap-stack-md md:flex">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} className="font-label-md text-label-md text-secondary transition-colors hover:text-primary">
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-primary px-5 py-2 font-label-md text-label-md text-on-primary transition-opacity hover:opacity-90"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
