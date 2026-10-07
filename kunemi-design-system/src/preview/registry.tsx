import { lazy, type ComponentType } from 'react';
import {
  ColorsPage,
  FontsPage,
  LayoutPage,
  MotionPage,
  OverviewPage,
} from './foundations';

function lazyPage(load: () => Promise<ComponentType>) {
  return lazy(async () => ({ default: await load() }));
}

const MarkDemo = lazyPage(() =>
  import('./demos/mark').then(({ MarkDemo }) => MarkDemo),
);
const ActionLinkDemo = lazyPage(() =>
  import('./demos/action-link').then(({ ActionLinkDemo }) => ActionLinkDemo),
);
const SiteHeaderDemo = lazyPage(() =>
  import('./demos/site-header').then(({ SiteHeaderDemo }) => SiteHeaderDemo),
);
const ProductCardDemo = lazyPage(() =>
  import('./demos/product-card').then(({ ProductCardDemo }) => ProductCardDemo),
);
const SiteFooterDemo = lazyPage(() =>
  import('./demos/site-footer').then(({ SiteFooterDemo }) => SiteFooterDemo),
);
const FeatureSectionDemo = lazyPage(() =>
  import('./demos/feature-section').then(({ FeatureSectionDemo }) => FeatureSectionDemo),
);

export type PreviewEntry = {
  id: string;
  name: string;
  description: string;
  Page: ComponentType;
};

export type NavGroup = {
  name: string;
  entries: PreviewEntry[];
};

export const DESIGN_SYSTEM = {
  title: 'Kunemi Design System',
  description:
    'A source-backed system of Kunemi brand foundations and reusable website components.',
} as const;

export const OVERVIEW_ENTRY: PreviewEntry = {
  id: 'overview',
  name: 'Overview',
  description: 'The source palette, typography, and component pilot.',
  Page: OverviewPage,
};

export const NAV_GROUPS: NavGroup[] = [
  {
    name: 'Brand',
    entries: [
      {
        id: 'brand-marks',
        name: 'Brand marks',
        description: 'The Kunemi mark and four distinct product marks.',
        Page: MarkDemo,
      },
    ],
  },
  {
    name: 'Colors',
    entries: [
      {
        id: 'color-roles',
        name: 'Color roles',
        description: 'Forest-green brand colors, mineral neutrals, and surfaces.',
        Page: ColorsPage,
      },
    ],
  },
  {
    name: 'Fonts',
    entries: [
      {
        id: 'type-system',
        name: 'Type system',
        description: 'Manrope for headings and body, DM Mono for labels.',
        Page: FontsPage,
      },
    ],
  },
  {
    name: 'Layout',
    entries: [
      {
        id: 'layout-system',
        name: 'Spacing and surfaces',
        description: 'The observed spacing rhythm, grid, borders, and radius.',
        Page: LayoutPage,
      },
    ],
  },
  {
    name: 'Actions',
    entries: [
      {
        id: 'action-links',
        name: 'Action links',
        description: 'Primary, secondary, and text-link treatments.',
        Page: ActionLinkDemo,
      },
    ],
  },
  {
    name: 'Components',
    entries: [
      {
        id: 'site-header',
        name: 'Site header',
        description: 'Responsive company navigation with an expandable mobile menu.',
        Page: SiteHeaderDemo,
      },
      {
        id: 'product-card',
        name: 'Product card',
        description: 'A shared card hierarchy that keeps each product distinct.',
        Page: ProductCardDemo,
      },
      {
        id: 'site-footer',
        name: 'Site footer',
        description: 'Company context, product links, and closing details.',
        Page: SiteFooterDemo,
      },
      {
        id: 'feature-section',
        name: 'Feature section',
        description: 'A responsive split layout with a caller-owned visual.',
        Page: FeatureSectionDemo,
      },
    ],
  },
  {
    name: 'Motion',
    entries: [
      {
        id: 'motion-principles',
        name: 'Motion principles',
        description: 'Subtle hover, reveal, and signal timings from the site.',
        Page: MotionPage,
      },
    ],
  },
];

export const ALL_ENTRIES: PreviewEntry[] = [
  OVERVIEW_ENTRY,
  ...NAV_GROUPS.flatMap((group) => group.entries),
];

const duplicateIds = ALL_ENTRIES.map((entry) => entry.id).filter(
  (id, index, ids) => ids.indexOf(id) !== index,
);
if (duplicateIds.length > 0) {
  throw new Error(
    `Duplicate preview page id(s): ${[...new Set(duplicateIds)].join(
      ', ',
    )}. Every page id must be unique across all nav groups.`,
  );
}
