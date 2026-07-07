"use client";

import { useState, useEffect } from "react";

const navigation = [
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Extracurriculars", href: "#extracurriculars" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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

  // Track scroll position to transition the navbar style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Backdrop overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/10 backdrop-blur-[2px] transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      <header
        data-site-header
        className={`fixed top-0 z-50 w-full transition-all duration-300 ease-in-out ${
          isOpen
            ? "bg-surface text-primary border-b border-outline-variant/20"
            : (isScrolled
                ? "border-b border-outline-variant/20 bg-surface/85 backdrop-blur-md text-primary py-2 shadow-sm"
                : "border-b border-transparent bg-transparent text-primary py-4")
        }`}
      >
        <div className="mx-auto flex h-16 max-w-container-max items-center justify-between px-gutter">
          <a
            href="#top"
            className="transition-all duration-300 select-none font-bold uppercase tracking-widest text-[13px] sm:text-[15px] lg:text-[17px] hover:opacity-85 text-primary"
          >
            CHONTICHA SUKCHALEE
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-stack-md md:flex">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-label-md text-label-md transition-colors duration-200 text-secondary hover:text-primary"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="rounded-full px-6 py-2.5 font-label-md text-label-md transition-all duration-300 bg-primary text-on-primary hover:bg-neutral-800 hover:scale-105"
            >
              Contact
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-[6px] rounded-full transition-colors md:hidden focus:outline-none z-50 hover:bg-surface-container"
            aria-expanded={isOpen}
            aria-label="Toggle menu"
          >
            <span
              className={`block h-[2px] w-6 transition-all duration-300 ease-in-out bg-primary ${
                isOpen ? "translate-y-[8px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-[2px] w-6 transition-all duration-300 ease-in-out bg-primary ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-[2px] w-6 transition-all duration-300 ease-in-out bg-primary ${
                isOpen ? "-translate-y-[8px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        <div
          className={`grid transition-all duration-300 ease-in-out md:hidden ${
            isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0 pointer-events-none"
          }`}
        >
          <div className="overflow-hidden">
            <nav className="flex flex-col gap-4 px-gutter pb-6 pt-2 border-t transition-colors duration-300 border-outline-variant/20 bg-surface text-primary">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="font-medium text-[16px] py-2 transition-colors text-secondary hover:text-primary"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="rounded-full px-5 py-3 text-center font-label-md text-label-md transition-all duration-300 bg-primary text-on-primary hover:bg-neutral-800"
              >
                Contact
              </a>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
