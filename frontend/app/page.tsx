export default function Home() {
  return (
    <div className="min-h-screen bg-bg text-text">
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 space-y-6">
          <h1 className="text-6xl font-bold tracking-tight text-primary">
            Michael Made This
          </h1>

          <p className="text-xl text-textMuted max-w-2xl leading-relaxed">
            Backend engineer specializing in distributed systems, security, and
            practical AI. Building real tools, real demos, and real explanations
            — all under mjmade.tech.
          </p>
        </div>
      </section>

      <section className="py-12 bg-surface border-t border-border">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <a
            href="/projects"
            className="p-6 rounded-xl bg-surfaceAlt border border-border hover:bg-surface transition-colors"
          >
            <h2 className="text-2xl font-semibold text-primary mb-2">
              Projects
            </h2>
            <p className="text-textMuted text-sm">
              Real engineering work with clear writeups.
            </p>
          </a>

          <a
            href="/agent"
            className="p-6 rounded-xl bg-surfaceAlt border border-border hover:bg-surface transition-colors"
          >
            <h2 className="text-2xl font-semibold text-primary mb-2">
              AI Agent
            </h2>
            <p className="text-textMuted text-sm">
              A practical agent powered by your Go backend.
            </p>
          </a>

          <a
            href="/mfa"
            className="p-6 rounded-xl bg-surfaceAlt border border-border hover:bg-surface transition-colors"
          >
            <h2 className="text-2xl font-semibold text-primary mb-2">
              MFA Demo
            </h2>
            <p className="text-textMuted text-sm">
              A simple, secure multi‑factor authentication flow.
            </p>
          </a>
        </div>
      </section>
    </div>
  );
}
