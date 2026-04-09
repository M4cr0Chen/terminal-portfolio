import BentoCard from "./BentoCard";

const projects = [
  {
    title: "Project Alpha",
    description:
      "A full-stack web application with real-time collaboration features and an intuitive dashboard interface.",
    tags: ["Next.js", "TypeScript", "PostgreSQL"],
    span: "md:col-span-2",
  },
  {
    title: "Project Beta",
    description:
      "Mobile-first e-commerce platform with seamless payment integration.",
    tags: ["React", "Node.js", "Stripe"],
    span: "",
  },
  {
    title: "Project Gamma",
    description:
      "CLI tool for automating development workflows and deployment pipelines.",
    tags: ["Python", "Docker", "AWS"],
    span: "",
  },
  {
    title: "Project Delta",
    description:
      "Open-source component library with accessible, themeable UI primitives for modern web apps.",
    tags: ["React", "Tailwind CSS", "Storybook"],
    span: "md:col-span-2",
  },
];

export default function WorkSection() {
  return (
    <section id="work" className="mb-6">
      <h2 className="text-2xl font-bold mb-4">Work</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {projects.map((project) => (
          <BentoCard
            key={project.title}
            className={`group cursor-pointer ${project.span}`}
          >
            <div className="flex flex-col h-full">
              <h3 className="text-lg font-semibold mb-2 group-hover:text-white transition-colors">
                {project.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed mb-4 flex-1">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-full bg-white/10 text-xs text-white/70 border border-white/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </BentoCard>
        ))}
      </div>
    </section>
  );
}
