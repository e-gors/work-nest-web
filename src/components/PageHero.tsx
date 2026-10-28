import React from "react";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
}

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  children,
}: PageHeroProps) {
  return (
    <section className="gradient-hero border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        {eyebrow && (
          <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            {eyebrow}
          </span>
        )}
        <h1 className="mt-4 font-heading text-3xl sm:text-5xl font-extrabold tracking-tight text-balance max-w-3xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl text-muted-foreground leading-relaxed">
            {subtitle}
          </p>
        )}
        {children && (
          <div className="mt-7 flex flex-wrap gap-3">{children}</div>
        )}
      </div>
    </section>
  );
}
