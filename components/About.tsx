"use client";

import React, { useState, useEffect, useRef } from "react";

export default function About() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="bg-black py-20 md:py-28 border-t border-b border-white/10 text-white overflow-hidden"
    >
      <div className="mx-auto max-w-container-max px-gutter">
        {/* Content Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
          
          {/* Left Column: Portrait Photo */}
          <div className={`md:col-span-5 flex justify-center mt-2 md:mt-8 transition-all duration-1000 delay-200 ease-out transform ${
            visible ? "opacity-100 scale-100 translate-x-0" : "opacity-0 scale-95 -translate-x-8"
          }`}>
            <div className="relative group flex justify-center items-center w-full max-w-[340px]">
              {/* Glow Wrapper to apply the drop shadow filter separately from the mask */}
              <div className="relative z-10 w-full h-auto pointer-events-none">
                {/* Masked Image to apply the bottom fade gradient mask */}
                <img
                  src="/tong6.jpg"
                  alt="Chonticha Sukchalee Portrait"
                  className="w-full h-auto object-contain transition-transform duration-700 hover:scale-105 pointer-events-auto"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Cards & Bio */}
          <div className="md:col-span-7 flex flex-col gap-6 text-left">
            
            {/* Section Title aligned with Bio */}
            <h2
              style={{ transitionDelay: "450ms" }}
              className={`font-headline-lg text-[24px] sm:text-[28px] md:text-[32px] font-bold text-white leading-tight font-sans transition-all duration-1000 ease-out transform ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              About Me
            </h2>
            


            {/* Biography text */}
            <div
              style={{ transitionDelay: "600ms" }}
              className={`flex flex-col gap-4 transition-all duration-1000 ease-out transform ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed font-sans">
                Hi, I&apos;m Chonticha Sukchalee (Baitong), a 22-year-old from Phetchabun, Thailand. I am currently a 4th-year Computer Engineering student at Suranaree University of Technology.
              </p>
              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed font-sans">
                I am seeking an internship opportunity as a Full Stack Developer. I bring a solid engineering foundation, experience in building full-stack web platforms, and a strong willingness to adapt to the team&apos;s standards, culture, and methodologies.
              </p>
            </div>

            {/* Education Info */}
            <div
              style={{ transitionDelay: "700ms" }}
              className={`pt-4 mt-2 transition-all duration-1000 ease-out transform ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <h4 className="text-[19px] md:text-[22px] font-bold text-orange-500 mb-3.5 font-sans">Education</h4>
              <div className="border-l-2 border-orange-500 pl-4 py-1.5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="text-white font-semibold text-[15px] sm:text-base font-sans">
                      Bachelor of Engineering in Computer Engineering (B.Eng.CPE)
                    </span>
                  </div>
                  <p className="text-neutral-400 text-sm font-sans">
                    Suranaree University of Technology, Nakhon Ratchasima
                  </p>
                </div>
                
                {/* GPAX Info (Clean inline look) */}
                <div className="flex items-center gap-3 shrink-0 sm:border-l sm:border-white/10 sm:pl-4">
                  <div className="text-left">
                    <span className="text-lg font-bold text-orange-500 font-sans">GPAX 3.77</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Download Buttons Row */}
            <div className="flex flex-col sm:flex-row gap-5 items-center mt-4">
              
              {/* Download CV Button Group */}
              <div
                style={{ transitionDelay: "800ms" }}
                className={`relative group/cv-btn w-fit select-none transition-all duration-1000 ease-out transform ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                {/* Top Slide-out (Filename) */}
                <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[95%] text-center bg-orange-100 text-orange-900 font-medium text-[11px] py-1.5 px-4 rounded-t-lg transition-all duration-300 ease-out opacity-0 translate-y-2 pointer-events-none group-hover/cv-btn:opacity-100 group-hover/cv-btn:-translate-y-[105%] z-0 font-sans whitespace-nowrap">
                  Filename: Chonticha_CV.pdf
                </div>

                {/* Main Download Button */}
                <a
                  href="/Chonticha_CV.pdf"
                  download="Chonticha_CV.pdf"
                  className="relative z-10 rounded-xl px-6 py-3.5 font-semibold text-sm transition-all duration-300 bg-orange-500 text-white hover:bg-orange-600 flex items-center gap-2.5 shadow-lg cursor-pointer"
                >
                  <span>Download CV</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </a>

                {/* Bottom Slide-out (Size) */}
                <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[95%] text-center bg-orange-100 text-orange-900 font-medium text-[11px] py-1.5 px-4 rounded-b-lg transition-all duration-300 ease-out opacity-0 -translate-y-2 pointer-events-none group-hover/cv-btn:opacity-100 group-hover/cv-btn:translate-y-[105%] z-0 font-sans whitespace-nowrap">
                  Size: 185 KB
                </div>
              </div>

              {/* Download Transcript Button Group */}
              <div
                style={{ transitionDelay: "850ms" }}
                className={`relative group/transcript-btn w-fit select-none transition-all duration-1000 ease-out transform ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                {/* Top Slide-out (Filename) */}
                <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[95%] text-center bg-neutral-200 text-neutral-900 font-medium text-[11px] py-1.5 px-4 rounded-t-lg transition-all duration-300 ease-out opacity-0 translate-y-2 pointer-events-none group-hover/transcript-btn:opacity-100 group-hover/transcript-btn:-translate-y-[105%] z-0 font-sans whitespace-nowrap">
                  Filename: TRANSCRIPT.pdf
                </div>

                {/* Main Download Button */}
                <a
                  href="/transcrip/TRANSCRIPT.pdf"
                  download="TRANSCRIPT.pdf"
                  className="relative z-10 rounded-xl px-6 py-3.5 font-semibold text-sm transition-all duration-300 bg-white text-black hover:bg-neutral-100 flex items-center gap-2.5 shadow-lg cursor-pointer"
                >
                  <span>Download Transcript</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </a>

                {/* Bottom Slide-out (Size) */}
                <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[95%] text-center bg-neutral-200 text-neutral-900 font-medium text-[11px] py-1.5 px-4 rounded-b-lg transition-all duration-300 ease-out opacity-0 -translate-y-2 pointer-events-none group-hover/transcript-btn:opacity-100 group-hover/transcript-btn:translate-y-[105%] z-0 font-sans whitespace-nowrap">
                  Size: 544 KB
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
