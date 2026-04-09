"use client";

import { useState, useRef, useCallback, useEffect } from "react";
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
const CARD_H_FULL = 110;    // expanded section: title + description + tags

/* ── Individual project card (Layer 2) ── */
function ProjectCard({
  project,
  sectionExpanded,
  isExpanded,
  onToggle,
}: {
  project: Project;
  sectionExpanded: boolean;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setTilt({ x: (y - 0.5) * -10, y: (x - 0.5) * 10 });
    setGlowPos({ x: x * 100, y: y * 100 });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  }, []);

  // Reset hover when section collapses
  useEffect(() => {
    if (!sectionExpanded) {
      setIsHovered(false);
      setTilt({ x: 0, y: 0 });
    }
  }, [sectionExpanded]);

  // Whether the card visually pops out (glow on hover OR expanded)
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
          onToggle();
        }}
        onMouseEnter={() => sectionExpanded && setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        onMouseMove={(e) => sectionExpanded && handleMouseMove(e)}
        className={`absolute rounded-lg border bg-[var(--color-background)] will-change-transform ${sectionExpanded ? "cursor-pointer" : "pointer-events-none"}`}
        style={{
          top: "50%",
          left: "50%",
          width: isExpanded ? "calc(100% + 20px)" : "100%",
          height: isExpanded ? undefined : sectionExpanded ? CARD_H_FULL : CARD_H_COMPACT,
          overflow: "hidden",
          transform: `translate(-50%, -50%) perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
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
        {/* Cursor-following glow */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            opacity: showGlow ? 0.1 : 0,
            transition: "opacity 300ms ease-out",
            background: `radial-gradient(300px circle at ${glowPos.x}% ${glowPos.y}%, ${project.color}, transparent 60%)`,
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
}

/* ── Section wrapper (Layer 1) ── */
export default function ProjectsSection() {
  const { setFocus } = useFocus();
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
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

  // Collapse everything when section loses hover
  useEffect(() => {
    if (!isHovered && !isExpanded) {
      setExpandedCard(null);
    }
  }, [isHovered, isExpanded]);

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
  }, [isExpanded]);

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

  const handleSectionMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (isExpanded || !cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      setTilt({ x: (y - 0.5) * -6, y: (x - 0.5) * 6 });
    },
    [isExpanded]
  );

  const handleSectionMouseLeave = useCallback(() => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
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
        className="absolute cursor-pointer will-change-transform"
        style={{
          top: "50%",
          left: "50%",
          width: isExpanded ? "calc(100% + 200px)" : "100%",
          height: isExpanded ? expandedHeight : collapsedHeight,
          overflow: allowOverflow ? "visible" : "hidden",
          transform: `translate(-50%, -50%) rotateX(${isExpanded ? 0 : tilt.x}deg) rotateY(${isExpanded ? 0 : tilt.y}deg)`,
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
                  onToggle={() =>
                    setExpandedCard(
                      expandedCard === project.title ? null : project.title
                    )
                  }
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
