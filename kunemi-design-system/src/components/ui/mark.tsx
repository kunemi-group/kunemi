import type { SVGProps } from 'react';

export type MarkType = 'kunemi' | 'dotrix' | 'shopflow' | 'commerce' | 'kumove';

export function Mark({
  type,
  className = '',
  ...props
}: SVGProps<SVGSVGElement> & { type: string }) {
  if (type === 'kunemi') {
    return (
      <svg className={className} viewBox="0 0 36 36" aria-hidden="true" {...props}>
        <path
          d="M8 8v20M8 18l19-10M8 18l19 10"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <circle cx="8" cy="8" r="3" fill="currentColor" />
        <circle cx="8" cy="28" r="3" fill="currentColor" />
        <circle cx="27" cy="8" r="3" fill="currentColor" />
        <circle cx="27" cy="28" r="3" fill="currentColor" />
        <circle cx="8" cy="18" r="3.5" fill="currentColor" />
      </svg>
    );
  }

  if (type === 'dotrix') {
    return (
      <svg className={className} viewBox="0 0 44 44" aria-hidden="true" {...props}>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <circle
            key={i}
            cx={10 + (i % 3) * 12}
            cy={10 + Math.floor(i / 3) * 12}
            r={i === 4 ? 4 : 2.4}
            fill="currentColor"
            opacity={i === 4 ? 1 : 0.64}
          />
        ))}
      </svg>
    );
  }

  if (type === 'shopflow') {
    return (
      <svg className={className} viewBox="0 0 44 44" aria-hidden="true" {...props}>
        <path
          d="M7 11h17a8 8 0 0 1 0 16H16a8 8 0 0 0 0 16h21"
          transform="translate(0 -5)"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <circle cx="7" cy="6" r="3" fill="currentColor" />
        <circle cx="37" cy="38" r="3" fill="currentColor" />
      </svg>
    );
  }

  if (type === 'commerce') {
    return (
      <svg className={className} viewBox="0 0 44 44" aria-hidden="true" {...props}>
        <rect x="5" y="6" width="13" height="13" rx="2" fill="none" stroke="currentColor" strokeWidth="2.5" />
        <rect x="26" y="6" width="13" height="13" rx="2" fill="none" stroke="currentColor" strokeWidth="2.5" />
        <rect x="15.5" y="26" width="13" height="13" rx="2" fill="none" stroke="currentColor" strokeWidth="2.5" />
        <path d="M18 12.5h8m-4 6.5v7" stroke="currentColor" strokeWidth="2" />
      </svg>
    );
  }

  return (
    <svg className={className} viewBox="0 0 44 44" aria-hidden="true" {...props}>
      <path
        d="M8 32 19 21l8 5 10-14"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="8" cy="32" r="3.5" fill="currentColor" />
      <circle cx="19" cy="21" r="3.5" fill="currentColor" />
      <circle cx="27" cy="26" r="3.5" fill="currentColor" />
      <circle cx="37" cy="12" r="3.5" fill="currentColor" />
    </svg>
  );
}
