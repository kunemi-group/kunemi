'use client';

import { ArrowUpRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Shell } from '@/components/layout/site-shell';

export function Contact() {
  return <Shell><main>
    <section className="page-hero pt-section-compact pb-section-tight"><div className="container"><p className="eyebrow mono">CONTACT</p><h1>Start with a conversation.</h1><p className="page-subtitle">Interested in what Kunemi is building? We welcome thoughtful enquiries about our products and company.</p></div></section>
    <section className="page-body pb-section"><div className="container"><Card className="contact-panel rounded-none border-border bg-secondary p-6 shadow-none md:p-8"><p className="section-kicker mono">GENERAL ENQUIRIES</p><h2 className="section-heading contact-heading">Write to us at hello@kunemi.com.</h2><p>For product questions, partnerships and press, email our team directly.</p><a className="arrow-link contact-email" href="mailto:hello@kunemi.com">hello@kunemi.com <ArrowUpRight size={14} /></a></Card></div></section>
  </main></Shell>;
}
