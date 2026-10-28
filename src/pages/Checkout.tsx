import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { WORKERS } from "@/lib/workers";
import CheckoutSuccess from "@/components/checkout/CheckoutSuccess";
import BookingDetails from "@/components/checkout/BookingDetails";
import PaymentForm from "@/components/checkout/PaymentForm";
import OrderSummary from "@/components/checkout/OrderSummary";
import { useScrollToTop } from "@/hooks/useScrollToTop";

const FEE_RATE = 0.05;

export default function Checkout() {
  useScrollToTop();

  const { id } = useParams();
  const worker = WORKERS.find((w) => w.id === id) || WORKERS[0];

  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [hours, setHours] = useState(2);
  const [address, setAddress] = useState("");
  const [notes, setNotes] = useState("");
  const [processing, setProcessing] = useState(false);
  const [paid, setPaid] = useState(false);
  const [reference] = useState(
    () => `WN-${Math.random().toString(36).slice(2, 8).toUpperCase()}`,
  );

  const subtotal = worker.hourly_rate * hours;
  const fee = Math.round(subtotal * FEE_RATE * 100) / 100;
  const total = Math.round((subtotal + fee) * 100) / 100;
  const formattedDate = new Date(`${date}T12:00:00`).toLocaleDateString(
    undefined,
    {
      weekday: "short",
      month: "short",
      day: "numeric",
    },
  );

  const handlePay = () => {
    setProcessing(true);
    setTimeout(() => {
      setProcessing(false);
      setPaid(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 1400);
  };

  if (paid) {
    return (
      <div className="px-4 sm:px-6 py-12">
        <CheckoutSuccess
          worker={worker}
          total={total}
          reference={reference}
          formattedDate={formattedDate}
        />
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8">
      <Link
        to={`/workers/${worker.id}`}
        className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary mb-4"
      >
        <ChevronLeft className="h-4 w-4" /> Back to profile
      </Link>
      <h1 className="font-heading text-3xl font-bold">Secure checkout</h1>
      <p className="mt-1 text-muted-foreground">
        Your payment is protected by escrow and released only when the job is
        done.
      </p>

      <div className="mt-6 grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <BookingDetails
            date={date}
            setDate={setDate}
            hours={hours}
            setHours={setHours}
            address={address}
            setAddress={setAddress}
            notes={notes}
            setNotes={setNotes}
          />
          <PaymentForm
            onPay={handlePay}
            processing={processing}
            total={total}
          />
        </div>
        <div className="lg:col-span-1">
          <div className="sticky top-24">
            <OrderSummary
              worker={worker}
              hours={hours}
              subtotal={subtotal}
              fee={fee}
              total={total}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
