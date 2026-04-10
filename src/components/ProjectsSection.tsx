interface Project {
  title: string;
  description: string;
  tags: string[];
}

const projects: Project[] = [
  {
    title: "LangGraph - AI/ML Framework",
    description:
      "A framework for building stateful, multi-actor applications with LLMs featuring graph-based orchestration and built-in persistence.",
    tags: ["Python", "AI/ML", "LangChain", "Graphs"],
  },
  {
    title: "PyTorch - Deep Learning Library",
    description:
      "Contributed to autograd engine and CUDA kernel optimizations. Improved training throughput by 15% for transformer architectures.",
    tags: ["Python", "C++", "CUDA", "Deep Learning"],
  },
  {
    title: "TensorFlow - ML Platform",
    description:
      "Built custom operators for distributed training across multi-GPU clusters with efficient data pipeline strategies.",
    tags: ["Python", "AI/ML", "C++", "Distributed"],
  },
  {
    title: "Distributed KV Store",
    description:
      "Raft-based distributed key-value store supporting linearizable reads, automatic leader election, and log compaction.",
    tags: ["Go", "Raft", "gRPC", "Distributed Systems"],
  },
  {
    title: "Real-time Chat Platform",
    description:
      "End-to-end encrypted messaging platform supporting 10k concurrent connections per node with horizontal scaling.",
    tags: ["TypeScript", "WebSocket", "Redis", "React"],
  },
  {
    title: "ML Pipeline Orchestrator",
    description:
      "Declarative ML pipeline framework with automatic hyperparameter tuning, experiment tracking, and model versioning.",
    tags: ["Python", "Kubernetes", "MLflow", "Docker"],
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects">
      <h2 className="text-lg font-semibold text-white mb-6">projects</h2>
      <div className="space-y-5">
        {projects.map((project) => (
          <div key={project.title}>
            <h3 className="text-sm font-medium text-white">
              {project.title}
            </h3>
            <p className="text-sm text-[var(--color-muted)] mt-1 leading-relaxed">
              {project.description}
            </p>
            <p className="text-xs text-[var(--color-muted)]/60 mt-1">
              {project.tags.join(", ")}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
