import React from "react";

// PUBLIC_INTERFACE
/**
 * Projects
 * Card-based project gallery with placeholders for images and links.
 */
function Projects() {
  const projects = [
    {
      title: "Minimal Portfolio",
      description:
        "A subtle, responsive portfolio template focused on clarity and polish.",
      tags: ["React", "Tailwind CSS"],
      link: "#",
    },
    {
      title: "Dashboard UI",
      description:
        "Data-driven dashboard with accessible components and dark mode.",
      tags: ["React", "TypeScript"],
      link: "#",
    },
    {
      title: "Design System",
      description:
        "Custom component library with tokens, themes, and documentation.",
      tags: ["Storybook", "Design Tokens"],
      link: "#",
    },
  ];

  return (
    <section id="projects" className="section">
      <div className="container-custom">
        <h2 className="h-section">Projects</h2>
        <p className="mt-2 h-subtle">Selected work and experiments.</p>

        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article key={p.title} className="card overflow-hidden group">
              <div className="h-36 bg-subtle-radial" />
              <div className="p-5">
                <h3 className="text-lg font-semibold text-slate-900">{p.title}</h3>
                <p className="mt-2 text-sm text-primary">{p.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-1 rounded-md bg-secondary text-slate-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-4">
                  <a
                    href={p.link}
                    className="text-sm text-accent hover:underline"
                    aria-label={`Open ${p.title}`}
                  >
                    View project →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
