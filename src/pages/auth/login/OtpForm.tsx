import { ShieldCheck } from "lucide-react";

interface OtpFormProps {
  otp: string[];
  handleOtpChange: (i: number, val: string) => void;
  setShowOtp: (show: boolean) => void;
}

export default function OtpForm({
  otp,
  handleOtpChange,
  setShowOtp,
}: OtpFormProps) {
  return (
    <div>
      <span className="grid h-14 w-14 place-items-center rounded-2xl bg-primary/10 text-primary mb-5">
        <ShieldCheck className="h-7 w-7" />
      </span>
      <h1 className="font-heading text-3xl font-bold">
        Two-factor authentication
      </h1>
      <p className="mt-2 text-muted-foreground">
        Enter the 6-digit code sent to your phone to complete login.
      </p>

      <div className="mt-8 flex gap-2 justify-between">
        {otp.map((digit, i) => (
          <input
            key={i}
            id={`otp-${i}`}
            value={digit}
            onChange={(e) => handleOtpChange(i, e.target.value)}
            maxLength={1}
            className="h-14 w-12 rounded-xl border border-border bg-card text-center text-xl font-bold outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        ))}
      </div>

      <button className="mt-8 w-full rounded-xl bg-primary py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors">
        Verify & Log in
      </button>
      <div className="mt-4 flex items-center justify-between text-sm">
        <button
          onClick={() => setShowOtp(false)}
          className="text-muted-foreground hover:text-foreground"
        >
          ← Back
        </button>
        <button className="text-primary hover:underline">Resend code</button>
      </div>
    </div>
  );
}
