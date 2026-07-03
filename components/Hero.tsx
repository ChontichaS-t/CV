"use client";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative w-full bg-gradient-to-br from-white via-neutral-50 to-neutral-100 shadow-sm min-h-[660px] lg:h-[770px] flex flex-col justify-between text-[#030304] overflow-hidden border-b border-neutral-200"
    >
      
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.03)_0%,transparent_65%)] pointer-events-none z-0" />

      {/* Centered Image (Desktop and Absolute Center Placement relative to full viewport) */}
      <div className="absolute inset-x-0 bottom-0 top-0 hidden lg:flex justify-center items-end pointer-events-none z-20 select-none">
        <img
          alt="Full-body portrait of Chonticha"
          className="h-[92%] w-auto object-contain filter drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
          src="/tong2.png"
        />
      </div>

      {/* Grid Content Wrapper - aligned to site's max-width */}
      <div className="mx-auto w-full max-w-container-max px-gutter h-full flex flex-col justify-between flex-1 relative pt-24 pb-16 lg:pt-24 lg:pb-24 z-10">
        
        {/* Absolute Name Headers (Desktop only) */}
        <h1 className="hidden lg:block absolute lg:top-16 left-gutter text-[clamp(4rem,7vw,7rem)] font-black uppercase tracking-tighter leading-none text-neutral-300 scale-y-[1.8] origin-top-left lg:-ml-24">
          CHONTICHA
        </h1>
        <h1 className="hidden lg:block absolute lg:top-16 right-gutter text-[clamp(4rem,7vw,7rem)] font-black uppercase tracking-tighter leading-none text-neutral-300 scale-y-[1.8] origin-top-right lg:-mr-24">
          SUKCHALEE
        </h1>

        {/* Desktop Layout Grid (lg: only) */}
        <div className="hidden lg:grid lg:grid-cols-12 lg:gap-6 w-full relative mt-auto mb-10 items-start">
          {/* Left Column */}
          <div className="col-span-6 flex flex-col gap-6 text-left lg:-ml-24 lg:pt-0 lg:-mt-32">
            <div className="mt-2">
              <p className="text-primary font-bold tracking-wider uppercase text-base md:text-lg mb-6">
                Full Stack Developer Intern
              </p>
              <p className="text-neutral-600 text-[14px] leading-relaxed max-w-[420px]">
                I am a Computer Engineering student looking for an internship opportunity in a real-world development environment. I bring a solid engineering foundation and a strong willingness to adapt to the team&apos;s standards and culture.
              </p>
            </div>
            <a
              href="#contact"
              className="self-start inline-flex items-center gap-2 rounded-full bg-black text-white px-6 py-3 font-semibold text-[14px] uppercase shadow-md hover:bg-neutral-800 transition-all hover:scale-105"
            >
              Hire Now <span className="text-lg">↗</span>
            </a>
          </div>

          {/* Right Column */}
          <div className="col-span-6"></div>
        </div>

        {/* Mobile/Tablet Responsive Content (below lg:) */}
        <div className="flex lg:hidden flex-col items-center text-center w-full gap-8 pb-16 pt-2">
          {/* Name & Title */}
          <div className="flex flex-col items-center gap-3">
            <h1 className="text-4xl sm:text-5xl font-black uppercase tracking-tighter text-neutral-300 scale-y-[1.2] origin-center">
              CHONTICHA SUKCHALEE
            </h1>
          </div>

          {/* Image */}
          <div className="w-full max-w-[280px] sm:max-w-[320px] h-[280px] sm:h-[320px] flex justify-center items-end relative">
            <img
              alt="Portrait of Chonticha"
              className="h-full w-auto object-contain filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.1)]"
              src="/tong2.png"
            />
          </div>

          {/* Bio & CTA */}
          <div className="flex flex-col items-center gap-5 px-4">
            <div className="text-center max-w-[480px]">
              <p className="text-primary font-bold tracking-wide uppercase text-[15px] sm:text-base mb-2">
                Full Stack Developer Intern
              </p>
              <p className="text-neutral-600 text-[13px] sm:text-sm leading-relaxed">
                I am a Computer Engineering student looking for an internship opportunity in a real-world development environment. I bring a solid engineering foundation and a strong willingness to adapt to the team&apos;s standards and culture.
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-black text-white px-6 py-3 font-semibold text-[13px] uppercase shadow-md hover:bg-neutral-800 transition-all"
            >
              Hire Now <span className="text-lg">↗</span>
            </a>
          </div>
        </div>

      </div>

    </section>
  );
}
