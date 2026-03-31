import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function Terms() {
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

        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Terms of Service</h1>
        <p className="text-dark/50 font-mono text-sm mb-16">Last updated: March 2025</p>

        <div className="flex flex-col gap-12 text-dark/80 leading-relaxed">

          <section>
            <h2 className="text-xl font-bold text-dark mb-4">Who these terms apply to</h2>
            <p>
              These terms govern the relationship between Intent Consulting ("we", "us") — a sole trader
              operated by Matt Gibson, based in the United Kingdom — and any individual or business ("you",
              "the client") that engages our services.
            </p>
            <p className="mt-3">
              By commissioning work from us, you accept these terms. If you have questions before
              proceeding, contact us at{' '}
              <a href="mailto:matt@intentconsulting.ai" className="text-dark underline underline-offset-4 hover:opacity-70 transition-opacity">
                matt@intentconsulting.ai
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-dark mb-4">Services</h2>
            <p>
              Intent Consulting provides AI strategy and implementation services for small businesses.
              This includes, but is not limited to: workflow analysis, AI tool selection, automation
              setup, and handover and training.
            </p>
            <p className="mt-3">
              The specific scope of work for each engagement is agreed in writing before work begins.
              Any work outside that agreed scope requires a separate written agreement.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-dark mb-4">Payment</h2>
            <p>
              Fees are agreed in writing before work starts. Unless otherwise specified:
            </p>
            <ul className="mt-4 flex flex-col gap-2 list-disc list-inside text-dark/70">
              <li>A deposit may be required before work begins</li>
              <li>Invoices are payable within 14 days of issue</li>
              <li>Late payment may result in work being paused until outstanding balances are settled</li>
            </ul>
            <p className="mt-4">
              All prices are in GBP and exclusive of VAT where applicable.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-dark mb-4">Intellectual property</h2>
            <p>
              Upon receipt of full payment for a project, you own the deliverables we produce for you.
              This includes any custom workflows, automations, scripts, or documentation created specifically
              for your business.
            </p>
            <p className="mt-3">
              We retain the right to use general knowledge, frameworks, and methodologies developed during
              our work — but we will not reuse or share anything specific to your business without your
              written permission.
            </p>
            <p className="mt-3">
              Any third-party tools or services incorporated into your project remain subject to their
              own licensing terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-dark mb-4">Confidentiality</h2>
            <p>
              We treat all information you share with us — about your business, your processes, your
              clients, and your finances — as confidential. We will not disclose it to third parties
              without your consent, except where required by law.
            </p>
            <p className="mt-3">
              If you require a formal NDA before sharing sensitive information, we are happy to agree
              one prior to engagement.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-dark mb-4">Limitation of liability</h2>
            <p>
              We take care to deliver accurate, reliable work. However, AI tools and automations
              interact with systems and data we do not fully control, and no software is entirely
              without risk.
            </p>
            <p className="mt-3">
              To the fullest extent permitted by law, our total liability to you for any claim arising
              from our services is limited to the fees paid for the specific engagement in question.
              We are not liable for indirect losses, lost profits, or consequential damages.
            </p>
            <p className="mt-3">
              Nothing in these terms limits liability for death, personal injury, or fraud caused by
              our negligence.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-dark mb-4">Cancellation</h2>
            <p>
              Either party may end an engagement with reasonable written notice. If you cancel a
              project mid-way, you are responsible for paying for work completed to date. We will
              invoice only for hours or milestones delivered.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-dark mb-4">Governing law</h2>
            <p>
              These terms are governed by the laws of England and Wales. Any disputes will be subject
              to the exclusive jurisdiction of the courts of England and Wales.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-dark mb-4">Changes to these terms</h2>
            <p>
              We may update these terms from time to time. The date at the top of this page reflects
              when they were last revised. Your continued use of our services after changes constitutes
              acceptance of the updated terms.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
