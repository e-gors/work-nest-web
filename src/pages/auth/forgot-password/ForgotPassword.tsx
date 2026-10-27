import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, ArrowLeft, Loader2 } from "lucide-react";

import Label from "@/components/ui/Label";
import CustomInput from "@/components/ui/CustomInput";
import CustomButton from "@/components/ui/CustomButton";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    try {
      // TODO: Replace this with your actual password reset API call.
      console.log("Sending password reset link to:", email);

      setSent(true);
    } catch (error) {
      console.error("Error occurred while sending password reset link:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary mb-4">
            <Mail
              className="w-7 h-7 text-primary-foreground"
              aria-hidden="true"
            />
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            Reset password
          </h1>

          <p className="text-muted-foreground mt-2">
            We'll send you a link to reset it
          </p>
        </div>

        {/* Form */}
        <div className="bg-card rounded-2xl shadow-sm border border-border p-8">
          {sent ? (
            <p className="text-sm text-foreground text-center">
              If an account exists with that email, you'll receive a password
              reset link shortly.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email address</Label>

                <div className="relative">
                  <Mail
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground"
                    aria-hidden="true"
                  />

                  <CustomInput
                    id="email"
                    type="email"
                    autoComplete="email"
                    autoFocus
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setEmail(e.target.value)
                    }
                    className="pl-10 h-12"
                    required
                    disabled={loading}
                  />
                </div>
              </div>

              <CustomButton
                variant="default"
                size="lg"
                type="submit"
                className="w-full h-12 font-medium"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Send reset link"
                )}
              </CustomButton>
            </form>
          )}
        </div>

        {/* Footer */}
        <p className="text-center text-sm text-muted-foreground mt-6">
          <Link
            to="/auth/login"
            className="text-primary font-medium hover:underline"
          >
            <ArrowLeft className="w-3 h-3 inline mr-1" />
            Back to log in
          </Link>
        </p>
      </div>
    </div>
  );
}
