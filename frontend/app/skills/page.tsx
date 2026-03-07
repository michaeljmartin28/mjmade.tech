"use client";

import { useState } from "react";

const skills = [
  {
    id: "backend",
    name: "Backend Engineering",
    proficiency: "Advanced",
    description:
      "Expertise in building scalable, secure distributed systems and high-throughput APIs. Specializing in identity-driven architectures, multi-party coordination, and resilient asynchronous workloads.",
    technologies: [
      "Node.js",
      "Python",
      "Go",
      "TypeScript",
      "gRPC",
      "OAuth2 / OIDC",
      "mTLS",
      "Hyperledger Fabric",
      "Redis",
      "MongoDB",
      "Docker Swarm",
      "Async Patterns",
    ],
    experience:
      "5+ years engineering production-grade services across Node.js, Python, and Go. Architected Fabric-based blockchain networks and chaincode operations. Expert in managing complex identity flows, distributed debugging, and high-performance job pipelines. Proven track record of securing service-to-service communication and optimizing containerized environments for scale.",
  },
  {
    id: "appsec",
    name: "Application Security",
    proficiency: "Advanced",
    description:
      "Expertise in 'Secure-by-Design' architecture, focusing on robust identity management, modern authentication flows, and proactive threat modeling.",
    technologies: [
      "OAuth2",
      "OIDC",
      "JWT",
      "PKCE",
      "MFA",
      "Code Reviews",
      "Secure Coding",
      "Threat Modeling",
    ],
    experience:
      "Specialist in securing distributed systems and R&D projects. Lead internal code reviews to eliminate vulnerability classes before they hit production. Facilitate cyber tabletop exercises to simulate realistic attack paths, mapping architectural weaknesses to actionable mitigation strategies and guiding engineering teams through secure implementation patterns.",
  },
  {
    id: "pentest",
    name: "Offensive Security & Pentesting",
    proficiency: "Advanced / OSCP",
    description:
      "Certified Offensive Security Professional (OSCP) with a focus on manual exploitation, application security, and red-team operations.",
    technologies: [
      "Kali Linux",
      "Burp Suite",
      "Nmap",
      "Python",
      "Nessus",
      "gobuster",
      "dirbuster",
      "john the ripper",
      "hashcat",
      "Metasploit",
      "hydra",
      "ettercap",
      "aircrack-ng",
      "hak5 tools",
      "Wireshark",
      "sqlmap",
      "Custom Tooling",
    ],
    experience:
      "OSCP Certified. Graduate-level Instructor at NJIT for 'Counter Hacking Techniques,' teaching exploit development and vulnerability analysis. Active Red-Team contributor performing full-cycle assessments—from initial recon to source-code-assisted reviews and practical mitigation strategies. Experienced in mapping realistic attack paths and leading tabletop exercises for organizational response evaluation.",
  },
  {
    id: "cloud",
    name: "Cloud & Infrastructure",
    proficiency: "Proficient",
    description:
      "I use cloud services to deploy backend applications, host internal tools, and support R&D environments. My work focuses on configuring core cloud primitives, managing secure access, and running containerized services in a way that supports development and experimentation without overclaiming large‑scale production ops.",
    technologies: [
      "AWS (EC2, S3, IAM, Lambda, Route 53)",
      "Docker",
      "Docker Swarm",
      "Reverse Proxies",
      "Network Configuration",
      "Firewalls",
      "Linux",
    ],
    experience:
      "Set up and maintained cloud-hosted environments for backend services, prototypes, and internal tools. Configured EC2 instances, storage, DNS, and serverless functions; managed IAM roles and secure access patterns; and deployed containerized applications for development and testing. Worked with Linux-based systems, reverse proxies, and CI pipelines to support backend and security-focused projects.",
  },
  {
    id: "languages",
    name: "Languages & Tooling",
    proficiency: "Mixed",
    description:
      "Specializing in high-performance backend architecture with a focus on scalability and developer experience.",
    technologies: [
      "Python (Advanced)",
      "Node.js (Advanced)",
      "TypeScript (Proficient)",
      "Go (Proficient)",
      "Java (Familiar)",
      "C# (Familiar)",
      "C (Familiar)",
      "Git",
      "Jira",
      "VS Code",
      "Docker",
      "Linux",
    ],
    experience:
      "5+ YOE building production-grade services. Proven track record of optimizing system throughput, managing complex state in distributed environments, and mentoring teams on idiomatic and secure coding standards.",
  },
  {
    id: "fullstack",
    name: "Full‑Stack Development",
    proficiency: "Intermediate",
    description:
      "Modern full‑stack development across React, Next.js, Vue, Node.js, and clean UI architecture.",
    technologies: [
      "React",
      "Next.js",
      "Vue",
      "Node.js",
      "Express",
      "TypeScript",
      "Tailwind CSS",
      "Routing",
      "Middleware",
      "API Integration",
    ],
    experience:
      "Built multiple production-grade frontends and full-stack applications, including mjmade.tech and internal workflow-driven UIs using Vue and Node.js backends.",
  },
  {
    id: "containers",
    name: "Containerization & Orchestration",
    proficiency: "Advanced",
    description:
      "Building lean, secure, and production-ready containerized environments using Docker and Compose. Skilled in multi-stage builds, internal networking, resource constraints, and integrating containerized services into CI/CD workflows.",
    technologies: [
      "Docker",
      "Docker Compose",
      "Docker Swarm",
      "Container Networking & Volumes",
      "Layer Caching & Image Optimization",
      "Resource Constraints",
      "CI/CD Pipeline Integration",
    ],
    experience:
      "Designed optimized multi-stage builds and caching strategies that significantly reduced image sizes and build times. Managed persistent volumes, secure service-to-service communication, and multi-container environments in production-like deployments.",
  },
  {
    id: "linux-systems",
    name: "Systems & Linux Engineering",
    proficiency: "Advanced",
    description:
      "Deep experience with POSIX environments, focusing on system observability, process management, and infrastructure automation.",
    technologies: [
      "Bash/Zsh Scripting",
      "Process Management (systemd, signals)",
      "Observability (strace, lsof, htop)",
      "Networking (iptables, netstat, dig)",
      "SSH & Key Management",
      "Filesystem Internals (Inodes, Mounts)",
    ],
    experience:
      "Comfortable navigating the kernel-level boundary to diagnose performance bottlenecks and 'silent' failures. Expertise in automating complex tasks via robust shell scripting, managing user permissions (OCTAL/ACL), and securing containerized environments by mitigating root-access risks and container escapes.",
  },
];

export default function SkillsPage() {
  const [active, setActive] = useState(skills[0].id);
  const selected = skills.find((s) => s.id === active);

  return (
    <div className="min-h-full text-text py-10 px-2">
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
        <div className="flex flex-wrap gap-2">
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

        {selected && (
          <div
            key={selected.id}
            className="bg-surfaceAlt border border-border rounded-xl p-6 animate-slideFadeIn"
          >
            <div className="flex justify-between items-center gap-4 mb-4">
              <h2 className="text-3xl font-semibold text-primary">
                {selected.name}
              </h2>

              <span className="inline-block text-sm px-3 py-1 rounded-full bg-surface border border-border text-textMuted">
                {selected.proficiency}
              </span>
            </div>

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
        )}
      </div>
    </div>
  );
}
