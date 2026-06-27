"use client";

import { useEffect, useState } from "react";

const awards = [
  {
    title: "1st Place - R2M Innovation",
    description:
      "National university innovation competition champion for sustainable technology solutions.",
    points: [
      {
        title: "National Innovation Champion",
        desc: "Won 1st place in the Research to Market (R2M) competition, validating the business viability of research-based tech."
      },
      {
        title: "Sustainable Solution Development",
        desc: "Designed and pitched eco-friendly tech solutions solving environmental challenges."
      },
      {
        title: "Market Strategy & Pitching",
        desc: "Formulated complete commercialization plans and pitched to VCs and corporate leaders."
      }
    ],
    accentColor: "from-rose-500 via-orange-500 to-amber-500",
    images: [
      "https://media.discordapp.net/attachments/1392574460372189276/1520295169029570650/image.jpg?ex=6a40acb6&is=6a3f5b36&hm=f2a94f7423db355df099f51b1875eec5970fc091ff4f681613456e74e5573b3f&=&format=webp&width=810&height=608",
      "https://media.discordapp.net/attachments/1392574460372189276/1520295169285558322/image.jpg?ex=6a40acb6&is=6a3f5b36&hm=64124b1636275115602af5adcc03ec2aedb2e77e96354765e8376d4db9db1e18&=&format=webp&width=810&height=608",
      "https://media.discordapp.net/attachments/1392574460372189276/1520295169826492596/image.jpg?ex=6a40acb6&is=6a3f5b36&hm=4d319b23862587e95ee54a67d9d92d2ed936b31fe80fa90c980b038198e510a0&=&format=webp&width=810&height=608",
      "https://media.discordapp.net/attachments/1392574460372189276/1520295168740294767/image.jpg?ex=6a40acb5&is=6a3f5b35&hm=122b9154245387f22c10416253975e2c204c33d65456d4dda443f5c1ea2f2704&=&format=webp&width=810&height=608",
      "https://media.discordapp.net/attachments/1392574460372189276/1520295169570635846/image.jpg?ex=6a40acb6&is=6a3f5b36&hm=4be0499227657730c0a982680e6cc4400f1779291cd3833bcef1f2e137d43525&=&format=webp&width=810&height=608",
    ],
  },
  {
    title: "Hackathon Competitor | C2C TechX Program (Supalai x SUT)",
    description: "C2C showcase images from the public folder.",
    points: [
      {
        title: "Co-Creation Hackathon",
        desc: "Participated in an intensive prop-tech hackathon held in partnership with Supalai and SUT."
      },
      {
        title: "Smart Living Concepts",
        desc: "Co-designed smart home and community technologies to improve modern residential experiences."
      },
      {
        title: "Executive Business Mentorship",
        desc: "Collaborated with property industry mentors and presented solutions to corporate leadership."
      }
    ],
    accentColor: "from-blue-500 via-indigo-500 to-purple-500",
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
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);

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

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.targetTouches[0].clientX);
    setTouchEndX(null);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX === null || touchEndX === null) return;
    const diffX = touchStartX - touchEndX;
    const minSwipeDistance = 50;

    if (Math.abs(diffX) > minSwipeDistance) {
      if (diffX > 0) {
        // Swipe left -> Next image
        goToIndex(activeIndex + 1);
      } else {
        // Swipe right -> Prev image
        goToIndex(activeIndex - 1);
      }
    }
    setTouchStartX(null);
    setTouchEndX(null);
  };

  return (
    <div className="w-full max-w-none">
      <div className="rounded-[28px] bg-white/8 p-3 shadow-[0_24px_80px_rgba(0,0,0,0.18)] backdrop-blur-xl">
        <div
          className="relative overflow-hidden rounded-[22px] bg-black/10 select-none"
          style={{ touchAction: "pan-y" }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="relative h-[320px] overflow-hidden md:h-[360px]">
            <img
              alt={`${title} photo ${activeIndex + 1}`}
              className="h-full w-full object-cover pointer-events-none transition-transform duration-500"
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
      <section className="bg-[#0b0b0f] py-stack-lg text-white">
        <div className="mx-auto max-w-container-max px-gutter">
          <div className="mb-16 flex items-end justify-between gap-6">
            <div>
              <h2 className="font-headline-lg text-headline-lg text-white">Awards & Highlights</h2>
            </div>
          </div>

          <div className="flex flex-col gap-24 lg:gap-32">
            {awards.map((award, index) => {
              const isEven = index % 2 === 0;
              return (
                <article
                  key={award.title}
                  className="grid grid-cols-12 items-center gap-8 lg:gap-16"
                >
                  {/* Carousel Column */}
                  <div
                    className={`col-span-12 lg:col-span-6 ${
                      isEven ? "order-1" : "order-1 lg:order-2"
                    }`}
                  >
                    {award.images ? (
                      <AwardCarousel images={award.images} title={award.title} />
                    ) : null}
                  </div>

                  {/* Info Column */}
                  <div
                    className={`col-span-12 lg:col-span-6 flex flex-col justify-center ${
                      isEven ? "order-2 lg:pl-8" : "order-2 lg:order-1 lg:pr-8"
                    }`}
                  >
                    <h3 className="font-headline-lg text-[26px] md:text-[32px] font-bold text-white leading-tight">
                      {award.title}
                    </h3>
                    
                    <div className="relative mt-6 flex gap-6">
                      {/* Vertical Accent Line */}
                      <div
                        className={`w-[3px] shrink-0 rounded-full bg-gradient-to-b ${award.accentColor}`}
                      />
                      
                      {/* Points */}
                      <div className="space-y-6">
                        {award.points.map((point) => (
                          <div key={point.title}>
                            <h4 className="font-semibold text-[17px] md:text-[18px] text-white">
                              {point.title}
                            </h4>
                            <p className="mt-1 text-sm md:text-body-md text-white/60 leading-relaxed">
                              {point.desc}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
