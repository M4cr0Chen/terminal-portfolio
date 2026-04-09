interface BentoCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function BentoCard({
  children,
  className = "",
}: BentoCardProps) {
  return (
    <div
      className={`rounded-xl bg-[var(--color-card)] border border-[var(--color-card-border)] p-5 ${className}`}
    >
      {children}
    </div>
  );
}
