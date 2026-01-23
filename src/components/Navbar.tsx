"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur border-b border-zinc-200"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="font-semibold tracking-wide">
          <Link href="#hero" className={`${scrolled ? "text-zinc-900" : "text-white"}`}>
            Habitaria
          </Link>
        </div>
        <div className="hidden gap-8 md:flex">
          {[
            { href: "#philosophy", label: "Philosophy" },
            { href: "#projects", label: "Projects" },
            { href: "#technology", label: "Technology" },
            { href: "#contact", label: "Contact" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm transition-colors ${
                scrolled ? "text-zinc-700 hover:text-zinc-900" : "text-white/90 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div>
          <Link
            href="#contact"
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors border ${
              scrolled
                ? "border-zinc-300 text-zinc-900 hover:bg-zinc-100"
                : "border-white/60 text-white hover:bg-white/10"
            }`}
          >
            Request Consultation
          </Link>
        </div>
      </nav>
    </header>
  );
}