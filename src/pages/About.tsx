import { Link } from "react-router-dom";
import {
  Target,
  Heart,
  Shield,
  Users,
  ArrowRight,
  Award,
  Globe,
  Zap,
} from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Trust & Safety",
    desc: "Every worker is verified and background-checked. Your security is our priority.",
  },
  {
    icon: Heart,
    title: "Community First",
    desc: "We empower local professionals and strengthen neighborhoods.",
  },
  {
    icon: Zap,
    title: "Speed & Convenience",
    desc: "Find, connect, and hire in minutes — not days.",
  },
  {
    icon: Award,
    title: "Quality Guaranteed",
    desc: "Reviews and ratings ensure you always get top-tier service.",
  },
];

const team = [
  {
    name: "Efren Goron",
    role: "CEO & Founder",
    avatar: "https://i.pravatar.cc/200?u=d1",
  },
  {
    name: "Jojo Goron",
    role: "CTO",
    avatar: "https://i.pravatar.cc/200?u=d2",
  },
  {
    name: "Leonardo Gumanid",
    role: "Head of Operations",
    avatar: "https://i.pravatar.cc/200?u=d3",
  },
  {
    name: "Criscilla Gumanid",
    role: "Head of Community",
    avatar: "https://i.pravatar.cc/200?u=d4",
  },
];

const milestones = [
  {
    year: "2026",
    title: "WorkNest is born",
    desc: "Started with a simple idea: connect neighbors with trusted local talent.",
  },
  {
    year: "2027",
    title: "10,000 workers joined",
    desc: "Expanded to 15 cities with a 4.8 average rating.",
  },
  {
    year: "2028",
    title: "Mobile app launched",
    desc: "Brought the full experience to iOS and Android.",
  },
  {
    year: "2029",
    title: "50,000+ jobs completed",
    desc: "Now serving 30+ cities with 12,000+ verified professionals.",
  },
];

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="gradient-hero py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            <Globe className="h-3.5 w-3.5" /> Our Story
          </span>
          <h1 className="mt-5 font-heading text-4xl sm:text-5xl font-extrabold leading-tight text-balance">
            Building bridges between skilled workers and the communities that
            need them
          </h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-2xl mx-auto">
            WorkNest was founded on a simple belief: finding reliable local help
            shouldn't be hard. We're here to make it effortless.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm">
              <Target className="h-5 w-5" /> Our Mission
            </span>
            <h2 className="mt-3 font-heading text-3xl font-bold">
              Empowering local talent, one job at a time
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Millions of skilled workers struggle to find consistent work,
              while customers waste hours searching for trustworthy help. We
              bridge that gap — giving workers a platform to shine and customers
              peace of mind.
            </p>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              From electricians to gardeners, every professional on WorkNest is
              verified, reviewed, and ready to deliver exceptional service.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: "12K+", label: "Verified Workers", icon: Users },
              { value: "48K+", label: "Jobs Completed", icon: Award },
              { value: "30+", label: "Cities", icon: Globe },
              { value: "4.9★", label: "Avg. Rating", icon: Heart },
            ].map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-border bg-card p-6 text-center"
              >
                <s.icon className="h-7 w-7 text-primary mx-auto mb-2" />
                <div className="font-heading text-2xl font-bold">{s.value}</div>
                <div className="text-xs text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-secondary/50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold">
              What we stand for
            </h2>
            <p className="mt-3 text-muted-foreground">
              The values that guide everything we build.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl bg-card border border-border p-6 hover:shadow-lg transition-shadow"
              >
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary mb-4">
                  <v.icon className="h-6 w-6" />
                </span>
                <h3 className="font-heading font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold">
            Our journey
          </h2>
        </div>
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />
          {milestones.map((m, i) => (
            <div
              key={m.year}
              className={`relative flex gap-6 mb-8 ${i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"}`}
            >
              <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 grid h-8 w-8 place-items-center rounded-full bg-primary text-primary-foreground text-xs font-bold ring-4 ring-background z-10">
                {i + 1}
              </div>
              <div className="sm:w-1/2 pl-12 sm:pl-0 sm:px-6">
                <div className="rounded-2xl border border-border bg-card p-5">
                  <span className="text-xs font-semibold text-primary">
                    {m.year}
                  </span>
                  <h3 className="font-heading font-semibold mt-1">{m.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{m.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="bg-secondary/50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold">
              Meet the team
            </h2>
            <p className="mt-3 text-muted-foreground">
              The people building WorkNest with passion and purpose.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((m) => (
              <div key={m.name} className="text-center">
                <div className="relative mx-auto w-32 h-32 rounded-3xl overflow-hidden ring-4 ring-card shadow-md">
                  <img
                    src={m.avatar}
                    alt={m.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="mt-4 font-heading font-semibold">{m.name}</h3>
                <p className="text-sm text-muted-foreground">{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="rounded-3xl bg-foreground text-background p-10 sm:p-16 text-center">
          <h2 className="font-heading text-3xl font-bold">
            Join the WorkNest community
          </h2>
          <p className="mt-3 text-background/70 max-w-xl mx-auto">
            Whether you need help or have skills to offer, there's a place for
            you here.
          </p>
          <Link
            to="/auth/register"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
          >
            Get started <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
