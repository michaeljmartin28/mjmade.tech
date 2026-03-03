"use client";

import { useState } from "react";

const skills = [
  {
    id: "go",
    name: "Go",
    description:
      "Primary backend language. Used for distributed systems, APIs, concurrency-heavy workloads, and secure backend services.",
    technologies: ["Go", "gRPC", "REST", "Concurrency", "Testing"],
    experience:
      "5+ years building production systems, authentication flows, and distributed services.",
  },
  {
    id: "fabric",
    name: "Hyperledger Fabric",
    description:
      "Designed, built, and operated Fabric-based systems including chaincode, MSP configuration, multi-org networks, and secure ledger operations.",
    technologies: ["Fabric CA", "MSP", "CouchDB", "Chaincode (Go)", "Orderers"],
    experience:
      "Led architecture and implementation of enterprise Fabric deployments with multi-org governance.",
  },
  {
    id: "chaincode",
    name: "Chaincode Development",
    description:
      "Implemented smart contracts in Go with deterministic logic, rich queries, endorsement policies, and secure state transitions.",
    technologies: ["Go", "Fabric SDK", "CouchDB Queries"],
    experience:
      "Built production-grade chaincode for enterprise workflows and secure multi-party transactions.",
  },
  {
    id: "oidc",
    name: "OAuth2 / OIDC",
    description:
      "Deep experience designing and implementing secure authentication flows and token-based identity systems.",
    technologies: ["OAuth2", "OIDC", "JWT", "PKCE", "Session Security"],
    experience:
      "Designed secure auth flows for enterprise systems and modern web applications.",
  },
  {
    id: "llm",
    name: "LLM Agents",
    description:
      "Practical experience building retrieval-based agents, tool integrations, and structured reasoning pipelines.",
    technologies: ["Embeddings", "Vector Search", "RAG", "Tooling APIs"],
    experience:
      "Built practical agents with real-world constraints, including your Go-powered AI agent.",
  },
  {
    id: "react",
    name: "React / Next.js",
    description:
      "Modern frontend development with server components, routing, and clean UI architecture.",
    technologies: ["React", "Next.js", "Server Components", "Routing"],
    experience:
      "Built multiple production-grade frontends including mjmade.tech.",
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    description:
      "Utility-first styling with semantic tokens and theme-driven design.",
    technologies: ["Tailwind", "Design Tokens", "Dark Mode", "Responsive UI"],
    experience:
      "Built a fully theme-driven design system for mjmade.tech using CSS variables.",
  },
  {
    id: "docker",
    name: "Docker",
    description:
      "Containerization for local development, CI pipelines, and production deployments.",
    technologies: ["Docker", "Compose", "Images", "Networking"],
    experience:
      "Used extensively for backend services, Fabric networks, and development environments.",
  },
  {
    id: "linux",
    name: "Linux",
    description:
      "Comfortable with system administration, networking, and troubleshooting.",
    technologies: ["Bash", "Networking", "Systemd", "Permissions"],
    experience:
      "Daily driver for backend development, debugging, and server operations.",
  },
];

export default function SkillsPage() {
  const [active, setActive] = useState(skills[0].id);
  const selected = skills.find((s) => s.id === active);

  return (
    <div className="min-h-full bg-bg text-text py-20 px-6">
      <div className="max-w-5xl mx-auto space-y-12">
        <header className="space-y-4">
          <h1 className="text-5xl font-bold tracking-tight text-primary">
            Skills
          </h1>
          <p className="text-lg text-textMuted max-w-2xl">
            Select a skill to learn more about my experience and background.
          </p>
        </header>

        {/* Pill button grid */}
        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <button
              key={skill.id}
              onClick={() => setActive(skill.id)}
              className={`px-2 py-1 rounded-full border border-border transition-colors
                ${
                  active === skill.id
                    ? "bg-primary text-primaryFg"
                    : "bg-surfaceAlt hover:bg-surface text-text"
                }`}
            >
              {skill.name}
            </button>
          ))}
        </div>

        <div
          key={selected.id}
          className="bg-surfaceAlt border border-border rounded-xl p-6 animate-slideFadeIn"
        >
          <h2 className="text-3xl font-semibold text-primary mb-4">
            {selected.name}
          </h2>

          <p className="text-textMuted mb-6">{selected.description}</p>

          <div className="space-y-4">
            <div>
              <p className="font-medium text-text mb-1">Technologies:</p>
              <div className="flex flex-wrap gap-2">
                {selected.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded bg-surface border border-border text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <p className="font-medium text-text mb-1">Experience:</p>
              <p className="text-textMuted">{selected.experience}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
