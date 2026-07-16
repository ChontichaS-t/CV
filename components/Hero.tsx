"use client";

import React, { useState, useEffect } from "react";

// High-fidelity geometric letters styled like the Squid Game title typography.
const LETTER_PATHS: Record<string, React.ReactNode> = {
  C: <path d="M75,25 A35.35,35.35 0 1,0 75,75" stroke="currentColor" strokeWidth="11" strokeLinecap="round" fill="none" />,
  H: <path d="M22,15 L22,85 M78,15 L78,85 M22,50 L78,50" stroke="currentColor" strokeWidth="11" strokeLinecap="round" fill="none" />,
  O: <circle cx="50" cy="50" r="35" stroke="currentColor" strokeWidth="11" fill="none" />,
  N: <path d="M22,15 L22,85 M78,15 L78,85 M22,15 L78,85" stroke="currentColor" strokeWidth="11" strokeLinecap="round" strokeLinejoin="round" fill="none" />,
  T: <path d="M15,15 L85,15 M50,15 L50,85" stroke="currentColor" strokeWidth="11" strokeLinecap="round" fill="none" />,
  I: <path d="M50,15 L50,85" stroke="currentColor" strokeWidth="11" strokeLinecap="round" fill="none" />,
  A: <path d="M50,15 L85,85 L15,85 Z M30,62 L70,62" stroke="currentColor" strokeWidth="11" strokeLinecap="round" strokeLinejoin="round" fill="none" />,
  S: <path d="M78,25 C75,15 65,15 50,15 C30,15 22,25 22,38 C22,54 78,46 78,62 C78,75 70,85 50,85 C35,85 25,85 22,75" stroke="currentColor" strokeWidth="11" strokeLinecap="round" fill="none" />,
  U: <path d="M22,15 L22,60 A28,28 0 0,0 78,60 L78,15" stroke="currentColor" strokeWidth="11" strokeLinecap="round" strokeLinejoin="round" fill="none" />,
  K: <path d="M22,15 L22,85 M78,15 L22,50 L78,85" stroke="currentColor" strokeWidth="11" strokeLinecap="round" strokeLinejoin="round" fill="none" />,
  L: <path d="M25,15 L25,85 L78,85" stroke="currentColor" strokeWidth="11" strokeLinecap="round" strokeLinejoin="round" fill="none" />,
  E: <path d="M78,15 L25,15 L25,85 L78,85 M25,50 L70,50" stroke="currentColor" strokeWidth="11" strokeLinecap="round" strokeLinejoin="round" fill="none" />,
};

interface GeometricLetterProps {
  letter: string;
  className?: string;
  isPink?: boolean;
}

function GeometricLetter({ letter, className = "", isPink = false }: GeometricLetterProps) {
  const upperLetter = letter.toUpperCase();
  const path = LETTER_PATHS[upperLetter];

  if (!path) return null;

  return (
    <svg
      viewBox="0 0 100 100"
      className={`w-full h-full select-none transition-all duration-300 ${
        isPink
          ? "text-primary drop-shadow-[0_0_8px_rgba(0,0,0,0.1)] filter"
          : "text-secondary drop-shadow-[0_0_4px_rgba(0,0,0,0.05)]"
      } ${className}`}
    >
      {path}
    </svg>
  );
}

export default function Hero() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 150);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="top"
      className="relative w-full bg-white min-h-screen flex flex-col justify-between text-primary overflow-hidden border-b border-outline-variant/20 pt-16"
    >

      {/* Right-aligned Portrait Image */}
      <div className={`absolute inset-x-0 bottom-0 top-0 pointer-events-none z-20 hidden lg:block select-none transition-all duration-1000 delay-500 ease-out transform ${
        animate ? "opacity-100 translate-x-0 scale-100" : "opacity-0 translate-x-8 scale-95"
      }`}>
        <div className="mx-auto w-full max-w-container-max px-gutter h-full relative">
          <div className="absolute lg:right-[60px] xl:right-gutter bottom-0 top-0 flex justify-end items-end">
            <div className="relative h-[106%] w-auto lg:max-h-[620px] xl:max-h-[680px] flex items-end">
              {/* Glow and Pattern Backgrounds */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-orange-500/55 blur-[75px] -z-10 pointer-events-none select-none" />

              {/* Decorative Tech Marks */}
              <div className="absolute top-[12%] left-[10%] opacity-95 text-orange-500 text-lg select-none font-mono font-black pointer-events-none animate-pulse">+</div>
              <div className="absolute bottom-[28%] right-[5%] opacity-95 text-orange-500 text-xl select-none font-mono font-black pointer-events-none animate-pulse" style={{ animationDelay: "1s" }}>×</div>
              <div className="absolute top-[55%] -left-[8%] opacity-95 text-orange-500 text-2xl select-none font-mono font-black pointer-events-none animate-pulse" style={{ animationDelay: "2s" }}>+</div>

              <img
                alt="Full-body portrait of Chonticha"
                className="h-full w-auto object-contain filter drop-shadow-[-16px_8px_30px_rgba(0,0,0,0.06)] relative z-10"
                src="/tong2.png"
              />


              {/* Card 1: Experience */}
              <div className="absolute top-[20%] -left-[10%] xl:-left-[15%] 2xl:-left-[18%] z-30 animate-float-1">
                <div className="flex flex-row items-center gap-2.5 bg-white/80 backdrop-blur-md border border-orange-500/20 rounded-2xl px-5 py-3.5 shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 hover:scale-105 select-none pointer-events-auto">
                  <span className="text-2xl font-bold text-orange-500 leading-none">4</span>
                  <span className="text-xs text-black font-bold font-sans whitespace-nowrap">Work Experience</span>
                </div>
              </div>

              {/* Card 2: Projects Completed */}
              <div className="absolute top-[46%] -right-[12%] xl:-right-[16%] 2xl:-right-[18%] z-30 animate-float-2">
                <div className="flex flex-row items-center gap-2.5 bg-white/80 backdrop-blur-md border border-orange-500/20 rounded-2xl px-5 py-3.5 shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 hover:scale-105 select-none pointer-events-auto">
                  <span className="text-2xl font-bold text-orange-500 leading-none">6</span>
                  <span className="text-xs text-black font-bold font-sans whitespace-nowrap">Projects</span>
                </div>
              </div>

              {/* Card 3: Awards */}
              <div className="absolute bottom-[20%] -left-[6%] xl:-left-[8%] 2xl:-left-[10%] z-30 animate-float-3">
                <div className="flex flex-row items-center gap-2.5 bg-white/80 backdrop-blur-md border border-orange-500/20 rounded-2xl px-5 py-3.5 shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 hover:scale-105 select-none pointer-events-auto">
                  <span className="text-2xl font-bold text-orange-500 leading-none">2</span>
                  <span className="text-xs text-black font-bold font-sans whitespace-nowrap">Awards</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Main Container Wrapper */}
      <div className="mx-auto w-full max-w-container-max px-gutter h-full flex flex-col justify-between flex-1 relative z-10 pb-8 pt-6 lg:pt-16">
        
        {/* Desktop Layout (Large Screens) */}
        <div className="hidden lg:block w-full h-full relative min-h-[620px]">
          
          {/* Left Column Content: Info, Name, & Call to Action (Foreground) */}
          <div className="absolute top-[14%] lg:top-[18%] left-0 z-30 max-w-[750px] flex flex-col gap-6 text-left">
            
            {/* Left-Aligned Standard Name: Chonticha Sukchalee */}
            <h1 className={`text-[clamp(2.2rem,4.5vw,3.5rem)] font-bold select-none font-sans whitespace-nowrap transition-all duration-1000 ease-out transform ${
              animate ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
            }`}>
              <span className="text-orange-500">Chonticha</span> <span className="text-black">Sukchalee</span>
            </h1>

            {/* Bio & Details */}
            <div className="mt-2 flex flex-col gap-4">
              <div>
                <p className={`text-orange-500 font-bold tracking-widest uppercase text-lg lg:text-xl mb-3.5 font-sans transition-all duration-1000 delay-200 ease-out transform ${
                  animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}>
                  Full Stack Developer
                </p>
                <p className={`text-secondary text-base lg:text-[18px] leading-relaxed font-sans lg:max-w-[450px] xl:max-w-[520px] transition-all duration-1000 delay-400 ease-out transform ${
                  animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}>
                  A Computer Engineering student who enjoys turning ideas into working products, from front-end to back-end. Looking for an internship to apply what I&apos;ve built in the classroom to real production challenges.
                </p>
                <div className={`mt-4 transition-all duration-1000 delay-500 ease-out transform ${
                  animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}>
                  <span className="inline-block px-3 py-1.5 text-black font-semibold border border-orange-500 rounded-full text-xs lg:text-sm">
                    Available for internship: Oct 2026 – Jan 2027.
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Mobile & Tablet Layout (Responsive Stack) */}
        <div className="lg:hidden flex flex-col items-center w-full gap-8 py-4">
          
          {/* Centered Image (Mobile) */}
          <div className={`w-full max-w-[320px] sm:max-w-[380px] h-[320px] sm:h-[380px] flex justify-center items-end relative z-10 transition-all duration-1000 delay-300 ease-out transform ${
            animate ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-4"
          }`}>

            {/* Glow Background (Mobile) */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] rounded-full bg-orange-500/35 blur-[55px] -z-10 pointer-events-none select-none" />

            {/* Decorative Tech Marks (Mobile) */}
            <div className="absolute top-[5%] left-[8%] opacity-90 text-orange-500 text-[11px] sm:text-xs select-none font-mono font-black pointer-events-none animate-pulse">+</div>
            <div className="absolute bottom-[35%] right-[2%] opacity-90 text-orange-500 text-xs sm:text-sm select-none font-mono font-black pointer-events-none animate-pulse" style={{ animationDelay: "1s" }}>×</div>
            <div className="absolute top-[40%] -left-[5%] opacity-90 text-orange-500 text-sm sm:text-base select-none font-mono font-black pointer-events-none animate-pulse" style={{ animationDelay: "2s" }}>+</div>


            <img
              alt="Portrait of Chonticha"
              className="h-full w-auto object-contain filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.06)] portrait-fade relative z-10"
              src="/tong2.png"
            />

            {/* Card 1: Experience */}
            <div className="absolute top-[8%] -left-[4%] z-30 scale-[0.75] origin-top-left animate-float-1">
              <div className="flex flex-row items-center gap-2 bg-white/85 backdrop-blur-md border border-orange-500/20 rounded-2xl px-4 py-2.5 shadow-[0_8px_30px_rgb(0,0,0,0.08)] select-none pointer-events-auto">
                <span className="text-xl font-bold text-orange-500 leading-none">4</span>
                <span className="text-[9px] text-black font-bold font-sans whitespace-nowrap">Work Experience</span>
              </div>
            </div>

            {/* Card 2: Projects Completed */}
            <div className="absolute top-[40%] -right-[4%] z-30 scale-[0.75] origin-top-right animate-float-2">
              <div className="flex flex-row items-center gap-2 bg-white/85 backdrop-blur-md border border-orange-500/20 rounded-2xl px-4 py-2.5 shadow-[0_8px_30px_rgb(0,0,0,0.08)] select-none pointer-events-auto">
                <span className="text-xl font-bold text-orange-500 leading-none">6</span>
                <span className="text-[9px] text-black font-bold font-sans whitespace-nowrap">Academic Projects</span>
              </div>
            </div>

            {/* Card 3: Awards */}
            <div className="absolute bottom-[10%] left-[2%] z-30 scale-[0.75] origin-bottom-left animate-float-3">
              <div className="flex flex-row items-center gap-2 bg-white/85 backdrop-blur-md border border-orange-500/20 rounded-2xl px-4 py-2.5 shadow-[0_8px_30px_rgb(0,0,0,0.08)] select-none pointer-events-auto">
                <span className="text-xl font-bold text-orange-500 leading-none">2</span>
                <span className="text-[9px] text-black font-bold font-sans whitespace-nowrap">Awards</span>
              </div>
            </div>
          </div>

          {/* Mobile Info & Content */}
          <div className="flex flex-col items-center gap-6 px-4 text-center z-20">
            <div className="max-w-[480px]">
              {/* Mobile Name Logo */}
              <h1 className={`text-[24px] sm:text-[30px] font-bold select-none text-center font-sans mb-1.5 whitespace-nowrap transition-all duration-1000 ease-out transform ${
                animate ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
              }`}>
                <span className="text-orange-500">Chonticha</span> <span className="text-black">Sukchalee</span>
              </h1>

              <p className={`text-orange-500 font-bold tracking-wider uppercase text-base sm:text-lg mb-3.5 font-sans transition-all duration-1000 delay-500 ease-out transform ${
                animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}>
                Full Stack Developer
              </p>
              <p className={`text-secondary text-sm sm:text-base leading-relaxed transition-all duration-1000 delay-600 ease-out transform ${
                animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}>
                A Computer Engineering student who enjoys turning ideas into working products, from front-end to back-end. Looking for an internship to apply what I&apos;ve built in the classroom to real production challenges.
              </p>
              <div className={`mt-4 transition-all duration-1000 delay-650 ease-out transform ${
                animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}>
                <span className="inline-block px-3 py-1.5 text-black font-semibold border border-orange-500 rounded-full text-[11px] sm:text-xs">
                  Available for internship: Oct 2026 – Jan 2027.
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
