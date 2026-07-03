export default function Hero() {
  return (
    <section
      id="top"
      className="mx-auto flex max-w-container-max flex-col items-center gap-10 px-gutter pb-12 pt-24 lg:flex-row lg:items-center lg:gap-16 lg:pt-28"
    >
      <div className="w-full max-w-[620px] text-left lg:flex-1">
        <h1 className="max-w-[560px] text-[clamp(2.9rem,5.8vw,5.2rem)] font-black leading-[0.92] tracking-[-0.05em] text-primary">
          I&apos;m Chonticha
        </h1>
        <p className="mt-4 text-[clamp(1.05rem,1.8vw,1.45rem)] font-semibold leading-tight text-black">
          I&apos;m a Full Stack Developer
        </p>
        <p className="mt-5 max-w-[600px] text-[15px] leading-6 text-secondary md:text-[16px] md:leading-7">
          I have worked in the field for the last 10 years, after graduating from a reputed
          engineering college. I have worked on lots of remarkable projects, including Robotics and
          IoT technologies. And, I also do consultancy and teaching.
        </p>
        <a
          href="#contact"
          className="mt-7 inline-flex rounded-full bg-black px-7 py-3.5 text-[15px] font-semibold text-white shadow-[0_12px_30px_rgba(0,0,0,0.22)] transition-transform hover:-translate-y-0.5 hover:opacity-95"
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
