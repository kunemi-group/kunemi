import type { ComponentPropsWithoutRef } from 'react';

export type ActionLinkVariant = 'primary' | 'secondary' | 'text';

export type ActionLinkProps = ComponentPropsWithoutRef<'a'> & {
  variant?: ActionLinkVariant;
};

const variants: Record<ActionLinkVariant, string> = {
  primary:
    'inline-flex items-center justify-center gap-2 rounded-[4px] bg-primary px-[18px] py-[13px] text-xs font-extrabold text-primary-foreground transition duration-200 hover:-translate-y-0.5 hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring',
  secondary:
    'inline-flex items-center gap-2 rounded-[4px] border border-input px-4 py-[13px] text-xs font-extrabold transition duration-200 hover:-translate-y-0.5 hover:border-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring',
  text:
    'inline-flex items-center gap-2 text-[11px] font-extrabold text-primary transition-colors hover:text-primary/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring',
};

export function ActionLink({
  variant = 'primary',
  className = '',
  children,
  ...props
}: ActionLinkProps) {
  return (
    <a className={`${variants[variant]} ${className}`.trim()} {...props}>
      {children}
    </a>
  );
}
