import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  MapPin,
  BadgeCheck,
  Clock,
  DollarSign,
  Briefcase,
  CheckCircle2,
  MessageCircle,
  Heart,
  Share2,
  Shield,
  ChevronLeft,
} from "lucide-react";
import RatingStars from "@/components/RatingStars";
import { WORKERS, SAMPLE_REVIEWS } from "@/lib/workers";
import { cn } from "@/lib/utils";
import { useScrollToTop } from "@/hooks/useScrollToTop";

export default function WorkerProfile() {
  useScrollToTop();

  const { id } = useParams();
  const worker = WORKERS.find((w) => w.id === id) || WORKERS[0];
  const [saved, setSaved] = useState(false);
  const [tab, setTab] = useState("about");

  const tabs = [
    { id: "about", label: "About" },
    { id: "portfolio", label: "Portfolio" },
    { id: "reviews", label: `Reviews (${worker.review_count})` },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
      <Link
        to="/workers"
        className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary mb-4"
      >
        <ChevronLeft className="h-4 w-4" /> Back to workers
      </Link>

      {/* Cover */}
      <div className="relative h-40 sm:h-56 rounded-3xl overflow-hidden bg-gradient-to-br from-primary/15 to-accent/15">
        {worker.cover_url && (
          <img
            src={worker.cover_url}
            alt=""
            className="h-full w-full object-cover"
          />
        )}
      </div>

      <div className="grid lg:grid-cols-3 gap-8 -mt-16 relative">
        {/* Main */}
        <div className="lg:col-span-2">
          <div className="rounded-3xl bg-card border border-border shadow-sm p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row gap-4">
              <img
                src={worker.avatar_url}
                alt={worker.full_name}
                className="h-24 w-24 rounded-2xl object-cover ring-4 ring-card shadow-lg"
              />
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h1 className="font-heading text-2xl font-bold">
                    {worker.full_name}
                  </h1>
                  {worker.verified && (
                    <BadgeCheck className="h-5 w-5 text-primary" />
                  )}
                </div>
                <p className="text-muted-foreground">{worker.profession}</p>
                <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm">
                  <RatingStars
                    rating={worker.rating}
                    count={worker.review_count}
                    showValue
                    size={15}
                  />
                  <span className="flex items-center gap-1 text-muted-foreground">
                    <MapPin className="h-4 w-4" /> {worker.address}
                  </span>
                  <span className="flex items-center gap-1 text-muted-foreground">
                    <Clock className="h-4 w-4" /> {worker.experience_years} yrs
                    exp
                  </span>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div className="mt-6 border-b border-border flex gap-1">
              {tabs.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setTab(t.id)}
                  className={cn(
                    "px-4 py-3 text-sm font-medium border-b-2 -mb-px transition-colors",
                    tab === t.id
                      ? "border-primary text-primary"
                      : "border-transparent text-muted-foreground hover:text-foreground",
                  )}
                >
                  {t.label}
                </button>
              ))}
            </div>

            <div className="mt-6">
              {tab === "about" && (
                <div className="space-y-6">
                  <div>
                    <h3 className="font-heading font-semibold mb-2">About</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {worker.bio}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold mb-3">Skills</h3>
                    <div className="flex flex-wrap gap-2">
                      {worker.skills.map((s) => (
                        <span
                          key={s}
                          className="inline-flex items-center gap-1 rounded-lg bg-primary/5 border border-primary/10 px-3 py-1.5 text-xs font-medium text-primary"
                        >
                          <CheckCircle2 className="h-3.5 w-3.5" /> {s}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="rounded-xl border border-border p-4">
                      <div className="text-sm text-muted-foreground flex items-center gap-2">
                        <Briefcase className="h-4 w-4" /> Completed Jobs
                      </div>
                      <div className="mt-1 font-heading text-xl font-bold">
                        {worker.completed_jobs}+
                      </div>
                    </div>
                    <div className="rounded-xl border border-border p-4">
                      <div className="text-sm text-muted-foreground flex items-center gap-2">
                        <Shield className="h-4 w-4" /> Verified
                      </div>
                      <div className="mt-1 font-heading text-xl font-bold text-primary flex items-center gap-1">
                        <BadgeCheck className="h-5 w-5" /> ID & Background
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {tab === "portfolio" && (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {worker.portfolio.map((img, i) => (
                    <div
                      key={i}
                      className="aspect-square rounded-xl overflow-hidden group"
                    >
                      <img
                        src={img}
                        alt={`Work ${i + 1}`}
                        className="h-full w-full object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                  ))}
                </div>
              )}
              {tab === "reviews" && (
                <div className="space-y-4">
                  <div className="flex items-center gap-4 rounded-xl bg-secondary/50 p-4">
                    <div className="text-center">
                      <div className="font-heading text-3xl font-bold">
                        {worker.rating}
                      </div>
                      <RatingStars rating={worker.rating} size={14} showValue />
                      <div className="text-xs text-muted-foreground mt-1">
                        {worker.review_count} reviews
                      </div>
                    </div>
                  </div>
                  {SAMPLE_REVIEWS.map((r) => (
                    <div
                      key={r.id}
                      className="rounded-xl border border-border p-4"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <img
                          src={r.avatar}
                          alt={r.author}
                          className="h-9 w-9 rounded-full object-cover"
                        />
                        <div className="flex-1">
                          <div className="text-sm font-semibold">
                            {r.author}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {r.date}
                          </div>
                        </div>
                        <RatingStars rating={r.rating} size={13} showValue />
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {r.text}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 rounded-3xl bg-card border border-border shadow-sm p-6 space-y-4">
            <div className="flex items-baseline justify-between">
              <div>
                <span className="font-heading text-3xl font-bold">
                  ${worker.hourly_rate}
                </span>
                <span className="text-sm text-muted-foreground">/hour</span>
              </div>
              {worker.available ? (
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-600">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />{" "}
                  Available
                </span>
              ) : (
                <span className="inline-flex items-center gap-1 rounded-full bg-muted px-2.5 py-1 text-xs font-semibold text-muted-foreground">
                  Busy
                </span>
              )}
            </div>

            <div className="space-y-2 text-sm">
              <div className="flex items-center justify-between py-2 border-b border-border">
                <span className="text-muted-foreground flex items-center gap-2">
                  <MapPin className="h-4 w-4" /> Distance
                </span>
                <span className="font-medium">{worker.distance_km} km</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-border">
                <span className="text-muted-foreground flex items-center gap-2">
                  <Clock className="h-4 w-4" /> Experience
                </span>
                <span className="font-medium">
                  {worker.experience_years} years
                </span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-border">
                <span className="text-muted-foreground flex items-center gap-2">
                  <DollarSign className="h-4 w-4" /> Service Radius
                </span>
                <span className="font-medium">
                  {worker.service_radius_km} km
                </span>
              </div>
            </div>

            <Link
              to="/chat"
              className="block w-full text-center rounded-xl bg-primary py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Hire {worker.full_name.split(" ")[0]}
            </Link>
            <Link
              to="/chat"
              className="flex items-center justify-center gap-2 w-full rounded-xl border border-border py-3 text-sm font-semibold hover:bg-muted transition-colors"
            >
              <MessageCircle className="h-4 w-4" /> Send Message
            </Link>
            <div className="flex gap-2">
              <button
                onClick={() => setSaved(!saved)}
                className={cn(
                  "flex-1 flex items-center justify-center gap-1.5 rounded-xl border py-2.5 text-xs font-medium transition-colors",
                  saved
                    ? "border-primary bg-primary/5 text-primary"
                    : "border-border hover:bg-muted",
                )}
              >
                <Heart className={cn("h-4 w-4", saved && "fill-current")} />{" "}
                {saved ? "Saved" : "Save"}
              </button>
              <button className="flex-1 flex items-center justify-center gap-1.5 rounded-xl border border-border py-2.5 text-xs font-medium hover:bg-muted transition-colors">
                <Share2 className="h-4 w-4" /> Share
              </button>
            </div>

            <div className="rounded-xl bg-secondary/50 p-4 text-xs text-muted-foreground">
              <div className="flex items-center gap-2 font-medium text-foreground mb-1">
                <Shield className="h-4 w-4 text-primary" /> WorkNest Protection
              </div>
              Secure payments, verified profiles, and dispute resolution on
              every booking.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
