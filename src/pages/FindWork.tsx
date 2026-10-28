import React from "react";
import { Link } from "react-router-dom";
import {
  Wallet,
  CalendarCheck,
  TrendingUp,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import PageHero from "@/components/PageHero";

const BENEFITS = [
  {
    icon: Wallet,
    title: "Get paid on time",
    desc: "Escrow means the money is already secured before you start — no chasing invoices.",
  },
  {
    icon: CalendarCheck,
    title: "Work when you want",
    desc: "Set your own availability, service radius, and hourly rate. Accept only the jobs you want.",
  },
  {
    icon: TrendingUp,
    title: "Grow on reputation",
    desc: "Verified reviews move you up in search, so good work brings more bookings.",
  },
  {
    icon: ShieldCheck,
    title: "Protected on both sides",
    desc: "Documented scope, paid bookings, and a resolution team if a customer disputes the work.",
  },
];

const STEPS = [
  "Create your free profile and choose your trade.",
  "Complete ID and background verification — usually within 24 hours.",
  "Set your rate and availability, then start receiving bookings.",
];

export default function FindWork() {
  return (
    <div>
      <PageHero
        eyebrow="For professionals"
        title="Steady work from customers who are ready to pay"
        subtitle="Join 12,000+ independent tradespeople using WorkNest to fill their calendar without spending on ads or chasing invoices."
      >
        <Link
          to="/create-profile"
          className="rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          Create your profile
        </Link>
        <Link
          to="/worker-hub"
          className="rounded-xl border border-border bg-card px-5 py-3 text-sm font-semibold hover:bg-muted transition-colors"
        >
          See the worker hub
        </Link>
      </PageHero>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid sm:grid-cols-2 gap-5">
          {BENEFITS.map((b) => (
            <div
              key={b.title}
              className="rounded-3xl border border-border bg-card p-6"
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary">
                <b.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-heading font-semibold">{b.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                {b.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-3xl border border-border bg-secondary/40 p-6 sm:p-8">
          <h2 className="font-heading text-xl font-bold">
            Getting started takes about 10 minutes
          </h2>
          <ol className="mt-4 space-y-3">
            {STEPS.map((s, i) => (
              <li key={s} className="flex gap-3 text-sm">
                <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-primary text-[11px] font-bold text-primary-foreground">
                  {i + 1}
                </span>
                <span className="text-muted-foreground">{s}</span>
              </li>
            ))}
          </ol>
          <div className="mt-6 flex flex-wrap gap-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" /> No
              sign-up fee
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" /> 5%
              platform fee on completed jobs
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" /> Weekly
              payouts
            </span>
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-3xl border border-border bg-card p-8">
          <div>
            <h2 className="font-heading text-xl font-bold">
              Ready to fill your calendar?
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Create a profile, verify once, then start booking jobs.
            </p>
          </div>
          <Link
            to="/create-profile"
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors shrink-0"
          >
            Get started <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
