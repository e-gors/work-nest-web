import { Search, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

interface SearchBarProps {
  className?: string;
  compact?: boolean;
}

export default function SearchBar({
  className = "",
  compact = false,
}: SearchBarProps) {
  return (
    <div
      className={cn(
        "flex flex-col sm:flex-row gap-2 p-2 rounded-2xl bg-card border border-border shadow-lg shadow-primary/5",
        className,
      )}
    >
      <div className="flex-1 flex items-center gap-2 px-3">
        <Search className="h-5 w-5 text-muted-foreground shrink-0" />
        <input
          type="text"
          placeholder="What service do you need?"
          className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
        />
      </div>
      <div className="hidden sm:block w-px bg-border" />
      <div className="flex-1 flex items-center gap-2 px-3">
        <MapPin className="h-5 w-5 text-muted-foreground shrink-0" />
        <input
          type="text"
          placeholder="Enter your location"
          className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
        />
      </div>
      <button className="rounded-xl bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors shadow-sm">
        Search
      </button>
    </div>
  );
}
