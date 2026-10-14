import { Fragment, type ReactNode } from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { ProductMark } from '@/components/products/product-mark';
import { WaitlistForm } from '@/components/sections/waitlist-form';
import { products, productByMark } from '@/data/site-content';

export function ProductCard({ product }: { product: typeof products[number] }) {
  return <Link href={product.href} className={`product-link accent-${product.mark}`} data-testid={`card-product-${product.mark}`}><Card className="product-card p-0 rounded-none border-0 bg-transparent shadow-none">
    <ProductMark type={product.mark} className="product-mark" />
    <span className="product-category mono">{product.category}</span>
    <h3>{product.name}</h3>
    <p>{product.desc}</p>
    <div className="product-bottom"><span className="building" title={`Current milestone: ${product.milestone}`}><i className="status-dot animate-pulse" />Building · <span className="milestone">{product.milestone}</span></span><span className="arrow-link">Explore <ArrowUpRight size={14} /></span></div>
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

export function Feature({ reverse = false, accent, kicker, heading, copy, phrase, href, cta, visual }: { reverse?: boolean; accent: string; kicker: string; heading: string; copy: string; phrase: string; href: string; cta: string; visual: ReactNode }) {
  return <section className={`feature py-section accent-${accent}`}><div className={`container feature-row${reverse ? ' reverse' : ''}`}>
    <div className="feature-copy"><p className="section-kicker mono">{kicker}</p><h2>{heading}</h2><p>{copy}</p><div className="feature-words">{phrase}</div><Link href={href} className="arrow-link">{cta} <ArrowRight size={15} /></Link></div>
    <div className="feature-art-wrap">{visual}</div>
  </div></section>;
}

type JourneyNode = { kind: 'connector'; label: string } | { kind: 'product'; mark: string };

const journey: JourneyNode[] = [
  { kind: 'connector', label: 'Customer' },
  { kind: 'product', mark: 'shopflow' },
  { kind: 'connector', label: 'Order' },
  { kind: 'product', mark: 'commerce' },
  { kind: 'connector', label: 'Fulfilment' },
  { kind: 'product', mark: 'kumove' },
];

export function CommerceJourney() {
  const dotrix = productByMark.dotrix;
  return <section className="section py-section commerce-journey">
    <div className="container">
      <p className="section-kicker mono">THE WIDER COMMERCE JOURNEY</p>
      <h2 className="section-heading">Commerce doesn’t stop at checkout.</h2>
      <p className="section-intro">Modern commerce is a connected system. Kunemi is building distinct products around discovery, selling, business operations, fulfilment and movement.</p>
      <div className="pill-badge-row"><span className="pill-badge"><span className="status-dot" /><strong>Modular Architecture</strong>Products operate independently, designed for future interoperability</span></div>
      <div className="pipeline">{journey.map((node, i) => <Fragment key={node.kind === 'connector' ? node.label : node.mark}>
        {i > 0 && <span className="pipeline-arrow" aria-hidden="true">→</span>}
        {node.kind === 'connector'
          ? <span className="pipeline-pill">{node.label}</span>
          : <Link href={productByMark[node.mark].href} className={`pipeline-product accent-${node.mark}`}>
              <span className="pipeline-badge mono">{productByMark[node.mark].category}</span>
              <strong>{productByMark[node.mark].name}</strong>
              <span className="pipeline-short">{productByMark[node.mark].short}</span>
              <span className="arrow-link">Explore <ArrowUpRight size={14} /></span>
            </Link>}
      </Fragment>)}</div>
      <Link href={dotrix.href} className="foundation-bar accent-dotrix">
        <ProductMark type="dotrix" className="foundation-mark" />
        <span className="foundation-copy"><span className="mono">Foundation · Engineering workspace</span><strong>Dotrix is the engineering workspace that builds and powers the ecosystem.</strong></span>
        <span className="arrow-link">Explore Dotrix <ArrowRight size={15} /></span>
      </Link>
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

export function ThesisSection() {
  return <section className="section py-section dark-section thesis-section"><div className="container thesis-grid">
    <div><p className="section-kicker mono">OUR POINT OF VIEW</p><h2 className="thesis-heading">Built from Africa. Designed for the world.</h2></div>
    <div className="thesis-copy"><p>Kunemi is building technology from Africa with a global outlook — creating software that can solve local problems while meeting the expectations of modern businesses anywhere.</p><p>We are a product-led technology company, not a software agency. Our focus is on building enduring products and the digital infrastructure behind them.</p><Link href="/about" className="arrow-link">More about Kunemi <ArrowRight size={15} /></Link></div>
  </div></section>;
}

export function Closing() {
  return <section className="closing py-section-compact"><div className="container closing-inner">
    <div><h2>We’re building what comes next.</h2><p>Request early access to the products you care about. Pick one or more, then leave an email address.</p></div>
    <WaitlistForm />
  </div></section>;
}
