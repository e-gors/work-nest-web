import { Link } from "react-router-dom";
import {
  MapPin,
  Clock,
  Heart,
  Leaf,
  Laptop,
  GraduationCap,
  ArrowRight,
} from "lucide-react";
import PageHero from "@/components/PageHero";

const ROLES = [
  {
    title: "Senior Frontend Engineer",
    team: "Product",
    location: "Remote · EU",
    type: "Full-time",
  },
  {
    title: "Trust & Safety Specialist",
    team: "Operations",
    location: "Springfield · Hybrid",
    type: "Full-time",
  },
  {
    title: "Product Designer",
    team: "Design",
    location: "Remote · Global",
    type: "Full-time",
  },
  {
    title: "Customer Success Lead",
    team: "Support",
    location: "Springfield · On-site",
    type: "Full-time",
  },
  {
    title: "Backend Engineer (Payments)",
    team: "Engineering",
    location: "Remote · EU",
    type: "Full-time",
  },
  {
    title: "Community Manager",
    team: "Marketing",
    location: "Remote · US",
    type: "Part-time",
  },
];

const PERKS = [
  {
    icon: Laptop,
    title: "Remote-first",
    desc: "Work from anywhere with quarterly team meetups.",
  },
  {
    icon: Heart,
    title: "Health cover",
    desc: "Full medical, dental, and mental health support.",
  },
  {
    icon: GraduationCap,
    title: "Learning budget",
    desc: "An annual budget for courses, books, and conferences.",
  },
  {
    icon: Leaf,
    title: "Time to recharge",
    desc: "28 days of leave plus your local public holidays.",
  },
];

export default function Careers() {
  return (
    <div>
      <PageHero
        eyebrow="Careers"
        title="Help us make local work count"
        subtitle="We're a small team building the marketplace that keeps skilled tradespeople booked and homeowners covered. If that sounds like your kind of problem, we'd love to talk."
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {PERKS.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-border bg-card p-5"
            >
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary">
                <p.icon className="h-4 w-4" />
              </span>
              <h3 className="mt-3 font-heading font-semibold text-sm">
                {p.title}
              </h3>
              <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <div className="flex items-end justify-between gap-4 mb-4">
            <h2 className="font-heading text-xl font-bold">Open roles</h2>
            <span className="text-sm text-muted-foreground">
              {ROLES.length} positions
            </span>
          </div>
          <div className="rounded-3xl border border-border bg-card divide-y divide-border overflow-hidden">
            {ROLES.map((r) => (
              <div
                key={r.title}
                className="flex flex-col sm:flex-row sm:items-center gap-3 p-5 hover:bg-muted/40 transition-colors"
              >
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-heading font-semibold text-sm">
                      {r.title}
                    </h3>
                    <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-[11px] font-semibold text-primary">
                      {r.team}
                    </span>
                  </div>
                  <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5" /> {r.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" /> {r.type}
                    </span>
                  </div>
                </div>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1.5 rounded-xl border border-border px-4 py-2 text-xs font-semibold hover:border-primary hover:text-primary transition-colors self-start sm:self-auto"
                >
                  Apply <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 rounded-3xl border border-dashed border-border p-8 text-center">
          <h2 className="font-heading font-semibold">Don't see your role?</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Send us a note about the problem you'd like to solve here.
          </p>
          <Link
            to="/contact"
            className="mt-4 inline-block rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </div>
  );
}
