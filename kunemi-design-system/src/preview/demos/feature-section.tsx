import { Mark } from '../../components/ui/mark';
import {
  FeatureSection,
  type FeatureSectionProps,
} from '../../components/ui/feature-section';

type FeatureStory = Omit<FeatureSectionProps, 'visual'> & {
  product: string;
  mark: string;
};

const features: FeatureStory[] = [
  {
    product: 'Dotrix',
    mark: 'dotrix',
    kicker: 'DOTRIX · AI / DEVELOPER TOOLS',
    heading: 'Build software with an AI team beside you.',
    copy: 'Dotrix brings agents, knowledge, tasks and tools into one coordinated environment — helping developers and teams move from idea to software with more context and control.',
    phrase: 'Plan. Build. Review. Ship.',
    href: '#dotrix',
    cta: 'Explore Dotrix',
    reverse: false,
  },
  {
    product: 'Shopflow',
    mark: 'shopflow',
    kicker: 'SHOPFLOW · SOCIAL COMMERCE',
    heading: 'Commerce built around discovery.',
    copy: 'Shopflow brings product discovery, social interaction and shopping into one customer-facing experience — helping people discover products and buy directly from businesses.',
    phrase: 'Discover. Connect. Shop.',
    href: '#shopflow',
    cta: 'Explore Shopflow',
    reverse: true,
  },
  {
    product: 'Kunemi Commerce',
    mark: 'commerce',
    kicker: 'KUNEMI COMMERCE · OPERATIONS',
    heading: 'The operating system behind modern commerce.',
    copy: 'Kunemi Commerce gives businesses the tools to manage the systems behind selling — from products and orders to payments, customers, sales and operations.',
    phrase: 'Sell. Operate. Understand. Grow.',
    href: '#commerce',
    cta: 'Explore Kunemi Commerce',
    reverse: false,
  },
  {
    product: 'Kumove',
    mark: 'kumove',
    kicker: 'KUMOVE · MOVEMENT INFRASTRUCTURE',
    heading: 'Making movement part of the software.',
    copy: 'Kumove connects businesses, customers, couriers, drivers and local collection points into a postcode-aware movement and delivery network.',
    phrase: 'Address first. Sort intelligently. Move with evidence.',
    href: '#kumove',
    cta: 'Explore Kumove',
    reverse: true,
  },
];

function SampleVisual({ mark, name }: { mark: string; name: string }) {
  return (
    <div className="flex w-full flex-col items-center gap-5 text-center">
      <Mark type={mark} className="h-14 w-14 text-primary" />
      <span className="font-mono text-[10px] uppercase tracking-[0.13em] text-muted-foreground">
        {name}
      </span>
      <span className="h-px w-16 bg-border" />
      <span className="text-xs text-muted-foreground">Visual supplied by the consuming app</span>
    </div>
  );
}

export function FeatureSectionDemo() {
  return (
    <div>
      <p className="mb-2 text-sm leading-6 text-muted-foreground">
        The system provides the split layout and responsive ordering. Each
        product-specific visual remains caller-owned; the marks below are sample
        content for this preview.
      </p>
      {features.map((feature) => (
        <FeatureSection
          key={feature.product}
          reverse={feature.reverse}
          kicker={feature.kicker}
          heading={feature.heading}
          copy={feature.copy}
          phrase={feature.phrase}
          href={feature.href}
          cta={feature.cta}
          visual={<SampleVisual mark={feature.mark} name={feature.product} />}
        />
      ))}
    </div>
  );
}
