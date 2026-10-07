import { useState, type ReactNode } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { KunemiWordmark } from '@/components/branding/kunemi-wordmark';
import { products } from '@/data/site-content';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const close = () => setMenuOpen(false);
  return <header className="topbar">
    <div className="container nav-inner">
      <KunemiWordmark onClick={close} />
      <Button variant="ghost" size="icon" className="menu-toggle" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={20} /> : <Menu size={20} />}</Button>
      <nav className={`nav-links${menuOpen ? ' open' : ''}`} aria-label="Main navigation">
        <a href="/#products" onClick={close}>Products</a>
        <Link href="/about" onClick={close}>About</Link>
        <Link href="/contact" onClick={close}>Contact</Link>
        <Button asChild size="sm" className="nav-cta"><Link href="/#products" onClick={close}>Explore products <ArrowUpRight size={14} /></Link></Button>
      </nav>
    </div>
  </header>;
}

export function Footer() {
  return <footer className="footer pt-footer pb-6">
    <div className="container">
      <div className="footer-grid">
        <div><KunemiWordmark /><p className="footer-blurb">Intelligent software for modern business. Kunemi Technology Limited is building products and digital infrastructure for the systems people depend on.</p></div>
        <div><p className="footer-label mono">Products</p><div className="footer-links">{products.map((p) => <Link key={p.href} href={p.href}>{p.name}</Link>)}</div></div>
        <div><p className="footer-label mono">Company</p><div className="footer-links"><Link href="/about">About Kunemi</Link><Link href="/contact">Contact</Link></div></div>
      </div>
      <div className="footer-bottom"><span>© 2026 Kunemi Technology Limited. All rights reserved.</span><span>Built from Africa. Designed for the world.</span></div>
    </div>
  </footer>;
}

export function Shell({ children }: { children: ReactNode }) {
  return <div className="site-shell"><Header />{children}<Footer /></div>;
}
