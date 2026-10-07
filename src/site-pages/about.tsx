'use client';

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Shell } from '@/components/layout/site-shell';
import { Closing, IntelligenceSection, Principles } from '@/components/sections/home-sections';

export function About() {
  return <Shell><main>
    <section className="page-hero page-hero--about"><div className="container"><p className="eyebrow mono">ABOUT KUNEMI TECHNOLOGY</p><h1>We build technology for the way <em>business works.</em></h1><p className="page-subtitle">Kunemi Technology Limited is a product-led technology company building intelligent software, AI systems, commerce platforms and digital infrastructure.</p></div></section>
    <section className="section py-section pt-section-tight"><div className="container about-grid"><div><p className="section-kicker mono">PRODUCT-LED BY DESIGN</p><h2 className="section-heading">Products, not projects.</h2></div><div className="about-copy"><p>Kunemi exists to build focused products around the systems people and businesses rely on. We are not a traditional software agency; our work is centred on our own evolving product ecosystem.</p><p>That ecosystem spans software development, customer-facing commerce, business operations and the movement of goods. Each product has a clear role, connected by a common technology vision.</p><p>AI is part of how we think about useful software: helping products understand context, coordinate work and support better decisions.</p></div></div></section>
    <IntelligenceSection />
    <section className="about-band py-section-compact"><div className="container about-grid"><div><p className="section-kicker mono">OUR ORIGIN & OUTLOOK</p><h2 className="section-heading">Built from Africa. Designed for the world.</h2></div><div className="about-copy"><p>We build from Africa with a global outlook. The products we imagine should respond to real contexts while meeting the expectations of modern businesses wherever they operate.</p><p>Kunemi’s ambition is grounded in building useful technology over time — not in claims about scale, reach or capabilities that have not yet been earned.</p><Link href="/#products" className="arrow-link">Explore the products <ArrowRight size={15} /></Link></div></div></section>
    <Principles /><Closing />
  </main></Shell>;
}
