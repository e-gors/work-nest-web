import { Link } from "react-router-dom";
import { Wrench } from "lucide-react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const columns = [
  {
    title: "For Customers",
    links: [
      { label: "Browse Workers", to: "/workers" },
      { label: "How it Works", to: "/how-it-works" },
      { label: "Post a Job", to: "/post-job" },
      { label: "Safety", to: "/safety" },
      { label: "Reviews", to: "/reviews" },
    ],
  },
  {
    title: "For Workers",
    links: [
      { label: "Find Work", to: "/find-work" },
      { label: "Create Profile", to: "/create-profile" },
      { label: "Worker Hub", to: "/worker-hub" },
      { label: "Earnings", to: "/earnings" },
      { label: "Resources", to: "/resources" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", to: "/about" },
      { label: "Careers", to: "/careers" },
      { label: "Press", to: "/press" },
      { label: "Blog", to: "/blog" },
      { label: "Contact", to: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", to: "/privacy-policy" },
      { label: "Terms of Service", to: "/terms-of-service" },
      { label: "Cookie Policy", to: "/cookie-policy" },
      { label: "Accessibility", to: "/accessibility" },
    ],
  },
];

const socialLinks = [
  {
    name: "Facebook",
    icon: FaFacebookF,
    href: "#",
  },
  {
    name: "Twitter",
    icon: FaTwitter,
    href: "#",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    href: "#",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedinIn,
    href: "#",
  },
];

export default function Footer() {
  return (
    <footer className="mt-20 border-t bg-card">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-6">
          {/* Brand */}
          <div className="col-span-2">
            <Link
              to="/"
              className="flex items-center gap-2 font-heading text-lg font-extrabold"
            >
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary text-primary-foreground">
                <Wrench className="h-5 w-5" />
              </span>

              <span>
                Work<span className="text-primary">Nest</span>
              </span>
            </Link>

            <p className="mt-3 max-w-xs text-sm text-muted-foreground">
              Connecting you with trusted local skilled workers, right when you
              need them.
            </p>

            {/* Social Links */}
            <div className="mt-4 flex gap-3">
              {socialLinks.map(({ name, icon: Icon, href }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="grid h-9 w-9 place-items-center rounded-lg bg-muted text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Columns */}
          {columns.map((column) => (
            <div key={column.title}>
              <h4 className="mb-3 font-heading text-sm font-semibold">
                {column.title}
              </h4>

              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Footer */}
        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t pt-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © 2026 WorkNest. All rights reserved.
          </p>

          <p className="text-xs text-muted-foreground">
            Made with care for local communities.
          </p>
        </div>
      </div>
    </footer>
  );
}
