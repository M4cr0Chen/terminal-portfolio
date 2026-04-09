"use client";

import { useState, useRef, useCallback, useEffect, memo } from "react";
import { useFocus } from "@/context/FocusContext";

interface Project {
  title: string;
  description: string;
  detail: string;
  tags: string[];
  color: string;
}

const projects: Project[] = [
  {
    title: "LangGraph - AI/ML Framework",
    description: "LangGraph -ML framework",
    detail:
      "A comprehensive framework for building stateful, multi-actor applications with LLMs. Features graph-based orchestration, built-in persistence, and human-in-the-loop capabilities for complex AI workflows.",
    tags: ["Python", "AI/ML", "LangChain", "Graphs"],
    color: "#3b82f6",
  },
  {
    title: "PyTorch - Deep Learning Library",
    description: "Deep Learning class library",
    detail:
      "Contributed to PyTorch's autograd engine and CUDA kernel optimizations. Improved training throughput by 15% for transformer-based architectures through custom fused attention kernels.",
    tags: ["Python", "C++", "CUDA", "Deep Learning"],
    color: "#ef4444",
  },
  {
    title: "TensorFlow - ML Platform",
    description: "Tensorflow ML platform",
    detail:
      "Built custom TensorFlow operators for distributed training across multi-GPU clusters. Implemented efficient data pipeline strategies and model serving infrastructure.",
    tags: ["Python", "AI/ML", "C++", "Distributed"],
    color: "#f97316",
  },
  {
    title: "Distributed KV Store",
    description: "Fault-tolerant key-value store",
    detail:
      "A Raft-based distributed key-value store supporting linearizable reads, automatic leader election, and log compaction. Handles network partitions and node failures gracefully.",
    tags: ["Go", "Raft", "gRPC", "Distributed Systems"],
    color: "#06b6d4",
  },
  {
    title: "Real-time Chat Platform",
    description: "WebSocket-based messaging system",
    detail:
      "End-to-end encrypted messaging platform with presence indicators, typing status, and message threading. Supports 10k concurrent connections per node with horizontal scaling.",
    tags: ["TypeScript", "WebSocket", "Redis", "React"],
    color: "#8b5cf6",
  },
  {
    title: "ML Pipeline Orchestrator",
    description: "Automated ML training pipelines",
    detail:
      "Declarative ML pipeline framework with automatic hyperparameter tuning, experiment tracking, and model versioning. Integrates with cloud providers for elastic compute scaling.",
    tags: ["Python", "Kubernetes", "MLflow", "Docker"],
    color: "#10b981",
  },
];

const EASE = "cubic-bezier(0.23, 1, 0.32, 1)";
const CARD_H_COMPACT = 78;  // collapsed section: title + tags only
const CARD_H_FULL = 95;    // expanded section: title + description + tags
const CARD_BASE_TRANSFORM = "translate(-50%, -50%) perspective(800px) rotateX(0deg) rotateY(0deg)";

/* ── Individual project card (Layer 2) ── */
const ProjectCard = memo(function ProjectCard({
  project,
  sectionExpanded,
  isExpanded,
  onToggle,
}: {
  project: Project;
  sectionExpanded: boolean;
  isExpanded: boolean;
  onToggle: (title: string) => void;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Direct DOM mutation for tilt + glow — avoids ~60 re-renders/sec on mousemove
  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    cardRef.current.style.transform = `translate(-50%, -50%) perspective(800px) rotateX(${(y - 0.5) * -10}deg) rotateY(${(x - 0.5) * 10}deg)`;
    if (glowRef.current) {
      glowRef.current.style.background = `radial-gradient(300px circle at ${x * 100}% ${y * 100}%, ${project.color}, transparent 60%)`;
    }
  }, [project.color]);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    if (cardRef.current) {
      cardRef.current.style.transform = CARD_BASE_TRANSFORM;
    }
  }, []);

  // Sync imperative DOM state when section collapses
  useEffect(() => {
    if (!sectionExpanded) {
      setIsHovered(false);
      if (cardRef.current) {
        cardRef.current.style.transform = CARD_BASE_TRANSFORM;
      }
    }
  }, [sectionExpanded]);

  const showGlow = isHovered || isExpanded;

  return (
    <div
      style={{
        height: sectionExpanded ? CARD_H_FULL : CARD_H_COMPACT,
        transition: `height 400ms ${EASE}`,
      }}
      className="relative"
    >
      <div
        ref={cardRef}
        onClick={(e) => {
          if (!sectionExpanded) return;
          e.stopPropagation();
          onToggle(project.title);
        }}
        onMouseEnter={() => sectionExpanded && setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        onMouseMove={(e) => sectionExpanded && handleMouseMove(e)}
        className={`absolute rounded-lg border bg-[var(--color-background)] ${sectionExpanded ? "cursor-pointer" : "pointer-events-none"}`}
        style={{
          top: "50%",
          left: "50%",
          width: isExpanded ? "calc(100% + 20px)" : "100%",
          height: isExpanded ? undefined : sectionExpanded ? CARD_H_FULL : CARD_H_COMPACT,
          overflow: "hidden",
          transform: CARD_BASE_TRANSFORM,
          transition: `width 300ms ${EASE}, height 300ms ${EASE}, box-shadow 300ms ${EASE}, border-color 300ms ${EASE}`,
          zIndex: isExpanded ? 40 : isHovered ? 20 : 1,
          borderColor: showGlow
            ? `${project.color}40`
            : "var(--color-card-border)",
          boxShadow: isExpanded
            ? `0 20px 60px rgba(0,0,0,0.6), 0 0 30px ${project.color}15`
            : isHovered
              ? `0 0 28px rgba(255,255,255,0.08), 0 4px 16px rgba(0,0,0,0.3)`
              : "none",
        }}
      >
        {/* Cursor-following glow — background updated via ref */}
        <div
          ref={glowRef}
          className="pointer-events-none absolute inset-0"
          style={{
            opacity: showGlow ? 0.1 : 0,
            transition: "opacity 300ms ease-out",
            background: `radial-gradient(300px circle at 50% 50%, ${project.color}, transparent 60%)`,
          }}
        />

        {/* Edge glow on hover (white highlight) */}
        <div
          className="pointer-events-none absolute inset-0 rounded-lg"
          style={{
            opacity: isHovered && !isExpanded ? 1 : 0,
            transition: "opacity 300ms ease-out",
            boxShadow: "inset 0 0 20px rgba(255,255,255,0.08)",
          }}
        />

        {/* Image area — grows from 0 when expanded */}
        <div
          style={{
            height: isExpanded ? 120 : 0,
            opacity: isExpanded ? 1 : 0,
            transition: `height 400ms ${EASE}, opacity 300ms ease-out`,
            overflow: "hidden",
          }}
        >
          <div
            className="h-full w-full flex items-center justify-center"
            style={{
              background: `linear-gradient(135deg, ${project.color}20, ${project.color}08)`,
            }}
          >
            <div className="flex flex-col items-center gap-1.5">
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center text-base font-bold"
                style={{
                  backgroundColor: `${project.color}25`,
                  color: project.color,
                }}
              >
                {project.title.charAt(0)}
              </div>
              <span
                className="text-xs font-medium"
                style={{ color: `${project.color}bb` }}
              >
                {project.title.split(" - ")[0]}
              </span>
            </div>
          </div>
        </div>

        {/* Text content */}
        <div className="p-3">
          <h3 className="text-sm font-semibold text-white mb-0.5">
            {project.title}
          </h3>

          {/* Short description — collapses when expanded */}
          <p
            className="text-xs text-[var(--color-muted)] overflow-hidden"
            style={{
              maxHeight: isExpanded || !sectionExpanded ? 0 : 40,
              opacity: isExpanded || !sectionExpanded ? 0 : 1,
              transition: "max-height 250ms ease-out, opacity 200ms ease-out",
            }}
          >
            {project.description}
          </p>

          {/* Detail — expands when expanded */}
          <div
            style={{
              maxHeight: isExpanded ? 100 : 0,
              opacity: isExpanded ? 1 : 0,
              overflow: "hidden",
              transition: `max-height 400ms ${EASE}, opacity 300ms 100ms ease-out`,
            }}
          >
            <p className="text-xs text-[var(--color-muted)] leading-relaxed mb-2">
              {project.detail}
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mt-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 text-xs rounded"
                style={{
                  transition: "all 300ms ease-out",
                  backgroundColor: isExpanded
                    ? `${project.color}15`
                    : "var(--color-card)",
                  borderWidth: 1,
                  borderColor: isExpanded
                    ? `${project.color}30`
                    : "var(--color-card-border)",
                  color: isExpanded
                    ? `${project.color}cc`
                    : "var(--color-muted)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});

/* ── Section wrapper (Layer 1) ── */
export default function ProjectsSection() {
  const { setFocus } = useFocus();
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [allowOverflow, setAllowOverflow] = useState(false);
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  // Dynamic heights based on project count
  const previewCount = Math.min(projects.length, 4);
  const previewRows = Math.ceil(previewCount / 2);
  const collapsedGrid = previewRows * CARD_H_COMPACT + (previewRows - 1) * 12;
  const collapsedHeight = 48 + 40 + collapsedGrid;
  const allRows = Math.ceil(projects.length / 2);
  const expandedGrid = allRows * CARD_H_FULL + (allRows - 1) * 12;
  const expandedHeight = 48 + 40 + expandedGrid + 16;

  // Delay overflow:visible so height expansion finishes first
  useEffect(() => {
    if (isExpanded) {
      const id = setTimeout(() => setAllowOverflow(true), 400);
      return () => clearTimeout(id);
    } else {
      setAllowOverflow(false);
    }
  }, [isExpanded]);

  // Click outside to collapse
  useEffect(() => {
    if (!isExpanded) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (
        sectionRef.current &&
        !sectionRef.current.contains(e.target as Node)
      ) {
        setIsExpanded(false);
        setExpandedCard(null);
        setFocus(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isExpanded, setFocus]);

  const handleSectionClick = () => {
    if (isExpanded) {
      setIsExpanded(false);
      setExpandedCard(null);
      setFocus(null);
    } else {
      setIsExpanded(true);
      if (cardRef.current) {
        setFocus("projects", cardRef.current.getBoundingClientRect());
      }
    }
  };

  // Direct DOM mutation for tilt — avoids re-renders on every mousemove
  const handleSectionMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (isExpanded || !cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      cardRef.current.style.transform = `translate(-50%, -50%) rotateX(${(y - 0.5) * -6}deg) rotateY(${(x - 0.5) * 6}deg)`;
    },
    [isExpanded]
  );

  // Reset tilt via DOM + collapse expandedCard inline (no effect needed)
  const handleSectionMouseLeave = useCallback(() => {
    setIsHovered(false);
    if (cardRef.current) {
      cardRef.current.style.transform = "translate(-50%, -50%) rotateX(0deg) rotateY(0deg)";
    }
    setExpandedCard((prev) => (isExpanded ? prev : null));
  }, [isExpanded]);

  // Stable callback for card toggle — enables memo on ProjectCard
  const handleCardToggle = useCallback((title: string) => {
    setExpandedCard((prev) => (prev === title ? null : title));
  }, []);

  const showGlow = isHovered || isExpanded;

  return (
    <div
      style={{ height: collapsedHeight, zIndex: isExpanded ? 50 : "auto" }}
      className="relative perspective-[1200px]"
      ref={sectionRef}
    >
      <div
        ref={cardRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleSectionMouseLeave}
        onMouseMove={handleSectionMouseMove}
        onClick={handleSectionClick}
        className="absolute cursor-pointer"
        style={{
          top: "50%",
          left: "50%",
          width: isExpanded ? "calc(100% + 200px)" : "100%",
          height: isExpanded ? expandedHeight : collapsedHeight,
          overflow: allowOverflow ? "visible" : "hidden",
          transform: "translate(-50%, -50%) rotateX(0deg) rotateY(0deg)",
          transition: `width 500ms ${EASE}, height 500ms ${EASE}, transform 500ms ${EASE}, z-index 0ms`,
          zIndex: isExpanded ? 30 : isHovered ? 10 : 1,
        }}
      >
        {/* Card surface — border brightens on hover/expand */}
        <div
          className="rounded-xl bg-[var(--color-card)] border p-6 h-full"
          style={{
            borderColor: showGlow
              ? "rgba(255,255,255,0.5)"
              : "var(--color-card-border)",
            transition: "border-color 400ms ease-out",
            overflow: allowOverflow ? "visible" : "hidden",
          }}
        >
          <h2 className="text-base font-bold text-white mb-3">Projects</h2>

          {/* Grid wrapper */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {(isExpanded ? projects : projects.slice(0, 4)).map((project) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  sectionExpanded={isExpanded}
                  isExpanded={expandedCard === project.title}
                  onToggle={handleCardToggle}
                />
              ))}
            </div>
          </div>

          {/* Bottom fade hint — visible only when collapsed */}
          <div
            className="pointer-events-none -mt-8 h-8 relative"
            style={{
              opacity: isExpanded ? 0 : 1,
              transition: "opacity 400ms ease-out",
              background:
                "linear-gradient(to top, var(--color-card), transparent)",
              zIndex: 10,
            }}
          />
        </div>
      </div>
    </div>
  );
}
