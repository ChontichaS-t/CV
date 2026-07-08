'use client';

import { useEffect } from "react";

export default function ScrollEffects() {
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>("section:not(#about)"));
    sections.forEach((section) => section.classList.add("reveal"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          } else {
            entry.target.classList.remove("active");
          }
        });
      },
      { threshold: 0.1 },
    );

    sections.forEach((section) => observer.observe(section));

    const header = document.querySelector<HTMLElement>("[data-site-header]");
    const handleScroll = () => {
      if (!header) return;
      if (window.scrollY > 20) {
        header.classList.add("header-scrolled");
      } else {
        header.classList.remove("header-scrolled");
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return null;
}
