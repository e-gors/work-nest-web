import { useState } from "react";
import { Link } from "react-router-dom";
import { Wrench, Users, ArrowLeft, MapPin, Upload, Camera } from "lucide-react";
import { cn } from "@/lib/utils";
import Field from "./Field";
import RoleChoice from "./RoleChoice";

const inputCls =
  "w-full rounded-xl border border-border bg-card px-4 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition";

export default function Register() {
  const [role, setRole] = useState<string | null>(null);

  if (!role) {
    return <RoleChoice setRole={(r) => setRole(r)} />;
  }

  return (
    <div className="min-h-[80vh] px-4 py-12">
      <div className="max-w-2xl mx-auto">
        <button
          onClick={() => setRole(null)}
          className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary mb-6"
        >
          <ArrowLeft className="h-4 w-4" /> Change role
        </button>

        <div className="rounded-3xl border border-border bg-card shadow-xl shadow-primary/5 p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-6">
            <span
              className={cn(
                "grid h-12 w-12 place-items-center rounded-2xl",
                role === "worker"
                  ? "bg-primary/10 text-primary"
                  : "bg-accent/10 text-accent",
              )}
            >
              {role === "worker" ? (
                <Wrench className="h-6 w-6" />
              ) : (
                <Users className="h-6 w-6" />
              )}
            </span>
            <div>
              <h1 className="font-heading text-2xl font-bold">
                {role === "worker"
                  ? "Worker Registration"
                  : "Customer Registration"}
              </h1>
              <p className="text-sm text-muted-foreground">
                Create your free account in minutes.
              </p>
            </div>
          </div>

          {/* Profile photo */}
          <div className="flex items-center gap-4 mb-6">
            <div className="relative">
              <div className="h-20 w-20 rounded-2xl border-2 border-dashed border-border grid place-items-center bg-muted">
                <Camera className="h-7 w-7 text-muted-foreground" />
              </div>
            </div>
            <div>
              <button className="inline-flex items-center gap-2 rounded-xl border border-border px-4 py-2 text-sm font-medium hover:bg-muted transition-colors">
                <Upload className="h-4 w-4" /> Upload Photo
              </button>
              <p className="mt-1 text-xs text-muted-foreground">
                JPG or PNG, max 5MB
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Full Name" required>
              <input className={inputCls} placeholder="John Doe" />
            </Field>
            <Field label="Email Address" required>
              <input
                type="email"
                className={inputCls}
                placeholder="you@example.com"
              />
            </Field>
            <Field label="Mobile Number" required>
              <input className={inputCls} placeholder="+1 (555) 000-0000" />
            </Field>
            {role === "worker" && (
              <Field label="Skills / Profession" required>
                <select className={inputCls}>
                  <option>Select your profession</option>
                  <option>Electrician</option>
                  <option>Plumber</option>
                  <option>Carpenter</option>
                  <option>Painter</option>
                  <option>Mechanic</option>
                  <option>Other</option>
                </select>
              </Field>
            )}
            <Field label="Password" required>
              <input
                type="password"
                className={inputCls}
                placeholder="••••••••"
              />
            </Field>
            <Field label="Confirm Password" required>
              <input
                type="password"
                className={inputCls}
                placeholder="••••••••"
              />
            </Field>
          </div>

          {role === "worker" && (
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <Field label="Years of Experience" required>
                <input type="number" className={inputCls} placeholder="5" />
              </Field>
              <Field label="Service Radius (km)" required>
                <input type="number" className={inputCls} placeholder="10" />
              </Field>
              <Field label="Hourly Rate ($)" hint="Optional">
                <input type="number" className={inputCls} placeholder="35" />
              </Field>
              <Field label="Certifications" hint="Optional">
                <input
                  className={inputCls}
                  placeholder="e.g. Licensed Electrician"
                />
              </Field>
              <div className="sm:col-span-2">
                <Field
                  label="Bio"
                  hint="Tell customers about yourself and your expertise"
                >
                  <textarea
                    rows={3}
                    className={inputCls}
                    placeholder="I'm a certified professional with..."
                  />
                </Field>
              </div>
              <div className="sm:col-span-2">
                <Field label="Available Schedule">
                  <div className="flex flex-wrap gap-2">
                    {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(
                      (d) => (
                        <label
                          key={d}
                          className="inline-flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-sm cursor-pointer hover:bg-muted"
                        >
                          <input type="checkbox" className="accent-primary" />{" "}
                          {d}
                        </label>
                      ),
                    )}
                  </div>
                </Field>
              </div>
            </div>
          )}

          {role === "customer" && (
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <Field label="Address" required>
                <input className={inputCls} placeholder="123 Main Street" />
              </Field>
              <Field label="City" required>
                <input className={inputCls} placeholder="Springfield" />
              </Field>
            </div>
          )}

          {/* GPS location */}
          <div className="mt-6">
            <Field
              label="GPS Location"
              required
              hint="We use this to verify you're in our service area and find nearby matches"
            >
              <button className="w-full flex items-center justify-center gap-2 rounded-xl border-2 border-dashed border-primary/30 bg-primary/5 py-4 text-sm font-medium text-primary hover:bg-primary/10 transition-colors">
                <MapPin className="h-5 w-5" /> Detect my location
              </button>
            </Field>
          </div>

          <label className="mt-6 flex items-start gap-2 cursor-pointer">
            <input type="checkbox" className="mt-1 accent-primary" />
            <span className="text-sm text-muted-foreground">
              I agree to the{" "}
              <a href="#" className="text-primary hover:underline">
                Terms
              </a>{" "}
              and{" "}
              <a href="#" className="text-primary hover:underline">
                Privacy Policy
              </a>
            </span>
          </label>

          <button className="mt-6 w-full rounded-xl bg-primary py-3.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors">
            Create Account
          </button>
          <p className="mt-4 text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link
              to="/auth/login"
              className="font-semibold text-primary hover:underline"
            >
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
