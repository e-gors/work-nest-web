import { useState } from "react";
import { Briefcase, Clock, DollarSign, Search } from "lucide-react";
import { cn } from "@/lib/utils";

type JobStatus = "In Progress" | "Completed" | "Pending" | "Scheduled";

interface Job {
  id: number;
  title: string;
  worker: string;
  category: string;
  date: string;
  time: string;
  amount: number;
  status: JobStatus;
}

type JobFilter = "All" | JobStatus;

const JOBS = [
  {
    id: 1,
    title: "Electrical panel repair",
    worker: "James Okoro",
    category: "Electrician",
    date: "Oct 28, 2026",
    time: "10:00 AM",
    amount: 220,
    status: "In Progress",
  },
  {
    id: 2,
    title: "Bathroom pipe fix",
    worker: "Maria Santos",
    category: "Plumber",
    date: "Oct 24, 2026",
    time: "2:00 PM",
    amount: 140,
    status: "Completed",
  },
  {
    id: 3,
    title: "Deck installation quote",
    worker: "David Chen",
    category: "Carpenter",
    date: "Oct 30, 2026",
    time: "9:00 AM",
    amount: 0,
    status: "Pending",
  },
  {
    id: 4,
    title: "Interior repaint (living room)",
    worker: "Aisha Patel",
    category: "Painter",
    date: "Nov 2, 2026",
    time: "8:30 AM",
    amount: 480,
    status: "Scheduled",
  },
  {
    id: 5,
    title: "Light fixture installation",
    worker: "James Okoro",
    category: "Electrician",
    date: "Oct 18, 2026",
    time: "1:00 PM",
    amount: 90,
    status: "Completed",
  },
] as Job[];

const STATUS: Record<JobStatus, string> = {
  "In Progress": "text-amber-600 bg-amber-50",
  Completed: "text-emerald-600 bg-emerald-50",
  Pending: "text-sky-600 bg-sky-50",
  Scheduled: "text-violet-600 bg-violet-50",
};

const FILTERS: JobFilter[] = [
  "All",
  "In Progress",
  "Completed",
  "Pending",
  "Scheduled",
];

export default function MyJobsPanel() {
  const [filter, setFilter] = useState("All");
  const [query, setQuery] = useState("");

  const jobs = JOBS.filter((j) => {
    if (filter !== "All" && j.status !== filter) return false;
    if (
      query &&
      !j.title.toLowerCase().includes(query.toLowerCase()) &&
      !j.worker.toLowerCase().includes(query.toLowerCase())
    )
      return false;
    return true;
  });

  return (
    <div>
      <div className="flex flex-col sm:flex-row gap-3 mb-5">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search jobs or workers..."
            className="w-full rounded-xl border border-border bg-card pl-10 pr-4 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>
        <div className="flex gap-2 flex-wrap">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={cn(
                "rounded-lg border px-3 py-2 text-xs font-medium transition-colors",
                filter === f
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border hover:bg-muted",
              )}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {jobs.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-border py-16 text-center">
          <Briefcase className="h-9 w-9 text-muted-foreground/40 mx-auto mb-3" />
          <p className="text-sm text-muted-foreground">
            No jobs match your filters.
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {jobs.map((j) => (
            <div
              key={j.id}
              className="rounded-2xl border border-border bg-card p-4 sm:p-5 hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary shrink-0">
                  <Briefcase className="h-5 w-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-heading font-semibold text-sm">
                      {j.title}
                    </h3>
                    <span
                      className={cn(
                        "rounded-full px-2.5 py-0.5 text-[11px] font-semibold",
                        STATUS[j.status],
                      )}
                    >
                      {j.status}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    with {j.worker} · {j.category}
                  </p>
                </div>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    {j.date} · {j.time}
                  </span>
                  {j.amount > 0 && (
                    <span className="flex items-center gap-1 font-semibold text-foreground">
                      <DollarSign className="h-3.5 w-3.5" />
                      {j.amount}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
