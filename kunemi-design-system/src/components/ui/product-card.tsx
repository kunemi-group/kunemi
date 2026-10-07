import { ArrowUpRight } from 'lucide-react';
import { Mark } from './mark';

export type ProductCardData = {
  name: string;
  category: string;
  desc: string;
  href: string;
  action: string;
  mark: string;
};

export function ProductCard({ product }: { product: ProductCardData }) {
  return (
    <a
      href={product.href}
      className="group flex min-h-[300px] flex-col border border-border bg-card px-6 py-[26px] transition duration-200 hover:-translate-y-1 hover:bg-background focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring max-[650px]:min-h-[245px]"
      data-testid={`card-product-${product.mark}`}
    >
      <Mark type={product.mark} className="mb-8 h-[42px] w-[42px] text-primary max-[650px]:mb-6" />
      <span className="mb-3 font-mono text-[10px] uppercase tracking-[0.13em] text-muted-foreground">
        {product.category}
      </span>
      <h3 className="mb-2 text-xl font-semibold tracking-[-0.045em]">{product.name}</h3>
      <p className="mb-6 text-xs leading-[1.75] text-muted-foreground">{product.desc}</p>
      <div className="mt-auto flex items-center justify-between">
        <span className="inline-flex items-center gap-[7px] text-[10px] text-muted-foreground">
          <span className="h-[7px] w-[7px] rounded-full bg-primary/70 shadow-[0_0_0_4px_hsl(var(--primary)/.12)]" />
          Building
        </span>
        <span className="inline-flex items-center gap-2 text-[11px] font-extrabold text-primary">
          Explore <ArrowUpRight size={14} />
        </span>
      </div>
    </a>
  );
}
