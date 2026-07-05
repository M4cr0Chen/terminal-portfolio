import Image from "next/image";

interface Experience {
  role: string;
  company: string;
  icon?: string;
  period: string;
  description: string;
  link: string;
}

const experiences: Experience[] = [{
    role: "Machine Learning Engineer",
    company: "WAT.ai",
    icon: "/company_icons/watai.jpeg",
    period: "June 2026 - Present",
    description:
      "Researching on World Model for soccer dynamics, building a Mamba + S4 + actor/crtic architecture to predict next latent state and planning strategic actions.",
    link: "https://watai.ca/",
  },
  {
    role: "Software Engineer Intern",
    company: "Geotab",
    icon: "/company_icons/geotab.jpeg",
    period: "May 2026 - Aug 2026",
    description:
      "Optimized harsh event recommendation latency, engineered an offline-first cache layer with a synchronization queue, built an error observability dashboard.",
    link: "https://www.geotab.com/",
  },
  {
    role: "Game Engine Development Apprentice (AIGC)",
    company: "Tencent Games",
    icon: "/company_icons/tencent.png",
    period: "Jan 2026 - May 2026",
    description:
      "Designed a RAG persistent memory system and a hiearchical memory retrieval strategy.",
    link: "https://www.linkedin.com/company/tencent-games/",
  },
  {
    role: "Agentic AI Trainer",
    company: "Shipd",
    icon: "/company_icons/shipd.png",
    period: "Dec 2025 - April 2026",
    description:
      "Reviewed and curated AI training datasets for LLM Coding Agents.",
    link: "https://datacurve.ai/",
  },
  {
    role: "Software Engineer Intern",
    company: "Geotab",
    icon: "/company_icons/geotab.jpeg",
    period: "Sep 2025 - Dec 2025",
    description:
      "Built end-to-end compliance tests in C#, maintained and optimized the Geotab Drive App.",
    link: "https://www.geotab.com/",
  },
  {
    role: "Software Engineer Intern",
    company: "Octopodi Technologies",
    icon: "/company_icons/octopodi.png",
    period: "Jan 2025 - April 2025",
    description:
      "Developed a coding plagiarism detection application in Rust and TypeScript.",
    link: "https://www.octopodi.com/",
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience">
      <h2 className="text-lg font-semibold text-white mb-6">experience</h2>
      <div className="space-y-5">
        {experiences.map((exp, i) => (
          <div key={`${exp.role}-${exp.company}-${i}`}>
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-4">
              <span className="text-sm text-white">
                {exp.role}{" "}
                {exp.icon && (
                  <Image
                    src={exp.icon}
                    alt={exp.company}
                    width={16}
                    height={16}
                    className="inline-block align-text-bottom rounded-sm mx-0.5"
                  />
                )}
                <a href={exp.link} target="_blank" rel="noopener noreferrer" className="underline decoration-[#767676] hover:decoration-[#c0c0c0] transition-colors underline-offset-2">
                  {exp.company}
                </a>
              </span>
              <span className="text-xs text-[var(--color-muted)] whitespace-nowrap">
                {exp.period}
              </span>
            </div>
            <p className="text-sm text-[var(--color-muted)] mt-1 leading-relaxed">
              &mdash; {exp.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
