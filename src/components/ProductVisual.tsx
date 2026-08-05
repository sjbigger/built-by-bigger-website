export function ProductVisual() {
  return (
    <div
      aria-hidden="true"
      className="relative overflow-hidden rounded-2xl border border-border bg-surface p-5 shadow-[0_24px_60px_-36px_rgba(15,23,41,0.45)] sm:p-6"
    >
      <div className="visual-glow pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent/15 blur-2xl" />
      <div className="visual-glow pointer-events-none absolute -bottom-12 -left-8 h-36 w-36 rounded-full bg-accent/10 blur-2xl" />

      <div className="relative space-y-4">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted">
              Daily plan
            </p>
            <p className="display-font mt-1 text-lg font-semibold text-foreground">
              Midweek training day
            </p>
          </div>
          <span className="rounded-full border border-border bg-surface-soft px-3 py-1 text-xs font-medium text-muted">
            On device
          </span>
        </div>

        <div className="grid grid-cols-3 gap-2">
          {[
            { label: "Energy", value: "2,140" },
            { label: "Protein", value: "148 g" },
            { label: "Logged", value: "6 / 8" },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-xl border border-border bg-surface-soft px-3 py-3"
            >
              <p className="text-[0.7rem] uppercase tracking-[0.08em] text-muted">
                {item.label}
              </p>
              <p className="mt-1 text-sm font-semibold text-foreground">
                {item.value}
              </p>
            </div>
          ))}
        </div>

        <div className="space-y-2">
          {[
            { meal: "Breakfast", detail: "Oats, berries, yogurt", done: true },
            { meal: "Lunch", detail: "Chicken, rice, greens", done: true },
            { meal: "Dinner", detail: "Salmon, potatoes, salad", done: false },
          ].map((row) => (
            <div
              key={row.meal}
              className="flex items-center gap-3 rounded-xl border border-border bg-background/70 px-3 py-3"
            >
              <span
                className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${
                  row.done
                    ? "border-accent bg-accent text-white dark:text-background"
                    : "border-border bg-surface"
                }`}
              >
                {row.done ? (
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M2.5 6.2L4.8 8.5L9.5 3.5"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : null}
              </span>
              <div className="min-w-0">
                <p className="text-sm font-medium text-foreground">{row.meal}</p>
                <p className="truncate text-xs text-muted">{row.detail}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-xl border border-border bg-accent-soft/60 p-4">
          <div className="flex items-end justify-between gap-3">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.12em] text-muted">
                Weight trend
              </p>
              <p className="mt-1 text-sm text-foreground">
                Steady progress this week
              </p>
            </div>
            <p className="display-font text-2xl font-semibold text-accent">
              −1.2
            </p>
          </div>
          <svg
            className="mt-4 h-16 w-full text-accent"
            viewBox="0 0 280 64"
            fill="none"
            preserveAspectRatio="none"
          >
            <path
              d="M0 48 C40 46, 60 42, 90 38 C120 34, 140 40, 170 28 C200 16, 230 22, 280 12"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <path
              d="M0 48 C40 46, 60 42, 90 38 C120 34, 140 40, 170 28 C200 16, 230 22, 280 12 V64 H0 Z"
              fill="currentColor"
              opacity="0.12"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
