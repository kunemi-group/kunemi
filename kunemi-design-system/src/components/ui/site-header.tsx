import { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { ActionLink } from './action-link';
import { Mark } from './mark';

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const close = () => setMenuOpen(false);

  return (
    <header className="relative z-20 flex h-[78px] items-center border-b border-border/80 bg-background/90 backdrop-blur-[14px] max-[650px]:h-[68px]">
      <div className="mx-auto flex w-[calc(100%-56px)] max-w-[1180px] items-center justify-between max-[650px]:w-[calc(100%-36px)]">
        <a
          href="/"
          className="inline-flex items-center gap-[10px] text-[21px] font-extrabold tracking-[-0.055em]"
          aria-label="Kunemi home"
          onClick={close}
        >
          <Mark type="kunemi" className="h-[29px] w-[29px] text-primary" />
          kunemi
        </a>

        <button
          type="button"
          className="hidden rounded-sm bg-transparent p-2 text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring max-[650px]:inline-flex"
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={menuOpen}
          aria-controls="kunemi-primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        <nav
          id="kunemi-primary-navigation"
          aria-label="Main navigation"
          className={`flex items-center gap-[34px] text-xs font-bold text-muted-foreground max-[650px]:absolute max-[650px]:left-0 max-[650px]:right-0 max-[650px]:top-[67px] max-[650px]:flex-col max-[650px]:items-stretch max-[650px]:gap-0 max-[650px]:border-b max-[650px]:border-border max-[650px]:bg-background max-[650px]:px-5 max-[650px]:pb-[22px] max-[650px]:pt-4 ${menuOpen ? 'max-[650px]:flex' : 'max-[650px]:hidden'}`}
        >
          <a href="/#products" onClick={close} className="transition-colors hover:text-primary max-[650px]:border-b max-[650px]:border-border/60 max-[650px]:py-[13px]">
            Products
          </a>
          <a href="/about" onClick={close} className="transition-colors hover:text-primary max-[650px]:border-b max-[650px]:border-border/60 max-[650px]:py-[13px]">
            About
          </a>
          <a href="/contact" onClick={close} className="transition-colors hover:text-primary max-[650px]:border-b max-[650px]:border-border/60 max-[650px]:py-[13px]">
            Contact
          </a>
          <ActionLink
            href="/#products"
            className="max-[650px]:mt-3 max-[650px]:justify-center"
            onClick={close}
          >
            Explore products <ArrowUpRight size={14} />
          </ActionLink>
        </nav>
      </div>
    </header>
  );
}
