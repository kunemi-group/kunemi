import { Mark } from '../../components/ui/mark';

const marks = [
  { type: 'kunemi', name: 'Kunemi' },
  { type: 'dotrix', name: 'Dotrix' },
  { type: 'shopflow', name: 'Shopflow' },
  { type: 'commerce', name: 'Kunemi Commerce' },
  { type: 'kumove', name: 'Kumove' },
];

export function MarkDemo() {
  return (
    <div className="space-y-6">
      <section className="space-y-5 border border-border bg-card p-6">
        <div>
          <h2 className="font-semibold">Company and product marks</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            The K-node symbol and four distinct product marks from the site.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {marks.map((mark) => (
            <div key={mark.type} className="flex min-h-32 flex-col items-center justify-center gap-3 border border-border p-4 text-center">
              <Mark type={mark.type} className="h-11 w-11 text-primary" />
              <span className="text-xs font-semibold">{mark.name}</span>
            </div>
          ))}
        </div>
      </section>
      <section className="flex flex-wrap items-center gap-6 border border-border bg-card p-6">
        <img src={`${import.meta.env.BASE_URL}kunemi-mark.svg`} alt="Kunemi K-node logo" className="h-16 w-16" />
        <div>
          <h2 className="font-semibold">Retained source logo</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            The genuine site favicon mark, sanitized and kept as an asset.
          </p>
        </div>
      </section>
    </div>
  );
}
