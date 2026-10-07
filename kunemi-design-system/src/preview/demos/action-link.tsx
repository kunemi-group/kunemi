import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { ActionLink } from '../../components/ui/action-link';

export function ActionLinkDemo() {
  return (
    <div className="space-y-7">
      <section className="space-y-4 border border-border bg-card p-6">
        <div>
          <h2 className="font-semibold">Action treatments</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Primary, secondary, and text-link styles from the site.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <ActionLink href="#primary">Explore products <ArrowRight size={15} /></ActionLink>
          <ActionLink href="#secondary" variant="secondary">About Kunemi <ArrowUpRight size={14} /></ActionLink>
          <ActionLink href="#text" variant="text">More about Kunemi <ArrowRight size={15} /></ActionLink>
        </div>
      </section>
      <section className="space-y-4 border border-border bg-card p-6">
        <div>
          <h2 className="font-semibold">On the deep forest surface</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            The source uses a light outline for secondary links on dark sections.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3 bg-accent p-6 text-accent-foreground">
          <ActionLink href="#dark-primary">Explore products <ArrowRight size={15} /></ActionLink>
          <ActionLink
            href="#dark-secondary"
            variant="secondary"
            className="border-accent-foreground/30 text-accent-foreground hover:border-primary"
          >
            See the ecosystem <ArrowRight size={15} />
          </ActionLink>
        </div>
      </section>
    </div>
  );
}
