interface BentoCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function BentoCard({ children, className = "" }: BentoCardProps) {
  return (
    <div
      className={`rounded-2xl bg-white/10 backdrop-blur-sm border border-white/15 p-6 transition-all duration-300 hover:bg-white/15 ${className}`}
    >
      {children}
    </div>
  );
}
