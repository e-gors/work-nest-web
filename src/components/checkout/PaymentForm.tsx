import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Lock, CreditCard, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface PaymentFormProps {
  onPay: (details: { name: string; last4: string }) => void;
  processing: boolean;
  total: number;
}

const inputCls =
  "w-full rounded-xl border border-border bg-background px-3 py-2.5 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20";
const labelCls = "block text-xs font-medium text-muted-foreground mb-1.5";

export default function PaymentForm({
  onPay,
  processing,
  total,
}: PaymentFormProps) {
  const [card, setCard] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [name, setName] = useState("");
  const [agree, setAgree] = useState(false);
  const [touched, setTouched] = useState(false);

  const digits = card.replace(/\D/g, "");
  const cvcDigits = cvc.replace(/\D/g, "");
  const valid =
    digits.length >= 15 &&
    /^\d{2}\/\d{2}$/.test(expiry) &&
    cvcDigits.length >= 3 &&
    name.trim().length > 2 &&
    agree;

  const handleCard = (value: string) => {
    const d = value.replace(/\D/g, "").slice(0, 16);
    setCard(d.replace(/(.{4})/g, "$1 ").trim());
  };

  const handleExpiry = (value: string) => {
    const d = value.replace(/\D/g, "").slice(0, 4);
    setExpiry(d.length > 2 ? `${d.slice(0, 2)}/${d.slice(2)}` : d);
  };

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTouched(true);
    if (!valid || processing) return;
    onPay({ name: name.trim(), last4: digits.slice(-4) });
  };

  return (
    <form
      onSubmit={submit}
      className="rounded-3xl border border-border bg-card p-6"
    >
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-heading font-semibold">Payment method</h2>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-semibold text-emerald-600">
          <Lock className="h-3 w-3" /> Secure
        </span>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div className="sm:col-span-2">
          <label className={labelCls} htmlFor="card">
            Card number
          </label>
          <div className="relative">
            <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              id="card"
              inputMode="numeric"
              autoComplete="cc-number"
              value={card}
              onChange={(e) => handleCard(e.target.value)}
              placeholder="4242 4242 4242 4242"
              className={`${inputCls} pl-10 font-mono tracking-wide`}
            />
          </div>
        </div>
        <div>
          <label className={labelCls} htmlFor="expiry">
            Expiry
          </label>
          <input
            id="expiry"
            inputMode="numeric"
            autoComplete="cc-exp"
            value={expiry}
            onChange={(e) => handleExpiry(e.target.value)}
            placeholder="MM/YY"
            className={`${inputCls} font-mono`}
          />
        </div>
        <div>
          <label className={labelCls} htmlFor="cvc">
            CVC
          </label>
          <input
            id="cvc"
            inputMode="numeric"
            autoComplete="cc-csc"
            value={cvc}
            onChange={(e) =>
              setCvc(e.target.value.replace(/\D/g, "").slice(0, 4))
            }
            placeholder="123"
            className={`${inputCls} font-mono`}
          />
        </div>
        <div className="sm:col-span-2">
          <label className={labelCls} htmlFor="name">
            Name on card
          </label>
          <input
            id="name"
            autoComplete="cc-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Alex Morgan"
            className={inputCls}
          />
        </div>
      </div>

      <label className="mt-4 flex items-start gap-2.5 cursor-pointer text-xs text-muted-foreground leading-relaxed">
        <input
          type="checkbox"
          checked={agree}
          onChange={(e) => setAgree(e.target.checked)}
          className="mt-0.5 h-4 w-4 rounded border-border accent-primary"
        />
        <span>
          I agree to the{" "}
          <Link
            to="/terms"
            className="text-primary underline underline-offset-2"
          >
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link
            to="/privacy"
            className="text-primary underline underline-offset-2"
          >
            Privacy Policy
          </Link>
          , and authorize a hold of ${total.toFixed(2)} in escrow.
        </span>
      </label>

      {touched && !valid && (
        <p className="mt-3 text-xs font-medium text-destructive">
          Please complete the card details and accept the terms to continue.
        </p>
      )}

      <button
        type="submit"
        disabled={processing}
        className={cn(
          "mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-3.5 text-sm font-semibold text-primary-foreground transition-colors",
          processing ? "opacity-70 cursor-wait" : "hover:bg-primary/90",
        )}
      >
        {processing ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> Authorizing payment…
          </>
        ) : (
          <>
            <Lock className="h-4 w-4" /> Pay ${total.toFixed(2)} securely
          </>
        )}
      </button>

      <p className="mt-3 text-center text-[11px] text-muted-foreground">
        Card details are encrypted and tokenized. WorkNest never stores your
        full card number.
      </p>
    </form>
  );
}
