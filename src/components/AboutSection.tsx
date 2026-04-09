import BentoCard from "./BentoCard";

const skills = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "Tailwind CSS",
  "PostgreSQL",
  "Git",
];

const stats = [
  { label: "Years Experience", value: "3+" },
  { label: "Projects Completed", value: "15+" },
  { label: "Technologies", value: "10+" },
];

export default function AboutSection() {
  return (
    <section id="about" className="mb-6">
      <h2 className="text-2xl font-bold mb-4">About</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <BentoCard className="md:col-span-2">
          <h3 className="text-lg font-semibold mb-3">Who I Am</h3>
          <p className="text-white/70 leading-relaxed">
            I&apos;m a passionate developer who loves building modern web
            applications. With a strong foundation in full-stack development,
            I focus on creating intuitive user experiences backed by robust
            architecture. When I&apos;m not coding, you&apos;ll find me
            exploring new technologies and contributing to open-source
            projects.
          </p>
        </BentoCard>

        <BentoCard>
          <h3 className="text-lg font-semibold mb-3">Quick Stats</h3>
          <div className="space-y-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-bold">{stat.value}</p>
                <p className="text-sm text-white/50">{stat.label}</p>
              </div>
            ))}
          </div>
        </BentoCard>

        <BentoCard className="lg:col-span-3">
          <h3 className="text-lg font-semibold mb-3">Skills & Technologies</h3>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1.5 rounded-full bg-white/10 text-sm text-white/80 border border-white/10"
              >
                {skill}
              </span>
            ))}
          </div>
        </BentoCard>
      </div>
    </section>
  );
}
