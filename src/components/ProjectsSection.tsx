interface Project {
  title: string;
  description: string;
  tags: string[];
}

const projects: Project[] = [
  {
    title: "LLM Gateway",
    description:
      "High-performance API gateway for large language models with dynamic batching, request prioritization, and real-time monitoring.",
    tags: ["Go", "gRPC", "Redis", "Kafka", "PostgreSQL/pgvector", "ClickHouse", "Docker/Kubernetes", "Prometheus/Grafana"],
  },
  {
    title: "NanoVLLM",
    description:
      "A minimalistic implementation of a transformer-based LLM inference engine optimized for low-latency and high-throughput on GPU with continuous batching, multi-step scheduling.",
    tags: ["Python", "CUDA", "Multi-Head Attention", "KV Cache", "Tensor Parallelism", "Prefix Cache"],
  },
  // {
  //   title: "Distributed KV Store",
  //   description:
  //     "Raft-based distributed key-value store supporting linearizable reads, automatic leader election, and log compaction.",
  //   tags: ["Go", "Raft", "gRPC", "Distributed Systems"],
  // },
  // {
  //   title: "Real-time Chat Platform",
  //   description:
  //     "End-to-end encrypted messaging platform supporting 10k concurrent connections per node with horizontal scaling.",
  //   tags: ["TypeScript", "WebSocket", "Redis", "React"],
  // },
  {
    title: "High Concurrency Cache System",
    description:
      "In-memory cache system optimized for high concurrency workloads with sharding and lock-free data structures.",
    tags: ["C++", "Concurrency", "LRU/LFU/ARC"],
  },
  {
    title: "SnapNote",
    description:
      "AI-powered note-taking platform that turns handwritten notes into organized digital documents with RAG semantic search and agentic workflows.",
    tags: ["Python", "TypeScript", "OCR", "RAG", "LangGraph", "PostgreSQL/pgvector", "React"],
  },
  {
    title: "WLP4 Compiler",
    description:
      "A compiler for the WLP4 language (Simplified C) that generates MIPS assembly code, implemented scanner, parser, semantic analyzer, and code generator from scratch using C++.",
    tags: ["C++", "Compiler", "MIPS"],
  },
  {
    title: "Biquadris",
    description:
      "A multiplayer Tetris video game implemented in C++. Supports both CLI and GUI, optimized resources management with RAII, implements software design patterns.",
    tags: ["C++", "RAII"],
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
