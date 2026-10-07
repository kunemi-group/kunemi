import { SiteFooter } from '../../components/ui/site-footer';

export function SiteFooterDemo() {
  return (
    <div className="space-y-4">
      <p className="text-sm text-muted-foreground">
        Company message, product links, and closing details in the site's dark
        forest footer.
      </p>
      <div className="overflow-hidden border border-border">
        <SiteFooter />
      </div>
    </div>
  );
}
