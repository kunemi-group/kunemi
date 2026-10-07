import { ProductCard, type ProductCardData } from '../../components/ui/product-card';

const products: ProductCardData[] = [
  {
    name: 'Dotrix',
    category: 'AI / DEVELOPER TOOLS',
    desc: 'An AI workspace for building software, with agents, project knowledge and developer workflows working together.',
    href: '#dotrix',
    action: 'Build software',
    mark: 'dotrix',
  },
  {
    name: 'Shopflow',
    category: 'SOCIAL COMMERCE',
    desc: 'A customer-facing shopping experience for discovering products, interacting with sellers and buying.',
    href: '#shopflow',
    action: 'Discover & buy',
    mark: 'shopflow',
  },
  {
    name: 'Kunemi Commerce',
    category: 'COMMERCE OPERATIONS',
    desc: 'Business-facing software to manage products, orders, payments, customers, sales and day-to-day operations.',
    href: '#commerce',
    action: 'Sell & operate',
    mark: 'commerce',
  },
  {
    name: 'Kumove',
    category: 'MOVEMENT INFRASTRUCTURE',
    desc: 'A postcode-aware movement and delivery network connecting businesses, people and local collection points.',
    href: '#kumove',
    action: 'Move goods',
    mark: 'kumove',
  },
];

export function ProductCardDemo() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-semibold">Four distinct product roles</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Each card uses the same content hierarchy; its product mark and copy
          retain the site's distinct roles.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.mark} product={product} />
        ))}
      </div>
    </div>
  );
}
