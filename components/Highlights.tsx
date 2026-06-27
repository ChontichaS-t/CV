"use client";

import { useEffect, useState } from "react";

const workExperiences = [
  {
    role: "UI/UX & Embedded Software Developer",
    company: "Health Link",
    period: "May 2026 - Present",
  },
  {
    role: "Full-Stack Developer",
    company: "Surasawat Village",
    period: "May 2025 - Jun 2025",
  },
  {
    role: "AI System Analyst & Backend Developer",
    company: "Suratech Company",
    period: "May 2025 - Jun 2025",
  },
  {
    role: "IT Support Assistant",
    company: "Suranaree University of Technology Hospital",
    period: "Feb 2025 - Mar 2025",
  },
];

const awards = [
  {
    title: "1st Place - R2M Innovation",
    description:
      "National university innovation competition champion for sustainable technology solutions.",
    images: [
      "https://media.discordapp.net/attachments/1392574460372189276/1520295169029570650/image.jpg?ex=6a40acb6&is=6a3f5b36&hm=f2a94f7423db355df099f51b1875eec5970fc091ff4f681613456e74e5573b3f&=&format=webp&width=810&height=608",
      "https://media.discordapp.net/attachments/1392574460372189276/1520295169285558322/image.jpg?ex=6a40acb6&is=6a3f5b36&hm=64124b1636275115602af5adcc03ec2aedb2e77e96354765e8376d4db9db1e18&=&format=webp&width=810&height=608",
      "https://media.discordapp.net/attachments/1392574460372189276/1520295169826492596/image.jpg?ex=6a40acb6&is=6a3f5b36&hm=4d319b23862587e95ee54a67d9d92d2ed936b31fe80fa90c980b038198e510a0&=&format=webp&width=810&height=608",
      "https://media.discordapp.net/attachments/1392574460372189276/1520295168740294767/image.jpg?ex=6a40acb5&is=6a3f5b35&hm=122b9154245387f22c10416253975e2c204c33d65456d4dda443f5c1ea2f2704&=&format=webp&width=810&height=608",
      "https://media.discordapp.net/attachments/1392574460372189276/1520295169570635846/image.jpg?ex=6a40acb6&is=6a3f5b36&hm=4be0499227657730c0a982680e6cc4400f1779291cd3833bcef1f2e137d43525&=&format=webp&width=810&height=608",
    ],
  },
  {
    title: "Hackathon Competitor | C2C TechX Program (Supalai x SUT) ",
    description: "C2C showcase images from the public folder.",
    images: [
      "/C2C1.jpg",
      "/C2C2.jpg",
      "/C2C3.jpg",
      "/C2C4.jpg",
      "/C2C5.jpg",
      "/C2C6.jpg",
    ],
  },
];

function AwardCarousel({ images, title }: { images: string[]; title: string }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (images.length < 2) {
      return;
    }

    const interval = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % images.length);
    }, 3200);

    return () => {
      window.clearInterval(interval);
    };
  }, [images.length]);

  const goToIndex = (index: number) => {
    const total = images.length;
    const nextIndex = (index + total) % total;
    setActiveIndex(nextIndex);
  };

  return (
    <div className="mt-6 w-full max-w-none">
      <div className="rounded-[28px] bg-white/8 p-3 shadow-[0_24px_80px_rgba(0,0,0,0.18)] backdrop-blur-xl">
        <div className="relative overflow-hidden rounded-[22px] bg-black/10">
          <div className="relative h-[320px] overflow-hidden md:h-[360px]">
            <img
              alt={`${title} photo ${activeIndex + 1}`}
              className="h-full w-full object-cover transition-transform duration-500"
              src={images[activeIndex]}
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/50 via-black/15 to-transparent p-4">
              <p className="text-[11px] font-mono uppercase tracking-[0.32em] text-white/80">
                {activeIndex + 1} / {images.length}
              </p>
            </div>
          </div>

        </div>

        <div className="mt-3 flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {images.map((image, index) => (
            <button
              key={`${title}-thumb-${index}`}
              aria-label={`Go to image ${index + 1}`}
              className={`relative h-16 w-24 shrink-0 overflow-hidden rounded-2xl border transition-all duration-300 md:h-18 md:w-28 ${
                index === activeIndex
                  ? "border-white/60 ring-2 ring-white/25"
                  : "border-white/10 opacity-70 hover:opacity-100"
              }`}
              onClick={() => goToIndex(index)}
              type="button"
            >
              <img alt={`${title} thumbnail ${index + 1}`} className="h-full w-full object-cover" src={image} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Highlights() {
  return (
    <>
      <section className="bg-surface-container-lowest py-stack-lg border-y border-outline-variant/30">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="mb-10 flex items-end justify-between gap-6">
            <h2 className="font-headline-lg text-headline-lg text-primary leading-tight">
              Work Experience
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {workExperiences.map((experience) => (
              <article
                key={`${experience.company}-${experience.role}`}
                className="rounded-2xl border border-outline-variant/30 bg-surface-container px-5 py-6 transition-colors hover:bg-surface-bright"
              >
                <p className="font-mono text-label-md text-secondary">{experience.period}</p>
                <h3 className="mt-3 font-headline-md text-headline-md text-primary">{experience.role}</h3>
                <p className="mt-2 font-body-md text-secondary">{experience.company}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0b0b0f] py-stack-lg text-white">
        <div className="mx-auto max-w-container-max px-gutter">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <h2 className="font-headline-lg text-headline-lg text-white">Awards & Highlights</h2>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {awards.map((award) => (
              <article
                key={award.title}
                  className="group flex h-full flex-col rounded-[32px] bg-[#0b0b0f] p-5 transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="min-w-0">
                  <h3 className="mt-2 font-headline-md text-headline-md text-white">{award.title}</h3>
                  <p className="mt-3 max-w-xl text-sm leading-6 text-white/68 md:text-body-md">{award.description}</p>
                </div>

                  {award.images ? <AwardCarousel images={award.images} title={award.title} /> : null}
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
