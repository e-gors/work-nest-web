import React from "react";

interface LegalSectionProps {
  title: string;
  children: React.ReactNode;
}

export default function LegalSection({ title, children }: LegalSectionProps) {
  return (
    <section>
      <h2 className="font-heading text-lg font-bold text-foreground">
        {title}
      </h2>
      <div className="mt-2 space-y-3 text-sm text-muted-foreground leading-relaxed">
        {children}
      </div>
    </section>
  );
}
