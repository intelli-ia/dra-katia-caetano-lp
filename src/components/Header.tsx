"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { WA_LINK } from "@/lib/constants";

export default function Header() {
  const [isLightSection, setIsLightSection] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const secondSection = sections[1];
      if (!secondSection) return;
      setVisible(secondSection.getBoundingClientRect().bottom <= 0);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const triggerOffset = 40; // altura aproximada onde o header fica, a partir do topo da tela

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsLightSection(entry.target.className.includes("section-bg-light"));
          }
        });
      },
      {
        rootMargin: `-${triggerOffset}px 0px -${typeof window !== "undefined" ? window.innerHeight - triggerOffset - 1 : 0}px 0px`,
        threshold: 0,
      }
    );

    const sections = document.querySelectorAll("section");
    sections.forEach((sec) => observer.observe(sec));

    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-5 left-0 right-0 z-50 flex justify-center px-4 transition-[opacity,transform] duration-500 ease-out ${
        visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 -translate-y-4 pointer-events-none"
      }`}
    >
      <div
        style={{ WebkitBackdropFilter: "blur(14px)", backdropFilter: "blur(14px)" }}
        className={`flex items-center justify-between gap-6 md:gap-4 rounded-full px-4 py-1.5 md:px-6 md:py-2.5 shadow-lg w-full max-w-xl md:max-w-2xl transform-gpu transition-colors duration-300 ${
          isLightSection
            ? "bg-[#13181E]/5 border border-[#13181E]/10"
            : "bg-white/10 border border-white/20"
        }`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center flex-shrink-0 pl-2">
          <span
            className={`font-heading font-medium text-sm md:text-lg tracking-wide transition-colors duration-300 ${
              isLightSection ? "text-[#13181E]" : "text-white"
            }`}
          >
            Supervisão Clínica
          </span>
        </Link>

        {/* CTA */}
        <Link
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-premium flex-shrink-0 text-[#FFC800] font-heading font-medium text-xs md:text-base tracking-wide rounded-full px-4 py-1.5 md:px-8 md:py-3.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_6px_18px_-6px_rgba(0,133,56,0.55)] hover:-translate-y-0.5 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.3),0_10px_24px_-6px_rgba(0,133,56,0.7)] active:translate-y-0.5"
        >
          Quero participar
        </Link>
      </div>
    </header>
  );
}
