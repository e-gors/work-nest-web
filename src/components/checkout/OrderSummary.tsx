import { ShieldCheck, Lock } from "lucide-react";

interface OrderSummaryProps {
  worker: {
    full_name: string;
    profession: string;
    avatar_url: string;
    hourly_rate: number;
  };
  hours: number;
  subtotal: number;
  fee: number;
  total: number;
}

export default function OrderSummary({
  worker,
  hours,
  subtotal,
  fee,
  total,
}: OrderSummaryProps) {
  const firstName = worker.full_name.split(" ")[0];
  return (
    <div className="space-y-4">
      <div className="rounded-3xl border border-border bg-card p-6">
        <div className="flex items-center gap-3 pb-4 border-b border-border">
          <img
            src={worker.avatar_url}
            alt={worker.full_name}
            className="h-11 w-11 rounded-full object-cover"
          />
          <div className="min-w-0">
            <div className="font-semibold text-sm truncate">
              {worker.full_name}
            </div>
            <div className="text-xs text-muted-foreground truncate">
              {worker.profession}
            </div>
          </div>
        </div>

        <dl className="mt-4 space-y-2 text-sm">
          <div className="flex justify-between gap-4">
            <dt className="text-muted-foreground">
              ${worker.hourly_rate} × {hours} {hours === 1 ? "hour" : "hours"}
            </dt>
            <dd className="font-medium">${subtotal.toFixed(2)}</dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt className="text-muted-foreground">Service fee (5%)</dt>
            <dd className="font-medium">${fee.toFixed(2)}</dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt className="text-muted-foreground">Booking protection</dt>
            <dd className="font-medium text-emerald-600">Free</dd>
          </div>
        </dl>

        <div className="mt-4 pt-4 border-t border-border flex items-baseline justify-between">
          <span className="font-semibold text-sm">Total due today</span>
          <span className="font-heading text-xl font-bold">
            ${total.toFixed(2)}
          </span>
        </div>
        <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
          Held in escrow — released to {firstName} only after you confirm the
          job is complete.
        </p>
      </div>

      <div className="rounded-2xl border border-border bg-card p-4 space-y-2 text-xs text-muted-foreground">
        <div className="flex items-center gap-2 font-medium text-foreground text-sm">
          <ShieldCheck className="h-4 w-4 text-primary" /> WorkNest Protection
        </div>
        <div className="flex items-center gap-2">
          <Lock className="h-3.5 w-3.5" /> 256-bit TLS encryption on every
          request
        </div>
        <div className="flex items-center gap-2">
          <Lock className="h-3.5 w-3.5" /> PCI-DSS Level 1 certified payments
        </div>
        <div className="flex items-center gap-2">
          <ShieldCheck className="h-3.5 w-3.5" /> Escrow release and dispute
          resolution
        </div>
      </div>
    </div>
  );
}
