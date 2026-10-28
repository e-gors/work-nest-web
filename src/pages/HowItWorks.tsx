import React from "react";
import { Link } from "react-router-dom";
import {
  Search,
  CalendarCheck,
  ShieldCheck,
  Wallet,
  MessageCircle,
  Star,
  ArrowRight,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import { useScrollToTop } from "@/hooks/useScrollToTop";

const STEPS = [
  {
    icon: Search,
    title: "Find your professional",
    desc: "Search by skill, compare verified profiles, ratings, and hourly rates near you.",
  },
  {
    icon: CalendarCheck,
    title: "Book a time",
    desc: "Pick a date and estimated hours, share job details, and confirm the booking in minutes.",
  },
  {
    icon: ShieldCheck,
    title: "Pay into escrow",
    desc: "Your payment is held securely and released only once you confirm the work is done.",
  },
];

const FEATURES = [
  {
    icon: Wallet,
    title: "Escrow payments",
    desc: "Money moves only when the job is finished to your satisfaction.",
  },
  {
    icon: Star,
    title: "Real reviews",
    desc: "Ratings come from completed, paid bookings — no anonymous noise.",
  },
  {
    icon: MessageCircle,
    title: "Built-in messaging",
    desc: "Agree on scope and timing without sharing your phone number.",
  },
];

export default function HowItWorks() {
  useScrollToTop();
  return (
    <div>
      <PageHero
        eyebrow="How it works"
        title="From “I need a hand” to “it's done” in three steps"
        subtitle="WorkNest is built around one idea: hiring a local professional should be as simple — and as safe — as ordering anything else online."
      >
        <Link
          to="/workers"
          className="rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          Browse workers
        </Link>
        <Link
          to="/post-job"
          className="rounded-xl border border-border bg-card px-5 py-3 text-sm font-semibold hover:bg-muted transition-colors"
        >
          Post a job
        </Link>
      </PageHero>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid md:grid-cols-3 gap-6">
          {STEPS.map((s, i) => (
            <div
              key={s.title}
              className="rounded-3xl border border-border bg-card p-6"
            >
              <div className="flex items-center justify-between">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary">
                  <s.icon className="h-5 w-5" />
                </span>
                <span className="font-heading text-3xl font-extrabold text-muted/70">
                  0{i + 1}
                </span>
              </div>
              <h3 className="mt-4 font-heading font-semibold">{s.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="flex gap-3 rounded-2xl border border-border bg-secondary/40 p-5"
            >
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-card text-primary">
                <f.icon className="h-4 w-4" />
              </span>
              <div>
                <h4 className="font-heading font-semibold text-sm">
                  {f.title}
                </h4>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                  {f.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-3xl border border-border bg-card p-8 flex flex-col sm:flex-row sm:items-center gap-6 justify-between">
          <div>
            <h2 className="font-heading text-xl font-bold">
              Are you a professional?
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Set your own rates and get paid reliably for every job.
            </p>
          </div>
          <Link
            to="/find-work"
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors shrink-0"
          >
            Start earning <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
