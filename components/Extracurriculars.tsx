"use client";

import { useState, useEffect } from "react";

const activities = [
  {
    title: "ENGiRUN69",
    role: "F&B Team Lead",
    description: "Led team coordination and logistics for a large-scale university event.",
    tags: ["Leadership", "Logistics", "Coordination", "Event Management"],
    images: ["/engi/engi1.jpg", "/engi/engi2.jpg", "/engi/engi3.jpg", "/engi/engi4.jpg", "/engi/engi5.jpg"],
  },
  {
    title: "Battle of AI",
    role: "Technical Staff (8-person team)",
    description: "Supported technical operations for a competitive AI event.",
    tags: ["AI Operations", "Technical Support", "Collaboration", "Event Ops"],
    images: ["/ai/ai1.jpg", "/ai/ai2.jpg", "/ai/ai3.png"],
  },
  {
    title: "CPE 27 Graduation Congratulatory Event",
    role: "Head of Welfare and Logistics",
    description: "Led the welfare team to manage logistics, catering, and facilities for the CPE 27 graduation event.",
    tags: ["Logistics", "Catering", "Facilities", "Welfare Team"],
    images: [
      "/congra/congra1.jpg",
      "/congra/congra2.jpg",
      "/congra/congra3.jpg",
      "/congra/congra4.jpg",
      "/congra/congra5.jpg",
      "/congra/congra6.jpg"
    ],
  },
  {
    title: "i-MAC & i-Tech Sports Events",
    role: "Core Committee (Logistics)",
    description: "Planned and coordinated beverage logistics and operations for the i-MAC and i-Tech sports events.",
    tags: ["Logistics", "Operations", "Event Coordination", "Sports Events"],
    images: [
      "/sport/sport1.jpg",
      "/sport/sport2.jpg",
      "/sport/sport3.jpg"
    ],
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
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);

  useEffect(() => {
    if (!autoPlay || images.length <= 1 || isHovered) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3200); // automatic transition every 3.2s

    return () => clearInterval(interval);
  }, [images.length, autoPlay, isHovered]);

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
        setCurrentIndex((prev) => (prev + 1) % images.length);
      } else {
        // Swipe right -> Prev image
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
      }
    }
    setTouchStartX(null);
    setTouchEndX(null);
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
      className="relative h-full w-full overflow-hidden select-none"
      style={{ touchAction: "pan-y" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
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
              className="h-full w-full object-cover pointer-events-none transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        ))}
      </div>

      {/* Dots Indicator (Moved to top right) */}
      {images.length > 1 && (
        <div className="absolute top-4 right-4 flex gap-1.5 rounded-full bg-black/35 px-2.5 py-1 backdrop-blur-sm z-20">
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

        {/* Bento Grid layout with overlay text */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-1 md:gap-1.5">
          {activities.map((activity, index) => {
            const isWide = index === 0 || index === 3;
            return (
              <article
                key={activity.title}
                className={`group relative flex flex-col overflow-hidden bg-black transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 h-[380px] sm:h-[420px] ${
                  isWide ? "md:col-span-3" : "md:col-span-2"
                }`}
              >
                {/* Image Slider Area (occupies full card background) */}
                <div className="absolute inset-0 w-full h-full bg-surface-container">
                  <ImageSlider images={activity.images} title={activity.title} />
                </div>

                {/* Dark Gradient Overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent pointer-events-none z-10" />

                {/* Text / Info Area (positioned at bottom overlay) */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8 text-white z-10 pointer-events-none">
                  <div className="mb-3">
                    <span className="inline-block rounded-md bg-white/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white/95 backdrop-blur-sm">
                      {activity.role}
                    </span>
                  </div>

                  <h3 className="font-headline-md text-[20px] sm:text-[22px] font-semibold text-white mb-3 leading-tight">
                    {activity.title}
                  </h3>

                  <p className="font-body-md text-sm text-white/85 leading-relaxed max-w-xl">
                    {activity.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
