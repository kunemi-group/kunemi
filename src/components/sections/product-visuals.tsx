export function EcosystemGraphic() {
  return <div className="hero-art" aria-label="Illustration of Kunemi and its four distinct products">
    <svg className="orbit-svg" viewBox="0 0 540 440" role="img" aria-labelledby="ecosystem-title">
      <title id="ecosystem-title">Kunemi product ecosystem concept</title>
      <circle cx="270" cy="220" r="151" className="orbit-line" />
      <circle cx="270" cy="220" r="105" className="orbit-line" />
      <path d="M270 220 270 69M270 220 421 220M270 220 270 371M270 220 119 220" className="orbit-line-strong" />
      <path d="M195 145 345 295M345 145 195 295" className="orbit-line" />
      <circle cx="270" cy="220" r="54" fill="#e3eee3" stroke="#99b69d" />
      <circle cx="270" cy="220" r="43" fill="#f8faf4" stroke="#cedccc" />
      <text x="270" y="226" textAnchor="middle" className="center-label">Kunemi</text>
      <g transform="translate(216 12)"><rect width="108" height="60" rx="4" className="node-card" /><circle cx="15" cy="17" r="4" fill="#43815a" /><text x="29" y="21" className="node-label">Dotrix</text><text x="15" y="42" className="node-meta">BUILD SOFTWARE</text></g>
      <g transform="translate(398 190)"><rect width="130" height="60" rx="4" className="node-card" /><circle cx="15" cy="17" r="4" fill="#d18b4b" /><text x="29" y="21" className="node-label">Shopflow</text><text x="15" y="42" className="node-meta">DISCOVER &amp; BUY</text></g>
      <g transform="translate(205 368)"><rect width="130" height="60" rx="4" className="node-card" /><circle cx="15" cy="17" r="4" fill="#7696a0" /><text x="29" y="21" className="node-label">Kumove</text><text x="15" y="42" className="node-meta">MOVE GOODS</text></g>
      <g transform="translate(12 190)"><rect width="138" height="60" rx="4" className="node-card" /><circle cx="15" cy="17" r="4" fill="#85789b" /><text x="29" y="21" className="node-label">Commerce</text><text x="15" y="42" className="node-meta">SELL &amp; OPERATE</text></g>
      <circle className="signal" cx="270" cy="69" r="6" fill="#4b9464" /><circle className="signal" cx="421" cy="220" r="5" fill="#d18b4b" /><circle className="signal" cx="270" cy="371" r="5" fill="#7696a0" />
    </svg>
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

export function KumoveMap() {
  return <div className="feature-art route-art">
    <svg className="route-map" viewBox="0 0 540 310" role="img" aria-labelledby="route-title">
      <title id="route-title">Conceptual postcode-aware movement network, not a live map</title>
      <path d="M103 217C145 193 154 113 219 122s71 83 112 63 40-74 108-89" className="route-path" />
      <path d="M102 217c59 20 107 16 136-25 25-35 34-98 87-110" className="route-path" />
      <path d="M220 122c17 39 30 80 70 102 44 24 94 5 142 25" className="route-path" />
      <circle cx="103" cy="217" r="7" fill="#9ac5a3" /><circle cx="219" cy="122" r="6" fill="#9ac5a3" /><circle cx="352" cy="92" r="6" fill="#d7b37e" /><circle cx="331" cy="185" r="6" fill="#9ac5a3" /><circle cx="432" cy="96" r="7" fill="#9ac5a3" /><circle cx="432" cy="249" r="6" fill="#d7b37e" />
      <text x="71" y="246" className="route-label">BUSINESS</text><text x="185" y="103" className="route-label">KUSTOP</text><text x="317" y="72" className="route-label">KUCOURIER</text><text x="304" y="211" className="route-label">HUB</text><text x="405" y="75" className="route-label">KUDRIVER</text><text x="402" y="276" className="route-label">CUSTOMER</text>
      <text x="60" y="35" className="route-label-dim">POSTCODE-LED MOVEMENT · CONCEPT</text><text x="60" y="54" className="route-label-dim">Addresses / collection / routing / hand-off</text>
    </svg>
  </div>;
}
