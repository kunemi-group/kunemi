import { ArrowRight } from 'lucide-react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Shell } from '@/components/layout/site-shell';
import { useSeo } from '@/hooks/use-seo';

export function MissingPage() {
  useSeo('Page not found | Kunemi', 'The page you are looking for could not be found on Kunemi.');
  return <Shell><main className="not-found"><div><p className="eyebrow mono not-found-eyebrow">404 / NOT FOUND</p><h1>Wrong turn.</h1><p>This page isn’t part of the Kunemi site.</p><Button asChild size="lg"><Link href="/">Back to home <ArrowRight size={15} /></Link></Button></div></main></Shell>;
}
