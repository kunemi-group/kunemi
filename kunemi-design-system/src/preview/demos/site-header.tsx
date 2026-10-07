import { SiteHeader } from '../../components/ui/site-header';

export function SiteHeaderDemo() {
  return (
    <div className="space-y-5">
      <section className="overflow-hidden border border-border bg-card">
        <SiteHeader />
        <div className="grid min-h-64 place-items-center bg-background p-8 text-center">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.13em] text-primary">
              Kunemi Technology
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.06em]">
              Building intelligent software.
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Resize to see the accessible mobile navigation.
            </p>
          </div>
        </div>
      </section>
      <p className="text-sm text-muted-foreground">
        On narrow screens, use the menu button to show and dismiss the stacked
        navigation.
      </p>
    </div>
  );
}
