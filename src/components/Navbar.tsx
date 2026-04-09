"use client";

import { useState, useEffect } from "react";
import Logo from "./Logo";

const navItems = [
  { label: "Index", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("Index");

  useEffect(() => {
    const sectionIds = navItems.map((item) => item.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const match = navItems.find(
              (item) => item.href === `#${entry.target.id}`
            );
            if (match) setActive(match.label);
          }
        });
      },
      { threshold: 0.3 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = (label: string, href: string) => {
    setActive(label);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-1 px-3 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg">
        <div className="px-3">
          <Logo />
        </div>
        <div className="w-px h-6 bg-white/30" />
        <div className="flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleClick(item.label, item.href)}
              className={`px-5 py-1.5 rounded-full text-sm font-medium text-white transition-colors cursor-pointer ${
                active === item.label
                  ? "bg-white/20"
                  : "hover:bg-white/10"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
