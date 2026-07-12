"use client";

import { useState, useEffect } from "react";

const experiences = [
  {
    role: "UI/UX",
    company: "Health Link",
    period: "May 2026 - Present",
    project: "Care Keeper",
    techStack: ["Python", "PySide6", "Raspberry Pi 5", "BLE", "Serial UART", "I2C", "REST API"],
    summary: "Developed a Raspberry Pi healthcare application focused on intuitive UI/UX for patient screening and registration workflows.",
    longDescription: "Integrated hardware peripherals including a Thai ID reader, BP monitor, and BLE SpO₂ sensor, and optimized asynchronous sensor communication using QThread. Built end-to-end API workflows with backend services, with robust error handling and hardware monitoring for Wi-Fi, Bluetooth, and battery status.",
    images: [
      "/Care/Care1.png",
      "/Care/Care2.png",
      "/Care/Care3.png",
      "/Care/Care4.png",
      "/Care/Care5.png"
    ],
    details: {
      "Company / Org": "Health Link",
      "Release Date": "May 2026",
      "Location": "Nakhon Ratchasima",
      "Features": "Asynchronous QThread, BLE Peripheral",
      "Language / API": "Python, RESTful API",
      "Hardware": "Raspberry Pi 5, Thai ID Reader"
    },
    reviewedBy: {
      name: "Project Supervisor",
      avatarLetter: "S",
      quote: "Integrated multiple hardware modules seamlessly. Outstanding work on the PySide6 user interface design and asynchronous sensor communications."
    }
  },
  {
    role: "Full-Stack Developer",
    company: "Surasawat Village",
    period: "May 2025 - Jun 2025",
    project: "Residential Management & Utility Billing Platform",
    techStack: ["React", "TypeScript", "Tailwind", "Go (Gin)", "GORM", "SQLite", "Docker", "Cron"],
    summary: "Managed the full SDLC for a residential web application, collaborating with stakeholders to translate requirements.",
    longDescription: "Architected clean-architecture backend services for resident profiles, automated utility billing, and payment tracking dashboards. Implemented automated cron jobs for monthly calculations, generated PDF invoices, and containerized services using Docker Compose.",
    images: [
      "/surasawat/Surasawat1.png",
      "/surasawat/Surasawat2.png",
      "/surasawat/Surasawat3.png"
    ],
    details: {
      "Client / Owner": "Surasawat Village",
      "Release Date": "June 2025",
      "Location": "Freelance Contract",
      "Features": "Automated Billing, Cron Job, PDF Gen",
      "Language / DB": "Go, React, SQLite",
      "Deployment": "Docker Compose, SQLite"
    },
    reviewedBy: {
      name: "Village Representative",
      avatarLetter: "R",
      quote: "Delivered a complete, functioning billing system ahead of schedule. The Docker configuration and invoice generation work flawlessly."
    }
  },
  {
    role: "AI System Analyst",
    company: "Suratech Company",
    period: "May 2025 - Jun 2025",
    project: "AI Health Analytics Backend Platform",
    techStack: ["Python", "FastAPI", "OpenAI GPT-4o", "SQLAlchemy", "PostgreSQL", "AWS S3", "JWT"],
    summary: "Developed robust backend RESTful APIs for an AI-powered healthcare analytics platform and operational dashboards.",
    longDescription: "Integrated OpenAI GPT-4o and multilingual voice pipelines via AWS S3 to generate personalized self-care and injury risk assessments. Implemented persistent chat history for text and voice interactions and secured all API endpoints using JWT-based authentication.",
    images: [
      "/tec/tec1.jpg"
    ],
    details: {
      "Client / Org": "Suratech Company",
      "Release Date": "June 2025",
      "Location": "Cooperative Project",
      "Features": "OpenAI GPT-4o Integration, Voice Pipeline",
      "Language / DB": "Python (FastAPI), PostgreSQL",
      "Security": "JWT Authentication, AWS S3"
    },
    reviewedBy: {
      name: "Lead AI Engineer",
      avatarLetter: "L",
      quote: "Designed robust AI pipelines and FastAPI backend structure for real-time injury risk assessments and voice processing integrations."
    }
  },
  {
    role: "IT Support Assistant",
    company: "Suranaree University of Technology Hospital",
    period: "Feb 2025 - Mar 2025",
    project: null,
    techStack: ["Desktop Hardware", "System Config", "Documentation", "Network Diagnostics", "OS Deployment"],
    summary: "Managed and maintained comprehensive documentation for organizational computer inventory data.",
    longDescription: "Supported daily IT operations by assisting with the assembly, setup, and configuration of desktop computers across various departments. Managed and maintained computer inventory data and system documentation.",
    images: [
      "/hp/hp1.jpg",
      "/hp/hp2.jpg",
      "/hp/hp3.jpg"
    ],
    details: {
      "Department": "SUT Hospital IT Unit",
      "Release Date": "March 2025",
      "Location": "Hospital IT Support",
      "Features": "Inventory Diagnostics, OS Setup",
      "System Stack": "Windows/Linux, Hardware Config",
      "Role Scope": "Support Staff / IT Operations"
    },
    reviewedBy: {
      name: "Chief IT Administrator",
      avatarLetter: "C",
      quote: "Provided vital assistance in hospital desktop configurations, inventory data mapping, and IT setup operations."
    }
  }
];

export default function Experience() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [activeImgIdx, setActiveImgIdx] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const activeExp = experiences[activeIdx];

  // Auto-play image slider (Transitions every 4 seconds)
  useEffect(() => {
    if (activeExp.images.length <= 1) return;
    
    const interval = setInterval(() => {
      setActiveImgIdx((prev) => (prev + 1) % activeExp.images.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [activeIdx, activeExp.images.length]);

  // Scroll to active card on mobile viewport when it expands
  useEffect(() => {
    if (typeof window === "undefined") return;
    
    const handleScroll = () => {
      if (window.innerWidth < 1024) {
        const element = document.getElementById(`exp-card-${activeIdx}`);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    };

    const timer = setTimeout(handleScroll, 100);
    return () => clearTimeout(timer);
  }, [activeIdx]);

  const handleExpChange = (idx: number) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveIdx(idx);
      setActiveImgIdx(0);
      setIsTransitioning(false);
    }, 200);
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveImgIdx((prev) => (prev + 1) % activeExp.images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveImgIdx((prev) => (prev - 1 + activeExp.images.length) % activeExp.images.length);
  };

  return (
    <section id="experience" className="mx-auto max-w-container-max px-gutter py-stack-lg border-b border-outline-variant/10">
      <div className="mb-16 text-left">
        <h2 className="font-headline-lg text-headline-lg text-primary">Work Experience</h2>
      </div>

      {/* Main Grid Layout */}
      <div className="flex flex-col lg:grid lg:grid-cols-[320px_1fr] gap-12 items-stretch">
        
        {/* Left Column: Switcher sidebar (Timeline Cards) */}
        <div className="flex pr-0 lg:pr-6 flex-col gap-6 h-full mb-6 lg:mb-0">
          <span className="text-sm font-bold uppercase tracking-wider text-neutral-900 mb-3 block shrink-0">
            Work History
          </span>
          <div className="relative flex flex-col gap-12 pl-6 flex-grow">
            {/* Vertical timeline line */}
            <div className="absolute left-[8px] top-4 bottom-4 w-[1px] bg-neutral-200/80" />
            
            {experiences.map((exp, idx) => (
              <div key={exp.role} id={`exp-card-${idx}`} className="relative flex flex-col w-full items-stretch scroll-mt-28">
                {/* Switcher Card Row */}
                <div className="relative flex items-center w-full">
                  {/* Timeline Dot outside the card */}
                  <div className={`absolute left-[-22px] w-3 h-3 rounded-full border-2 transition-all duration-300 z-10 ${
                    idx === activeIdx 
                      ? "bg-orange-500 border-white ring-4 ring-orange-500/20 scale-110" 
                      : "bg-neutral-300 border-white hover:bg-orange-400"
                  }`} />

                  {/* Card Button */}
                  <button
                    onClick={() => handleExpChange(idx)}
                    className={`group flex items-center justify-between cursor-pointer text-left transition-all duration-300 outline-none w-full p-3.5 rounded-xl border shadow-sm ${
                      idx === activeIdx 
                        ? "border-orange-500 bg-orange-500 text-white shadow-lg shadow-orange-500/20 translate-x-1.5 opacity-100" 
                        : "border-neutral-200 bg-white opacity-60 hover:opacity-100 hover:border-orange-500/40 hover:bg-neutral-50/50 hover:translate-x-1"
                    }`}
                  >
                    <div className="flex items-center gap-3.5 min-w-0 flex-1">
                      {/* Small thumbnail image */}
                      <div className={`w-10 h-14 rounded-md overflow-hidden relative shrink-0 border shadow-sm transition-colors duration-300 ${
                        idx === activeIdx ? "border-white/20 bg-white/10" : "border-neutral-200/60 bg-white"
                      }`}>
                        <img 
                          src={exp.images[0]} 
                          alt={exp.role} 
                          className="w-full h-full object-cover" 
                        />
                      </div>

                      {/* Text details */}
                      <div className="flex flex-col min-w-0 items-start gap-1">
                        {/* Period/Date */}
                        <span className="text-sm font-bold tracking-wider uppercase text-neutral-950 transition-colors duration-300">
                          {exp.period}
                        </span>

                        {/* Role Title */}
                        <span className={`text-[11px] font-bold uppercase tracking-wide truncate transition-colors duration-300 ${
                          idx === activeIdx ? "text-white" : "text-neutral-800 group-hover:text-orange-500"
                        }`}>
                          {exp.role}
                        </span>

                        {/* Company */}
                        <span className={`text-[9px] font-medium uppercase tracking-widest transition-colors duration-300 whitespace-normal leading-relaxed mt-0.5 ${
                          idx === activeIdx ? "text-white/80" : "text-neutral-500"
                        }`}>
                          {exp.company}
                        </span>
                      </div>
                    </div>

                    {/* Interactive Indicator Arrow */}
                    <div className="flex items-center shrink-0 self-center pl-2">
                      <svg 
                        className={`w-3.5 h-3.5 transition-all duration-300 transform ${
                          idx === activeIdx 
                            ? "opacity-100 translate-x-0 text-white" 
                            : "opacity-0 -translate-x-2 text-orange-500 group-hover:opacity-85 group-hover:translate-x-0"
                        }`} 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2.5" 
                        viewBox="0 0 24 24"
                      >
                        <polyline points="9 18 15 12 9 6" />
                      </svg>
                    </div>
                  </button>
                </div>

                {/* Mobile Expansion (Only visible on mobile when active) */}
                {idx === activeIdx && (
                  <div className="lg:hidden w-full flex flex-col gap-6 mt-6 mb-6 pl-4 border-l border-orange-500/30">
                    
                    {/* Active Image Box */}
                    <div className="flex flex-col items-center justify-center relative w-full mb-2">
                      <div 
                        className="relative z-10 w-full h-[280px] sm:h-[360px] rounded-xl overflow-hidden shadow-md border border-neutral-200/50 bg-neutral-950 flex items-center justify-center group select-none"
                      >
                        {exp.images.map((imgSrc, imgIdx) => (
                          <img
                            key={imgSrc}
                            src={imgSrc}
                            alt={`${exp.role} image ${imgIdx + 1}`}
                            className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-1000 ease-in-out ${
                              imgIdx === activeImgIdx ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                            }`}
                          />
                        ))}

                        {/* Floating Arrow Controls */}
                        {exp.images.length > 1 && (
                          <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex justify-between z-30 pointer-events-none">
                            <button
                              onClick={prevImage}
                              className="pointer-events-auto w-7 h-7 rounded-full bg-white/85 hover:bg-white text-neutral-800 shadow-md flex items-center justify-center"
                            >
                              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                                <polyline points="15 18 9 12 15 6" />
                              </svg>
                            </button>
                            <button
                              onClick={nextImage}
                              className="pointer-events-auto w-7 h-7 rounded-full bg-white/85 hover:bg-white text-neutral-800 shadow-md flex items-center justify-center"
                            >
                              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                                <polyline points="9 18 15 12 9 6" />
                              </svg>
                            </button>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Details content */}
                    <div className="flex flex-col text-left px-1">
                      {/* Role & Company Header inside expansion */}
                      <h4 className="font-sans text-[20px] sm:text-[22px] font-bold text-neutral-900 leading-tight mb-0.5">
                        {exp.role}
                      </h4>
                      <p className="text-neutral-500 font-medium text-[11px] uppercase tracking-wider mb-4">
                        by <span className="font-bold text-orange-500">{exp.company}</span>
                      </p>

                      {/* Short summary */}
                      <p className="font-sans italic text-sm sm:text-base text-neutral-700 leading-relaxed mb-3">
                        {exp.summary}
                      </p>

                      {/* Detailed summary */}
                      <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed mb-6">
                        {exp.longDescription}
                      </p>

                      {/* Core Tech Stack Badges */}
                      <div className="border-t border-neutral-200/60 pt-4">
                        <span className="font-bold text-neutral-400 uppercase tracking-widest text-[9px] mb-2 block">Core Technologies</span>
                        <div className="flex flex-wrap gap-1.5">
                          {exp.techStack.map((tech) => (
                            <span key={tech} className="rounded-full border border-neutral-200 bg-neutral-50 px-2 py-0.5 text-[9px] font-mono uppercase tracking-tight text-neutral-600">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Active Experience Content (Image on top, Details underneath - hidden on mobile) */}
        <div className="hidden lg:flex flex-col gap-6">
          
          {/* Header Title (Above the Image) */}
          <div className={`transition-all duration-300 transform ${isTransitioning ? "opacity-0 -translate-y-1.5" : "opacity-100 translate-y-0"} flex flex-col sm:flex-row sm:items-end sm:justify-between text-left px-2 mb-2 gap-4`}>
            {/* Left Column: Job Title & Company */}
            <div className="flex flex-col">
              {/* Job Title */}
              <h3 className="font-sans text-[28px] lg:text-[32px] font-bold text-neutral-900 leading-tight mb-1">
                {activeExp.role}
              </h3>
              
              {/* Company */}
              <p className="text-neutral-500 font-medium text-xs uppercase tracking-wider">
                by <span className="font-bold text-orange-500">{activeExp.company}</span>
              </p>
            </div>

            {/* Right Column: Date Period */}
            <div className="flex shrink-0 sm:mb-0.5">
              <span className="text-sm sm:text-base font-bold tracking-wider text-neutral-900 uppercase">
                {activeExp.period}
              </span>
            </div>
          </div>

          {/* Active Image Box */}
          <div className="flex flex-col items-center justify-center relative w-full mb-2">
            
            {/* Image Container Card */}
            <div 
              className="relative z-10 w-full h-[320px] sm:h-[400px] lg:h-[450px] rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-neutral-200/50 bg-neutral-950 flex items-center justify-center group select-none"
            >
              {/* Stacked Images for smooth hardware-accelerated cross-fade */}
              {activeExp.images.map((imgSrc, imgIdx) => (
                <img
                  key={imgSrc}
                  src={imgSrc}
                  alt={`${activeExp.role} image ${imgIdx + 1}`}
                  className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-1000 ease-in-out ${
                    imgIdx === activeImgIdx ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                  }`}
                />
              ))}

              {/* Floating Arrow Controls (Overlaid on top of the image) */}
              {activeExp.images.length > 1 && (
                <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex justify-between z-30 pointer-events-none">
                  <button
                    onClick={prevImage}
                    className="pointer-events-auto w-8 h-8 rounded-full bg-white/85 hover:bg-white text-neutral-800 shadow-md hover:scale-105 transition active:scale-95 cursor-pointer flex items-center justify-center"
                    aria-label="Previous image"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                      <polyline points="15 18 9 12 15 6" />
                    </svg>
                  </button>
                  <button
                    onClick={nextImage}
                    className="pointer-events-auto w-8 h-8 rounded-full bg-white/85 hover:bg-white text-neutral-800 shadow-md hover:scale-105 transition active:scale-95 cursor-pointer flex items-center justify-center"
                    aria-label="Next image"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Details (Underneath the Image) */}
          <div className={`transition-all duration-300 transform ${isTransitioning ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"} flex flex-col text-left px-2`}>
            {/* Short summary */}
            <p className="font-sans italic text-base lg:text-[18px] text-neutral-700 leading-relaxed mb-4">
              {activeExp.summary}
            </p>

            {/* Detailed summary */}
            <p className="text-neutral-600 text-sm leading-relaxed mb-8">
              {activeExp.longDescription}
            </p>

            {/* Core Tech Stack Badges */}
            <div className="border-t border-neutral-200/60 pt-6 mb-8">
              <span className="font-bold text-neutral-400 uppercase tracking-widest text-[9px] mb-2 block">Core Technologies</span>
              <div className="flex flex-wrap gap-2">
                {activeExp.techStack.map((tech) => (
                  <span key={tech} className="rounded-full border border-neutral-200 bg-neutral-50 px-2.5 py-1 text-[10px] font-mono uppercase tracking-tight text-neutral-600">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
