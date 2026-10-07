export const products = [
  { name: 'Dotrix', category: 'AI / DEVELOPER TOOLS', desc: 'An AI workspace for building software, with agents, project knowledge and developer workflows working together.', href: '/products/dotrix', action: 'Build software', mark: 'dotrix' },
  { name: 'Shopflow', category: 'SOCIAL COMMERCE', desc: 'A customer-facing shopping experience for discovering products, interacting with sellers and buying.', href: '/products/shopflow', action: 'Discover & buy', mark: 'shopflow' },
  { name: 'Kunemi Commerce', category: 'COMMERCE OPERATIONS', desc: 'Business-facing software to manage products, orders, payments, customers, sales and day-to-day operations.', href: '/products/commerce', action: 'Sell & operate', mark: 'commerce' },
  { name: 'Kumove', category: 'MOVEMENT INFRASTRUCTURE', desc: 'A postcode-aware movement and delivery network connecting businesses, people and local collection points.', href: '/products/kumove', action: 'Move goods', mark: 'kumove' },
];

export const productDetails: Record<string, { title: string; description: string; headline: string; body: string; phrase: string; points: string[]; accent: string }> = {
  dotrix: {
    title: 'Dotrix — AI software development workspace | Kunemi',
    description: 'Dotrix brings AI agents, project knowledge, software development workflows, research and planning into one intelligent workspace.',
    headline: 'Build software with an AI team beside you.',
    body: 'Dotrix brings agents, project knowledge, tasks and developer workflows into one coordinated environment — helping developers and teams move from idea to software with more context and control.',
    phrase: 'Plan. Build. Review. Ship.',
    points: ['AI agents for specialised work', 'Project knowledge and context', 'Tasks, research and planning', 'Developer workflows and tools'],
    accent: 'AI / DEVELOPER TOOLS',
  },
  shopflow: {
    title: 'Shopflow — social commerce and product discovery | Kunemi',
    description: 'Shopflow is a customer-facing social shopping experience for discovering products, connecting with sellers and buying.',
    headline: 'Commerce built around discovery.',
    body: 'Shopflow brings product discovery, social interaction and shopping into one customer-facing experience — helping people discover products, connect with sellers and buy from businesses.',
    phrase: 'Discover. Connect. Shop.',
    points: ['Customer-facing product discovery', 'Social content and shopping', 'Seller profiles and conversations', 'A considered path from discovery to purchase'],
    accent: 'SOCIAL COMMERCE',
  },
  commerce: {
    title: 'Kunemi Commerce — commerce operations for businesses | Kunemi',
    description: 'Kunemi Commerce is business-facing software to manage products, orders, payments, customers, sales and operations.',
    headline: 'The operating system behind modern commerce.',
    body: 'Kunemi Commerce gives businesses the tools to manage the systems behind selling — from products and orders to payments, customers, sales and operations. It is the business-side counterpart to customer-facing discovery.',
    phrase: 'Sell. Operate. Understand. Grow.',
    points: ['Products, orders and inventory', 'Payments, quotations and invoices', 'Customers and conversations', 'Sales, deliveries and operations'],
    accent: 'COMMERCE OPERATIONS',
  },
  kumove: {
    title: 'Kumove — postcode-aware movement infrastructure | Kunemi',
    description: 'Kumove is a postcode-aware movement and delivery network concept connecting businesses, customers, couriers, drivers and collection points.',
    headline: 'Making movement part of the software.',
    body: 'Kumove connects businesses, customers, couriers, drivers and local collection points into a postcode-aware movement and delivery network designed around how goods move across African cities.',
    phrase: 'Address first. Sort intelligently. Move with evidence.',
    points: ['Postcode-aware addressing', 'Local collection points and hubs', 'Courier and driver movement', 'A considered network for goods in motion'],
    accent: 'LOGISTICS / MOVEMENT INFRASTRUCTURE',
  },
};

export const siteDescription = 'Kunemi Technology builds intelligent software, AI products, commerce platforms and digital infrastructure for modern businesses.';


export type Product = (typeof products)[number];
export type ProductId = keyof typeof productDetails;
