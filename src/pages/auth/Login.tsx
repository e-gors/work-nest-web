import { useState } from "react";
import { Link } from "react-router-dom";
import LoginForm from "./LoginForm";
import OtpForm from "./OtpForm";

export default function Login() {
  const [showOtp, setShowOtp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);

  const handleOtpChange = (i: number, val: string) => {
    if (!/^\d?$/.test(val)) return;
    const next = [...otp];
    next[i] = val;
    setOtp(next);
    if (val && i < 5) document.getElementById(`otp-${i + 1}`)?.focus();
  };

  return (
    <div className="min-h-[85vh] grid lg:grid-cols-2">
      {/* Left visual */}
      <div className="hidden lg:flex flex-col justify-between p-12 gradient-hero relative overflow-hidden">
        <Link
          to="/"
          className="flex items-center gap-2 font-heading font-extrabold text-lg"
        >
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary text-primary-foreground">
            W
          </span>
          Work<span className="text-primary">Nest</span>
        </Link>
        <div>
          <h2 className="font-heading text-4xl font-extrabold leading-tight max-w-md text-balance">
            Welcome back to your trusted local network
          </h2>
          <p className="mt-4 text-muted-foreground max-w-md">
            Log in to manage your jobs, messages, and connections.
          </p>
          <div className="mt-8 flex items-center gap-6 text-sm">
            <div>
              <div className="font-heading text-2xl font-bold text-primary">
                12K+
              </div>
              <div className="text-muted-foreground">Workers</div>
            </div>
            <div>
              <div className="font-heading text-2xl font-bold text-primary">
                48K+
              </div>
              <div className="text-muted-foreground">Jobs Done</div>
            </div>
            <div>
              <div className="font-heading text-2xl font-bold text-primary">
                4.9★
              </div>
              <div className="text-muted-foreground">Rating</div>
            </div>
          </div>
        </div>
        <p className="text-xs text-muted-foreground">
          © 2026 WorkNest. All rights reserved.
        </p>
      </div>

      {/* Right form */}
      <div className="flex items-center justify-center p-6 sm:p-12">
        <div className="w-full max-w-md">
          {!showOtp ? (
            <LoginForm
              showPassword={showPassword}
              setShowPassword={setShowPassword}
              setShowOtp={setShowOtp}
            />
          ) : (
            <OtpForm
              otp={otp}
              handleOtpChange={handleOtpChange}
              setShowOtp={setShowOtp}
            />
          )}
        </div>
      </div>
    </div>
  );
}
