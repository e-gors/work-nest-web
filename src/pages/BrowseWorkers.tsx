import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SlidersHorizontal, MapPin, X, Search } from "lucide-react";
import WorkerCard from "@/components/WorkerCard";
import { CATEGORIES } from "@/lib/categories";
import { WORKERS } from "@/lib/workers";
import { cn } from "@/lib/utils";
import type { WorkersProps } from "@/types";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 260, damping: 24 },
  },
};

const SORT_OPTIONS = [
  { id: "rating", label: "Top Rated" },
  { id: "distance", label: "Nearest" },
  { id: "price_low", label: "Price: Low to High" },
  { id: "price_high", label: "Price: High to Low" },
];

const RADII = [1, 5, 10, 20, 50];

export default function BrowseWorkers() {
  const [query, setQuery] = useState("");
  const [activeCats, setActiveCats] = useState<string[]>([]);
  const [radius, setRadius] = useState(20);
  const [minRating, setMinRating] = useState(0);
  const [maxPrice, setMaxPrice] = useState(100);
  const [availableOnly, setAvailableOnly] = useState(false);
  const [sortBy, setSortBy] = useState("rating");
  const [showFilters, setShowFilters] = useState(false);

  const toggleCat = (id: string) =>
    setActiveCats((prev: any) =>
      prev.includes(id) ? prev.filter((c: any) => c !== id) : [...prev, id],
    );

  const filtered = useMemo(() => {
    let result = WORKERS.filter((w: WorkersProps) => {
      if (
        query &&
        !w.full_name.toLowerCase().includes(query.toLowerCase()) &&
        !w.profession.toLowerCase().includes(query.toLowerCase())
      )
        return false;
      if (activeCats.length && !activeCats.includes(w.category)) return false;
      if (w.distance_km > radius) return false;
      if ((w.rating || 0) < minRating) return false;
      if (w.hourly_rate > maxPrice) return false;
      if (availableOnly && !w.available) return false;
      return true;
    });
    if (sortBy === "rating")
      result = [...result].sort((a, b) => b.rating - a.rating);
    if (sortBy === "distance")
      result = [...result].sort((a, b) => a.distance_km - b.distance_km);
    if (sortBy === "price_low")
      result = [...result].sort((a, b) => a.hourly_rate - b.hourly_rate);
    if (sortBy === "price_high")
      result = [...result].sort((a, b) => b.hourly_rate - a.hourly_rate);
    return result;
  }, [query, activeCats, radius, minRating, maxPrice, availableOnly, sortBy]);

  const activeFilterCount =
    activeCats.length + (availableOnly ? 1 : 0) + (minRating > 0 ? 1 : 0);

  const FilterPanel = () => (
    <div className="space-y-6">
      <div>
        <h4 className="font-heading font-semibold text-sm mb-3">Category</h4>
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.slice(0, 8).map((cat) => (
            <button
              key={cat.id}
              onClick={() => toggleCat(cat.id)}
              className={cn(
                "inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium transition-colors",
                activeCats.includes(cat.id)
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-border hover:bg-muted",
              )}
            >
              <cat.icon className="h-3.5 w-3.5" /> {cat.label}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h4 className="font-heading font-semibold text-sm mb-3">Distance</h4>
        <div className="flex flex-wrap gap-2">
          {RADII.map((r) => (
            <button
              key={r}
              onClick={() => setRadius(r)}
              className={cn(
                "rounded-lg border px-3 py-1.5 text-xs font-medium transition-colors",
                radius === r
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border hover:bg-muted",
              )}
            >
              {r} km
            </button>
          ))}
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-3">
          <h4 className="font-heading font-semibold text-sm">Minimum Rating</h4>
          <span className="text-xs text-muted-foreground">
            {minRating > 0 ? `${minRating}★+` : "Any"}
          </span>
        </div>
        <div className="flex gap-2">
          {[0, 3, 4, 4.5].map((r) => (
            <button
              key={r}
              onClick={() => setMinRating(r)}
              className={cn(
                "flex-1 rounded-lg border py-1.5 text-xs font-medium transition-colors",
                minRating === r
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border hover:bg-muted",
              )}
            >
              {r === 0 ? "Any" : `${r}★`}
            </button>
          ))}
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-3">
          <h4 className="font-heading font-semibold text-sm">
            Max Hourly Rate
          </h4>
          <span className="text-xs font-semibold text-primary">
            ${maxPrice}
          </span>
        </div>
        <input
          type="range"
          min={20}
          max={100}
          step={5}
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
          className="w-full accent-primary"
        />
      </div>

      <label className="flex items-center justify-between cursor-pointer">
        <span className="text-sm font-medium">Available now</span>
        <button
          onClick={() => setAvailableOnly(!availableOnly)}
          className={cn(
            "relative h-6 w-11 rounded-full transition-colors",
            availableOnly ? "bg-primary" : "bg-muted-foreground/30",
          )}
        >
          <span
            className={cn(
              "absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform",
              availableOnly ? "left-0.5 translate-x-5" : "left-0.5",
            )}
          />
        </button>
      </label>
    </div>
  );

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      <motion.div
        className="mb-6"
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <nav className="text-xs text-muted-foreground mb-2">
          <a href="/" className="hover:text-primary">
            Home
          </a>{" "}
          / Workers
        </nav>
        <h1 className="font-heading text-3xl font-bold">Browse Workers</h1>
        <p className="mt-1 text-muted-foreground">
          Find skilled professionals near you.
        </p>
      </motion.div>

      <div className="flex gap-8">
        {/* Sidebar filters */}
        <aside className="hidden lg:block w-72 shrink-0">
          <motion.div
            className="sticky top-24 rounded-2xl border border-border bg-card p-5"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <div className="flex items-center justify-between mb-5">
              <h3 className="font-heading font-semibold flex items-center gap-2">
                <SlidersHorizontal className="h-4 w-4" /> Filters
              </h3>
              {activeFilterCount > 0 && (
                <button
                  onClick={() => {
                    setActiveCats([]);
                    setAvailableOnly(false);
                    setMinRating(0);
                  }}
                  className="text-xs text-primary hover:underline"
                >
                  Clear all
                </button>
              )}
            </div>
            <FilterPanel />
          </motion.div>
        </aside>

        {/* Results */}
        <div className="flex-1 min-w-0">
          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by name or profession..."
                className="w-full rounded-xl border border-border bg-card pl-10 pr-4 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setShowFilters(true)}
                className="lg:hidden inline-flex items-center gap-2 rounded-xl border border-border px-4 py-2.5 text-sm font-medium"
              >
                <SlidersHorizontal className="h-4 w-4" /> Filters{" "}
                {activeFilterCount > 0 && (
                  <span className="bg-primary text-primary-foreground rounded-full h-5 w-5 grid place-items-center text-xs">
                    {activeFilterCount}
                  </span>
                )}
              </button>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="rounded-xl border border-border bg-card px-4 py-2.5 text-sm font-medium outline-none focus:border-primary cursor-pointer"
              >
                {SORT_OPTIONS.map((o) => (
                  <option key={o.id} value={o.id}>
                    {o.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <motion.p
            className="text-sm text-muted-foreground mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
          >
            {filtered.length} workers found
          </motion.p>

          <AnimatePresence mode="wait">
            {filtered.length === 0 ? (
              <motion.div
                key="empty"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="rounded-2xl border border-dashed border-border py-20 text-center"
              >
                <MapPin className="h-10 w-10 text-muted-foreground/40 mx-auto mb-3" />
                <h3 className="font-heading font-semibold">No workers found</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Try adjusting your filters or search radius.
                </p>
              </motion.div>
            ) : (
              <motion.div
                key="grid"
                variants={containerVariants}
                initial="hidden"
                animate="show"
                className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5"
              >
                <AnimatePresence mode="popLayout">
                  {filtered.map((w) => (
                    <motion.div key={w.id} variants={cardVariants} layout>
                      <WorkerCard worker={w} />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Mobile filter drawer */}
      <AnimatePresence>
        {showFilters && (
          <div className="lg:hidden fixed inset-0 z-50 flex">
            <motion.div
              className="absolute inset-0 bg-black/40"
              onClick={() => setShowFilters(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <motion.div
              className="relative ml-auto w-80 max-w-[85%] bg-card h-full overflow-y-auto p-5 shadow-2xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 32 }}
            >
              <div className="flex items-center justify-between mb-5">
                <h3 className="font-heading font-semibold">Filters</h3>
                <button onClick={() => setShowFilters(false)}>
                  <X className="h-5 w-5" />
                </button>
              </div>
              <FilterPanel />
              <button
                onClick={() => setShowFilters(false)}
                className="mt-6 w-full rounded-xl bg-primary py-3 text-sm font-semibold text-primary-foreground"
              >
                Show {filtered.length} results
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
