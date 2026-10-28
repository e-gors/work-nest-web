import { useState } from "react";
import { Bell, MessageCircle, CheckCircle2, Star, Shield } from "lucide-react";
import { cn } from "@/lib/utils";

const INITIAL = [
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
    unread: true,
  },
  {
    id: 4,
    type: "security",
    title: "New login detected",
    desc: "Login from a new device in Springfield.",
    time: "1 day ago",
    unread: false,
  },
  {
    id: 5,
    type: "job",
    title: "Job completed",
    desc: "James Okoro marked the panel repair complete.",
    time: "2 days ago",
    unread: false,
  },
  {
    id: 6,
    type: "message",
    title: "New message from Aisha Patel",
    desc: "Thanks! Looking forward to it.",
    time: "3 days ago",
    unread: false,
  },
];

const iconFor = (type: string) =>
  type === "message" ? (
    <MessageCircle className="h-4 w-4" />
  ) : type === "job" ? (
    <CheckCircle2 className="h-4 w-4" />
  ) : type === "review" ? (
    <Star className="h-4 w-4" />
  ) : (
    <Shield className="h-4 w-4" />
  );

const colorFor = (type: string) =>
  type === "message"
    ? "bg-violet-50 text-violet-600"
    : type === "job"
      ? "bg-emerald-50 text-emerald-600"
      : type === "review"
        ? "bg-amber-50 text-amber-600"
        : "bg-sky-50 text-sky-600";

export default function NotificationsPanel() {
  const [items, setItems] = useState(INITIAL);

  const markAllRead = () =>
    setItems((prev) => prev.map((n) => ({ ...n, unread: false })));
  const toggleRead = (id: number) =>
    setItems((prev) =>
      prev.map((n) => (n.id === id ? { ...n, unread: !n.unread } : n)),
    );
  const unreadCount = items.filter((n) => n.unread).length;

  return (
    <div className="rounded-2xl border border-border bg-card p-5">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-heading font-semibold flex items-center gap-2">
          <Bell className="h-4 w-4" /> All Notifications
          {unreadCount > 0 && (
            <span className="rounded-full bg-primary text-primary-foreground text-[11px] font-semibold px-2 py-0.5">
              {unreadCount} new
            </span>
          )}
        </h2>
        {unreadCount > 0 && (
          <button
            onClick={markAllRead}
            className="text-xs text-primary hover:underline"
          >
            Mark all read
          </button>
        )}
      </div>
      <div className="space-y-2">
        {items.map((n) => (
          <button
            key={n.id}
            onClick={() => toggleRead(n.id)}
            className={cn(
              "w-full text-left flex items-start gap-3 rounded-xl p-3 transition-colors",
              n.unread ? "bg-primary/5" : "hover:bg-muted/50",
            )}
          >
            <span
              className={cn(
                "mt-0.5 grid h-9 w-9 place-items-center rounded-lg shrink-0",
                colorFor(n.type),
              )}
            >
              {iconFor(n.type)}
            </span>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium flex items-center gap-2">
                {n.title}
                {n.unread && (
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                )}
              </div>
              <div className="text-xs text-muted-foreground">{n.desc}</div>
            </div>
            <span className="text-xs text-muted-foreground shrink-0">
              {n.time}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
