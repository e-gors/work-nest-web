import { useState } from "react";
import {
  Search,
  ChevronDown,
  MessageCircle,
  BookOpen,
  Shield,
  CreditCard,
  UserCog,
  Wrench,
  Users,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useScrollToTop } from "@/hooks/useScrollToTop";

const categories = [
  {
    icon: UserCog,
    title: "Account & Profile",
    desc: "Setup, verification, settings",
    count: 12,
  },
  {
    icon: Wrench,
    title: "For Workers",
    desc: "Jobs, payments, profile",
    count: 18,
  },
  {
    icon: Users,
    title: "For Customers",
    desc: "Hiring, messaging, reviews",
    count: 15,
  },
  {
    icon: CreditCard,
    title: "Payments & Billing",
    desc: "Pricing, refunds, invoices",
    count: 9,
  },
  {
    icon: Shield,
    title: "Safety & Security",
    desc: "Verification, disputes, 2FA",
    count: 11,
  },
  {
    icon: BookOpen,
    title: "Getting Started",
    desc: "Guides for new users",
    count: 8,
  },
];

const faqs = [
  {
    q: "How do I verify my account?",
    a: "After registration, go to Settings → Account → Verification. Upload a valid ID and we'll verify within 24 hours. Verified workers get a badge and appear higher in search results.",
  },
  {
    q: "How does the hiring process work?",
    a: 'Browse workers, view profiles, and click "Hire" or send a message. Discuss details, agree on price and schedule, then confirm the booking. Payments are held securely until the job is done.',
  },
  {
    q: "How are workers background-checked?",
    a: "Every worker undergoes ID verification and a background check before joining. We verify professional licenses where applicable and continuously monitor reviews.",
  },
  {
    q: "What if I'm not satisfied with the work?",
    a: "You can request revisions or file a dispute within 48 hours. Our resolution team reviews every case and ensures fair outcomes for both parties.",
  },
  {
    q: "How do payments work?",
    a: "Payments are processed securely through WorkNest. We hold funds in escrow and release them to the worker only after you confirm the job is complete.",
  },
  {
    q: "Can I cancel a booking?",
    a: "Yes, you can cancel anytime before the work begins. Cancellations within 24 hours may incur a small fee. See our cancellation policy for details.",
  },
];

export default function HelpCenter() {
  useScrollToTop();

  const [query, setQuery] = useState("");
  const [openFaq, setOpenFaq] = useState(0);

  const filtered = faqs.filter(
    (f) =>
      f.q.toLowerCase().includes(query.toLowerCase()) ||
      f.a.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <div>
      {/* Hero */}
      <section className="gradient-hero py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            <BookOpen className="h-3.5 w-3.5" /> Help Center
          </span>
          <h1 className="mt-5 font-heading text-4xl sm:text-5xl font-extrabold leading-tight text-balance">
            How can we help you?
          </h1>
          <p className="mt-4 text-muted-foreground">
            Search our guides, FAQs, and resources.
          </p>
          <div className="mt-6 relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for help..."
              className="w-full rounded-2xl border border-border bg-card pl-12 pr-4 py-3.5 text-sm shadow-lg shadow-primary/5 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="font-heading text-2xl font-bold mb-8">
          Browse by topic
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((c) => (
            <a
              key={c.title}
              href="#"
              className="group flex items-start gap-4 rounded-2xl border border-border bg-card p-5 hover:shadow-lg hover:border-primary/30 transition-all"
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary shrink-0 group-hover:scale-110 transition-transform">
                <c.icon className="h-6 w-6" />
              </span>
              <div className="flex-1">
                <h3 className="font-heading font-semibold">{c.title}</h3>
                <p className="text-sm text-muted-foreground">{c.desc}</p>
                <span className="text-xs text-primary font-medium">
                  {c.count} articles
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-secondary/50 py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="font-heading text-2xl font-bold mb-8 text-center">
            Frequently asked questions
          </h2>
          <div className="space-y-3">
            {filtered.map((f, i) => (
              <div
                key={i}
                className="rounded-2xl border border-border bg-card overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left"
                >
                  <span className="font-medium text-sm">{f.q}</span>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 text-muted-foreground shrink-0 transition-transform",
                      openFaq === i && "rotate-180",
                    )}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">
                    {f.a}
                  </div>
                )}
              </div>
            ))}
            {filtered.length === 0 && (
              <p className="text-center text-muted-foreground py-8">
                No results for "{query}".
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Still need help */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="rounded-3xl bg-foreground text-background p-10 sm:p-12 text-center">
          <MessageCircle className="h-10 w-10 text-primary mx-auto mb-4" />
          <h2 className="font-heading text-2xl font-bold">Still need help?</h2>
          <p className="mt-2 text-background/70 max-w-md mx-auto">
            Our support team is available every day to assist you.
          </p>
          <a
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
          >
            Contact Support
          </a>
        </div>
      </section>
    </div>
  );
}
