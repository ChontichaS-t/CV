"use client";

import { useState, useEffect } from "react";

const navigation = [
  { label: "Experience", href: "#experience" },
  { label: "Extracurriculars", href: "#extracurriculars" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

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

  return (
    <>
      {/* Backdrop overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/10 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      <header
        data-site-header
        className="fixed top-0 z-50 w-full border-b border-outline-variant/30 bg-surface/80 backdrop-blur-md transition-all duration-300 ease-in-out"
      >
        <div className="mx-auto flex h-16 max-w-container-max items-center justify-between px-gutter">
          <a href="#top" className="text-headline-md font-headline-md tracking-tighter text-primary">
            Chonticha Sukchalee
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-stack-md md:flex">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-label-md text-label-md text-secondary transition-colors hover:text-primary"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="rounded-full bg-primary px-5 py-2 font-label-md text-label-md text-on-primary transition-opacity hover:opacity-90"
            >
              Contact
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-[6px] rounded-full hover:bg-surface-container transition-colors md:hidden focus:outline-none z-50"
            aria-expanded={isOpen}
            aria-label="Toggle menu"
          >
            <span
              className={`block h-[2px] w-6 bg-primary transition-all duration-300 ease-in-out ${
                isOpen ? "translate-y-[8px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-[2px] w-6 bg-primary transition-all duration-300 ease-in-out ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-[2px] w-6 bg-primary transition-all duration-300 ease-in-out ${
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
            <nav className="flex flex-col gap-4 px-gutter pb-6 pt-2 border-t border-outline-variant/20">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="font-medium text-[16px] text-secondary py-2 transition-colors hover:text-primary"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="rounded-full bg-primary px-5 py-3 text-center font-label-md text-label-md text-on-primary transition-opacity hover:opacity-90"
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

