const links = [
  { label: "email", href: "mailto:z253chen@uwaterloo.ca" },
  { label: "twitter", href: "https://x.com/zh_mc050503" },
  { label: "github", href: "https://github.com/M4cr0Chen" },
  { label: "linkedin", href: "https://www.linkedin.com/in/zhenghong-chen-974102245/" },
  { label: "resume", href: "/Marco_Resume.pdf" },
];

export default function ContactSection() {
  const isExternal = (href: string) => !href.startsWith("mailto");

  return (
    <footer id="contact" className="pt-8 pb-4 space-y-6">
      <div className="flex items-center gap-6 flex-wrap">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={isExternal(link.href) ? "_blank" : undefined}
            rel={isExternal(link.href) ? "noopener noreferrer" : undefined}
            className="text-sm text-[var(--color-muted)] hover:text-white transition-colors"
          >
            [ {link.label} ]
          </a>
        ))}
      </div>
    </footer>
  );
}
