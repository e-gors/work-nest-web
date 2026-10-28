import LegalSection from "@/components/legal/LegalSection";
import LegalShell from "@/components/legal/LegalShell";

export default function Terms() {
  return (
    <LegalShell
      title="Terms of Service"
      updated="October 27, 2026"
      intro="These terms govern your use of WorkNest. By creating an account, booking a professional, or offering services through the platform, you agree to the terms below. Please read them carefully."
    >
      <LegalSection title="1. Acceptance of these terms">
        <p>
          By accessing WorkNest or using any part of our service, you confirm
          that you can form a binding contract and that you accept these terms
          together with our Privacy Policy and Cookie Policy. If you do not
          agree, please do not use the platform.
        </p>
      </LegalSection>

      <LegalSection title="2. Eligibility and accounts">
        <p>
          You must be at least 18 years old to create an account. You are
          responsible for keeping your login credentials secure and for all
          activity that happens under your account.
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            Provide accurate profile, contact, and location information and keep
            it current.
          </li>
          <li>
            One account per person. Accounts may not be sold or transferred.
          </li>
          <li>
            Notify us immediately if you suspect unauthorized access to your
            account.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="3. Bookings and payments">
        <p>
          When you hire a professional, you agree to pay the hourly rate shown
          on their profile plus any applicable service fee disclosed at
          checkout. All payments are processed by our PCI-DSS compliant payment
          partner.
        </p>
        <p>
          Funds are held in escrow from the moment you authorize payment. They
          are released to the professional only after the job is marked complete
          by you, or automatically after the protection window closes. This
          protects both parties if something goes wrong.
        </p>
      </LegalSection>

      <LegalSection title="4. Cancellations and refunds">
        <p>
          You may cancel a booking free of charge up to 24 hours before the
          scheduled start time. Cancellations made with less notice may incur a
          small fee to compensate the professional for reserved time.
        </p>
        <p>
          If a job is not delivered as agreed, you may request a revision or
          open a dispute within 48 hours of completion. Escrow funds are frozen
          while our resolution team reviews the case.
        </p>
      </LegalSection>

      <LegalSection title="5. Professional obligations">
        <p>
          Professionals listed on WorkNest are independent contractors, not
          employees or agents of WorkNest. You are responsible for your own
          taxes, insurance, licenses, and permits.
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            Maintain current licenses and certifications for the services you
            offer.
          </li>
          <li>
            Perform work with reasonable skill, care, and in line with
            applicable local regulations.
          </li>
          <li>
            Honor agreed schedules and communicate promptly about changes.
          </li>
          <li>
            Never solicit payment outside the platform to circumvent escrow
            protection.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="6. Customer obligations">
        <p>
          Provide a safe working environment and accurate information about the
          job, including access requirements, hazards, and any materials already
          on site. Treat professionals with respect and pay for services you
          have requested.
        </p>
      </LegalSection>

      <LegalSection title="7. Reviews and user content">
        <p>
          Reviews must reflect genuine experiences. We may remove content that
          is unlawful, misleading, defamatory, or that manipulates the rating
          system. By posting content you grant us a non-exclusive license to
          display it on the platform.
        </p>
      </LegalSection>

      <LegalSection title="8. Disputes and protection">
        <p>
          Our resolution process is available for every booking. If a dispute
          cannot be resolved between the parties, our team will review the
          evidence and may issue a full or partial refund from escrow. Decisions
          are made in good faith and are final for the purposes of the platform.
        </p>
      </LegalSection>

      <LegalSection title="9. Limitation of liability">
        <p>
          WorkNest is a marketplace that connects customers and independent
          professionals. To the maximum extent permitted by law, we are not
          liable for indirect or consequential losses, or for the acts and
          omissions of professionals. Our liability for any claim is limited to
          the amount of the booking in question.
        </p>
      </LegalSection>

      <LegalSection title="10. Suspension and termination">
        <p>
          We may suspend or terminate accounts that breach these terms, engage
          in fraud, or harm other users. You may close your account at any time
          from your settings; obligations for completed bookings survive
          closure.
        </p>
      </LegalSection>

      <LegalSection title="11. Changes and governing law">
        <p>
          We may update these terms from time to time. Material changes will be
          communicated in advance, and continued use of the platform after
          changes take effect constitutes acceptance. These terms are governed
          by the laws of the jurisdiction where WorkNest is established.
        </p>
      </LegalSection>
    </LegalShell>
  );
}
