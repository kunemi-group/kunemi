import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { About } from '@/pages/about';
import { Contact } from '@/pages/contact';
import { Home } from '@/pages/home';
import { MissingPage } from '@/pages/not-found';
import { ProductDetail } from '@/pages/product-detail';
import { Route, Switch, useLocation, Router as WouterRouter } from 'wouter';
import type { ReactNode } from 'react';

const queryClient = new QueryClient();

function Router() {
  return <RoutedErrorBoundary><Switch>
    <Route path="/" component={Home} />
    <Route path="/products/dotrix"><ProductDetail id="dotrix" /></Route>
    <Route path="/products/shopflow"><ProductDetail id="shopflow" /></Route>
    <Route path="/products/commerce"><ProductDetail id="commerce" /></Route>
    <Route path="/products/kumove"><ProductDetail id="kumove" /></Route>
    <Route path="/about" component={About} />
    <Route path="/contact" component={Contact} />
    <Route component={MissingPage} />
  </Switch></RoutedErrorBoundary>;
}

function RoutedErrorBoundary({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  return <ErrorBoundary resetKey={location}>{children}</ErrorBoundary>;
}

function App() {
  return <QueryClientProvider client={queryClient}><TooltipProvider><WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}><Router /></WouterRouter><Toaster /></TooltipProvider></QueryClientProvider>;
}

export default App;
