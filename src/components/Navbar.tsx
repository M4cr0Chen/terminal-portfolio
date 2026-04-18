const navItems = [
  { label: "home", href: "#top" },
  { label: "experience", href: "#experience" },
  { label: "projects", href: "#projects" },
  { label: "contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-background)]/80 backdrop-blur-sm">
      <div className="max-w-[640px] mx-auto px-6 py-4 flex items-center gap-6 md:ml-[calc(50%-340px+3vw)]">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="text-sm text-[var(--color-muted)] hover:text-white transition-colors"
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
