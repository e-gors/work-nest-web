import LegalSection from "@/components/legal/LegalSection";
import LegalShell from "@/components/legal/LegalShell";
import { Link } from "react-router-dom";

const CATEGORIES = [
  {
    title: "Strictly necessary",
    desc: "Required for the platform to work. They keep you signed in, secure your session, and remember your booking progress. These cannot be switched off.",
  },
  {
    title: "Functional",
    desc: "Remember your preferences such as your saved location, search filters, and display settings so you do not have to set them again.",
  },
  {
    title: "Analytics",
    desc: "Help us understand which pages are used and where people get stuck, so we can improve the experience. Data is aggregated.",
  },
  {
    title: "Marketing",
    desc: "Used to measure the effectiveness of our campaigns and show relevant services. These are only set with your consent.",
  },
];

export default function Cookies() {
  return (
    <LegalShell
      title="Cookie Policy"
      updated="October 27, 2026"
      intro="Cookies are small text files stored on your device. This page explains which cookies WorkNest uses and how you can control them."
    >
      <LegalSection title="1. What are cookies?">
        <p>
          Cookies let a website remember information between visits — for
          example, that you are signed in or which filters you applied. Similar
          technologies such as local storage are used for the same purposes and
          are covered by this policy.
        </p>
      </LegalSection>

      <LegalSection title="2. Categories we use">
        <div className="not-prose grid gap-3">
          {CATEGORIES.map((c) => (
            <div
              key={c.title}
              className="rounded-xl border border-border bg-background p-4"
            >
              <div className="font-medium text-foreground text-sm">
                {c.title}
              </div>
              <p className="mt-1 text-xs leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </LegalSection>

      <LegalSection title="3. Third-party cookies">
        <p>
          Some cookies are set by services we use, including our payment
          provider (to process payments securely) and our analytics provider.
          These third parties process data under their own privacy policies and
          only for the purposes we have engaged them for.
        </p>
      </LegalSection>

      <LegalSection title="4. Managing cookies">
        <p>
          You can delete or block cookies through your browser settings.
          Blocking strictly necessary cookies may prevent sign-in and checkout
          from working correctly. Most browsers also offer a private or
          incognito mode that discards cookies when you close the window.
        </p>
      </LegalSection>

      <LegalSection title="5. Relationship to our privacy policy">
        <p>
          Information collected through cookies is treated as personal data and
          is covered by our{" "}
          <Link
            to="/privacy"
            className="text-primary underline underline-offset-2"
          >
            Privacy Policy
          </Link>
          .
        </p>
      </LegalSection>

      <LegalSection title="6. Updates">
        <p>
          If we introduce new categories of cookies we will update this page
          and, where required, ask for your consent again.
        </p>
      </LegalSection>
    </LegalShell>
  );
}
