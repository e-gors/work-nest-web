import { useState } from "react";
import { Camera, Save, Check } from "lucide-react";

const inputCls =
  "w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20";

export default function ProfilePanel() {
  const [form, setForm] = useState({
    full_name: "Alex Morgan",
    email: "alex.morgan@example.com",
    phone: "(555) 123-4567",
    location: "Springfield",
    address: "142 Riverside Ave, Springfield",
    bio: "Homeowner looking for trusted local professionals for repairs and maintenance.",
  });
  const [saved, setSaved] = useState(false);

  const update = (k: string, v: string) => {
    setForm((f) => ({ ...f, [k]: v }));
    setSaved(false);
  };

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <div className="max-w-3xl space-y-6">
      {/* Avatar */}
      <div className="rounded-2xl border border-border bg-card p-6 flex items-center gap-4">
        <div className="relative">
          <img
            src="https://i.pravatar.cc/120?u=me"
            alt="Me"
            className="h-20 w-20 rounded-full object-cover"
          />
          <button className="absolute bottom-0 right-0 grid h-7 w-7 place-items-center rounded-full bg-primary text-primary-foreground shadow-md hover:opacity-90">
            <Camera className="h-3.5 w-3.5" />
          </button>
        </div>
        <div>
          <h3 className="font-heading font-semibold">{form.full_name}</h3>
          <p className="text-sm text-muted-foreground">Customer account</p>
          <p className="text-xs text-emerald-600 mt-1 flex items-center gap-1">
            <Check className="h-3 w-3" /> Verified email
          </p>
        </div>
      </div>

      {/* Form */}
      <div className="rounded-2xl border border-border bg-card p-6">
        <h3 className="font-heading font-semibold mb-4">
          Personal Information
        </h3>
        <div className="grid sm:grid-cols-2 gap-4">
          <label className="block">
            <span className="text-xs font-medium text-muted-foreground">
              Full name
            </span>
            <input
              value={form.full_name}
              onChange={(e) => update("full_name", e.target.value)}
              className={`mt-1.5 ${inputCls}`}
            />
          </label>
          <label className="block">
            <span className="text-xs font-medium text-muted-foreground">
              Email
            </span>
            <input
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
              className={`mt-1.5 ${inputCls}`}
            />
          </label>
          <label className="block">
            <span className="text-xs font-medium text-muted-foreground">
              Phone
            </span>
            <input
              value={form.phone}
              onChange={(e) => update("phone", e.target.value)}
              className={`mt-1.5 ${inputCls}`}
            />
          </label>
          <label className="block">
            <span className="text-xs font-medium text-muted-foreground">
              City
            </span>
            <input
              value={form.location}
              onChange={(e) => update("location", e.target.value)}
              className={`mt-1.5 ${inputCls}`}
            />
          </label>
          <label className="block sm:col-span-2">
            <span className="text-xs font-medium text-muted-foreground">
              Address
            </span>
            <input
              value={form.address}
              onChange={(e) => update("address", e.target.value)}
              className={`mt-1.5 ${inputCls}`}
            />
          </label>
          <label className="block sm:col-span-2">
            <span className="text-xs font-medium text-muted-foreground">
              Bio
            </span>
            <textarea
              value={form.bio}
              onChange={(e) => update("bio", e.target.value)}
              rows={3}
              className={`mt-1.5 ${inputCls} resize-none`}
            />
          </label>
        </div>
        <div className="mt-5 flex items-center gap-3">
          <button
            onClick={handleSave}
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
          >
            <Save className="h-4 w-4" /> Save changes
          </button>
          {saved && (
            <span className="text-sm text-emerald-600 flex items-center gap-1">
              <Check className="h-4 w-4" /> Saved
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
