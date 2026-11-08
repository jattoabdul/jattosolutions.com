// A fixed-window limiter held in memory. The site runs as a single long-lived Node process
// on Railway, so this is enough to slow a script down; it resets on deploy, which is fine.

type Window = { count: number; resetAt: number };

const windows = new Map<string, Window>();

export function rateLimit(key: string, { limit, windowMs }: { limit: number; windowMs: number }) {
  const now = Date.now();

  if (windows.size > 5000) {
    for (const [k, w] of windows) if (w.resetAt <= now) windows.delete(k);
  }

  const current = windows.get(key);
  if (!current || current.resetAt <= now) {
    windows.set(key, { count: 1, resetAt: now + windowMs });
    return { allowed: true };
  }

  current.count += 1;
  return { allowed: current.count <= limit };
}
