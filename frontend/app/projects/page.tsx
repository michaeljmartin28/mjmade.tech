import Image from "next/image";

export default function ProjectsPage() {
  const projects = [
    {
      id: "peek509",
      name: "Peek509: X.509 Certificate Viewer",
      description:
        "A Visual Studio Code extension for inspecting X.509 certificates in context, making TLS debugging and certificate analysis faster and less error-prone.",
      technologies: ["VS Code Extension", "TypeScript", "X.509", "TLS / PKI"],
      experience:
        "Designed and implemented the extension end-to-end, from UX and parsing logic to publishing on the VS Code Marketplace.",
      link: "https://marketplace.visualstudio.com/items?itemName=mjmade.peek509",
      image: {
        src: "/peek509.gif",
        width: 1200,
        height: 0,
        unoptimized: true,
      },
    },
    {
      id: "mjmade",
      name: "mjmade.tech",
      description:
        "My personal site and portfolio, built with modern full-stack tooling and designed for clarity, performance, and long-term iteration.",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Node.js",
      ],
      experience:
        "Implemented responsive UI, custom theming, semantic design tokens, and a modular skills/projects architecture.",
      link: "https://mjmade.tech",
      image: {
        src: "/mjmade.png",
        width: 600,
        height: 0,
        unoptimized: false,
      },
    },
    {
      id: "njit",
      name: "NJIT CS647: Counter-hacking Techniques",
      description:
        "A graduate-level security course, focused on offensive security, that I designed, implemented, and have been teaching for multiple years.",
      technologies: [
        "Offensive Security",
        "Application Security",
        "Penetration Testing",
        "Curriculum Design",
        "Secure By Design",
      ],
      experience:
        "Built the course from the ground up, including lectures, labs, and assessments.",
      link: "/projects/njit",
      image: {
        src: "/njit.svg",
        width: 600,
        height: 0,
        unoptimized: false,
      },
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
            Some of my work that I am able and willing to share.
          </p>
        </header>

        <div className="space-y-16">
          {projects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col items-center text-center gap-6"
            >
              {/* Image or Placeholder */}
              {project.image ? (
                <Image
                  src={project.image.src}
                  alt={project.name}
                  width={project.image.width || 256}
                  height={project.image.height || 256}
                  unoptimized={project.image.unoptimized}
                  className="rounded-lg object-cover border border-border"
                />
              ) : (
                <div className="w-32 h-32 rounded-lg bg-surfaceAlt border border-border flex items-center justify-center text-primary text-4xl font-bold">
                  {project.name[0]}
                </div>
              )}

              {/* Text Content */}
              <div className="space-y-3 max-w-xl">
                <a
                  href={project.link}
                  className="text-3xl font-semibold text-primary hover:text-primary/80"
                >
                  {project.name}
                </a>

                <p className="text-textMuted text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap justify-center gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 rounded bg-surfaceAlt border border-border text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="h-px w-full bg-border/40" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
