import { Heart } from "lucide-react";
import { WORKERS } from "@/lib/workers";
import WorkerCard from "@/components/WorkerCard";

export default function SavedWorkersPanel() {
  const saved = WORKERS.slice(0, 6);

  return (
    <div>
      {saved.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-border py-16 text-center">
          <Heart className="h-9 w-9 text-muted-foreground/40 mx-auto mb-3" />
          <h3 className="font-heading font-semibold">No saved workers yet</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Tap the heart on any worker to save them here.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
          {saved.map((w) => (
            <WorkerCard key={w.id} worker={w} />
          ))}
        </div>
      )}
    </div>
  );
}
