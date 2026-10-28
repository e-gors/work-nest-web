import { Link } from "react-router-dom";
import LegalShell from "@/components/legal/LegalShell";
import LegalSection from "@/components/legal/LegalSection";
import { useScrollToTop } from "@/hooks/useScrollToTop";

export default function Accessibility() {
  useScrollToTop();
  return (
    <LegalShell
      title="Accessibility Statement"
      updated="October 27, 2026"
      intro="WorkNest is a marketplace for local services, used by people of all abilities. We want everyone to be able to hire, book, and get paid without unnecessary barriers."
    >
      <LegalSection title="1. Our commitment">
        <p>
          We aim to meet the Web Content Accessibility Guidelines (WCAG) 2.2 at
          Level AA across the customer and professional experiences.
          Accessibility is part of our design and review process, not a
          retrofit.
        </p>
      </LegalSection>

      <LegalSection title="2. What we do">
        <ul className="list-disc pl-5 space-y-1">
          <li>
            Semantic HTML landmarks, headings, and lists so screen readers can
            navigate pages.
          </li>
          <li>
            Visible keyboard focus and full keyboard operability for forms,
            menus, and dialogs.
          </li>
          <li>
            Colour combinations chosen to meet contrast requirements for text
            and meaningful icons.
          </li>
          <li>
            Form fields with persistent visible labels and clear, inline error
            messages.
          </li>
          <li>Touch targets sized for comfortable use on mobile devices.</li>
          <li>
            Respect for reduced-motion preferences, with animations minimised
            when requested.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="3. Known limitations">
        <p>
          Some third-party content — such as embedded maps and payment provider
          frames — is outside our direct control and may not fully meet our
          standards. Interactive calendars can also be demanding with older
          screen readers; a text-based booking path is available if you contact
          support.
        </p>
      </LegalSection>

      <LegalSection title="4. Assistive technology">
        <p>
          We test with current versions of VoiceOver, NVDA, and TalkBack
          alongside keyboard-only navigation and browser zoom at 200%. If
          something does not work with your setup, we would like to know.
        </p>
      </LegalSection>

      <LegalSection title="5. Feedback and assistance">
        <p>
          If you encounter a barrier, email or message our support team and
          describe the page and the task you were trying to complete. We aim to
          respond within two business days and can also help you complete a
          booking or profile setup directly over the phone.
        </p>
        <p>
          <Link
            to="/contact"
            className="text-primary underline underline-offset-2"
          >
            Contact the accessibility team
          </Link>
        </p>
      </LegalSection>

      <LegalSection title="6. Review cycle">
        <p>
          This statement is reviewed annually, and after any significant
          redesign of the platform. The most recent review took place in October
          2026.
        </p>
      </LegalSection>
    </LegalShell>
  );
}
