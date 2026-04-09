import BentoCard from "./BentoCard";


export default function AboutSection() {
  return (
    <BentoCard className="h-full flex flex-col">
      <h2 className="text-base font-bold text-white mb-2">
        About & Quick Stats
      </h2>
      <p className="text-sm text-[var(--color-muted)] leading-relaxed flex-1">
        Software engineer passionate about building scalable applications.
        Experienced in machine learning, distributed systems, and full-stack
        web development. Focused on creating clean, maintainable code and
        delivering impactful solutions.
      </p>

      {/* <div className="grid grid-cols-3 gap-3 pt-3 mt-3 border-t border-[var(--color-card-border)]">
        {stats.map((stat) => (
          <div key={stat.value} className="text-center">
            <p className="text-xl font-bold text-white">{stat.value}</p>
            <p className="text-xs text-[var(--color-muted)]">{stat.label}</p>
            {stat.sublabel && (
              <p className="text-xs text-[var(--color-muted)]">
                {stat.sublabel}
              </p>
            )}
          </div>
        ))}
      </div> */}
    </BentoCard>
  );
}
