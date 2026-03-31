import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function Privacy() {
  return (
    <div className="bg-background min-h-screen text-dark font-sans antialiased">
      <div className="max-w-3xl mx-auto px-6 py-24">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-dark/50 hover:text-dark transition-colors mb-16"
        >
          <ArrowLeft size={16} />
          Back to home
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Privacy Policy</h1>
        <p className="text-dark/50 font-mono text-sm mb-16">Last updated: March 2025</p>

        <div className="flex flex-col gap-12 text-dark/80 leading-relaxed">

          <section>
            <h2 className="text-xl font-bold text-dark mb-4">Who we are</h2>
            <p>
              Intent Consulting is a UK-based AI consultancy operated as a sole trader by Matt Gibson.
              We help small businesses identify and implement AI tools to reduce manual workload.
            </p>
            <p className="mt-3">
              For any data-related enquiries, contact us at{' '}
              <a href="mailto:matt@intentconsulting.ai" className="text-dark underline underline-offset-4 hover:opacity-70 transition-opacity">
                matt@intentconsulting.ai
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-dark mb-4">What data we collect</h2>
            <p>We collect only the information necessary to provide our service:</p>
            <ul className="mt-4 flex flex-col gap-3 list-none pl-0">
              <li className="flex gap-3">
                <span className="text-dark/30 font-mono text-sm mt-1">01</span>
                <span><strong className="text-dark font-semibold">Contact information</strong> — name, email address, and business details you provide when booking a call via Calendly or contacting us directly by email.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-dark/30 font-mono text-sm mt-1">02</span>
                <span><strong className="text-dark font-semibold">Communication records</strong> — emails and messages exchanged during an engagement, retained for the duration of the working relationship.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-dark/30 font-mono text-sm mt-1">03</span>
                <span><strong className="text-dark font-semibold">Business information</strong> — details about your operations that you share during discovery calls or project work. We treat all of this as confidential.</span>
              </li>
            </ul>
            <p className="mt-4">
              We do not purchase data, run advertising campaigns, or collect data beyond what you provide directly.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-dark mb-4">How we use your data</h2>
            <p>Your data is used solely to:</p>
            <ul className="mt-4 flex flex-col gap-2 list-disc list-inside text-dark/70">
              <li>Respond to your enquiries and deliver agreed services</li>
              <li>Schedule and manage calls via Calendly</li>
              <li>Send project updates or follow-up information you have requested</li>
              <li>Meet legal or contractual obligations</li>
            </ul>
            <p className="mt-4">
              We do not sell, rent, or share your personal data with third parties for marketing purposes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-dark mb-4">Third-party services</h2>
            <p>We use a small number of third-party tools to operate:</p>
            <ul className="mt-4 flex flex-col gap-3 list-none pl-0">
              <li className="flex gap-3">
                <span className="text-dark/30 font-mono text-sm mt-1">—</span>
                <span><strong className="text-dark font-semibold">Calendly</strong> — used for scheduling calls. When you book a call, Calendly processes your name and email under their own privacy policy.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-dark/30 font-mono text-sm mt-1">—</span>
                <span><strong className="text-dark font-semibold">Email (Google Workspace)</strong> — inbound and outbound email is handled via Google's infrastructure.</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-dark mb-4">Cookies</h2>
            <p>
              This website uses no tracking cookies, advertising cookies, or analytics cookies.
              We do not run Google Analytics, Facebook Pixel, or any similar tracking tools.
            </p>
            <p className="mt-3">
              Your browser may store standard session data (such as form state) as part of normal browser behaviour.
              No personal data is stored in cookies by us.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-dark mb-4">GDPR and your rights</h2>
            <p>
              We process personal data lawfully under the UK General Data Protection Regulation (UK GDPR)
              and the Data Protection Act 2018. Our lawful basis is typically legitimate interest (to respond
              to enquiries) or contract performance (to deliver agreed services).
            </p>
            <p className="mt-4">You have the right to:</p>
            <ul className="mt-3 flex flex-col gap-2 list-disc list-inside text-dark/70">
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data ("right to be forgotten")</li>
              <li>Object to processing or request restriction of processing</li>
              <li>Lodge a complaint with the Information Commissioner's Office (ICO) at ico.org.uk</li>
            </ul>
            <p className="mt-4">
              To exercise any of these rights, contact us at{' '}
              <a href="mailto:matt@intentconsulting.ai" className="text-dark underline underline-offset-4 hover:opacity-70 transition-opacity">
                matt@intentconsulting.ai
              </a>. We will respond within 30 days.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-dark mb-4">Data retention</h2>
            <p>
              We retain your data for as long as necessary to provide our service and meet legal obligations.
              For enquiries that do not lead to an engagement, we delete contact records within 12 months.
              For active or completed clients, we retain records for six years in line with standard UK
              business record-keeping requirements.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-dark mb-4">Changes to this policy</h2>
            <p>
              We may update this policy from time to time. The date at the top of this page reflects
              when it was last revised. Significant changes will be communicated directly to active clients.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
