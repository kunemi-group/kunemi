import { Suspense, useEffect, useMemo, useRef, useState } from 'react';
import {
  ALL_ENTRIES,
  DESIGN_SYSTEM,
  NAV_GROUPS,
  OVERVIEW_ENTRY,
  type NavGroup,
} from './registry';

function readHashId(): string {
  const id = new URLSearchParams(window.location.hash.slice(1)).get('page');
  if (!id) return OVERVIEW_ENTRY.id;
  return ALL_ENTRIES.some((entry) => entry.id === id) ? id : OVERVIEW_ENTRY.id;
}

function NavigationItems({
  showOverview,
  groups,
  activeId,
  query,
  select,
}: {
  showOverview: boolean;
  groups: NavGroup[];
  activeId: string;
  query: string;
  select: (id: string) => void;
}) {
  return (
    <nav aria-label="Design system navigation" className="space-y-5 py-2">
      {showOverview && (
        <button
          type="button"
          onClick={() => select(OVERVIEW_ENTRY.id)}
          aria-current={OVERVIEW_ENTRY.id === activeId}
          className="w-full px-3 py-2 text-left text-sm font-semibold transition-colors hover:bg-sidebar-accent aria-[current=true]:bg-sidebar-primary aria-[current=true]:text-sidebar-primary-foreground"
        >
          {OVERVIEW_ENTRY.name}
        </button>
      )}
      {groups.map((group) => (
        <div key={group.name}>
          <p className="px-3 font-mono text-[10px] uppercase tracking-[0.13em] text-muted-foreground">
            {group.name}
          </p>
          <div className="mt-2 border-l border-sidebar-border pl-2">
            {group.entries.map((entry) => (
              <button
                key={entry.id}
                type="button"
                onClick={() => select(entry.id)}
                aria-current={entry.id === activeId}
                className="w-full px-3 py-1.5 text-left text-sm text-muted-foreground transition-colors hover:bg-sidebar-accent hover:text-foreground aria-[current=true]:bg-sidebar-primary aria-[current=true]:font-semibold aria-[current=true]:text-sidebar-primary-foreground"
              >
                {entry.name}
              </button>
            ))}
          </div>
        </div>
      ))}
      {!showOverview && groups.length === 0 && (
        <p className="px-3 py-4 text-sm text-muted-foreground">
          No sections match “{query}”.
        </p>
      )}
    </nav>
  );
}

export function DesignSystemBrowser() {
  const [selectedId, setSelectedId] = useState(readHashId);
  const [query, setQuery] = useState('');
  const [isDark, setIsDark] = useState(false);
  const mobileNav = useRef<HTMLDetailsElement>(null);
  const mobileNavSummary = useRef<HTMLElement>(null);
  const normalizedQuery = query.trim().toLowerCase();

  useEffect(() => {
    const onHashChange = () => setSelectedId(readHashId());
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const filteredGroups = useMemo(
    () =>
      NAV_GROUPS.map((group) => ({
        ...group,
        entries: group.name.toLowerCase().includes(normalizedQuery)
          ? group.entries
          : group.entries.filter((entry) =>
              `${entry.name} ${entry.description}`.toLowerCase().includes(normalizedQuery),
            ),
      })).filter((group) => group.entries.length > 0),
    [normalizedQuery],
  );

  const active = ALL_ENTRIES.find((entry) => entry.id === selectedId) ?? OVERVIEW_ENTRY;
  const activeGroup = NAV_GROUPS.find((group) =>
    group.entries.some((entry) => entry.id === active.id),
  );
  const ActivePage = active.Page;
  const showOverview = `${OVERVIEW_ENTRY.name} ${OVERVIEW_ENTRY.description}`
    .toLowerCase()
    .includes(normalizedQuery);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [active.id]);

  const selectPage = (id: string) => {
    setSelectedId(id);
    window.location.hash = new URLSearchParams({ page: id }).toString();
    if (mobileNav.current?.open) {
      mobileNav.current.removeAttribute('open');
      mobileNavSummary.current?.focus();
    }
  };

  return (
    <div className={`${isDark ? 'dark' : ''} min-h-screen bg-background font-sans text-foreground`}>
      <div className="min-h-screen md:grid md:grid-cols-[260px_minmax(0,1fr)]">
        <aside className="border-b border-sidebar-border bg-sidebar text-sidebar-foreground md:sticky md:top-0 md:flex md:h-screen md:flex-col md:border-b-0 md:border-r">
          <div className="flex items-center gap-3 border-b border-sidebar-border px-5 py-5">
            <img
              src={`${import.meta.env.BASE_URL}kunemi-mark.svg`}
              alt=""
              className="h-9 w-9 shrink-0"
            />
            <div>
              <p className="text-sm font-extrabold tracking-[-0.04em]">{DESIGN_SYSTEM.title}</p>
              <p className="mt-1 text-xs text-muted-foreground">Browse the system</p>
            </div>
          </div>

          <div className="p-4 pb-2">
            <label className="sr-only" htmlFor="design-system-search">Search design system</label>
            <input
              id="design-system-search"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search design system…"
              className="h-10 w-full border border-input bg-background px-3 text-sm placeholder:text-muted-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring"
            />
          </div>

          <div className="hidden min-h-0 flex-1 overflow-y-auto px-4 pb-4 md:block">
            <NavigationItems
              showOverview={showOverview}
              groups={filteredGroups}
              activeId={active.id}
              query={query}
              select={selectPage}
            />
          </div>

          <details ref={mobileNav} className="border-t border-sidebar-border px-4 py-3 md:hidden">
            <summary
              ref={mobileNavSummary}
              className="cursor-pointer text-sm font-semibold"
            >
              Browse sections: <span className="text-muted-foreground">{active.name}</span>
            </summary>
            <div className="mt-3 max-h-64 overflow-y-auto pb-2">
              <NavigationItems
                showOverview={showOverview}
                groups={filteredGroups}
                activeId={active.id}
                query={query}
                select={selectPage}
              />
            </div>
          </details>
        </aside>

        <main className="min-w-0 px-5 py-7 sm:px-10 sm:py-10 lg:px-14">
          <div className="mx-auto max-w-5xl">
            <header className="flex items-start justify-between gap-4 border-b border-border pb-7 sm:pb-8">
              <div>
                {active.id === OVERVIEW_ENTRY.id ? (
                  <>
                    <p className="font-mono text-[10px] uppercase tracking-[0.13em] text-primary">
                      Visual language · Source-backed
                    </p>
                    <h1 className="mt-3 text-3xl font-semibold tracking-[-0.065em] sm:text-4xl">
                      {DESIGN_SYSTEM.title}
                    </h1>
                    <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground">
                      {DESIGN_SYSTEM.description}
                    </p>
                  </>
                ) : (
                  <>
                    <p className="font-mono text-[10px] uppercase tracking-[0.13em] text-muted-foreground">
                      {activeGroup?.name}
                    </p>
                    <h1 className="mt-2 text-2xl font-semibold tracking-[-0.055em]">
                      {active.name}
                    </h1>
                    <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">
                      {active.description}
                    </p>
                  </>
                )}
              </div>
              <button
                type="button"
                onClick={() => setIsDark((dark) => !dark)}
                aria-pressed={isDark}
                aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
                className="shrink-0 border border-border px-3 py-2 text-xs font-semibold transition-colors hover:bg-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring"
              >
                {isDark ? 'Light theme' : 'Dark theme'}
              </button>
            </header>

            <div className="pt-7 sm:pt-8">
              <Suspense
                fallback={
                  <div role="status" className="border border-border bg-card p-6 text-sm text-muted-foreground">
                    Loading preview…
                  </div>
                }
              >
                <ActivePage />
              </Suspense>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
