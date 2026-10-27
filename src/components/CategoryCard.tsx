import type { CategoryProps } from "@/types";
import { Link } from "react-router-dom";

interface CategoryCardProps {
  categories: CategoryProps[];
}

export default function CategoryCard({ categories }: CategoryCardProps) {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="font-heading text-3xl sm:text-4xl font-bold">
          Browse by category
        </h2>
        <p className="mt-3 text-muted-foreground">
          Whatever you need fixed, built, or maintained — we've got a pro for
          that.
        </p>
      </div>
      <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {categories.map((cat) => (
          <Link
            key={cat.id}
            to="/workers"
            className="group flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-5 hover:shadow-lg hover:-translate-y-1 hover:border-primary/30 transition-all"
          >
            <span
              className={`grid h-12 w-12 place-items-center rounded-xl ${cat.bg} ${cat.color} group-hover:scale-110 transition-transform`}
            >
              <cat.icon className="h-6 w-6" />
            </span>
            <span className="text-sm font-medium text-center">{cat.label}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
