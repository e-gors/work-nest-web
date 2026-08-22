import { MapPin, BadgeCheck, Wrench } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import type { WorkersProps } from "@/types";
import RatingStars from "./RatingStars";

interface WorkerCardProps {
  worker: WorkersProps;
  className?: string | null;
}
export default function WorkerCard({ worker, className }: WorkerCardProps) {
  return (
    <Link
      to={`/workers/${worker.id}`}
      className={cn(
        "group block rounded-2xl bg-card border border-border/70 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300",
        className,
      )}
    >
      <div className="relative h-32 overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
        {worker.cover_url ? (
          <img
            src={worker.cover_url}
            alt=""
            className="h-full w-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="h-full w-full bg-gradient-to-br from-primary/15 via-primary/5 to-accent/15" />
        )}
        {worker.available && (
          <span className="absolute top-3 right-3 inline-flex items-center gap-1 rounded-full bg-emerald-500 px-2.5 py-1 text-[11px] font-semibold text-white shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />{" "}
            Available
          </span>
        )}
      </div>
      <div className="p-4 -mt-8 relative">
        <img
          src={worker.avatar_url || `https://i.pravatar.cc/120?u=${worker.id}`}
          alt={worker.full_name}
          className="h-14 w-14 rounded-full object-cover ring-4 ring-card shadow-md"
        />
        <div className="mt-3 flex items-start justify-between gap-2">
          <div className="min-w-0">
            <div className="flex items-center gap-1">
              <h3 className="font-heading font-semibold text-foreground truncate">
                {worker.full_name}
              </h3>
              {worker.verified && (
                <BadgeCheck className="h-4 w-4 text-primary shrink-0" />
              )}
            </div>
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              <Wrench className="h-3.5 w-3.5" /> {worker.profession}
            </p>
          </div>
        </div>
        <div className="mt-2 flex items-center justify-between">
          <RatingStars
            rating={worker.rating || 0}
            count={worker.review_count || 0}
            showValue
            size={14}
          />
          <span className="text-sm font-semibold text-foreground">
            ${worker.hourly_rate}
            <span className="text-xs font-normal text-muted-foreground">
              /hr
            </span>
          </span>
        </div>
        <div className="mt-3 flex items-center gap-1 text-xs text-muted-foreground">
          <MapPin className="h-3.5 w-3.5" />{" "}
          {worker.distance_km != null
            ? `${worker.distance_km} km away`
            : worker.address}
        </div>
      </div>
    </Link>
  );
}
