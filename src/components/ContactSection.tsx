import BentoCard from "./BentoCard";

export default function ContactSection() {
  return (
    <BentoCard>
      <h2 className="text-lg font-bold text-white mb-3">Get in Touch</h2>
      <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-4">
        I&apos;m always open to new opportunities and collaborations. Feel free
        to reach out.
      </p>
      <a
        href="mailto:hello@example.com"
        className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-white border border-[var(--color-card-border)] rounded-md hover:bg-white/5 transition-colors"
      >
        <svg
          className="w-3.5 h-3.5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
          />
        </svg>
        Send Email
      </a>
    </BentoCard>
  );
}
