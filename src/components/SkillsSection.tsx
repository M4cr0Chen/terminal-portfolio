import BentoCard from "./BentoCard";

interface SkillCategory {
  label: string;
  skills: string[];
}

const categories: SkillCategory[] = [
  {
    label: "Languages",
    skills: ["Python", "C++", "Java", "TypeScript"],
  },
  {
    label: "Frameworks",
    skills: ["React", "Next.js", "Django", "Frameworks"],
  },
  {
    label: "Tools",
    skills: ["Git", "Docker", "Kubernetes"],
  },
  {
    label: "Databases",
    skills: ["PostgreSQL", "MongoDB"],
  },
];

export default function SkillsSection() {
  return (
    <BentoCard>
      <h2 className="text-lg font-bold text-white mb-4">Skills</h2>
      <div className="space-y-3">
        {categories.map((category) => (
          <div key={category.label} className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-medium text-[var(--color-muted)] w-20 shrink-0">
              {category.label}
            </span>
            <div className="flex flex-wrap gap-1.5">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-2.5 py-0.5 text-xs rounded bg-[var(--color-background)] border border-[var(--color-card-border)] text-[var(--color-muted)]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </BentoCard>
  );
}
