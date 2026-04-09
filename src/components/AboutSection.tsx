import BentoCard from "./BentoCard";

const stats = [
  { value: "3+", label: "Years", sublabel: "Experience" },
  { value: "10+", label: "Projects", sublabel: "Completed" },
  { value: "AI/ML", label: "Focus", sublabel: "" },
];

export default function AboutSection() {
  return (
    <BentoCard>
      <h2 className="text-lg font-bold text-white mb-3">
        About & Quick Stats
      </h2>
      <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-6">
        Software engineer passionate about building scalable applications.
        Experienced in machine learning, distributed systems, and full-stack
        web development. Focused on creating clean, maintainable code and
        delivering impactful solutions.
      </p>

      <div className="grid grid-cols-3 gap-4 pt-4 border-t border-[var(--color-card-border)]">
        {stats.map((stat) => (
          <div key={stat.value} className="text-center">
            <p className="text-2xl font-bold text-white">{stat.value}</p>
            <p className="text-xs text-[var(--color-muted)]">{stat.label}</p>
            {stat.sublabel && (
              <p className="text-xs text-[var(--color-muted)]">
                {stat.sublabel}
              </p>
            )}
          </div>
        ))}
      </div>
    </BentoCard>
  );
}
