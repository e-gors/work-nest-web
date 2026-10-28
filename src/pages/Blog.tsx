import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Clock, ArrowRight, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import PageHero from "@/components/PageHero";
import { useScrollToTop } from "@/hooks/useScrollToTop";

const POSTS = [
  {
    id: 1,
    category: "Hiring",
    title: "How to write a job post that gets accurate quotes",
    excerpt:
      "The three details that change a vague estimate into a fixed price — and stop the back-and-forth before it starts.",
    read: "6 min read",
    date: "Oct 22, 2026",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop",
  },
  {
    id: 2,
    category: "Payments",
    title: "Escrow, explained without the jargon",
    excerpt:
      "Where your money sits between booking and completion, and what happens the moment you confirm the work.",
    read: "4 min read",
    date: "Oct 15, 2026",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=500&fit=crop",
  },
  {
    id: 3,
    category: "For pros",
    title: "Pricing your first ten jobs on a marketplace",
    excerpt:
      "A practical starting point for setting an hourly rate you can defend, without racing to the bottom.",
    read: "7 min read",
    date: "Oct 8, 2026",
    image:
      "https://images.unsplash.com/photo-1504328345606-9bbc1daac1d3?w=800&h=500&fit=crop",
  },
  {
    id: 4,
    category: "Safety",
    title: "Five questions worth asking before you book",
    excerpt:
      "Insurance, licensing, and scope — the checks that take two minutes and prevent most disputes.",
    read: "5 min read",
    date: "Sep 30, 2026",
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=500&fit=crop",
  },
  {
    id: 5,
    category: "Company",
    title: "Why we made background checks mandatory",
    excerpt:
      "A look at the verification process behind every verified badge, and what changed this year.",
    read: "3 min read",
    date: "Sep 18, 2026",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=500&fit=crop",
  },
  {
    id: 6,
    category: "For pros",
    title: "Turning one job into a regular client",
    excerpt:
      "Small habits — follow-up, notes, and a tidy finish — that bring customers back without any marketing.",
    read: "5 min read",
    date: "Sep 4, 2026",
    image:
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&h=500&fit=crop",
  },
];

const CATEGORIES = [
  "All",
  "Hiring",
  "Payments",
  "For pros",
  "Safety",
  "Company",
];

export default function Blog() {
  useScrollToTop();

  const [active, setActive] = useState("All");
  const [query, setQuery] = useState("");

  const posts = POSTS.filter((p) => {
    if (active !== "All" && p.category !== active) return false;
    if (query && !p.title.toLowerCase().includes(query.toLowerCase()))
      return false;
    return true;
  });
  const featured = POSTS[1];

  return (
    <div>
      <PageHero
        eyebrow="Blog"
        title="Notes on better local work"
        subtitle="Guide-length reads on hiring well, pricing fairly, and running a trade business — written by the team and our most experienced professionals."
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid lg:grid-cols-2 gap-6 rounded-3xl border border-border bg-card overflow-hidden">
          <img
            src={featured.image}
            alt=""
            className="h-64 lg:h-full w-full object-cover"
          />
          <div className="p-6 sm:p-8 flex flex-col justify-center">
            <span className="inline-flex w-fit rounded-full bg-primary/10 px-2.5 py-1 text-[11px] font-semibold text-primary">
              Featured · {featured.category}
            </span>
            <h2 className="mt-3 font-heading text-2xl font-bold text-balance">
              {featured.title}
            </h2>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              {featured.excerpt}
            </p>
            <div className="mt-4 flex items-center gap-3 text-xs text-muted-foreground">
              <span>{featured.date}</span>
              <span className="flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" /> {featured.read}
              </span>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={cn(
                  "rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors",
                  active === c
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border hover:bg-muted",
                )}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search articles"
              className="w-full rounded-xl border border-border bg-card pl-9 pr-3 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </div>
        </div>

        {posts.length === 0 ? (
          <div className="mt-6 rounded-2xl border border-dashed border-border py-16 text-center">
            <p className="text-sm text-muted-foreground">
              No articles match that search.
            </p>
          </div>
        ) : (
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {posts.map((p) => (
              <article
                key={p.id}
                className="rounded-3xl border border-border bg-card overflow-hidden flex flex-col"
              >
                <img
                  src={p.image}
                  alt=""
                  className="h-40 w-full object-cover"
                />
                <div className="p-5 flex flex-col flex-1">
                  <span className="text-[11px] font-semibold text-primary">
                    {p.category}
                  </span>
                  <h3 className="mt-1.5 font-heading font-semibold text-sm leading-snug">
                    {p.title}
                  </h3>
                  <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed flex-1">
                    {p.excerpt}
                  </p>
                  <div className="mt-3 flex items-center gap-3 text-[11px] text-muted-foreground">
                    <span>{p.date}</span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" /> {p.read}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        <div className="mt-10 rounded-3xl border border-border bg-secondary/40 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h2 className="font-heading font-semibold">
              Looking for something specific?
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Browse the guides library or ask our support team.
            </p>
          </div>
          <div className="flex gap-3">
            <Link
              to="/resources"
              className="inline-flex items-center gap-1.5 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Guides <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/help"
              className="rounded-xl border border-border bg-card px-4 py-2.5 text-sm font-semibold hover:bg-muted transition-colors"
            >
              Help center
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
