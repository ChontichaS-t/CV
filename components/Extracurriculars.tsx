"use client";

import { useState, useEffect, useRef } from "react";

const activities = [
  {
    title: "ENGiRun68",
    role: "Food & Beverage Team",
    description: "Co-led a team of 8 to manage catering and logistics operations for EngiRun69, successfully coordinating food distribution for over 2,000 participants.",
    tags: ["Leadership", "Logistics", "Coordination", "Event Management"],
    images: ["/engi/engi1.jpg", "/engi/engi2.jpg", "/engi/engi3.jpg", "/engi/engi4.jpg", "/engi/engi5.jpg"],
  },
  {
    title: "ENGiRun67",
    role: "Register & Running Team",
    description: "Managed registration and race operations in 2024.",
    tags: ["Registration", "Operations", "Event Coordination", "Sports Events"],
    images: ["/engi2/engi21.jpg", "/engi2/engi22.jpg"],
  },
  {
    title: "Battle of AI",
    role: "Concept & Operations Organizer",
    description: "Co-conceptualized the event theme, designed game mechanics, and provided key operational support to ensure a seamless event execution.",
    tags: ["AI Operations", "Technical Support", "Collaboration", "Event Ops"],
    images: ["/ai/ai1.jpg", "/ai/ai2.jpg", "/ai/ai3.png"],
  },
  {
    title: "The 2023 Commencement Ceremony of Suranaree University of Technology",
    role: "Head of Welfare and Logistics",
    description: "Co-led a core team of 5 to manage the computer engineering graduation ceremony's welfare department, optimizing resource allocation to ensure smooth operations.",
    tags: ["Logistics", "Catering", "Facilities", "Welfare Team"],
    images: [
      "/congra/congra1.jpg",
      "/congra/congra2.jpg",
      "/congra/congra4.jpg",
      "/congra/congra5.jpg",
      "/congra/congra6.jpg"
    ],
  },
  {
    title: "iTech iMac Sports Day",
    role: "Welfare Team Support",
    description: "Managed and distributed drinking water and beverages for athletes and participants during the sports event.",
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
  onImageClick?: (index: number) => void;
}

function ImageSlider({ images, title, autoPlay = true, onImageClick }: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);
  const isSwipingRef = useRef(false);

  useEffect(() => {
    if (!autoPlay || images.length <= 1 || isHovered) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3200); // automatic transition every 3.2s

    return () => clearInterval(interval);
  }, [images.length, autoPlay, isHovered]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.targetTouches[0].clientX);
    isSwipingRef.current = false;
    setTouchEndX(null);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStartX !== null) {
      const currentX = e.targetTouches[0].clientX;
      if (Math.abs(touchStartX - currentX) > 10) {
        isSwipingRef.current = true;
      }
    }
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
          <div 
            key={idx} 
            className="h-full w-full shrink-0 cursor-zoom-in"
            onClick={() => {
              if (!isSwipingRef.current && onImageClick) {
                onImageClick(idx);
              }
            }}
          >
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
  const [lightbox, setLightbox] = useState<{
    activityIndex: number;
    imageIndex: number;
  } | null>(null);

  const [lightboxTouchStart, setLightboxTouchStart] = useState<number | null>(null);
  const [lightboxTouchEnd, setLightboxTouchEnd] = useState<number | null>(null);

  useEffect(() => {
    if (!lightbox) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setLightbox(null);
      } else if (e.key === "ArrowLeft") {
        setLightbox((prev) => {
          if (!prev) return null;
          const activity = activities[prev.activityIndex];
          const newIdx = (prev.imageIndex - 1 + activity.images.length) % activity.images.length;
          return { ...prev, imageIndex: newIdx };
        });
      } else if (e.key === "ArrowRight") {
        setLightbox((prev) => {
          if (!prev) return null;
          const activity = activities[prev.activityIndex];
          const newIdx = (prev.imageIndex + 1) % activity.images.length;
          return { ...prev, imageIndex: newIdx };
        });
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [lightbox]);

  const handleLightboxTouchStart = (e: React.TouchEvent) => {
    setLightboxTouchStart(e.targetTouches[0].clientX);
    setLightboxTouchEnd(null);
  };

  const handleLightboxTouchMove = (e: React.TouchEvent) => {
    setLightboxTouchEnd(e.targetTouches[0].clientX);
  };

  const handleLightboxTouchEnd = () => {
    if (lightboxTouchStart === null || lightboxTouchEnd === null) return;
    const diffX = lightboxTouchStart - lightboxTouchEnd;
    const minSwipeDistance = 50;

    if (Math.abs(diffX) > minSwipeDistance) {
      if (diffX > 0) {
        // Swipe left -> Next image
        setLightbox((prev) => {
          if (!prev) return null;
          const activity = activities[prev.activityIndex];
          const newIdx = (prev.imageIndex + 1) % activity.images.length;
          return { ...prev, imageIndex: newIdx };
        });
      } else {
        // Swipe right -> Prev image
        setLightbox((prev) => {
          if (!prev) return null;
          const activity = activities[prev.activityIndex];
          const newIdx = (prev.imageIndex - 1 + activity.images.length) % activity.images.length;
          return { ...prev, imageIndex: newIdx };
        });
      }
    }
    setLightboxTouchStart(null);
    setLightboxTouchEnd(null);
  };

  const currentActivity = lightbox !== null ? activities[lightbox.activityIndex] : null;
  const currentImage = currentActivity && lightbox !== null ? currentActivity.images[lightbox.imageIndex] : null;

  return (
    <>
      <section id="extracurriculars" className="bg-surface py-stack-lg border-t border-outline-variant/20">
        <div className="mx-auto max-w-container-max px-gutter">
          <div className="mb-12">
            <h2 className="font-headline-lg text-headline-lg text-primary">Extracurricular Activities</h2>
          </div>

          {/* Bento Grid layout with overlay text */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-1 md:gap-1.5">
            {activities.map((activity, index) => {
              const isWide = index === 0 || index === 3;
              const isFull = index === 4;
              return (
                <article
                  key={activity.title}
                  className={`group relative flex flex-col overflow-hidden bg-black transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 h-[380px] sm:h-[420px] ${
                    isFull ? "md:col-span-5" : isWide ? "md:col-span-3" : "md:col-span-2"
                  }`}
                >
                  {/* Image Slider Area (occupies full card background) */}
                  <div className="absolute inset-0 w-full h-full bg-surface-container">
                    <ImageSlider 
                      images={activity.images} 
                      title={activity.title} 
                      onImageClick={(imgIdx) => {
                        setLightbox({
                          activityIndex: index,
                          imageIndex: imgIdx
                        });
                      }}
                    />
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

      {/* Lightbox Modal */}
      {lightbox && currentActivity && currentImage && (
        <div 
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/90 backdrop-blur-md transition-all duration-300 animate-in fade-in"
          onClick={() => setLightbox(null)}
          onTouchStart={handleLightboxTouchStart}
          onTouchMove={handleLightboxTouchMove}
          onTouchEnd={handleLightboxTouchEnd}
          style={{ touchAction: "pan-y" }}
        >
          {/* Top Header / Info */}
          <div className="absolute top-0 left-0 right-0 flex items-center justify-between p-4 sm:p-6 text-white z-10 pointer-events-none">
            <div className="flex flex-col">
              <span className="font-sans text-[11px] font-semibold uppercase tracking-wider text-white/60">{currentActivity.role}</span>
              <h3 className="font-headline-md text-[18px] sm:text-[20px] font-bold">{currentActivity.title}</h3>
            </div>
            <div className="flex items-center gap-4 pointer-events-auto">
              <span className="font-mono text-sm text-white/70">
                {lightbox.imageIndex + 1} / {currentActivity.images.length}
              </span>
              <button 
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition cursor-pointer"
                onClick={() => setLightbox(null)}
                aria-label="Close lightbox"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Main Image Container */}
          <div 
            className="relative max-w-full max-h-[70vh] w-auto h-auto px-4 flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={currentImage} 
              alt={`${currentActivity.title} - ${lightbox.imageIndex + 1}`} 
              className="max-w-full max-h-[70vh] object-contain rounded-lg shadow-2xl transition-transform duration-300 ease-out"
            />
            
            {/* Navigation Arrows inside image area for better reach */}
            {currentActivity.images.length > 1 && (
              <>
                <button 
                  className="absolute left-6 sm:-left-16 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/80 hover:scale-105 border border-white/10 transition active:scale-95 cursor-pointer shadow-lg"
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightbox((prev) => {
                      if (!prev) return null;
                      const activity = activities[prev.activityIndex];
                      const newIdx = (prev.imageIndex - 1 + activity.images.length) % activity.images.length;
                      return { ...prev, imageIndex: newIdx };
                    });
                  }}
                  aria-label="Previous image"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                    <polyline points="15 18 9 12 15 6" />
                  </svg>
                </button>
                <button 
                  className="absolute right-6 sm:-right-16 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/80 hover:scale-105 border border-white/10 transition active:scale-95 cursor-pointer shadow-lg"
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightbox((prev) => {
                      if (!prev) return null;
                      const activity = activities[prev.activityIndex];
                      const newIdx = (prev.imageIndex + 1) % activity.images.length;
                      return { ...prev, imageIndex: newIdx };
                    });
                  }}
                  aria-label="Next image"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>
              </>
            )}
          </div>

          {/* Description / Caption */}
          <div className="absolute bottom-6 left-6 right-6 text-center text-white/80 max-w-xl mx-auto pointer-events-none">
            <p className="font-body-md text-sm sm:text-base leading-relaxed">
              {currentActivity.description}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
