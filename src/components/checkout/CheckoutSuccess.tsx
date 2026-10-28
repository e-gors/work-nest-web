import { Link } from "react-router-dom";
import { CheckCircle2, Lock } from "lucide-react";

interface CheckoutSuccessProps {
  worker: {
    full_name: string;
    profession: string;
  };
  total: number;
  reference: string;
  formattedDate: string;
}

export default function CheckoutSuccess({
  worker,
  total,
  reference,
  formattedDate,
}: CheckoutSuccessProps) {
  return (
    <div className="mx-auto max-w-xl rounded-3xl border border-border bg-card p-8 sm:p-12 text-center">
      <span className="grid h-16 w-16 place-items-center rounded-full bg-emerald-50 text-emerald-600 mx-auto">
        <CheckCircle2 className="h-8 w-8" />
      </span>
      <h1 className="mt-5 font-heading text-2xl font-bold">
        Payment authorized
      </h1>
      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
        ${total.toFixed(2)} is held securely in escrow and will be released to{" "}
        {worker.full_name} once you confirm the job is complete.
      </p>

      <div className="mt-6 rounded-2xl border border-border bg-secondary/40 p-4 text-left text-sm space-y-2">
        <div className="flex justify-between gap-4">
          <span className="text-muted-foreground">Booking</span>
          <span className="font-medium">{worker.profession}</span>
        </div>
        <div className="flex justify-between gap-4">
          <span className="text-muted-foreground">Scheduled</span>
          <span className="font-medium">{formattedDate}</span>
        </div>
        <div className="flex justify-between gap-4">
          <span className="text-muted-foreground">Reference</span>
          <span className="font-mono text-xs">{reference}</span>
        </div>
      </div>

      <div className="mt-6 flex flex-col sm:flex-row gap-3">
        <Link
          to="/dashboard"
          className="flex-1 rounded-xl bg-primary py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          View my jobs
        </Link>
        <Link
          to="/workers"
          className="flex-1 rounded-xl border border-border py-3 text-sm font-semibold hover:bg-muted transition-colors"
        >
          Back to workers
        </Link>
      </div>

      <p className="mt-5 flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
        <Lock className="h-3.5 w-3.5" /> Payment encrypted end-to-end
      </p>
    </div>
  );
}
