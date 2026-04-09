import BentoCard from "./BentoCard";

export default function HeroSection() {
  return (
    <section id="hero" className="mb-6">
      <BentoCard className="py-16 px-10">
        <p className="text-white/60 text-sm font-medium tracking-widest uppercase mb-4">
          Welcome
        </p>
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
          Hi, I&apos;m Marco Chen
        </h1>
        <p className="text-xl md:text-2xl text-white/70 max-w-2xl leading-relaxed">
          A developer crafting digital experiences with clean code and
          thoughtful design.
        </p>
      </BentoCard>
    </section>
  );
}
