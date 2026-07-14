export default function Footer() {
  return (
    <footer id="contact" className="mt-stack-lg border-t border-neutral-800 bg-black py-16 text-white">
      <div className="mx-auto max-w-container-max px-gutter">
        {/* Main Grid */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6 border-b border-neutral-800 pb-12">
          {/* Left Column: Brand Name & Title */}
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-bold tracking-tight text-white">
              Chonticha Sukchalee
            </h2>
          </div>

          {/* Right Column: Contact info */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start sm:items-center">
            {/* Gmail */}
            <a
              href="mailto:chontichas.contact@gmail.com"
              className="text-sm text-zinc-300 hover:text-orange-500 transition-colors duration-200"
            >
              chontichas.contact@gmail.com
            </a>

            {/* Divider (Hidden on mobile) */}
            <span className="hidden sm:inline text-neutral-800">|</span>

            {/* Phone */}
            <a
              href="tel:0814912676"
              className="text-sm text-zinc-300 hover:text-orange-500 transition-colors duration-200"
            >
              081-491-2676
            </a>

            {/* Divider (Hidden on mobile) */}
            <span className="hidden sm:inline text-neutral-800">|</span>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/chonticha.sukchalee?locale=th_TH"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-zinc-300 hover:text-orange-500 transition-colors duration-200"
            >
              Facebook
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 text-xs text-zinc-500">
          <p>© {new Date().getFullYear()} Chonticha Sukchalee. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#education" className="hover:text-white transition-colors">Education</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#extracurriculars" className="hover:text-white transition-colors">Activities</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
