import React from "react";
import { Link } from "react-router-dom";
import { ShieldCheck, ArrowLeft } from "lucide-react";

interface LegalShellProps {
  title: string;
  updated: string;
  intro: string;
  children: React.ReactNode;
}
const LEGAL_LINKS = [
  { to: "/terms", label: "Terms of Service" },
  { to: "/privacy", label: "Privacy Policy" },
  { to: "/cookies", label: "Cookie Policy" },
];

export default function LegalShell({
  title,
  updated,
  intro,
  children,
}: LegalShellProps) {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-10">
      <Link
        to="/"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary mb-6"
      >
        <ArrowLeft className="h-4 w-4" /> Back to home
      </Link>

      <div className="rounded-3xl border border-border bg-card p-6 sm:p-10">
        <div className="flex items-center gap-2 text-xs font-semibold text-primary mb-3">
          <ShieldCheck className="h-4 w-4" /> Legal
        </div>
        <h1 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tight text-balance">
          {title}
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Last updated {updated}
        </p>
        {intro && (
          <p className="mt-5 text-sm text-muted-foreground leading-relaxed">
            {intro}
          </p>
        )}
        <div className="mt-8 space-y-8">{children}</div>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {LEGAL_LINKS.map((l) => (
          <Link
            key={l.to}
            to={l.to}
            className="rounded-full border border-border px-3.5 py-1.5 text-xs font-medium text-muted-foreground hover:border-primary hover:text-primary transition-colors"
          >
            {l.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
