import { useState } from "react";
import { Menu, X, Wrench } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link, NavLink } from "react-router-dom";

const navLinks = [
  { label: "Browse Workers", to: "/workers" },
  { label: "How it Works", to: "/about" },
  { label: "Help Center", to: "/help" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full glass-card border-b">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 font-heading font-extrabold text-lg"
          >
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary text-primary-foreground">
              <Wrench className="h-5 w-5" />
            </span>
            <span>
              Work<span className="text-primary">Nest</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  cn(
                    "px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                    isActive
                      ? "text-primary bg-primary/5"
                      : "text-foreground/70 hover:text-foreground hover:bg-muted",
                  )
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <Link
              to="/login"
              className="px-4 py-2 text-sm font-semibold text-foreground hover:text-primary transition-colors"
            >
              Log in
            </Link>
            <Link
              to="/register"
              className="rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors shadow-sm"
            >
              Sign up
            </Link>
          </div>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-muted"
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t bg-card">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="block px-3 py-2.5 rounded-lg text-sm font-medium hover:bg-muted"
              >
                {l.label}
              </Link>
            ))}
            <div className="pt-2 flex gap-2">
              <Link
                to="/login"
                onClick={() => setOpen(false)}
                className="flex-1 text-center px-4 py-2.5 rounded-xl border border-border text-sm font-semibold"
              >
                Log in
              </Link>
              <Link
                to="/register"
                onClick={() => setOpen(false)}
                className="flex-1 text-center px-4 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-semibold"
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
