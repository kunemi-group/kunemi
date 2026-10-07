import { Mark } from './mark';

const products = [
  { name: 'Dotrix', href: '/products/dotrix' },
  { name: 'Shopflow', href: '/products/shopflow' },
  { name: 'Kunemi Commerce', href: '/products/commerce' },
  { name: 'Kumove', href: '/products/kumove' },
];

export function SiteFooter() {
  return (
    <footer className="bg-accent px-0 pb-[25px] pt-14 text-accent-foreground">
      <div className="mx-auto w-[calc(100%-56px)] max-w-[1180px] max-[650px]:w-[calc(100%-36px)]">
        <div className="grid grid-cols-[1.5fr_1fr_1fr] gap-10 pb-[42px] max-[650px]:grid-cols-2 max-[650px]:gap-x-5 max-[650px]:gap-y-8">
          <div className="max-[650px]:col-span-2">
            <a href="/" className="inline-flex items-center gap-[10px] text-[21px] font-extrabold tracking-[-0.055em]">
              <Mark type="kunemi" className="h-[29px] w-[29px] text-accent-foreground" />
              kunemi
            </a>
            <p className="mt-[18px] max-w-[300px] text-xs leading-[1.7] text-accent-foreground/70">
              Intelligent software for modern business. Kunemi Technology Limited
              is building products and digital infrastructure for the systems
              people depend on.
            </p>
          </div>

          <div>
            <p className="mb-[17px] mt-[5px] font-mono text-[10px] uppercase tracking-[0.13em] text-accent-foreground/60">
              Products
            </p>
            <div className="flex flex-col gap-3 text-xs text-accent-foreground/90">
              {products.map((product) => (
                <a key={product.href} href={product.href} className="transition-colors hover:text-primary">
                  {product.name}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-[17px] mt-[5px] font-mono text-[10px] uppercase tracking-[0.13em] text-accent-foreground/60">
              Company
            </p>
            <div className="flex flex-col gap-3 text-xs text-accent-foreground/90">
              <a href="/about" className="transition-colors hover:text-primary">About Kunemi</a>
              <a href="/contact" className="transition-colors hover:text-primary">Contact</a>
            </div>
          </div>
        </div>

        <div className="flex justify-between gap-3 border-t border-accent-foreground/15 pt-5 text-[10px] text-accent-foreground/60 max-[650px]:flex-col">
          <span>© 2026 Kunemi Technology Limited. All rights reserved.</span>
          <span>Built from Africa. Designed for the world.</span>
        </div>
      </div>
    </footer>
  );
}
