import React from "react";
import { Link } from "react-router-dom";
import { Star, Quote, ShieldCheck } from "lucide-react";
import PageHero from "@/components/PageHero";
import RatingStars from "@/components/RatingStars";

const TESTIMONIALS = [
  {
    id: 1,
    author: "Jennifer K.",
    role: "Homeowner · Springfield",
    avatar: "https://i.pravatar.cc/80?u=r1",
    rating: 5,
    text: "Booked an electrician at 8am and he was at my door by 2pm the same day. The escrow payment meant I felt safe paying before the work even started.",
  },
  {
    id: 2,
    author: "Mark T.",
    role: "Landlord · Riverside",
    avatar: "https://i.pravatar.cc/80?u=r2",
    rating: 5,
    text: "I manage six rental units. WorkNest has replaced three different contractors I used to chase by phone. Everything is documented in one place.",
  },
  {
    id: 3,
    author: "Lisa M.",
    role: "Homeowner · Eastside",
    avatar: "https://i.pravatar.cc/80?u=r3",
    rating: 4,
    text: "The painter I hired was excellent. Booking and payment took about two minutes, and I could see her verified background check before saying yes.",
  },
  {
    id: 4,
    author: "Daniel R.",
    role: "Homeowner · Hillcrest",
    avatar: "https://i.pravatar.cc/80?u=r4",
    rating: 5,
    text: "A pipe burst on a Sunday. Found a plumber nearby, confirmed the price up front, and he was done before dinner. No surprise fees.",
  },
  {
    id: 5,
    author: "Priya S.",
    role: "Property manager · Downtown",
    avatar: "https://i.pravatar.cc/80?u=r5",
    rating: 5,
    text: "The dispute process is real. One job was not finished properly and the funds were still in escrow, so the fix cost me nothing.",
  },
  {
    id: 6,
    author: "Chris B.",
    role: "Homeowner · Westend",
    avatar: "https://i.pravatar.cc/80?u=r6",
    rating: 5,
    text: "I have used four professionals through WorkNest now. Every single one showed up on time, and the ratings are honest.",
  },
];

const STATS = [
  { value: "4.9/5", label: "Average booking rating" },
  { value: "18,400+", label: "Verified reviews" },
  { value: "96%", label: "Jobs completed on first visit" },
  { value: "< 2h", label: "Median response time" },
];

export default function Reviews() {
  return (
    <div>
      <PageHero
        eyebrow="Reviews"
        title="18,400 reviews. All from real, paid bookings."
        subtitle="Only customers who completed and paid for a job can leave a review — which is why our ratings actually mean something."
      >
        <Link
          to="/workers"
          className="rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          Browse top-rated workers
        </Link>
      </PageHero>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-border bg-card p-5"
            >
              <div className="font-heading text-2xl font-bold text-primary">
                {s.value}
              </div>
              <div className="mt-1 text-xs text-muted-foreground">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 grid md:grid-cols-2 xl:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.id}
              className="rounded-3xl border border-border bg-card p-6 flex flex-col"
            >
              <Quote className="h-6 w-6 text-primary/30" />
              <blockquote className="mt-3 flex-1 text-sm text-muted-foreground leading-relaxed">
                {t.text}
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3 border-t border-border pt-4">
                <img
                  src={t.avatar}
                  alt=""
                  className="h-9 w-9 rounded-full object-cover"
                />
                <div className="min-w-0 flex-1">
                  <div className="text-sm font-semibold truncate">
                    {t.author}
                  </div>
                  <div className="text-xs text-muted-foreground truncate">
                    {t.role}
                  </div>
                </div>
                <RatingStars rating={t.rating} size={13} showValue />
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-10 flex items-start gap-3 rounded-2xl border border-border bg-secondary/40 p-5 text-sm text-muted-foreground">
          <ShieldCheck className="h-5 w-5 shrink-0 text-primary" />
          <p>
            Reviews are linked to completed jobs and cannot be edited after 14
            days. We remove reviews that violate our content rules, but never
            because a professional asked us to.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-1.5 text-sm font-medium">
            <Star className="h-4 w-4 text-accent" /> Trusted by 60,000+
            households
          </span>
          <Link
            to="/post-job"
            className="ml-auto text-sm font-semibold text-primary hover:underline"
          >
            Post a job and see for yourself →
          </Link>
        </div>
      </div>
    </div>
  );
}
