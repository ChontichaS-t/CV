export default function Hero() {
  return (
    <section
      id="top"
      className="mx-auto flex max-w-container-max flex-col items-center gap-10 px-gutter pb-12 pt-24 lg:flex-row lg:items-start lg:gap-16 lg:pt-28"
    >
      <div className="w-full max-w-[620px] text-left lg:flex-1 lg:pt-8">
        <h1 className="max-w-none text-[clamp(2rem,4.8vw,4rem)] font-black leading-[1.1] tracking-[-0.05em] text-primary sm:whitespace-nowrap">
          Chonticha Sukchalee
        </h1>
        <p className="mt-8 text-[clamp(1.05rem,1.8vw,1.45rem)] font-semibold leading-tight text-black">
          Full Stack Developer Intern
        </p>
        <p className="mt-9 max-w-[600px] text-[15px] leading-6 text-secondary md:text-[16px] md:leading-7">
          I am a Computer Engineering student looking for an internship opportunity in a real-world development environment. I bring a solid engineering foundation and a strong willingness to adapt to the team&apos;s standards and culture. I am a fast learner who manages self-productivity well and stays resilient under challenging, fast-paced situations. I am eager to collaborate, support the team, and fully contribute to every project.
        </p>
        <a
          href="#contact"
          className="mt-9 inline-flex rounded-full bg-black px-7 py-3.5 text-[15px] font-semibold text-white shadow-[0_12px_30px_rgba(0,0,0,0.22)] transition-transform hover:-translate-y-0.5 hover:opacity-95"
        >
          Hire Now
        </a>
      </div>
      <div className="flex w-full justify-center lg:flex-[0.9] lg:justify-end">
        <div className="w-full max-w-[360px] bg-transparent lg:max-w-[430px]">
          <img
            alt="Full-body portrait of Chonticha"
            className="block h-auto w-full object-contain"
            src="/tong2.png"
          />
        </div>
      </div>
    </section>
  );
}
