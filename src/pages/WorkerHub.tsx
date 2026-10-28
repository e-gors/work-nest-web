import React from "react";
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  BadgeCheck,
  Lock,
  Scale,
  AlertTriangle,
  MessageCircle,
  ArrowRight,
} from "lucide-react";
import PageHero from "@/components/PageHero";

const PILLARS = [
  {
    icon: BadgeCheck,
    title: "Verified identities",
    desc: "ID and background checks before a professional can accept bookings, plus license checks for regulated trades.",
  },
  {
    icon: Lock,
    title: "Escrow on every job",
    desc: "Your money is held by our payment partner and only released after completion — or refunded if something goes wrong.",
  },
  {
    icon: MessageCircle,
    title: "Private messaging",
    desc: "Coordinate details in-app. Your phone number and address stay private until you choose to share them.",
  },
  {
    icon: Scale,
    title: "Fair dispute resolution",
    desc: "Open a case within 48 hours of the job and our team reviews the evidence before any funds are released.",
  },
];

const RECORD = [
  "Identity verified",
  "Background check cleared",
  "Insurance on file",
  "License validated",
];

export default function Safety() {
  return (
    <div>
      <PageHero
        eyebrow="Trust & safety"
        title="Hiring someone into your home should never feel risky"
        subtitle="Every booking on WorkNest is covered by verification, escrow payments, and a resolution team that actually responds."
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid sm:grid-cols-2 gap-5">
          {PILLARS.map((p) => (
            <div
              key={p.title}
              className="rounded-3xl border border-border bg-card p-6"
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary">
                <p.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-heading font-semibold">{p.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid lg:grid-cols-2 gap-6">
          <div className="rounded-3xl border border-border bg-card p-6">
            <h2 className="font-heading font-semibold flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-primary" /> What we check
            </h2>
            <ul className="mt-4 space-y-3">
              {RECORD.map((r) => (
                <li key={r} className="flex items-center gap-2.5 text-sm">
                  <BadgeCheck className="h-4 w-4 text-emerald-600" /> {r}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-muted-foreground leading-relaxed">
              Verification is refreshed annually. Profiles that lose their badge
              are paused until they re-verify.
            </p>
          </div>

          <div className="rounded-3xl border border-border bg-card p-6">
            <h2 className="font-heading font-semibold flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-accent" /> If something
              goes wrong
            </h2>
            <ol className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li>
                <span className="font-semibold text-foreground">1.</span>{" "}
                Message the professional first — most issues are resolved on the
                spot.
              </li>
              <li>
                <span className="font-semibold text-foreground">2.</span> Open a
                dispute from your job page within 48 hours of completion.
              </li>
              <li>
                <span className="font-semibold text-foreground">3.</span> We
                freeze the escrow funds and review photos, messages, and the
                agreement.
              </li>
              <li>
                <span className="font-semibold text-foreground">4.</span> A full
                or partial refund is issued directly to your original payment
                method.
              </li>
            </ol>
          </div>
        </div>

        <div className="mt-10 rounded-3xl border border-border bg-gradient-to-br from-primary/5 to-accent/5 p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <h2 className="font-heading text-xl font-bold">
              Report a safety concern
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Our team reviews urgent reports 24/7 and can suspend accounts
              immediately.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors shrink-0"
          >
            Contact support <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
