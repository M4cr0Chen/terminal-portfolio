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
    skills: ["React", "Next.js", "Django"],
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
      <h2 className="text-base font-bold text-white mb-3">Skills</h2>
      <div className="space-y-2.5">
        {categories.map((category) => (
          <div key={category.label} className="flex items-start gap-3">
            <span className="text-xs font-medium text-[var(--color-muted)] w-20 shrink-0 pt-0.5">
              {category.label}
            </span>
            <div className="flex flex-wrap gap-1.5">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-2 py-0.5 text-xs rounded bg-[var(--color-background)] border border-[var(--color-card-border)] text-[var(--color-muted)]"
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
