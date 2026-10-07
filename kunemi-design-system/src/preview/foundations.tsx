import { ArrowRight } from 'lucide-react';
import { ActionLink } from '../components/ui/action-link';
import { FeatureSection } from '../components/ui/feature-section';
import { Mark } from '../components/ui/mark';
import { ProductCard, type ProductCardData } from '../components/ui/product-card';
import { SiteFooter } from '../components/ui/site-footer';
import { SiteHeader } from '../components/ui/site-header';
import { Guidelines } from './parts';

const featuredProduct: ProductCardData = {
  name: 'Dotrix',
  category: 'AI / DEVELOPER TOOLS',
  desc: 'An AI workspace for building software, with agents, project knowledge and developer workflows working together.',
  href: '#dotrix',
  action: 'Build software',
  mark: 'dotrix',
};

const coreColors = [
  { name: 'Primary', value: '#236b48', className: 'bg-primary' },
  { name: 'Secondary', value: '#e4ece7', className: 'bg-secondary' },
  { name: 'Accent', value: '#182823', className: 'bg-accent' },
] as const;

const supportingColors = [
  { name: 'Warm mineral', value: '#faf8f5', className: 'bg-background' },
  { name: 'Deep green-black', value: '#192420', className: 'bg-foreground' },
  { name: 'Muted sage', value: '#63746d', className: 'bg-muted-foreground' },
  { name: 'Dotrix', value: '#43815a', className: 'bg-chart-1' },
  { name: 'Shopflow', value: '#d18b4b', className: 'bg-chart-2' },
  { name: 'Commerce', value: '#85789b', className: 'bg-chart-3' },
  { name: 'Kumove', value: '#7696a0', className: 'bg-chart-4' },
] as const;

function Swatch({
  name,
  value,
  className,
}: {
  name: string;
  value: string;
  className: string;
}) {
  return (
    <div className="space-y-2">
      <div className={`h-16 border border-border/70 ${className}`} />
      <div>
        <p className="text-xs font-semibold">{name}</p>
        <p className="font-mono text-[10px] text-muted-foreground">{value}</p>
      </div>
    </div>
  );
}

export function OverviewPage() {
  return (
    <div className="space-y-6">
      <section className="border border-border bg-card p-5 sm:p-6">
        <p className="font-mono text-[10px] uppercase tracking-[0.13em] text-muted-foreground">
          Core palette
        </p>
        <div className="mt-4 grid grid-cols-3 gap-4">
          {coreColors.map((color) => <Swatch key={color.name} {...color} />)}
        </div>
      </section>

      <section className="border border-border bg-card p-5 sm:p-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.13em] text-muted-foreground">
              Typography
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-[-0.06em]">
              Manrope <span className="text-muted-foreground">/</span>{' '}
              <span className="font-mono text-lg font-normal tracking-normal">DM Mono</span>
            </h2>
          </div>
          <Mark type="kunemi" className="h-10 w-10 shrink-0 text-primary" />
        </div>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground">
          Clear geometric headings and readable body copy pair with compact
          technical labels to organize the system.
        </p>
      </section>

      <section className="space-y-5 border border-border bg-card p-5 sm:p-6">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.13em] text-muted-foreground">
            Component catalog · Actions and marks
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-5">
            {['kunemi', 'dotrix', 'shopflow', 'commerce', 'kumove'].map((type) => (
              <Mark key={type} type={type} className="h-9 w-9 text-primary" />
            ))}
          </div>
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <ActionLink href="#primary">Explore products <ArrowRight size={15} /></ActionLink>
            <ActionLink href="#secondary" variant="secondary">About Kunemi</ActionLink>
            <ActionLink href="#text" variant="text">More about Kunemi <ArrowRight size={15} /></ActionLink>
          </div>
        </div>
      </section>

      <section className="overflow-hidden border border-border bg-card">
        <div className="border-b border-border px-5 py-3">
          <p className="font-mono text-[10px] uppercase tracking-[0.13em] text-muted-foreground">
            Component catalog · Site header
          </p>
        </div>
        <SiteHeader />
      </section>

      <section className="space-y-4 border border-border bg-card p-5 sm:p-6">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.13em] text-muted-foreground">
            Component catalog · Product card
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            A shared card pattern with product-specific identity and copy.
          </p>
        </div>
        <div className="max-w-sm">
          <ProductCard product={featuredProduct} />
        </div>
      </section>

      <section className="overflow-hidden border border-border bg-card">
        <div className="border-b border-border px-5 py-3">
          <p className="font-mono text-[10px] uppercase tracking-[0.13em] text-muted-foreground">
            Component catalog · Feature section
          </p>
        </div>
        <FeatureSection
          kicker="DOTRIX · AI / DEVELOPER TOOLS"
          heading="Build software with an AI team beside you."
          copy="A reusable split section that keeps page copy in the app and accepts its illustration through a visual slot."
          phrase="Plan. Build. Review. Ship."
          href="#dotrix"
          cta="Explore Dotrix"
          visual={
            <div className="flex w-full flex-col items-center gap-4 text-center">
              <Mark type="dotrix" className="h-12 w-12 text-primary" />
              <span className="font-mono text-[10px] uppercase tracking-[0.13em] text-muted-foreground">
                Caller-owned visual slot
              </span>
            </div>
          }
        />
      </section>

      <section className="space-y-4 border border-border bg-card p-5 sm:p-6">
        <p className="font-mono text-[10px] uppercase tracking-[0.13em] text-muted-foreground">
          Component catalog · Site footer
        </p>
        <div className="overflow-hidden">
          <SiteFooter />
        </div>
      </section>

      <Guidelines
        items={[
          { kind: 'do', text: 'Keep the four product identities and roles distinct.' },
          { kind: 'do', text: 'Describe their relationship as a shared direction, not a live integration.' },
          { kind: 'dont', text: 'Present a product as launched or available; the source labels each one “Building”.' },
        ]}
      />
    </div>
  );
}

export function ColorsPage() {
  return (
    <div className="space-y-8">
      <section className="space-y-4 border border-border bg-card p-5 sm:p-6">
        <div>
          <h2 className="font-semibold">Brand roles</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Forest green, pale green mineral, and deep forest surfaces.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {coreColors.map((color) => <Swatch key={color.name} {...color} />)}
        </div>
      </section>

      <section className="space-y-4 border border-border bg-card p-5 sm:p-6">
        <div>
          <h2 className="font-semibold">Neutral and product colors</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Mineral neutrals ground the interface; restrained hues help distinguish
            the four product marks.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {supportingColors.map((color) => <Swatch key={color.name} {...color} />)}
        </div>
      </section>

      <section className="space-y-4 border border-border bg-card p-5 sm:p-6">
        <h2 className="font-semibold">Light and dark review</h2>
        <p className="text-sm leading-7 text-muted-foreground">
          The light roles come from the site palette. The alternate dark roles
          are derived for this preview from its forest-green sections; they are
          not a claim that the source site has a full dark mode. Use the theme
          control in the sidebar to check both.
        </p>
      </section>

      <Guidelines
        items={[
          { kind: 'do', text: 'Use forest green for primary actions and emphasis against mineral surfaces.' },
          { kind: 'do', text: 'Use deep forest green for large dark sections, with pale text.' },
          { kind: 'do', text: 'Reserve each product hue for its corresponding product identity.' },
          { kind: 'dont', text: 'Treat the derived dark preview theme as a source-site mode.' },
        ]}
      />
    </div>
  );
}

export function FontsPage() {
  return (
    <div className="space-y-6">
      <section className="space-y-6 border border-border bg-card p-5 sm:p-6">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.13em] text-muted-foreground">
            Sans · Manrope
          </p>
          <p className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.065em] sm:text-5xl">
            Build technology for the way business works.
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground">
            Headings use a close, geometric rhythm; body copy is calm and
            readable, with generous line height.
          </p>
        </div>
        <div className="border-t border-border pt-5">
          <p className="font-mono text-[10px] uppercase tracking-[0.13em] text-muted-foreground">
            Mono · DM Mono
          </p>
          <p className="mt-3 font-mono text-xs uppercase tracking-[0.13em]">
            AI / DEVELOPER TOOLS &nbsp; · &nbsp; BUILDING
          </p>
        </div>
      </section>
      <Guidelines
        items={[
          { kind: 'do', text: 'Use Manrope for headings and body content.' },
          { kind: 'do', text: 'Use DM Mono for compact uppercase category and section labels.' },
          { kind: 'dont', text: 'Use the mono face for long-form body copy.' },
        ]}
      />
    </div>
  );
}

export function LayoutPage() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 lg:grid-cols-2">
        <section className="space-y-5 border border-border bg-card p-5 sm:p-6">
          <div>
            <h2 className="font-semibold">Container and grid</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              The source uses a centered 1180px maximum container and a 4px base
              spacing step.
            </p>
          </div>
          <div className="border border-dashed border-primary/50 bg-secondary p-4">
            <div className="grid grid-cols-3 gap-2">
              {[1, 2, 3].map((item) => (
                <div key={item} className="h-12 border border-border bg-background" />
              ))}
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {[16, 24, 32].map((size) => (
              <span key={size} className="border border-border px-2 py-1 font-mono text-[10px] text-muted-foreground">
                {size}px observed section spacing
              </span>
            ))}
          </div>
        </section>
        <section className="space-y-5 border border-border bg-card p-5 sm:p-6">
          <div>
            <h2 className="font-semibold">Surface and radius</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Fine borders define cards and grids. The source's action links use
              a 4px corner; cards remain square.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="grid h-24 place-items-center border border-border bg-background text-xs">Square card</div>
            <div className="grid h-24 place-items-center rounded-[4px] bg-primary text-xs text-primary-foreground">4px action</div>
          </div>
        </section>
      </div>
      <Guidelines
        items={[
          { kind: 'do', text: 'Use fine borders and aligned grids to organize product cards and content.' },
          { kind: 'do', text: 'Keep cards square-cornered and action corners subtle.' },
          { kind: 'dont', text: 'Add large rounded-card treatments; they are not present in the source site.' },
        ]}
      />
    </div>
  );
}

export function MotionPage() {
  return (
    <div className="space-y-6">
      <section className="space-y-5 border border-border bg-card p-5 sm:p-6">
        <div>
          <h2 className="font-semibold">Small, useful movement</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            The source uses short transitions and slight vertical movement for
            interactive links and cards.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <ActionLink href="#motion-primary">Hover a primary action</ActionLink>
          <ActionLink href="#motion-secondary" variant="secondary">Hover an outlined action</ActionLink>
        </div>
        <div className="grid min-h-28 max-w-sm place-items-center border border-border bg-background text-sm text-muted-foreground transition duration-200 hover:-translate-y-1 hover:bg-secondary">
          Hover a product surface
        </div>
        <dl className="grid gap-3 border-t border-border pt-4 sm:grid-cols-3">
          <div><dt className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Action hover</dt><dd className="mt-1 text-sm">200–250ms · 2px lift</dd></div>
          <div><dt className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Card hover</dt><dd className="mt-1 text-sm">250ms · 4px lift</dd></div>
          <div><dt className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Reveal</dt><dd className="mt-1 text-sm">750ms entrance</dd></div>
        </dl>
      </section>
      <Guidelines
        items={[
          { kind: 'do', text: 'Keep hover movement subtle and pair it with a color or border change.' },
          { kind: 'do', text: 'Respect reduced-motion preferences; the source disables prolonged animation and smooth scrolling.' },
          { kind: 'dont', text: 'Use motion to compete with product content.' },
        ]}
      />
    </div>
  );
}
