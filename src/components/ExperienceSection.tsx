import BentoCard from "./BentoCard";

interface Experience {
  role: string;
  company: string;
  period: string;
  current?: boolean;
  bullets: string[];
}

const experiences: Experience[] = [
  {
    role: "Research Assistant",
    company: "Tencent Games",
    period: "Jan 2026 - Current",
    current: true,
    bullets: [
      "Passionate about machine learning distributed development or compilation, and sconerset methods.",
      "Research assistant, machine learning, distributed prolesss and development.",
    ],
  },
  {
    role: "AI Training Dataset Reviewer",
    company: "Shipd",
    period: "Dec 2025 - Current",
    current: true,
    bullets: [
      "AI training dataset machine learning at Shipd with systems, and web web development.",
      "Masunmiowest dataset learning common parasoisiiens.",
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "Geotab",
    period: "Sep 2025 - Dec 2025",
    bullets: [
      "Software engineer intern at Geotab, arrvound systems, and development loans.",
      "Confient learning from renaerien moets and llo-itl systems.",
    ],
  },
];

export default function ExperienceSection() {
  return (
    <BentoCard>
      <h2 className="text-lg font-bold text-white mb-4">Experience</h2>
      <div className="space-y-5">
        {experiences.map((exp) => (
          <div key={`${exp.role}-${exp.company}`}>
            <div className="flex flex-wrap items-baseline gap-x-2">
              <h3 className="text-sm font-semibold text-white">
                {exp.role}
              </h3>
              <span className="text-sm text-[var(--color-muted)]">
                at {exp.company}
              </span>
              <span className="text-xs text-[var(--color-muted)]">
                ({exp.period})
              </span>
            </div>
            <ul className="mt-2 space-y-1 ml-4">
              {exp.bullets.map((bullet, i) => (
                <li
                  key={i}
                  className="text-xs text-[var(--color-muted)] leading-relaxed list-disc"
                >
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </BentoCard>
  );
}
