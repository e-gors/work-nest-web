import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  Headphones,
  Building2,
} from "lucide-react";
import { useScrollToTop } from "@/hooks/useScrollToTop";

const contactCards = [
  {
    icon: Mail,
    title: "Email Us",
    value: "support@worknest.com",
    desc: "We reply within 24 hours",
  },
  {
    icon: Phone,
    title: "Call Us",
    value: "+1 (800) 555-0199",
    desc: "Mon–Fri, 8am–8pm",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    value: "123 Market St, Springfield",
    desc: "Open by appointment",
  },
];

const inputCls =
  "w-full rounded-xl border border-border bg-card px-4 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition";

export default function Contact() {
  useScrollToTop();

  const [sent, setSent] = useState(false);

  return (
    <div>
      {/* Hero */}
      <section className="gradient-hero py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            <Headphones className="h-3.5 w-3.5" /> We're here to help
          </span>
          <h1 className="mt-5 font-heading text-4xl sm:text-5xl font-extrabold leading-tight text-balance">
            Get in touch with us
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Questions, feedback, or need a hand? Our team is ready to help you
            any way we can.
          </p>
        </div>
      </section>

      {/* Contact cards */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 -mt-10 relative z-10">
        <div className="grid sm:grid-cols-3 gap-5">
          {contactCards.map((c) => (
            <div
              key={c.title}
              className="rounded-2xl bg-card border border-border shadow-lg shadow-primary/5 p-6 text-center"
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary mx-auto mb-4">
                <c.icon className="h-6 w-6" />
              </span>
              <h3 className="font-heading font-semibold">{c.title}</h3>
              <p className="mt-1 text-sm font-medium text-primary">{c.value}</p>
              <p className="mt-1 text-xs text-muted-foreground">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Form + Info */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Form */}
          <div className="lg:col-span-3">
            <div className="rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-sm">
              <h2 className="font-heading text-2xl font-bold">
                Send us a message
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Fill out the form and we'll get back to you shortly.
              </p>
              {sent ? (
                <div className="mt-6 rounded-2xl bg-emerald-50 border border-emerald-200 p-8 text-center">
                  <div className="grid h-14 w-14 place-items-center rounded-full bg-emerald-100 text-emerald-600 mx-auto mb-4">
                    <Send className="h-7 w-7" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-emerald-700">
                    Message sent!
                  </h3>
                  <p className="mt-1 text-sm text-emerald-600">
                    Thanks for reaching out. We'll respond within 24 hours.
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="mt-4 text-sm font-semibold text-primary hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSent(true);
                  }}
                  className="mt-6 space-y-4"
                >
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1.5">
                        Full Name
                      </label>
                      <input
                        className={inputCls}
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1.5">
                        Email
                      </label>
                      <input
                        type="email"
                        className={inputCls}
                        placeholder="you@example.com"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5">
                      Subject
                    </label>
                    <select className={inputCls}>
                      <option>General Inquiry</option>
                      <option>Account Support</option>
                      <option>Worker Verification</option>
                      <option>Report an Issue</option>
                      <option>Partnership</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5">
                      Message
                    </label>
                    <textarea
                      rows={5}
                      className={inputCls}
                      placeholder="How can we help you?"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
                  >
                    <Send className="h-4 w-4" /> Send Message
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Info sidebar */}
          <div className="lg:col-span-2 space-y-5">
            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="font-heading font-semibold flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" /> Business Hours
              </h3>
              <ul className="mt-4 space-y-2 text-sm">
                {[
                  ["Monday – Friday", "8:00 AM – 8:00 PM"],
                  ["Saturday", "9:00 AM – 6:00 PM"],
                  ["Sunday", "Closed"],
                ].map(([day, hours]) => (
                  <li key={day} className="flex justify-between">
                    <span className="text-muted-foreground">{day}</span>
                    <span className="font-medium">{hours}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-border bg-gradient-to-br from-primary/5 to-accent/5 p-6">
              <Building2 className="h-7 w-7 text-primary mb-3" />
              <h3 className="font-heading font-semibold">Headquarters</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                123 Market Street, Suite 400
                <br />
                Springfield, ST 12345
                <br />
                Philippines
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6">
              <MessageCircle className="h-7 w-7 text-primary mb-3" />
              <h3 className="font-heading font-semibold">Live Chat</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Need quick help? Chat with our support team in real-time.
              </p>
              <button className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
                Start live chat →
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
