import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, Camera, BadgeCheck, Wallet } from "lucide-react";
import PageHero from "@/components/PageHero";
import { CATEGORIES } from "@/lib/categories";

const inputCls =
  "w-full rounded-xl border border-border bg-background px-3 py-2.5 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20";
const labelCls = "block text-xs font-medium text-muted-foreground mb-1.5";

const CHECKLIST = [
  { icon: Camera, label: "Add a clear profile photo" },
  { icon: BadgeCheck, label: "Verify your ID for the badge" },
  { icon: Wallet, label: "Set your hourly rate" },
];

export default function CreateProfile() {
  const [form, setForm] = useState({
    name: "",
    category: "",
    rate: "",
    radius: "15",
    bio: "",
  });
  const [saved, setSaved] = useState(false);
  const update =
    (key: keyof typeof form) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) =>
      setForm({ ...form, [key]: e.target.value });
  const valid = form.name.trim() && form.category && form.rate;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!valid) return;
    setSaved(true);
  };

  return (
    <div>
      <PageHero
        eyebrow="For professionals"
        title="Create a profile that gets booked"
        subtitle="Customers hire based on trust signals: a real photo, a verified badge, transparent rates, and a short, specific bio. Fill these in and you're ready."
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            {saved ? (
              <div className="rounded-3xl border border-border bg-card p-8 sm:p-10 text-center">
                <span className="grid h-14 w-14 place-items-center rounded-full bg-emerald-50 text-emerald-600 mx-auto">
                  <CheckCircle2 className="h-7 w-7" />
                </span>
                <h2 className="mt-4 font-heading text-2xl font-bold">
                  Profile saved
                </h2>
                <p className="mt-2 text-sm text-muted-foreground max-w-md mx-auto">
                  {form.name}, your{" "}
                  {CATEGORIES.find(
                    (c) => c.id === form.category,
                  )?.label.toLowerCase()}{" "}
                  profile is ready. Finish ID verification to be listed in
                  search results.
                </p>
                <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
                  <Link
                    to="/worker-hub"
                    className="rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
                  >
                    Go to worker hub
                  </Link>
                  <button
                    onClick={() => setSaved(false)}
                    className="rounded-xl border border-border px-5 py-3 text-sm font-semibold hover:bg-muted transition-colors"
                  >
                    Edit profile
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
                    <label className={labelCls} htmlFor="name">
                      Full name
                    </label>
                    <input
                      id="name"
                      value={form.name}
                      onChange={update("name")}
                      placeholder="James Okoro"
                      className={inputCls}
                    />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className={labelCls} htmlFor="category">
                        Trade
                      </label>
                      <select
                        id="category"
                        value={form.category}
                        onChange={update("category")}
                        className={`${inputCls} cursor-pointer`}
                      >
                        <option value="">Select your trade</option>
                        {CATEGORIES.filter((c) => c.id !== "other").map((c) => (
                          <option key={c.id} value={c.id}>
                            {c.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className={labelCls} htmlFor="rate">
                        Hourly rate
                      </label>
                      <input
                        id="rate"
                        inputMode="numeric"
                        value={form.rate}
                        onChange={update("rate")}
                        placeholder="$45"
                        className={inputCls}
                      />
                    </div>
                  </div>
                  <div>
                    <label className={labelCls} htmlFor="radius">
                      Service radius (km)
                    </label>
                    <input
                      id="radius"
                      inputMode="numeric"
                      value={form.radius}
                      onChange={update("radius")}
                      className={inputCls}
                    />
                  </div>
                  <div>
                    <label className={labelCls} htmlFor="bio">
                      Short bio
                    </label>
                    <textarea
                      id="bio"
                      rows={4}
                      value={form.bio}
                      onChange={update("bio")}
                      placeholder="What you do, how long you've done it, and what customers can expect."
                      className={`${inputCls} resize-none`}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={!valid}
                  className="mt-6 w-full rounded-xl bg-primary py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Save profile
                </button>
              </form>
            )}
          </div>

          <aside className="space-y-4">
            <div className="rounded-3xl border border-border bg-card p-6">
              <h3 className="font-heading font-semibold text-sm">
                Profile checklist
              </h3>
              <ul className="mt-3 space-y-3 text-sm text-muted-foreground">
                {CHECKLIST.map((c) => (
                  <li key={c.label} className="flex items-center gap-2.5">
                    <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary/10 text-primary shrink-0">
                      <c.icon className="h-4 w-4" />
                    </span>
                    {c.label}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-dashed border-border p-5 text-xs text-muted-foreground leading-relaxed">
              Profiles with a photo and a verified badge get roughly three times
              more booking requests.
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
