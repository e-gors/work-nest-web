import { useState } from "react";
import { Link } from "react-router-dom";
import {
  LayoutDashboard,
  Bell,
  MessageCircle,
  Briefcase,
  User,
  Settings,
  Heart,
  Star,
  CheckCircle2,
  ArrowRight,
  Plus,
  Calendar,
  ChevronRight,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import WorkerCalendar from "@/components/dashboard/WorkerCalendar";
import MyJobsPanel from "@/components/dashboard/MyJobsPanel";
import SavedWorkersPanel from "@/components/dashboard/SavedWorkersPanel";
import MessagesPanel from "@/components/dashboard/MessagesPanel";
import NotificationsPanel from "@/components/dashboard/NotificationsPanel";
import ProfilePanel from "@/components/dashboard/ProfilePanel";
import SettingsPanel from "@/components/dashboard/SettingsPanel";

const PAGE_META = {
  overview: {
    title: "Welcome back, Alex 👋",
    sub: "Here's what's happening with your projects.",
  },
  calendar: {
    title: "Booking Calendar",
    sub: "Manage your availability and visualize upcoming bookings.",
  },
  jobs: { title: "My Jobs", sub: "Track and manage all your booked services." },
  favorites: {
    title: "Saved Workers",
    sub: "Your shortlisted professionals, ready to hire.",
  },
  messages: { title: "Messages", sub: "Stay in touch with your workers." },
  notifications: {
    title: "Notifications",
    sub: "All your recent updates in one place.",
  },
  profile: {
    title: "My Profile",
    sub: "Keep your personal information up to date.",
  },
  settings: {
    title: "Settings",
    sub: "Manage your preferences and account security.",
  },
};

type PageKey = keyof typeof PAGE_META;

const navItems: {
  id: PageKey;
  label: string;
  icon: LucideIcon;
  badge?: number;
}[] = [
  { id: "overview", label: "Overview", icon: LayoutDashboard },
  { id: "messages", label: "Messages", icon: MessageCircle, badge: 3 },
  { id: "notifications", label: "Notifications", icon: Bell, badge: 5 },
  { id: "jobs", label: "My Jobs", icon: Briefcase },
  { id: "favorites", label: "Saved Workers", icon: Heart },
  { id: "calendar", label: "Calendar", icon: Calendar },
  { id: "profile", label: "Profile", icon: User },
  { id: "settings", label: "Settings", icon: Settings },
];

const notifications = [
  {
    id: 1,
    type: "message",
    title: "New message from James Okoro",
    desc: "Sure, I can come by tomorrow at 2 PM.",
    time: "5 min ago",
    unread: true,
  },
  {
    id: 2,
    type: "job",
    title: "Job offer accepted",
    desc: "Maria Santos accepted your plumbing job.",
    time: "1 hour ago",
    unread: true,
  },
  {
    id: 3,
    type: "review",
    title: "Leave a review",
    desc: "How was your experience with David Chen?",
    time: "3 hours ago",
    unread: false,
  },
  {
    id: 4,
    type: "security",
    title: "New login detected",
    desc: "Login from a new device in Springfield.",
    time: "1 day ago",
    unread: false,
  },
];

const recentActivity = [
  {
    id: 1,
    title: "Electrical panel repair",
    worker: "James Okoro",
    status: "In Progress",
    color: "text-amber-600 bg-amber-50",
  },
  {
    id: 2,
    title: "Bathroom pipe fix",
    worker: "Maria Santos",
    status: "Completed",
    color: "text-emerald-600 bg-emerald-50",
  },
  {
    id: 3,
    title: "Deck installation quote",
    worker: "David Chen",
    status: "Pending",
    color: "text-sky-600 bg-sky-50",
  },
];

export default function Dashboard() {
  const [active, setActive] = useState<PageKey>("overview");

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex gap-8">
        {/* Sidebar */}
        <aside className="hidden lg:block w-60 shrink-0">
          <div className="sticky top-24">
            <div className="flex items-center gap-3 mb-6 px-2">
              <img
                src="https://i.pravatar.cc/80?u=me"
                alt="Me"
                className="h-11 w-11 rounded-full object-cover"
              />
              <div className="min-w-0">
                <div className="font-semibold text-sm truncate">
                  Alex Morgan
                </div>
                <div className="text-xs text-muted-foreground">Customer</div>
              </div>
            </div>
            <nav className="space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActive(item.id)}
                  className={cn(
                    "w-full flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors",
                    active === item.id
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground",
                  )}
                >
                  <item.icon className="h-4 w-4" />
                  <span className="flex-1 text-left">{item.label}</span>
                  {item.badge && (
                    <span
                      className={cn(
                        "rounded-full px-2 py-0.5 text-xs font-semibold",
                        active === item.id
                          ? "bg-white/20"
                          : "bg-primary text-primary-foreground",
                      )}
                    >
                      {item.badge}
                    </span>
                  )}
                </button>
              ))}
            </nav>
          </div>
        </aside>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="mb-6">
            <h1 className="font-heading text-2xl sm:text-3xl font-bold">
              {PAGE_META[active]?.title}
            </h1>
            <p className="mt-1 text-muted-foreground">
              {PAGE_META[active]?.sub}
            </p>
          </div>

          {/* Mobile tab bar */}
          <nav className="lg:hidden -mx-4 px-4 mb-5 flex gap-2 overflow-x-auto no-scrollbar pb-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActive(item.id)}
                className={cn(
                  "inline-flex items-center gap-2 shrink-0 rounded-full border px-3.5 py-2 text-xs font-medium transition-colors",
                  active === item.id
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-card text-muted-foreground",
                )}
              >
                <item.icon className="h-3.5 w-3.5" />
                {item.label}
              </button>
            ))}
          </nav>

          {active === "calendar" ? (
            <WorkerCalendar />
          ) : active === "jobs" ? (
            <MyJobsPanel />
          ) : active === "favorites" ? (
            <SavedWorkersPanel />
          ) : active === "messages" ? (
            <MessagesPanel />
          ) : active === "notifications" ? (
            <NotificationsPanel />
          ) : active === "profile" ? (
            <ProfilePanel />
          ) : active === "settings" ? (
            <SettingsPanel />
          ) : (
            <>
              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                {[
                  {
                    label: "Active Jobs",
                    value: 2,
                    icon: Briefcase,
                    color: "text-sky-600 bg-sky-50",
                  },
                  {
                    label: "Completed",
                    value: 14,
                    icon: CheckCircle2,
                    color: "text-emerald-600 bg-emerald-50",
                  },
                  {
                    label: "Messages",
                    value: 3,
                    icon: MessageCircle,
                    color: "text-violet-600 bg-violet-50",
                  },
                  {
                    label: "Saved Workers",
                    value: 8,
                    icon: Heart,
                    color: "text-pink-600 bg-pink-50",
                  },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="rounded-2xl border border-border bg-card p-4"
                  >
                    <span
                      className={cn(
                        "grid h-10 w-10 place-items-center rounded-xl mb-3",
                        s.color,
                      )}
                    >
                      <s.icon className="h-5 w-5" />
                    </span>
                    <div className="font-heading text-2xl font-bold">
                      {s.value}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid lg:grid-cols-3 gap-6">
                {/* Recent activity */}
                <div className="lg:col-span-2 rounded-2xl border border-border bg-card p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="font-heading font-semibold">
                      Recent Activity
                    </h2>
                    <button className="text-xs text-primary hover:underline">
                      View all
                    </button>
                  </div>
                  <div className="space-y-3">
                    {recentActivity.map((a) => (
                      <div
                        key={a.id}
                        className="flex items-center gap-4 rounded-xl border border-border p-3 hover:bg-muted/50 transition-colors"
                      >
                        <div className="grid h-10 w-10 place-items-center rounded-lg bg-muted">
                          <Briefcase className="h-5 w-5 text-muted-foreground" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-medium text-sm truncate">
                            {a.title}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            with {a.worker}
                          </div>
                        </div>
                        <span
                          className={cn(
                            "rounded-full px-2.5 py-1 text-xs font-semibold",
                            a.color,
                          )}
                        >
                          {a.status}
                        </span>
                      </div>
                    ))}
                  </div>
                  <Link
                    to="/workers"
                    className="mt-4 flex items-center justify-center gap-2 rounded-xl border-2 border-dashed border-border py-3 text-sm font-medium text-muted-foreground hover:border-primary hover:text-primary transition-colors"
                  >
                    <Plus className="h-4 w-4" /> Post a new job
                  </Link>
                </div>

                {/* Profile completion */}
                <div className="rounded-2xl border border-border bg-gradient-to-br from-primary/5 to-accent/5 p-6">
                  <h2 className="font-heading font-semibold mb-1">
                    Profile Completion
                  </h2>
                  <div className="flex items-end gap-2">
                    <span className="font-heading text-3xl font-bold text-primary">
                      75%
                    </span>
                    <span className="text-xs text-muted-foreground mb-1.5">
                      complete
                    </span>
                  </div>
                  <div className="mt-3 h-2 rounded-full bg-muted overflow-hidden">
                    <div
                      className="h-full rounded-full bg-primary"
                      style={{ width: "75%" }}
                    />
                  </div>
                  <ul className="mt-4 space-y-2 text-sm">
                    {[
                      "Add profile photo",
                      "Verify your phone",
                      "Set your address",
                    ].map((t, i) => (
                      <li
                        key={t}
                        className={cn(
                          "flex items-center gap-2",
                          i < 2 ? "text-emerald-600" : "text-muted-foreground",
                        )}
                      >
                        <CheckCircle2 className="h-4 w-4" /> {t}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => setActive("profile")}
                    className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:gap-2 transition-all"
                  >
                    Complete profile <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Notifications */}
              <div className="mt-6 rounded-2xl border border-border bg-card p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-heading font-semibold flex items-center gap-2">
                    <Bell className="h-4 w-4" /> Notifications
                  </h2>
                  <button className="text-xs text-primary hover:underline">
                    Mark all read
                  </button>
                </div>
                <div className="space-y-2">
                  {notifications.map((n) => (
                    <div
                      key={n.id}
                      className={cn(
                        "flex items-start gap-3 rounded-xl p-3 transition-colors",
                        n.unread ? "bg-primary/5" : "hover:bg-muted/50",
                      )}
                    >
                      <span
                        className={cn(
                          "mt-0.5 grid h-9 w-9 place-items-center rounded-lg shrink-0",
                          n.type === "message"
                            ? "bg-violet-50 text-violet-600"
                            : n.type === "job"
                              ? "bg-emerald-50 text-emerald-600"
                              : n.type === "review"
                                ? "bg-amber-50 text-amber-600"
                                : "bg-sky-50 text-sky-600",
                        )}
                      >
                        {n.type === "message" ? (
                          <MessageCircle className="h-4 w-4" />
                        ) : n.type === "job" ? (
                          <CheckCircle2 className="h-4 w-4" />
                        ) : n.type === "review" ? (
                          <Star className="h-4 w-4" />
                        ) : (
                          <Bell className="h-4 w-4" />
                        )}
                      </span>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium">{n.title}</div>
                        <div className="text-xs text-muted-foreground">
                          {n.desc}
                        </div>
                      </div>
                      <span className="text-xs text-muted-foreground shrink-0">
                        {n.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick actions */}
              <div className="mt-6 grid sm:grid-cols-3 gap-4">
                {[
                  { label: "Find Workers", icon: Briefcase, to: "/workers" },
                  { label: "Messages", icon: MessageCircle, to: "/chat" },
                  { label: "Settings", icon: Settings, to: "/dashboard" },
                ].map((a) => (
                  <Link
                    key={a.label}
                    to={a.to}
                    className="group flex items-center gap-3 rounded-2xl border border-border bg-card p-4 hover:border-primary hover:shadow-md transition-all"
                  >
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary">
                      <a.icon className="h-5 w-5" />
                    </span>
                    <span className="font-medium text-sm">{a.label}</span>
                    <ChevronRight className="h-4 w-4 text-muted-foreground ml-auto group-hover:text-primary transition-colors" />
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
