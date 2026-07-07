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
          <div className="absolute right-gutter bottom-0 top-0 flex justify-end items-end">
            <div className="relative h-[106%] w-auto max-h-[680px] flex items-end">
              <img
                alt="Full-body portrait of Chonticha"
                className="h-full w-auto object-contain filter drop-shadow-[-16px_8px_30px_rgba(0,0,0,0.06)]"
                src="/tong2.png"
              />
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
            <h1 className={`text-[clamp(2.8rem,6vw,4.5rem)] font-bold select-none font-sans text-primary whitespace-nowrap transition-all duration-1000 ease-out transform ${
              animate ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
            }`}>
              Chonticha <span className="text-neutral-500">Sukchalee</span>
            </h1>

            {/* Bio & Details */}
            <div className="mt-2 flex flex-col gap-4">
              <div>
                <p className={`text-primary font-bold tracking-widest uppercase text-lg lg:text-xl mb-3 font-sans transition-all duration-1000 delay-200 ease-out transform ${
                  animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}>
                  Full Stack Developer Intern
                </p>
                <p className={`text-secondary text-base lg:text-[18px] leading-relaxed font-sans max-w-[520px] transition-all duration-1000 delay-400 ease-out transform ${
                  animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}>
                  I am a Computer Engineering student looking for an internship opportunity in a real-world development environment. I bring a solid engineering foundation and a strong willingness to adapt to the team&apos;s standards and culture.
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* Mobile & Tablet Layout (Responsive Stack) */}
        <div className="lg:hidden flex flex-col items-center w-full gap-8 py-4">
          
          {/* Mobile Name Logo */}
          <h1 className={`text-[30px] sm:text-[38px] font-bold select-none text-center font-sans mt-2 text-primary whitespace-nowrap transition-all duration-1000 ease-out transform ${
            animate ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          }`}>
            Chonticha <span className="text-neutral-500">Sukchalee</span>
          </h1>

          {/* Centered Image (Mobile) */}
          <div className={`w-full max-w-[320px] sm:max-w-[380px] h-[320px] sm:h-[380px] flex justify-center items-end relative z-10 transition-all duration-1000 delay-300 ease-out transform ${
            animate ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-4"
          }`}>
            <img
              alt="Portrait of Chonticha"
              className="h-full w-auto object-contain filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.06)]"
              src="/tong2.png"
            />
          </div>

          {/* Mobile Info & Content */}
          <div className="flex flex-col items-center gap-6 px-4 text-center z-20">
            <div className="max-w-[480px]">
              <p className={`text-primary font-bold tracking-wider uppercase text-base sm:text-lg mb-3 font-sans transition-all duration-1000 delay-500 ease-out transform ${
                animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}>
                Full Stack Developer Intern
              </p>
              <p className={`text-secondary text-sm sm:text-base leading-relaxed transition-all duration-1000 delay-600 ease-out transform ${
                animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}>
                I am a Computer Engineering student looking for an internship opportunity in a real-world development environment. I bring a solid engineering foundation and a strong willingness to adapt to the team&apos;s standards and culture.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
