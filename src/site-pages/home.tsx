'use client';

import { ArrowRight, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Shell } from '@/components/layout/site-shell';
import { ThesisSection, CommerceJourney, Closing, Feature, IntelligenceSection, Principles, ProductOverview } from '@/components/sections/home-sections';
import { EcosystemGraphic, CommerceMock, DotrixMock, KumoveMock, ShopflowMock } from '@/components/sections/product-visuals';

export function Home() {
  return <Shell>
    <main>
      <section className="hero py-section-hero"><div className="container hero-grid">
        <div className="reveal"><p className="eyebrow mono">KUNEMI TECHNOLOGY</p><h1>Building intelligent software for the way <em>business works.</em></h1><p className="hero-copy">Kunemi builds AI-powered software, commerce platforms and digital infrastructure that help people and businesses build, operate and move.</p>
          <div className="hero-actions"><Button asChild size="lg"><a href="#products">Explore our products <ArrowRight size={15} /></a></Button><Button asChild variant="outline" size="lg"><Link href="/about">About Kunemi <ArrowUpRight size={14} /></Link></Button></div>
          <div className="hero-note"><span className="status-dot" /> Independent products. A shared technology vision.</div>
        </div><EcosystemGraphic />
      </div></section>
      <ProductOverview />
      <Feature accent="dotrix" kicker="DOTRIX · AI / DEVELOPER TOOLS" heading="Build software with an AI team beside you." copy="Dotrix brings agents, knowledge, tasks and tools into one coordinated environment — helping developers and teams move from idea to software with more context and control." phrase="Plan. Build. Review. Ship." href="/products/dotrix" cta="Explore Dotrix" visual={<DotrixMock />} />
      <Feature accent="shopflow" reverse kicker="SHOPFLOW · SOCIAL COMMERCE" heading="Commerce built around discovery." copy="Shopflow brings product discovery, social interaction and shopping into one customer-facing experience — helping people discover products and buy directly from businesses." phrase="Discover. Connect. Shop." href="/products/shopflow" cta="Explore Shopflow" visual={<ShopflowMock />} />
      <Feature accent="commerce" kicker="KUNEMI COMMERCE · OPERATIONS" heading="The operating system behind modern commerce." copy="Kunemi Commerce gives businesses the tools to manage the systems behind selling — from products and orders to payments, customers, sales and operations." phrase="Sell. Operate. Understand. Grow." href="/products/commerce" cta="Explore Kunemi Commerce" visual={<CommerceMock />} />
      <Feature accent="kumove" reverse kicker="KUMOVE · MOVEMENT INFRASTRUCTURE" heading="Making movement part of the software." copy="Kumove connects businesses, customers, couriers, drivers and local collection points into a postcode-aware movement and delivery network." phrase="Address first. Sort intelligently. Move with evidence." href="/products/kumove" cta="Explore Kumove" visual={<KumoveMock />} />
      <CommerceJourney />
      <IntelligenceSection />
      <Principles />
      <ThesisSection />
      <Closing />
    </main>
  </Shell>;
}
