import { ArrowRight, Users, Wrench } from "lucide-react";
import { Link } from "react-router-dom";

interface RoleChoiceProps {
  setRole: (role: "worker" | "customer") => void;
}

export default function RoleChoice({ setRole }: RoleChoiceProps) {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-16 gradient-hero">
      <div className="max-w-3xl w-full text-center">
        <h1 className="font-heading text-3xl sm:text-4xl font-bold">
          Join WorkNest
        </h1>
        <p className="mt-3 text-muted-foreground">
          Choose how you'd like to get started.
        </p>
        <div className="mt-10 grid sm:grid-cols-2 gap-5">
          <button
            onClick={() => setRole("worker")}
            className="group text-left rounded-3xl border-2 border-border bg-card p-8 hover:border-primary hover:shadow-xl transition-all"
          >
            <span className="grid h-14 w-14 place-items-center rounded-2xl bg-primary/10 text-primary mb-4">
              <Wrench className="h-7 w-7" />
            </span>
            <h3 className="font-heading text-xl font-semibold">
              I'm a Skilled Worker
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Create a professional profile, showcase your work, and start
              receiving job offers.
            </p>
            <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
              Get started <ArrowRight className="h-4 w-4" />
            </span>
          </button>
          <button
            onClick={() => setRole("customer")}
            className="group text-left rounded-3xl border-2 border-border bg-card p-8 hover:border-primary hover:shadow-xl transition-all"
          >
            <span className="grid h-14 w-14 place-items-center rounded-2xl bg-accent/10 text-accent mb-4">
              <Users className="h-7 w-7" />
            </span>
            <h3 className="font-heading text-xl font-semibold">
              I'm a Customer
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Find and hire trusted local workers for any job, big or small.
            </p>
            <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
              Get started <ArrowRight className="h-4 w-4" />
            </span>
          </button>
        </div>
        <p className="mt-8 text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link
            to="/auth/login"
            className="font-semibold text-primary hover:underline"
          >
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}
