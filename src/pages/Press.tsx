import React from "react";
import { Link } from "react-router-dom";
import { Megaphone, Download, Mail, Newspaper } from "lucide-react";
import PageHero from "@/components/PageHero";

const RELEASES = [
  {
    date: "Oct 14, 2026",
    title: "WorkNest opens escrow payments to all trades",
    desc: "Every booking is now covered by held-in-escrow payments, with automatic release on completion.",
  },
  {
    date: "Aug 2, 2026",
    title: "WorkNest passes 50,000 completed jobs",
    desc: "The marketplace marks a milestone with verified professionals in 42 cities.",
  },
  {
    date: "May 19, 2026",
    title: "Background checks extended to all listed professionals",
    desc: "Identity and criminal record checks become mandatory before a profile goes live.",
  },
  {
    date: "Feb 27, 2026",
    title: "WorkNest launches in three new regions",
    desc: "Expansion brings local tradespeople onto the platform across the Midwest.",
  },
];

const FACTS = [
  { label: "Founded", value: "2021" },
  { label: "Team", value: "48 people" },
  { label: "Professionals", value: "12,000+" },
  { label: "Cities", value: "42" },
];

export default function Press() {
  return (
    <div>
      <PageHero
        eyebrow="Press"
        title="WorkNest in the news"
        subtitle="Announcements, company facts, and brand assets for journalists and partners. For interviews, our press team responds within one business day."
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <h2 className="font-heading text-xl font-bold flex items-center gap-2">
              <Newspaper className="h-5 w-5 text-primary" /> Press releases
            </h2>
            <div className="mt-4 rounded-3xl border border-border bg-card divide-y divide-border overflow-hidden">
              {RELEASES.map((r) => (
                <article key={r.title} className="p-5">
                  <div className="text-xs text-muted-foreground">{r.date}</div>
                  <h3 className="mt-1 font-heading font-semibold text-sm">
                    {r.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                    {r.desc}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <aside className="space-y-4">
            <div className="rounded-3xl border border-border bg-card p-6">
              <h3 className="font-heading font-semibold text-sm flex items-center gap-2">
                <Megaphone className="h-4 w-4 text-primary" /> Press contact
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                For interviews, data requests, or comments, reach our
                communications team.
              </p>
              <Link
                to="/contact"
                className="mt-4 inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                <Mail className="h-4 w-4" /> Contact press team
              </Link>
            </div>

            <div className="rounded-3xl border border-border bg-card p-6">
              <h3 className="font-heading font-semibold text-sm">
                Company facts
              </h3>
              <dl className="mt-3 space-y-2 text-sm">
                {FACTS.map((f) => (
                  <div key={f.label} className="flex justify-between gap-4">
                    <dt className="text-muted-foreground">{f.label}</dt>
                    <dd className="font-medium">{f.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="rounded-3xl border border-border bg-card p-6">
              <h3 className="font-heading font-semibold text-sm">
                Brand assets
              </h3>
              <div className="mt-3 flex gap-2">
                <span
                  className="h-10 flex-1 rounded-lg bg-primary"
                  title="Primary"
                />
                <span
                  className="h-10 flex-1 rounded-lg bg-accent"
                  title="Accent"
                />
                <span
                  className="h-10 flex-1 rounded-lg bg-foreground"
                  title="Ink"
                />
                <span
                  className="h-10 flex-1 rounded-lg border border-border bg-card"
                  title="Surface"
                />
              </div>
              <button className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-border py-2.5 text-sm font-medium hover:bg-muted transition-colors">
                <Download className="h-4 w-4" /> Download logo pack
              </button>
              <p className="mt-3 text-xs text-muted-foreground">
                Please don't alter the wordmark or use our brand colours for
                unrelated products.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
