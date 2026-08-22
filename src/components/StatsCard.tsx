import type { StatProps } from "@/types";

interface StatsCardProps {
  stats: StatProps[];
}

export default function StatsCard({ stats }: StatsCardProps) {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 -mt-12 relative z-10">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 rounded-2xl bg-card border border-border shadow-xl shadow-primary/5 p-6">
        {stats?.map((s: StatProps) => (
          <div key={s.label} className="text-center">
            <div className="font-heading text-2xl sm:text-3xl font-extrabold text-primary">
              {s.value}
            </div>
            <div className="mt-1 text-xs sm:text-sm text-muted-foreground">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
