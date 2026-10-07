import type { ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Shell } from '@/components/layout/site-shell';
import { Closing } from '@/components/sections/home-sections';
import { CommerceMock, DotrixMock, KumoveMap, ShopflowMock } from '@/components/sections/product-visuals';
import { useSeo } from '@/hooks/use-seo';
import { products, productDetails } from '@/data/site-content';

export function ProductDetail({ id }: { id: string }) {
  const detail = productDetails[id];
  const product = products.find((p) => p.mark === id);
  useSeo(detail.title, detail.description);
  let visual: ReactNode = <DotrixMock />;
  if (id === 'shopflow') visual = <ShopflowMock />;
  if (id === 'commerce') visual = <CommerceMock />;
  if (id === 'kumove') visual = <KumoveMap />;
  return <Shell><main>
    <section className="page-hero pt-section-compact pb-section-tight"><div className="container">
      <p className="eyebrow mono">{detail.accent} <span className="building"><i className="status-dot" />Building</span></p>
      <h1>{detail.headline}</h1><p className="page-subtitle">{detail.body}</p>
    </div></section>
    <section className="page-body pb-section"><div className="container">
      <div className="feature-row"><div><div className="product-detail-art">{visual}</div></div>
        <div className="feature-copy"><p className="section-kicker mono">A KUNEMI PRODUCT</p><h2>{product?.name}</h2><p>{detail.body}</p><div className="feature-words">{detail.phrase}</div>
          <div className="detail-stats">{detail.points.map((point, index) => <div className="detail-stat" key={point}><strong>0{index + 1} / {point.split(' ').slice(0, 2).join(' ')}</strong><span>{point}</span></div>)}</div>
        </div>
      </div>
      <div className="notice">This product is building. The illustration above is a conceptual representation, not a screenshot of a live product. No commercial availability or launch timing is implied.</div>
    </div></section>
    <section className="dark-section section py-section"><div className="container dark-content"><p className="section-kicker mono">PART OF A BROADER DIRECTION</p><h2 className="section-heading">Focused on its own work. Built within one technology vision.</h2><p className="section-intro">Kunemi’s products address different parts of how modern business works. They are distinct products with a shared company direction; this does not imply that they are technically integrated today.</p><Button asChild variant="outline" size="lg" className="button-on-dark"><Link href="/#products">See the product ecosystem <ArrowRight size={15} /></Link></Button></div></section>
    <Closing />
  </main></Shell>;
}
