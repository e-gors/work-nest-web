import React from "react";
import { Link } from "react-router-dom";
import {
  BookOpen,
  FileText,
  ShieldCheck,
  Wallet,
  TrendingUp,
  HelpCircle,
  ArrowRight,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import { useScrollToTop } from "@/hooks/useScrollToTop";

const GUIDES = [
  {
    title: "Pricing your work",
    desc: "How to set an hourly rate that wins bookings without underselling your time.",
    to: "/create-profile",
    icon: Wallet,
    tag: "Getting started",
  },
  {
    title: "Winning repeat customers",
    desc: "Small habits that turn a one-off job into a regular client.",
    to: "/worker-hub",
    icon: TrendingUp,
    tag: "Growth",
  },
  {
    title: "Understanding escrow",
    desc: "When money is released, what a dispute looks like, and how payouts work.",
    to: "/safety",
    icon: ShieldCheck,
    tag: "Payments",
  },
  {
    title: "Writing a job post",
    desc: "For customers: the details that get accurate quotes, faster.",
    to: "/post-job",
    icon: FileText,
    tag: "Hiring",
  },
  {
    title: "Safety on site",
    desc: "Verification, insurance, and what to do if something feels off.",
    to: "/safety",
    icon: ShieldCheck,
    tag: "Trust",
  },
  {
    title: "Platform FAQ",
    desc: "Answers to the questions we get asked most often.",
    to: "/help",
    icon: HelpCircle,
    tag: "Support",
  },
];

const ARTICLES = [
  { title: "What makes a five-star review", to: "/reviews" },
  { title: "How escrow protects both sides", to: "/how-it-works" },
  { title: "Meet the professionals on WorkNest", to: "/blog" },
];

export default function Resources() {
  useScrollToTop();
  return (
    <div>
      <PageHero
        eyebrow="Resources"
        title="Guides for doing better work — and hiring better"
        subtitle="Practical, short reads for professionals building a business on WorkNest and for customers who want the job done right the first time."
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {GUIDES.map((g) => (
            <Link
              key={g.title}
              to={g.to}
              className="group rounded-3xl border border-border bg-card p-6 hover:shadow-lg hover:-translate-y-0.5 transition-all"
            >
              <div className="flex items-center justify-between">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary">
                  <g.icon className="h-5 w-5" />
                </span>
                <span className="rounded-full bg-muted px-2.5 py-1 text-[11px] font-medium text-muted-foreground">
                  {g.tag}
                </span>
              </div>
              <h3 className="mt-4 font-heading font-semibold">{g.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                {g.desc}
              </p>
              <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-primary">
                Read guide{" "}
                <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-10 grid lg:grid-cols-2 gap-6">
          <div className="rounded-3xl border border-border bg-card p-6">
            <h2 className="font-heading font-semibold flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-primary" /> Most read this month
            </h2>
            <ul className="mt-4 divide-y divide-border">
              {ARTICLES.map((a) => (
                <li key={a.title}>
                  <Link
                    to={a.to}
                    className="flex items-center justify-between gap-4 py-3 text-sm hover:text-primary transition-colors"
                  >
                    {a.title}
                    <ArrowRight className="h-4 w-4 text-muted-foreground" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-border bg-gradient-to-br from-primary/5 to-accent/5 p-6 flex flex-col justify-center">
            <h2 className="font-heading text-xl font-bold">Still stuck?</h2>
            <p className="mt-1.5 text-sm text-muted-foreground">
              Our support team answers within a few hours, every day of the
              week.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                to="/help"
                className="rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Visit help center
              </Link>
              <Link
                to="/contact"
                className="rounded-xl border border-border bg-card px-4 py-2.5 text-sm font-semibold hover:bg-muted transition-colors"
              >
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
