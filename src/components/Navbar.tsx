"use client";

import { useState } from "react";

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("Home");

  const handleClick = (label: string, href: string) => {
    setActive(label);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-1 px-2 py-1.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 shadow-lg">
        {navItems.map((item) => (
          <button
            key={item.label}
            onClick={() => handleClick(item.label, item.href)}
            className={`px-5 py-1.5 rounded-full text-sm font-medium transition-colors cursor-pointer whitespace-nowrap ${
              active === item.label
                ? "bg-white/10 text-white"
                : "text-[var(--color-muted)] hover:text-white hover:bg-white/5"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  );
}
