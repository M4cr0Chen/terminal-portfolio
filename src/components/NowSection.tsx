const items = [
  "building a ray tracer from scratch in C++",
  "exploring CUDA kernels and GPU programming",
  "reading Designing Data-Intensive Applications",
];

export default function NowSection() {
  return (
    <section id="now">
      <h2 className="text-lg font-semibold text-white mb-6">now</h2>
      <ul className="space-y-2">
        {items.map((item) => (
          <li
            key={item}
            className="text-sm text-[var(--color-muted)] leading-relaxed"
          >
            &mdash; {item}
          </li>
        ))}
      </ul>
      <p className="text-xs text-[var(--color-muted)] mt-4 opacity-50">
        updated apr 2026
      </p>
    </section>
  );
}
