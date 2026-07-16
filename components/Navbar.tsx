"use client";

import { useState, useEffect } from "react";

const navigation = [
  { label: "About Me", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Extracurriculars", href: "#extracurriculars" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const contactItems = [
    {
      label: "Gmail",
      display: "chontichas.contact@gmail.com",
      copyValue: "chontichas.contact@gmail.com",
      link: "mailto:chontichas.contact@gmail.com",
      icon: (
        <img src="/logo/Contact/icons8-gmail-480.png" alt="Gmail" className="w-4 h-4 object-contain" />
      ),
    },
    {
      label: "Phone",
      display: "081-491-2676",
      copyValue: "0814912676",
      link: "tel:0814912676",
      icon: (
        <img src="/logo/Contact/icons8-phone-250.png" alt="Phone" className="w-4 h-4 object-contain" />
      ),
    },
    {
      label: "Facebook",
      display: "Chonticha Sukchalee",
      copyValue: "https://www.facebook.com/chonticha.sukchalee?locale=th_TH",
      link: "https://www.facebook.com/chonticha.sukchalee?locale=th_TH",
      target: "_blank",
      icon: (
        <img src="/logo/Contact/icons8-facebook-480.png" alt="Facebook" className="w-4 h-4 object-contain" />
      ),
    },
  ];

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    });
  };

  // Close contact dropdown on click outside
  useEffect(() => {
    if (!isContactOpen) return;
    const handleOutsideClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest(".contact-dropdown-container")) {
        setIsContactOpen(false);
      }
    };
    window.addEventListener("click", handleOutsideClick);
    return () => window.removeEventListener("click", handleOutsideClick);
  }, [isContactOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Track scroll position to transition the navbar style and check dark section overlap
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const aboutEl = document.getElementById("about");
      if (aboutEl) {
        const rect = aboutEl.getBoundingClientRect();
        // Navbar is 64px tall. Check if the navbar overlaps with the #about section bounds.
        const overlaps = rect.top <= 0 && rect.bottom >= 64;
        setIsDarkTheme(overlaps);
      } else {
        setIsDarkTheme(false);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Backdrop overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/10 backdrop-blur-[2px] transition-opacity duration-300 lg:hidden ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      <header
        data-site-header
        className={`fixed top-0 z-50 w-full transition-all duration-300 ease-in-out ${
          isOpen
            ? (isDarkTheme 
                ? "bg-black text-white border-b border-white/10" 
                : "bg-surface text-primary border-b border-outline-variant/20")
            : (isScrolled
                ? (isDarkTheme
                    ? "border-b border-white/10 bg-black/85 backdrop-blur-md text-white py-2 shadow-md"
                    : "border-b border-outline-variant/20 bg-surface/85 backdrop-blur-md text-primary py-2 shadow-sm")
                : (isDarkTheme
                    ? "border-b border-transparent bg-transparent text-white py-4"
                    : "border-b border-transparent bg-transparent text-primary py-4"))
        }`}
      >
        <div className="mx-auto flex h-16 max-w-container-max items-center justify-between px-gutter">
          {/* Left: Logo */}
          <div className="flex-1 flex justify-start">
            <a
              href="#top"
              className={`transition-all duration-300 select-none font-bold uppercase tracking-widest text-[13px] sm:text-[15px] lg:text-[17px] hover:opacity-85 ${
                isDarkTheme ? "text-white" : "text-primary"
              }`}
            >
              CHONTICHA SUKCHALEE
            </a>
          </div>

          {/* Center: Desktop Navigation */}
          <nav className="hidden items-center gap-5 lg:gap-8 lg:flex">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`font-label-md text-label-md transition-colors duration-200 ${
                  isDarkTheme 
                    ? "text-neutral-400 hover:text-white" 
                    : "text-secondary hover:text-primary"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right: Actions */}
          <div className="flex-1 flex justify-end items-center gap-4">
            {/* Desktop Contact Button */}
            <div className="hidden lg:block relative contact-dropdown-container">
              <button
                onClick={() => setIsContactOpen(!isContactOpen)}
                className="rounded-full px-6 py-2.5 font-label-md text-label-md transition-all duration-300 hover:scale-105 bg-orange-500 text-white hover:bg-orange-600 focus:outline-none cursor-pointer"
              >
                Contact
              </button>

              {/* Desktop Contact Dropdown Menu */}
              {isContactOpen && (
                <div className={`absolute right-0 md:-right-16 lg:-right-32 xl:-right-40 mt-3 w-[280px] rounded-2xl p-2.5 shadow-xl border backdrop-blur-md transition-all duration-300 z-50 flex flex-col gap-1 ${
                  isDarkTheme 
                    ? "bg-black/95 text-white border-white/10" 
                    : "bg-white/95 text-primary border-outline-variant/20 shadow-[0_8px_30px_rgba(0,0,0,0.12)]"
                }`}>
                  {contactItems.map((item, idx) => (
                    <div 
                      key={item.label} 
                      className={`flex items-center justify-between gap-2 p-2 rounded-xl transition-colors ${
                        isDarkTheme ? "hover:bg-white/5" : "hover:bg-neutral-100"
                      }`}
                    >
                      <a
                        href={item.link}
                        target={item.target || "_self"}
                        rel={item.target === "_blank" ? "noopener noreferrer" : undefined}
                        className="flex items-center gap-3 flex-1 min-w-0"
                      >
                        {item.icon}
                        <div className="flex flex-col min-w-0 text-left">
                          <span className={`text-[9px] uppercase tracking-wider font-semibold ${
                            isDarkTheme ? "text-neutral-500" : "text-neutral-400"
                          }`}>
                            {item.label}
                          </span>
                          <span className="text-xs font-semibold truncate leading-tight mt-0.5">
                            {item.display}
                          </span>
                        </div>
                      </a>
                      
                      <button
                        onClick={() => handleCopy(item.copyValue, idx)}
                        className={`p-1.5 rounded-lg border transition-all duration-200 shrink-0 cursor-pointer ${
                          copiedIndex === idx
                            ? "bg-green-500/10 border-green-500/20 text-green-500"
                            : (isDarkTheme 
                                ? "border-transparent text-neutral-500 hover:text-white hover:bg-white/5" 
                                : "border-transparent text-neutral-400 hover:text-primary hover:bg-neutral-100")
                        }`}
                        title="Copy to clipboard"
                      >
                        {copiedIndex === idx ? (
                          <svg className="w-3.5 h-3.5 text-green-500" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        ) : (
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                            <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                          </svg>
                        )}
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Actions: Hamburger & Contact Button side-by-side */}
            <div className="flex lg:hidden flex-row items-center gap-3.5 z-50">
              {/* Mobile Contact Dropdown Button */}
              <div className="relative contact-dropdown-container">
                <button
                  onClick={() => setIsContactOpen(!isContactOpen)}
                  className="rounded-full px-4 py-2 font-label-md text-[11px] font-bold uppercase tracking-wider bg-orange-500 text-white hover:bg-orange-600 focus:outline-none cursor-pointer"
                >
                  Contact
                </button>

                {/* Mobile Contact Dropdown Menu */}
                {isContactOpen && (
                  <div className={`absolute right-0 mt-2 w-[245px] rounded-2xl p-2.5 shadow-xl border backdrop-blur-md transition-all duration-300 z-50 flex flex-col gap-1 ${
                    isDarkTheme 
                      ? "bg-black/95 text-white border-white/10" 
                      : "bg-white/95 text-primary border-outline-variant/20 shadow-[0_8px_30px_rgba(0,0,0,0.12)]"
                  }`}>
                    {contactItems.map((item, idx) => (
                      <div 
                        key={item.label} 
                        className={`flex items-center justify-between gap-2 p-2 rounded-xl transition-colors ${
                          isDarkTheme ? "hover:bg-white/5" : "hover:bg-neutral-100"
                        }`}
                      >
                        <a
                          href={item.link}
                          target={item.target || "_self"}
                          rel={item.target === "_blank" ? "noopener noreferrer" : undefined}
                          className="flex items-center gap-3 flex-1 min-w-0"
                        >
                          {item.icon}
                          <div className="flex flex-col min-w-0 text-left">
                            <span className={`text-[9px] uppercase tracking-wider font-semibold ${
                              isDarkTheme ? "text-neutral-500" : "text-neutral-400"
                            }`}>
                              {item.label}
                            </span>
                            <span className="text-xs font-semibold truncate leading-tight mt-0.5">
                              {item.display}
                            </span>
                          </div>
                        </a>
                        
                        <button
                          onClick={() => handleCopy(item.copyValue, idx)}
                          className={`p-1.5 rounded-lg border transition-all duration-200 shrink-0 cursor-pointer ${
                            copiedIndex === idx
                              ? "bg-green-500/10 border-green-500/20 text-green-500"
                              : (isDarkTheme 
                                  ? "border-transparent text-neutral-500 hover:text-white hover:bg-white/5" 
                                  : "border-transparent text-neutral-400 hover:text-primary hover:bg-neutral-100")
                          }`}
                          title="Copy to clipboard"
                        >
                          {copiedIndex === idx ? (
                            <svg className="w-3.5 h-3.5 text-green-500" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                          ) : (
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                              <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                            </svg>
                          )}
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Menu Button (Minimalist 3-line design) */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] rounded-full transition-colors focus:outline-none z-50"
                aria-expanded={isOpen}
                aria-label="Toggle menu"
              >
                <span
                  className={`block h-[1.5px] w-5 transition-all duration-300 ease-in-out ${
                    isDarkTheme ? "bg-white" : "bg-primary"
                  } ${isOpen ? "translate-y-[6.5px] rotate-45" : ""}`}
                />
                <span
                  className={`block h-[1.5px] w-5 transition-all duration-300 ease-in-out ${
                    isDarkTheme ? "bg-white" : "bg-primary"
                  } ${isOpen ? "opacity-0" : ""}`}
                />
                <span
                  className={`block h-[1.5px] w-5 transition-all duration-300 ease-in-out ${
                    isDarkTheme ? "bg-white" : "bg-primary"
                  } ${isOpen ? "-translate-y-[6.5px] -rotate-45" : ""}`}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        <div
          className={`grid transition-all duration-300 ease-in-out lg:hidden ${
            isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0 pointer-events-none"
          }`}
        >
          <div className="overflow-hidden">
            <nav className={`flex flex-col gap-4 px-gutter pb-6 pt-2 border-t transition-colors duration-300 ${
              isDarkTheme
                ? "border-white/10 bg-black text-white"
                : "border-outline-variant/20 bg-surface text-primary"
            }`}>
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`font-medium text-[16px] py-2 transition-colors ${
                    isDarkTheme
                      ? "text-neutral-400 hover:text-white"
                      : "text-secondary hover:text-primary"
                  }`}
                >
                  {item.label}
                </a>
              ))}
              {/* Contact section removed (moved to header top-left) */}
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
