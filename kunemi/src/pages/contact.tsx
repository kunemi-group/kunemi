import { Card } from '@/components/ui/card';
import { Shell } from '@/components/layout/site-shell';
import { useSeo } from '@/hooks/use-seo';

export function Contact() {
  useSeo('Contact Kunemi Technology | Kunemi', 'Contact Kunemi Technology Limited. No contact channel is published here yet.');
  return <Shell><main>
    <section className="page-hero pt-section-compact pb-section-tight"><div className="container"><p className="eyebrow mono">CONTACT</p><h1>Start with a conversation.</h1><p className="page-subtitle">Interested in what Kunemi is building? We welcome thoughtful enquiries about our products and company.</p></div></section>
    <section className="page-body pb-section"><div className="container"><Card className="contact-panel rounded-none border-border bg-secondary p-6 shadow-none md:p-8"><p className="section-kicker mono">A NOTE ON GETTING IN TOUCH</p><h2 className="section-heading contact-heading">We don’t have a public contact channel to share here yet.</h2><p>We have not published an email address, phone number or contact form destination. Rather than invite you to submit a message that cannot be delivered, we’ll update this page when a real contact route is available.</p><div className="honest-state"><strong>Contact channel not available</strong><br />No message has been sent. Please check back for an official way to reach Kunemi Technology Limited.</div></Card></div></section>
  </main></Shell>;
}
