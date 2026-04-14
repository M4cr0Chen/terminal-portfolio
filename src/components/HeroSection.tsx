import Image from "next/image";

export default function HeroSection() {
  return (
    <section id="top">
      <h1 className="text-3xl font-bold text-white">Marco Chen</h1>
      <p className="text-base mt-1">
        CS @ <a href="https://uwaterloo.ca" target="_blank" rel="noopener noreferrer" className="hover:underline transition-all durantion-300 ease-in-out">UWaterloo</a>
        , Software Engineer
      </p>
      <p className="text-sm text-[var(--color-muted)] mt-4 leading-relaxed max-w-lg">
        enjoy working with ML Infra, distributed systems, full-stack.
      </p>
    </section>
  );
}
