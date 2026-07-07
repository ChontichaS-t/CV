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
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ease-out transform ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <h2 className="font-headline-lg text-[32px] md:text-[42px] font-bold text-white leading-tight font-sans">
            About Me
          </h2>
          <p className="text-neutral-500 font-sans text-sm mt-2">
            My Introduction
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
          
          {/* Left Column: Portrait Photo */}
          <div className={`md:col-span-5 flex justify-center transition-all duration-1000 delay-200 ease-out transform ${
            visible ? "opacity-100 scale-100 translate-x-0" : "opacity-0 scale-95 -translate-x-8"
          }`}>
            <img
              src="/tong3.png"
              alt="Chonticha Sukchalee Portrait"
              className="w-full max-w-[340px] h-auto object-contain transition-transform duration-700 hover:scale-105"
            />
          </div>

          {/* Right Column: Cards & Bio */}
          <div className="md:col-span-7 flex flex-col gap-8 text-left">
            
            {/* Info Cards Row */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              
              {/* Card 1: Experience */}
              <div
                style={{ transitionDelay: "300ms" }}
                className={`flex flex-col items-center justify-center p-4 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm transition-all duration-1000 text-center ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                } hover:border-white/20`}
              >
                {/* Medal Icon (Orange/Yellow) */}
                <svg className="w-5 h-5 text-amber-500 mb-2.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.05 12.16a5 5 0 011.637-7.09 5.002 5.002 0 017.09 1.637 5 5 0 01-1.637 7.09 5.002 5.002 0 01-7.09-1.637zM14 11.85V19l-3-1.5L8 19v-7.15" />
                </svg>
                <h4 className="font-semibold text-xs sm:text-sm text-white mb-1 font-sans">Experience</h4>
                <p className="text-neutral-400 text-[10px] sm:text-xs font-sans">1+ Years Projects</p>
              </div>

              {/* Card 2: Completed */}
              <div
                style={{ transitionDelay: "400ms" }}
                className={`flex flex-col items-center justify-center p-4 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm transition-all duration-1000 text-center ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                } hover:border-white/20`}
              >
                {/* Briefcase Icon (Red/Rose) */}
                <svg className="w-5 h-5 text-rose-500 mb-2.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20 7h-3V5c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zM9 5h6v2H9V5zm11 14H4V9h16v10z" />
                </svg>
                <h4 className="font-semibold text-xs sm:text-sm text-white mb-1 font-sans">Completed</h4>
                <p className="text-neutral-400 text-[10px] sm:text-xs font-sans">10+ Projects</p>
              </div>

              {/* Card 3: Available */}
              <div
                style={{ transitionDelay: "500ms" }}
                className={`flex flex-col items-center justify-center p-4 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm transition-all duration-1000 text-center ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                } hover:border-white/20`}
              >
                {/* Headset/Support Icon (Teal/Cyan) */}
                <svg className="w-5 h-5 text-teal-400 mb-2.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 18v-6a9 9 0 0118 0v6M4 16h2a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1v-3a1 1 0 011-1zm14 0h2a1 1 0 011 1v3a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 011-1z" />
                </svg>
                <h4 className="font-semibold text-xs sm:text-sm text-white mb-1 font-sans">Available</h4>
                <p className="text-neutral-400 text-[10px] sm:text-xs font-sans">For Internship</p>
              </div>

            </div>

            {/* Biography text */}
            <div
              style={{ transitionDelay: "600ms" }}
              className={`flex flex-col gap-4 transition-all duration-1000 ease-out transform ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed font-sans">
                Hi, I am Chonticha Sukchalee, a Computer Engineering student at Suranaree University of Technology. I am looking for a Full Stack Developer Intern opportunity in a real-world development environment.
              </p>
              <p className="text-neutral-400 text-sm sm:text-base leading-relaxed font-sans">
                I bring a solid engineering foundation, experience in building full-stack web platforms and embedded integrations, and a strong willingness to adapt to the team&apos;s standards, culture, and methodologies.
              </p>
            </div>

            {/* Education Info */}
            <div
              style={{ transitionDelay: "700ms" }}
              className={`border-t border-white/10 pt-6 mt-2 transition-all duration-1000 ease-out transform ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-3 font-sans">Education</h4>
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-1">
                    <span className="text-white font-semibold text-[15px] sm:text-base font-sans">
                      Bachelor of Engineering in Computer Engineering (B.Eng.CPE)
                    </span>
                    <span className="w-fit rounded-full bg-white/10 px-2.5 py-0.5 text-[10px] text-white/80 whitespace-nowrap font-sans font-medium">
                      2022 — 2026
                    </span>
                  </div>
                  <p className="text-neutral-400 text-sm font-sans">
                    Suranaree University of Technology, Nakhon Ratchasima
                  </p>
                </div>
                
                {/* GPAX Info Badge */}
                <div className="flex items-center justify-center bg-white/5 border border-white/10 rounded-xl px-4 py-2 shrink-0">
                  <div className="text-center">
                    <div className="text-base font-bold text-white leading-none">3.77</div>
                    <div className="text-[9px] font-mono text-neutral-400 uppercase tracking-widest mt-0.5">GPAX</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Download CV Button Group */}
            <div
              style={{ transitionDelay: "800ms" }}
              className={`relative group/cv-btn mt-4 w-fit select-none transition-all duration-1000 ease-out transform ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              {/* Top Slide-out (Filename) */}
              <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[90%] text-center bg-slate-700 text-white/90 text-[11px] py-1 px-3 rounded-t-xl transition-all duration-300 ease-out opacity-0 translate-y-2 pointer-events-none group-hover/cv-btn:opacity-100 group-hover/cv-btn:-translate-y-full z-0 font-sans whitespace-nowrap">
                Filename: Chonticha_CV.pdf
              </div>

              {/* Main Download Button */}
              <a
                href="/Chonticha_CV.pdf"
                download="Chonticha_CV.pdf"
                className="relative z-10 rounded-xl px-6 py-3.5 font-semibold text-sm transition-all duration-300 bg-white text-black hover:bg-neutral-200 flex items-center gap-2.5 border border-white/10 shadow-lg cursor-pointer"
              >
                <span>Download CV</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </a>

              {/* Bottom Slide-out (Size) */}
              <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[90%] text-center bg-slate-700 text-white/90 text-[11px] py-1 px-3 rounded-b-xl transition-all duration-300 ease-out opacity-0 -translate-y-2 pointer-events-none group-hover/cv-btn:opacity-100 group-hover/cv-btn:translate-y-full z-0 font-sans whitespace-nowrap">
                Size: 185 KB
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
