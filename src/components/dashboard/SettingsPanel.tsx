import { useState } from "react";
import { Bell, Shield, Mail, Smartphone, Eye, LogOut } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ToggleProps {
  on: boolean;
  onChange: () => void;
}

function Toggle({ on, onChange }: ToggleProps) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={on}
      onClick={onChange}
      className={cn(
        "relative h-6 w-11 rounded-full transition-colors shrink-0",
        on ? "bg-primary" : "bg-muted-foreground/30",
      )}
    >
      <span
        className={cn(
          "absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform",
          on ? "translate-x-5" : "translate-x-0.5",
        )}
      />
    </button>
  );
}

type SettingId = "email" | "push" | "sms" | "2fa" | "public";

interface Setting {
  id: SettingId;
  icon: LucideIcon;
  label: string;
  desc: string;
  on: boolean;
}

const INITIAL: Setting[] = [
  {
    id: "email",
    icon: Mail,
    label: "Email notifications",
    desc: "Job updates, messages, and offers",
    on: true,
  },
  {
    id: "push",
    icon: Bell,
    label: "Push notifications",
    desc: "Instant alerts on your device",
    on: true,
  },
  {
    id: "sms",
    icon: Smartphone,
    label: "SMS alerts",
    desc: "Text messages for urgent updates",
    on: false,
  },
  {
    id: "2fa",
    icon: Shield,
    label: "Two-factor authentication",
    desc: "Extra security for your account",
    on: true,
  },
  {
    id: "public",
    icon: Eye,
    label: "Public profile",
    desc: "Let workers see your profile when you hire",
    on: true,
  },
];

export default function SettingsPanel() {
  const [settings, setSettings] = useState<Setting[]>(INITIAL);

  const toggle = (id: SettingId): void => {
    setSettings((prev) =>
      prev.map((setting) =>
        setting.id === id ? { ...setting, on: !setting.on } : setting,
      ),
    );
  };

  return (
    <div className="max-w-3xl space-y-6">
      <div className="rounded-2xl border border-border bg-card p-6">
        <h3 className="font-heading font-semibold mb-4">Preferences</h3>

        <div className="space-y-1">
          {settings.map((setting) => (
            <div
              key={setting.id}
              className="flex items-center gap-4 rounded-xl p-3 hover:bg-muted/50 transition-colors"
            >
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary shrink-0">
                <setting.icon className="h-5 w-5" />
              </span>

              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium">{setting.label}</div>
                <div className="text-xs text-muted-foreground">
                  {setting.desc}
                </div>
              </div>

              <Toggle on={setting.on} onChange={() => toggle(setting.id)} />
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-2xl border border-destructive/30 bg-destructive/5 p-6">
        <h3 className="font-heading font-semibold mb-1">Danger zone</h3>

        <p className="text-sm text-muted-foreground mb-4">
          Sign out of this session or deactivate your account.
        </p>

        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-2.5 text-sm font-medium hover:bg-muted transition-colors"
          >
            <LogOut className="h-4 w-4" />
            Sign out
          </button>

          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-xl border border-destructive/40 text-destructive px-4 py-2.5 text-sm font-medium hover:bg-destructive/10 transition-colors"
          >
            Deactivate account
          </button>
        </div>
      </div>
    </div>
  );
}
