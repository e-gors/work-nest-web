import { Link } from "react-router-dom";
import {
  ShieldCheck,
  Clock,
  BadgeCheck,
  ArrowRight,
  Star,
  Users,
  Briefcase,
} from "lucide-react";
import SearchBar from "@/components/SearchBar";
import { CATEGORIES } from "@/lib/categories";
import { WORKERS } from "@/lib/workers";
import WorkerCard from "@/components/WorkerCard";
import { STATS } from "@/lib/stats";
import { STEPS } from "@/lib/steps";
import { testimonials } from "@/lib/testimonials";
import StatsCard from "@/components/StatsCard";
import CategoryCard from "@/components/CategoryCard";

export default function Landing() {
  return (
    <div>
      {/* Hero */}
      <section className="relative gradient-hero overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-24 sm:pt-24 sm:pb-32">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              <BadgeCheck className="h-3.5 w-3.5" /> Trusted by 50,000+
              customers
            </span>
            <h1 className="mt-5 font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] text-balance">
              Find trusted local{" "}
              <span className="text-primary">skilled workers</span> near you
            </h1>
            <p className="mt-5 text-lg text-muted-foreground max-w-xl">
              Electricians, plumbers, carpenters, and more — verified
              professionals ready to help, right in your neighborhood.
            </p>
            <div className="mt-8 max-w-2xl">
              <SearchBar />
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-primary" /> Verified &
                background-checked
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4 text-primary" /> Same-day availability
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <StatsCard stats={STATS} />

      {/* Categories */}
      <CategoryCard categories={CATEGORIES} />

      {/* Featured Workers */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold">
              Top-rated workers
            </h2>
            <p className="mt-2 text-muted-foreground">
              Meet our highest-rated professionals this week.
            </p>
          </div>
          <Link
            to="/workers"
            className="hidden sm:inline-flex items-center gap-1 text-sm font-semibold text-primary hover:gap-2 transition-all"
          >
            View all <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {WORKERS.slice(0, 4).map((w) => (
            <WorkerCard key={w.id} worker={w} />
          ))}
        </div>
        <div className="mt-8 text-center sm:hidden">
          <Link
            to="/workers"
            className="inline-flex items-center gap-1 text-sm font-semibold text-primary"
          >
            View all workers <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-secondary/50 py-20 mt-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold">
              How WorkNest works
            </h2>
            <p className="mt-3 text-muted-foreground">
              Hire a local pro in three simple steps.
            </p>
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {STEPS?.map((step, i) => (
              <div
                key={step.title}
                className="relative rounded-2xl bg-card border border-border p-8 shadow-sm"
              >
                <div className="absolute -top-3 -left-3 grid h-9 w-9 place-items-center rounded-full bg-primary text-primary-foreground text-sm font-bold shadow-md">
                  {i + 1}
                </div>
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-primary/10 text-primary">
                  <step.icon className="h-7 w-7" />
                </span>
                <h3 className="mt-5 font-heading text-xl font-semibold">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Workers CTA */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="rounded-3xl bg-gradient-to-br from-primary to-primary/80 p-8 sm:p-10 text-primary-foreground relative overflow-hidden">
            <div className="relative z-10">
              <Briefcase className="h-10 w-10 mb-4" />
              <h3 className="font-heading text-2xl sm:text-3xl font-bold">
                Are you a skilled worker?
              </h3>
              <p className="mt-3 text-primary-foreground/90 max-w-md">
                Create a professional profile, showcase your work, and start
                receiving job offers from customers near you.
              </p>
              <Link
                to="/register"
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-primary hover:bg-white/90 transition-colors"
              >
                Join as a worker <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="rounded-3xl bg-gradient-to-br from-accent to-accent/80 p-8 sm:p-10 text-accent-foreground relative overflow-hidden">
            <div className="relative z-10">
              <Users className="h-10 w-10 mb-4" />
              <h3 className="font-heading text-2xl sm:text-3xl font-bold">
                Need a service?
              </h3>
              <p className="mt-3 text-accent-foreground/90 max-w-md">
                Post a job request, browse verified workers, and hire the right
                professional in minutes.
              </p>
              <Link
                to="/register"
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-accent hover:bg-white/90 transition-colors"
              >
                Get started <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold">
            Loved by our community
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials?.map((t) => (
            <div
              key={t.name}
              className="rounded-2xl bg-card border border-border p-6 shadow-sm"
            >
              <div className="flex gap-1 mb-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <p className="text-sm text-foreground/80 leading-relaxed">
                "{t.text}"
              </p>
              <div className="mt-5 flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="h-10 w-10 rounded-full object-cover"
                />
                <div>
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20">
        <div className="rounded-3xl bg-foreground text-background p-10 sm:p-16 text-center relative overflow-hidden">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold max-w-2xl mx-auto text-balance">
            Ready to get your project done?
          </h2>
          <p className="mt-4 text-background/70 max-w-xl mx-auto">
            Join thousands who trust WorkNest to connect with the best local
            talent.
          </p>
          <Link
            to="/register"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
          >
            Create your free account <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
