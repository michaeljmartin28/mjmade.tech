export default function ProjectsPage() {
  const projects = [
    {
      id: "peek509",
      title: "Peek509",
      description:
        "VS Code extension for decoding PEM/CRT files with custom ASN.1 parsing.",
      tech: ["TypeScript", "VS Code API", "ASN.1"],
      link: "https://marketplace.visualstudio.com/items?itemName=mjmade.peek509",
    },
    {
      id: "agent",
      title: "AI Agent",
      description:
        "A practical LLM agent powered by a Go backend with tool integrations.",
      tech: ["Go", "LLMs", "Vector Search"],
      link: "/agent",
    },
    {
      id: "mfa",
      title: "MFA Demo",
      description:
        "A simple, secure multi-factor authentication flow built in Go.",
      tech: ["Go", "OAuth2", "Security"],
      link: "/mfa",
    },
  ];

  return (
    <div className="min-h-full text-text py-20 px-6">
      <div className="max-w-5xl mx-auto space-y-12">
        <header className="space-y-4">
          <h1 className="text-5xl font-bold tracking-tight text-primary">
            Projects
          </h1>
          <p className="text-lg text-textMuted max-w-2xl">
            Real engineering work with clear writeups and practical demos.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.link}
              className="bg-surfaceAlt border border-border rounded-xl p-6 hover:bg-surface transition-colors"
            >
              <h2 className="text-2xl font-semibold text-primary mb-2">
                {project.title}
              </h2>
              <p className="text-textMuted text-sm mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded bg-surface border border-border text-xs"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
