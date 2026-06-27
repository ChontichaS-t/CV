"use client";

import { useState, useEffect } from "react";

const activities = [
  {
    title: "ENGIRUN",
    role: "F&B Team Lead",
    description: "Led team coordination and logistics for a large-scale university event.",
    tags: ["Leadership", "Logistics", "Coordination", "Event Management"],
    images: ["/engi/engi1.jpg", "/engi/engi2.jpg", "/engi/engi3.jpg"],
  },
  {
    title: "Battle of AI",
    role: "Technical Staff (8-person team)",
    description: "Supported technical operations for a competitive AI event.",
    tags: ["AI Operations", "Technical Support", "Collaboration", "Event Ops"],
    images: ["/ai/ai1.jpg", "/ai/ai2.jpg", "/ai/ai3.png"],
  },
  {
    title: "Computer Engineering Club",
    role: "Member",
    description: "Participated in coding workshops and helped organize tech meetups for fellow students.",
    tags: ["Community", "Coding Workshops", "Tech Meetups", "Networking"],
    images: ["/extracurricular/club.png"],
  },
];

interface ImageSliderProps {
  images: string[];
  title: string;
  autoPlay?: boolean;
}

function ImageSlider({ images, title, autoPlay = true }: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!autoPlay || images.length <= 1 || isHovered) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3200); // automatic transition every 3.2s

    return () => clearInterval(interval);
  }, [images.length, autoPlay, isHovered]);

  const handlePrev = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  if (images.length === 0) {
    return (
      <div className="h-full w-full bg-surface-container flex items-center justify-center text-secondary">
        No Image Available
      </div>
    );
  }

  return (
    <div
      className="relative h-full w-full overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Slides Container */}
      <div
        className="flex h-full w-full transition-transform duration-700 ease-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img, idx) => (
          <div key={idx} className="h-full w-full shrink-0">
            <img
              src={img}
              alt={`${title} - image ${idx + 1}`}
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={handlePrev}
            className={`absolute left-3 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition-all duration-300 hover:bg-black/60 ${
              isHovered ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2 pointer-events-none"
            }`}
            aria-label="Previous image"
          >
            <span className="material-symbols-outlined text-[18px]">chevron_left</span>
          </button>
          <button
            onClick={handleNext}
            className={`absolute right-3 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition-all duration-300 hover:bg-black/60 ${
              isHovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2 pointer-events-none"
            }`}
            aria-label="Next image"
          >
            <span className="material-symbols-outlined text-[18px]">chevron_right</span>
          </button>
        </>
      )}

      {/* Dots Indicator */}
      {images.length > 1 && (
        <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5 rounded-full bg-black/35 px-2.5 py-1 backdrop-blur-sm">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setCurrentIndex(idx);
              }}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === currentIndex ? "w-4 bg-white" : "w-1.5 bg-white/50 hover:bg-white/80"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function Extracurriculars() {
  return (
    <section id="extracurriculars" className="bg-surface py-stack-lg border-t border-outline-variant/20">
      <div className="mx-auto max-w-container-max px-gutter">
        <div className="mb-12">
          <h2 className="font-headline-lg text-headline-lg text-primary">Extracurricular Activities</h2>
        </div>
        <div className="grid gap-stack-md grid-cols-1 md:grid-cols-3">
          {activities.map((activity) => (
            <article
              key={activity.title}
              className="group flex flex-col overflow-hidden rounded-3xl border border-outline-variant/20 bg-white transition-all duration-500 hover:shadow-xl"
            >
              {/* Image Carousel Area */}
              <div className="relative h-[280px] w-full overflow-hidden bg-surface-container">
                <ImageSlider images={activity.images} title={activity.title} />
              </div>

              {/* Text / Info Area */}
              <div className="flex flex-1 flex-col p-6">
                <div className="mb-3">
                  <span className="inline-block rounded-full bg-surface-container px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-secondary">
                    {activity.role}
                  </span>
                </div>
                
                <h3 className="font-headline-md text-[20px] font-semibold text-primary mb-3 leading-tight">
                  {activity.title}
                </h3>
                
                <p className="font-body-md text-sm text-secondary mb-6 flex-1 leading-relaxed">
                  {activity.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2 border-t border-outline-variant/10">
                  {activity.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-surface-container px-2.5 py-0.5 text-[11px] font-mono text-secondary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
