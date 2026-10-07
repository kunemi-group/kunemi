import type { Metadata } from 'next';
import { productDetails } from '@/data/site-content';
import { ProductDetail } from '@/site-pages/product-detail';

export const metadata: Metadata = {
  title: { absolute: productDetails.shopflow.title },
  description: productDetails.shopflow.description,
  alternates: { canonical: '/products/shopflow' },
  openGraph: {
    type: 'website',
    siteName: 'Kunemi',
    title: productDetails.shopflow.title,
    description: productDetails.shopflow.description,
    url: '/products/shopflow',
  },
  twitter: {
    card: 'summary_large_image',
    title: productDetails.shopflow.title,
    description: productDetails.shopflow.description,
  },
};

export default function Page() {
  return <ProductDetail id="shopflow" />;
}
