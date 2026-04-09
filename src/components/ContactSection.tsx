import BentoCard from "./BentoCard";

const links = [
  { label: "GitHub", href: "https://github.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Email", href: "mailto:hello@example.com" },
];

export default function ContactSection() {
  return (
    <section id="contact">
      <h2 className="text-2xl font-bold mb-4">Contact</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <BentoCard className="md:col-span-2">
          <h3 className="text-lg font-semibold mb-3">Get in Touch</h3>
          <p className="text-white/70 leading-relaxed mb-6">
            I&apos;m always open to new opportunities and collaborations.
            Whether you have a project in mind or just want to say hello,
            feel free to reach out.
          </p>
          <a
            href="mailto:hello@example.com"
            className="inline-block px-6 py-2.5 rounded-full bg-white/20 text-sm font-medium text-white border border-white/20 hover:bg-white/30 transition-colors"
          >
            Say Hello
          </a>
        </BentoCard>

        <BentoCard>
          <h3 className="text-lg font-semibold mb-3">Links</h3>
          <div className="space-y-3">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-white/10 transition-colors group"
              >
                <span className="text-white/70 group-hover:text-white transition-colors">
                  {link.label}
                </span>
                <span className="text-white/40 group-hover:text-white/70 transition-colors">
                  &rarr;
                </span>
              </a>
            ))}
          </div>
        </BentoCard>
      </div>
    </section>
  );
}
