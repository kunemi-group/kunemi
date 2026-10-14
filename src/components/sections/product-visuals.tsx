import Link from 'next/link';
import { productByMark } from '@/data/site-content';

function EcoNode({ mark, position }: { mark: keyof typeof productByMark; position: string }) {
  const product = productByMark[mark];
  return <Link href={product.href} className={`eco-node accent-${mark} ${position}`}>
    <span className="eco-dot" aria-hidden="true" />
    <b>{product.name}</b>
    <small className="mono">{product.action}</small>
  </Link>;
}

export function EcosystemGraphic() {
  return <div className="hero-art" role="group" aria-label="Illustration of Kunemi and its four distinct products">
    <div className="eco-diagram">
      <svg className="eco-lines" viewBox="0 0 520 420" aria-hidden="true" focusable="false">
        <line x1="260" y1="74" x2="260" y2="160" />
        <line x1="260" y1="260" x2="260" y2="346" />
        <line x1="170" y1="210" x2="210" y2="210" />
        <line x1="310" y1="210" x2="350" y2="210" />
      </svg>
      <EcoNode mark="dotrix" position="eco-top" />
      <EcoNode mark="commerce" position="eco-left" />
      <div className="eco-hub"><span className="mono">Kunemi</span></div>
      <EcoNode mark="shopflow" position="eco-right" />
      <EcoNode mark="kumove" position="eco-bottom" />
    </div>
  </div>;
}

export function DotrixMock() {
  return <div className="feature-art"><div className="ui-window">
    <div className="ui-top"><span className="ui-brand">dotrix <span className="ui-brand-note">· Fieldnotes</span></span><span className="mono">PROJECT SPACE</span></div>
    <div className="ui-body"><aside className="ui-sidebar"><b>Project</b>Overview<br />Tasks<br />Knowledge<br />Agents<br />Activity</aside>
      <div className="ui-content"><div className="ui-title">Build with context</div><div className="ui-columns"><div className="ui-box">TASK<strong>Map the data model</strong></div><div className="ui-box">AGENT<strong>Research partner</strong></div><div className="ui-box">CONTEXT<strong>Project notes</strong></div></div>
        <div className="ui-row"><span>Review requested · schema proposal</span><span className="ui-pill">Needs review</span></div><div className="ui-row"><span>Agent activity · preparing an implementation plan</span><span>•••</span></div><div className="ui-row"><span>Repository context</span><span className="ui-pill">Connected concept</span></div>
      </div>
    </div>
  </div></div>;
}

export function ShopflowMock() {
  return <div className="feature-art"><div className="feed-mock">
    <div className="phone"><div className="phone-head"><span>shopflow</span><span>DISCOVER</span></div><div className="phone-visual">OBJECT / 01</div><div className="phone-caption">Maker's edit<br />Pieces for slower mornings.</div><div className="phone-price">Explore the collection →</div></div>
    <div className="phone small"><div className="phone-head"><span>seller / studio</span><span>•••</span></div><div className="phone-visual">FORM / 02</div><div className="phone-caption">A closer look at the details.</div><div className="phone-price">Start a conversation</div></div>
  </div></div>;
}

export function CommerceMock() {
  return <div className="feature-art commerce-art"><div className="ui-window">
    <div className="ui-top"><span className="ui-brand">KUNEMI COMMERCE</span><span className="mono">OPERATIONS CONCEPT</span></div>
    <div className="ui-body"><aside className="ui-sidebar"><b>Workspace</b>Overview<br />Products<br />Orders<br />Customers<br />Payments<br />Inventory<br />Sales</aside>
      <div className="ui-content"><div className="ui-title">Business operations</div><div className="ui-columns"><div className="ui-box">ORDERS<strong>Orders</strong></div><div className="ui-box">PRODUCTS<strong>Catalogue</strong></div><div className="ui-box">CUSTOMERS<strong>Conversations</strong></div></div>
        <div className="ui-row"><span>Order workflow</span><span className="ui-pill">Operational concept</span></div><div className="ui-row"><span>Payments · Quotes · Invoices</span><span>→</span></div><div className="ui-row"><span>Inventory and delivery coordination</span><span>→</span></div>
      </div>
    </div>
  </div></div>;
}

export function KumoveMock() {
  return <div className="feature-art kumove-art accent-kumove"><div className="ui-window">
    <div className="ui-top"><span className="ui-brand">kumove <span className="ui-brand-note">· NETWORK | MOVEMENT CONCEPTS</span></span><span className="mono">CONCEPT</span></div>
    <div className="ui-body"><aside className="ui-sidebar"><b>Network</b>Nodes<br />Active Routes<br />Couriers<br />Collection Points<br />Proof of Delivery</aside>
      <div className="ui-content"><div className="ui-title">Route overview</div>
        <div className="metric-pills"><span className="metric-pill"><small className="mono">Origin</small>LAG-101233 <em>Verified</em></span><span className="metric-pill"><small className="mono">Hub</small>Local Point #04</span><span className="metric-pill"><small className="mono">Status</small><span className="metric-status"><i className="status-dot" />In Transit</span></span></div>
        <div className="ui-row"><span>Postcode routing · 3 drops batched</span><span className="ui-pill">Active route</span></div>
        <div className="ui-row"><span>Collection point handoff · QR verified</span><span>•••</span></div>
        <div className="ui-row"><span>Delivery evidence · Geotag &amp; timestamp captured</span><span className="ui-pill">Connected concept</span></div>
      </div>
    </div>
  </div></div>;
}
