import BentoCard from "./BentoCard";

interface Project {
  title: string;
  description: string;
  tags: string[];
}

const projects: Project[] = [
  {
    title: "LangGraph - AI/ML Framework",
    description: "LangGraph -ML framework",
    tags: ["Python", "AI/ML"],
  },
  {
    title: "PyTorch - Deep Learning Library",
    description: "Deep Learning class library",
    tags: ["Python", "C++"],
  },
  {
    title: "TensorFlow - ML Platform",
    description: "Tensorflow ML platform",
    tags: ["Python", "AI/ML", "C++"],
  },
];

export default function ProjectsSection() {
  return (
    <BentoCard>
      <h2 className="text-lg font-bold text-white mb-4">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {projects.map((project) => (
          <div
            key={project.title}
            className="p-4 rounded-lg border border-[var(--color-card-border)] bg-[var(--color-background)] hover:border-neutral-600 transition-colors"
          >
            <h3 className="text-sm font-semibold text-white mb-1">
              {project.title}
            </h3>
            <p className="text-xs text-[var(--color-muted)] mb-3">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 text-xs rounded bg-[var(--color-card)] border border-[var(--color-card-border)] text-[var(--color-muted)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </BentoCard>
  );
}
