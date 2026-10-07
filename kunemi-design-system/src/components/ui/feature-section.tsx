import type { ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';
import { ActionLink } from './action-link';

export type FeatureSectionProps = {
  reverse?: boolean;
  kicker: string;
  heading: string;
  copy: string;
  phrase: string;
  href: string;
  cta: string;
  visual: ReactNode;
};

export function FeatureSection({
  reverse = false,
  kicker,
  heading,
  copy,
  phrase,
  href,
  cta,
  visual,
}: FeatureSectionProps) {
  return (
    <section className="border-t border-border py-[102px] max-[650px]:py-[72px]">
      <div
        className={`mx-auto grid w-[calc(100%-56px)] max-w-[1180px] items-center gap-[74px] max-[900px]:grid-cols-1 max-[900px]:gap-[42px] max-[650px]:w-[calc(100%-36px)] ${
          reverse ? 'grid-cols-[1.15fr_.85fr]' : 'grid-cols-[.85fr_1.15fr]'
        }`}
      >
        <div className={reverse ? 'min-[901px]:order-2' : undefined}>
          <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.13em] text-primary">
            {kicker}
          </p>
          <h2 className="mb-5 text-[clamp(33px,4vw,49px)] font-semibold leading-[1.12] tracking-[-0.065em]">
            {heading}
          </h2>
          <p className="text-sm leading-[1.8] text-muted-foreground">{copy}</p>
          <div className="mb-[27px] mt-6 text-[11px] font-extrabold tracking-[0.03em] text-primary">
            {phrase}
          </div>
          <ActionLink href={href} variant="text">
            {cta} <ArrowRight size={15} />
          </ActionLink>
        </div>

        <div
          className={`flex min-h-[390px] items-center justify-center overflow-hidden border border-border bg-secondary p-7 max-[650px]:min-h-[315px] max-[650px]:p-[15px] ${
            reverse ? 'min-[901px]:order-1' : ''
          }`}
        >
          {visual}
        </div>
      </div>
    </section>
  );
}
