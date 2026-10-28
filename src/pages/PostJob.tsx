import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, Send, Clock, ShieldCheck, Users } from "lucide-react";
import PageHero from "@/components/PageHero";
import { CATEGORIES } from "@/lib/categories";

const inputCls =
  "w-full rounded-xl border border-border bg-background px-3 py-2.5 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20";
const labelCls = "block text-xs font-medium text-muted-foreground mb-1.5";

const EMPTY = {
  title: "",
  category: "",
  description: "",
  budget: "",
  date: "",
  address: "",
};

export default function PostJob() {
  const [form, setForm] = useState(EMPTY);
  const [submitted, setSubmitted] = useState(false);
  const update =
    (key: keyof typeof EMPTY) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) =>
      setForm({ ...form, [key]: e.target.value });
  const valid =
    form.title.trim() && form.category && form.description.trim().length > 10;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!valid) return;
    setSubmitted(true);
  };

  return (
    <div>
      <PageHero
        eyebrow="Post a job"
        title="Describe the job. Get matched with local pros."
        subtitle="Takes about two minutes. Verified professionals in your area can respond with a quote, and you only pay once you book."
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            {submitted ? (
              <div className="rounded-3xl border border-border bg-card p-8 sm:p-10 text-center">
                <span className="grid h-14 w-14 place-items-center rounded-full bg-emerald-50 text-emerald-600 mx-auto">
                  <CheckCircle2 className="h-7 w-7" />
                </span>
                <h2 className="mt-4 font-heading text-2xl font-bold">
                  Your job is live
                </h2>
                <p className="mt-2 text-sm text-muted-foreground max-w-md mx-auto">
                  “{form.title}” is now visible to verified{" "}
                  {form.category
                    ? CATEGORIES.find(
                        (c) => c.id === form.category,
                      )?.label.toLowerCase() || "professionals"
                    : "professionals"}{" "}
                  in your area. Most jobs get their first response within two
                  hours.
                </p>
                <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
                  <Link
                    to="/workers"
                    className="rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
                  >
                    Browse workers now
                  </Link>
                  <button
                    onClick={() => {
                      setForm(EMPTY);
                      setSubmitted(false);
                    }}
                    className="rounded-xl border border-border px-5 py-3 text-sm font-semibold hover:bg-muted transition-colors"
                  >
                    Post another job
                  </button>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-3xl border border-border bg-card p-6 sm:p-8"
              >
                <div className="space-y-4">
                  <div>
                    <label className={labelCls} htmlFor="title">
                      Job title
                    </label>
                    <input
                      id="title"
                      value={form.title}
                      onChange={update("title")}
                      placeholder="Fix a leaking kitchen pipe"
                      className={inputCls}
                    />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className={labelCls} htmlFor="category">
                        Category
                      </label>
                      <select
                        id="category"
                        value={form.category}
                        onChange={update("category")}
                        className={`${inputCls} cursor-pointer`}
                      >
                        <option value="">Select a category</option>
                        {CATEGORIES.filter((c) => c.id !== "other").map((c) => (
                          <option key={c.id} value={c.id}>
                            {c.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className={labelCls} htmlFor="budget">
                        Budget (optional)
                      </label>
                      <input
                        id="budget"
                        inputMode="numeric"
                        value={form.budget}
                        onChange={update("budget")}
                        placeholder="$120"
                        className={inputCls}
                      />
                    </div>
                  </div>
                  <div>
                    <label className={labelCls} htmlFor="description">
                      Describe the job
                    </label>
                    <textarea
                      id="description"
                      rows={5}
                      value={form.description}
                      onChange={update("description")}
                      placeholder="What needs doing, how big the space is, any materials already on site…"
                      className={`${inputCls} resize-none`}
                    />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className={labelCls} htmlFor="date">
                        Preferred date
                      </label>
                      <input
                        id="date"
                        type="date"
                        value={form.date}
                        onChange={update("date")}
                        className={inputCls}
                      />
                    </div>
                    <div>
                      <label className={labelCls} htmlFor="address">
                        Location
                      </label>
                      <input
                        id="address"
                        value={form.address}
                        onChange={update("address")}
                        placeholder="Area, city"
                        className={inputCls}
                      />
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={!valid}
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="h-4 w-4" /> Publish job
                </button>
                <p className="mt-3 text-center text-xs text-muted-foreground">
                  Free to post. You only pay when you book a professional.
                </p>
              </form>
            )}
          </div>

          <aside className="space-y-4">
            <div className="rounded-3xl border border-border bg-card p-6">
              <h3 className="font-heading font-semibold text-sm">
                Why post a job?
              </h3>
              <ul className="mt-3 space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-2.5">
                  <Users className="h-4 w-4 shrink-0 text-primary" /> Local
                  verified pros contact you with quotes.
                </li>
                <li className="flex gap-2.5">
                  <Clock className="h-4 w-4 shrink-0 text-primary" /> First
                  responses usually arrive within two hours.
                </li>
                <li className="flex gap-2.5">
                  <ShieldCheck className="h-4 w-4 shrink-0 text-primary" />{" "}
                  Payment stays in escrow until the job is done.
                </li>
              </ul>
            </div>
            <div className="rounded-2xl border border-dashed border-border p-5 text-xs text-muted-foreground leading-relaxed">
              Prefer to choose someone yourself? Browse profiles and book
              instantly instead of waiting for quotes.
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
