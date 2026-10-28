import { Link } from "react-router-dom";
import { Wallet, ArrowUpRight, CreditCard, Download } from "lucide-react";
import PageHero from "@/components/PageHero";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import type { ValueType } from "recharts/types/component/DefaultTooltipContent";
import { useScrollToTop } from "@/hooks/useScrollToTop";

const WEEKLY = [
  { week: "Sep 22", amount: 780 },
  { week: "Sep 29", amount: 940 },
  { week: "Oct 6", amount: 1120 },
  { week: "Oct 13", amount: 860 },
  { week: "Oct 20", amount: 1180 },
  { week: "Oct 27", amount: 1240 },
];

const PAYOUTS = [
  {
    id: "PO-4821",
    date: "Oct 26, 2026",
    job: "Bathroom pipe fix",
    amount: 133,
  },
  {
    id: "PO-4802",
    date: "Oct 19, 2026",
    job: "Light fixture installation",
    amount: 85.5,
  },
  { id: "PO-4788", date: "Oct 12, 2026", job: "Panel inspection", amount: 190 },
  { id: "PO-4771", date: "Oct 5, 2026", job: "Wiring repair", amount: 247 },
];

export default function Earnings() {
  useScrollToTop();
  return (
    <div>
      <PageHero
        eyebrow="Earnings"
        title="Every payout, tracked and on time"
        subtitle="Escrow is released automatically once a customer confirms completion, and payouts land in your bank every Monday."
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            {
              label: "Available balance",
              value: "$1,240.00",
              icon: Wallet,
              accent: true,
            },
            { label: "In escrow", value: "$420.00", icon: CreditCard },
            { label: "Paid this year", value: "$38,905", icon: ArrowUpRight },
          ].map((c) => (
            <div
              key={c.label}
              className={`rounded-3xl border p-6 ${c.accent ? "border-primary/20 bg-primary/5" : "border-border bg-card"}`}
            >
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-card text-primary border border-border">
                <c.icon className="h-4 w-4" />
              </span>
              <div className="mt-3 font-heading text-2xl font-bold">
                {c.value}
              </div>
              <div className="text-xs text-muted-foreground">{c.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-8 grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 rounded-3xl border border-border bg-card p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-heading font-semibold">Last 6 weeks</h2>
              <span className="text-xs text-muted-foreground">
                Paid work only
              </span>
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={WEEKLY}>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="hsl(var(--border))"
                    vertical={false}
                  />
                  <XAxis
                    dataKey="week"
                    tick={{ fontSize: 11 }}
                    stroke="hsl(var(--muted-foreground))"
                  />
                  <YAxis
                    tick={{ fontSize: 11 }}
                    stroke="hsl(var(--muted-foreground))"
                    width={44}
                  />
                  <Tooltip
                    formatter={(v: ValueType | undefined) => [
                      `$${v}`,
                      "Earned",
                    ]}
                    contentStyle={{
                      borderRadius: 12,
                      border: "1px solid hsl(var(--border))",
                      fontSize: 12,
                    }}
                  />
                  <Bar
                    dataKey="amount"
                    fill="hsl(var(--primary))"
                    radius={[6, 6, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-card p-6">
            <h2 className="font-heading font-semibold">Payout method</h2>
            <div className="mt-4 rounded-xl border border-border p-4">
              <div className="text-sm font-medium">
                Bank account ending 4821
              </div>
              <div className="text-xs text-muted-foreground mt-0.5">
                Weekly · every Monday
              </div>
            </div>
            <button className="mt-4 w-full rounded-xl border border-border py-2.5 text-sm font-medium hover:bg-muted transition-colors">
              Change payout account
            </button>
            <p className="mt-4 text-xs text-muted-foreground leading-relaxed">
              A 5% platform fee is deducted from each completed job. Escrow
              holds are visible in your balance until released.
            </p>
          </div>
        </div>

        <div className="mt-8 rounded-3xl border border-border bg-card p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-heading font-semibold">Recent payouts</h2>
            <Link
              to="/worker-hub"
              className="text-xs text-primary hover:underline"
            >
              Back to hub
            </Link>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-xs text-muted-foreground border-b border-border">
                  <th className="pb-3 font-medium">Reference</th>
                  <th className="pb-3 font-medium">Date</th>
                  <th className="pb-3 font-medium">Job</th>
                  <th className="pb-3 font-medium text-right">Amount</th>
                  <th className="pb-3" />
                </tr>
              </thead>
              <tbody>
                {PAYOUTS.map((p) => (
                  <tr
                    key={p.id}
                    className="border-b border-border last:border-0"
                  >
                    <td className="py-3 font-mono text-xs">{p.id}</td>
                    <td className="py-3 text-muted-foreground">{p.date}</td>
                    <td className="py-3">{p.job}</td>
                    <td className="py-3 text-right font-semibold">
                      ${p.amount.toFixed(2)}
                    </td>
                    <td className="py-3 text-right">
                      <button className="inline-flex items-center gap-1 text-xs text-primary hover:underline">
                        <Download className="h-3.5 w-3.5" /> Receipt
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
