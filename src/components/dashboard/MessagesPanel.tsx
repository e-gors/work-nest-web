import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, MessageCircle } from "lucide-react";

const CONVERSATIONS = [
  {
    id: 1,
    name: "James Okoro",
    profession: "Electrician",
    last: "Sure, I can come by tomorrow at 2 PM.",
    time: "5 min",
    unread: 2,
    online: true,
  },
  {
    id: 2,
    name: "Maria Santos",
    profession: "Plumber",
    last: "The parts have arrived, ready when you are.",
    time: "1 hr",
    unread: 1,
    online: true,
  },
  {
    id: 3,
    name: "David Chen",
    profession: "Carpenter",
    last: "Sending the revised quote now.",
    time: "3 hr",
    unread: 0,
    online: false,
  },
  {
    id: 4,
    name: "Aisha Patel",
    profession: "Painter",
    last: "Thanks! Looking forward to it.",
    time: "1 day",
    unread: 0,
    online: false,
  },
];

export default function MessagesPanel() {
  const [query, setQuery] = useState("");
  const convos = CONVERSATIONS.filter((c) =>
    c.name.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <div className="rounded-2xl border border-border bg-card overflow-hidden">
      <div className="p-4 border-b border-border">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search conversations..."
            className="w-full rounded-xl border border-border bg-background pl-10 pr-4 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>
      </div>
      <div className="divide-y divide-border">
        {convos.length === 0 ? (
          <div className="py-16 text-center">
            <MessageCircle className="h-9 w-9 text-muted-foreground/40 mx-auto mb-3" />
            <p className="text-sm text-muted-foreground">
              No conversations found.
            </p>
          </div>
        ) : (
          convos.map((c) => (
            <Link
              key={c.id}
              to="/chat"
              className="flex items-center gap-3 p-4 hover:bg-muted/50 transition-colors"
            >
              <div className="relative shrink-0">
                <img
                  src={`https://i.pravatar.cc/80?u=${c.id}`}
                  alt={c.name}
                  className="h-11 w-11 rounded-full object-cover"
                />
                {c.online && (
                  <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-emerald-500 ring-2 ring-card" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <span className="font-medium text-sm truncate">{c.name}</span>
                  <span className="text-[11px] text-muted-foreground shrink-0">
                    {c.time}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground truncate">
                  {c.last}
                </p>
              </div>
              {c.unread > 0 && (
                <span className="grid h-5 min-w-5 place-items-center rounded-full bg-primary text-primary-foreground text-[11px] font-semibold px-1.5">
                  {c.unread}
                </span>
              )}
            </Link>
          ))
        )}
      </div>
    </div>
  );
}
