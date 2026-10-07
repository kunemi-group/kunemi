import type { ReactNode } from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ProductMark } from '@/components/products/product-mark';
import { products } from '@/data/site-content';

export function ProductCard({ product }: { product: typeof products[number] }) {
  return <Link href={product.href} className="product-link" data-testid={`card-product-${product.mark}`}><Card className="product-card p-0 rounded-none border-0 bg-transparent shadow-none">
    <ProductMark type={product.mark} className="product-mark" />
    <span className="product-category mono">{product.category}</span>
    <h3>{product.name}</h3>
    <p>{product.desc}</p>
    <div className="product-bottom"><span className="building"><i className="status-dot" />Building</span><span className="arrow-link">Explore <ArrowUpRight size={14} /></span></div>
  </Card></Link>;
}

export function ProductOverview() {
  return <section className="section py-section products-section" id="products">
    <div className="container">
      <div className="section-top"><p className="section-kicker mono">A PRODUCT COMPANY</p><h2 className="section-heading">One company. A growing ecosystem of products.</h2><p className="section-intro">From building software to discovering products, running commerce and moving goods, Kunemi builds focused technology around the systems businesses depend on.</p></div>
      <div className="product-grid">{products.map((p) => <ProductCard key={p.href} product={p} />)}</div>
    </div>
  </section>;
}

export function FlowSection() {
  const stages = [['01', 'Dotrix', 'Build software'], ['02', 'Shopflow', 'Discover & buy'], ['03', 'Kunemi Commerce', 'Sell & operate'], ['04', 'Kumove', 'Move goods']];
  return <section className="flow-section py-section">
    <div className="container">
      <p className="section-kicker mono">ONE TECHNOLOGY VISION</p>
      <h2 className="section-heading">Different products. One connected system.</h2>
      <p className="section-intro">Kunemi builds products for different parts of the modern business journey — from creating software to discovering products, managing commerce and moving goods.</p>
      <div className="flow-strip">{stages.map(([n, title, sub], i) => <div className="flow-item" key={title}><span className="flow-index mono">{n}</span>{i < 3 && <ArrowRight className="flow-arrow" size={15} />}<b>{title}</b><span>{sub}</span></div>)}</div>
      <div className="notice">A shared direction, not a claim of live integration. Each product is distinct and currently building.</div>
    </div>
  </section>;
}

export function Feature({ reverse = false, kicker, heading, copy, phrase, href, cta, visual }: { reverse?: boolean; kicker: string; heading: string; copy: string; phrase: string; href: string; cta: string; visual: ReactNode }) {
  return <section className="feature py-section"><div className={`container feature-row${reverse ? ' reverse' : ''}`}>
    <div className="feature-copy"><p className="section-kicker mono">{kicker}</p><h2>{heading}</h2><p>{copy}</p><div className="feature-words">{phrase}</div><Link href={href} className="arrow-link">{cta} <ArrowRight size={15} /></Link></div>
    <div className="feature-art-wrap">{visual}</div>
  </div></section>;
}

export function CommerceJourney() {
  const steps = ['Customer', 'Shopflow', 'Order', 'Commerce', 'Fulfilment', 'Kumove'];
  return <section className="section py-section commerce-journey">
    <div className="container"><p className="section-kicker mono">THE WIDER COMMERCE JOURNEY</p><h2 className="section-heading">Commerce doesn’t stop at checkout.</h2><p className="section-intro">Modern commerce is a connected system. Kunemi is building distinct products around discovery, selling, business operations, fulfilment and movement.</p>
      <div className="flow-strip flow-strip-compact">{steps.map((step, i) => <div className="flow-item" key={step}><span className="flow-index mono">0{i + 1}</span><b>{step}</b><span>{step === 'Shopflow' ? 'Customer discovery' : step === 'Commerce' ? 'Business operations' : step === 'Kumove' ? 'Movement network' : 'A part of the journey'}</span></div>)}</div>
      <div className="notice">This is an ecosystem direction, not a statement that these products currently share technical integrations.</div>
    </div>
  </section>;
}

export function IntelligenceSection() {
  const layers = ['People', 'Kunemi products', 'AI agents', 'Knowledge', 'Data', 'Infrastructure'];
  return <section className="section py-section dark-section"><div className="container dark-content">
    <p className="section-kicker mono">A TECHNOLOGY FOUNDATION</p><h2 className="section-heading">Intelligence across the stack.</h2>
    <p className="section-intro">AI is not a feature we add at the end. It is becoming part of how Kunemi products understand information, automate work and help people make decisions.</p>
    <div className="architecture">{layers.map((layer, i) => <div className="arch-item" key={layer}><small className="mono">LAYER 0{i + 1}</small><div className="arch-indicator" /><strong>{layer}</strong></div>)}</div>
  </div></section>;
}

export function Principles() {
  const principles = [['Product first', 'We build products around real problems, not features looking for a use case.'], ['Intelligence by default', 'AI should make software more useful, adaptive and capable.'], ['Connected systems', 'The best software connects people, data, workflows and infrastructure.'], ['Built for reality', 'Technology should work in the environments where people and businesses operate.']];
  return <section className="section py-section"><div className="container"><p className="section-kicker mono">HOW WE THINK</p><h2 className="section-heading">Principles for building things that matter.</h2><div className="principles">{principles.map(([title, copy]) => <div className="principle" key={title}><h3>{title}</h3><p>{copy}</p></div>)}</div></div></section>;
}

export function Closing() {
  return <section className="closing py-section-compact"><div className="container closing-inner"><h2>We’re building what comes next.</h2><div><p>Explore the products we’re building or get in touch with Kunemi Technology.</p><div className="hero-actions"><Button asChild size="lg"><Link href="/#products">Explore products <ArrowRight size={15} /></Link></Button><Button asChild variant="outline" size="lg"><Link href="/contact">Get in touch <ArrowUpRight size={14} /></Link></Button></div></div></div></section>;
}
