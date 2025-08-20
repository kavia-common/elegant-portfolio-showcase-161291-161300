import React from "react";

// PUBLIC_INTERFACE
/**
 * Skills
 * Grid of skill pills highlighting technologies and competencies.
 */
function Skills() {
  const skills = [
    "React",
    "TypeScript",
    "JavaScript (ES6+)",
    "Tailwind CSS",
    "Node.js",
    "REST APIs",
    "Vite / CRA",
    "Jest / RTL",
    "Accessibility (a11y)",
    "Responsive Design",
    "CI/CD",
    "Git & GitHub",
  ];

  return (
    <section id="skills" className="section bg-secondary/40 border-y border-secondary">
      <div className="container-custom">
        <h2 className="h-section">Skills & Technologies</h2>
        <p className="mt-2 h-subtle">Tools I build with and enjoy.</p>

        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {skills.map((s) => (
            <div
              key={s}
              className="rounded-lg border border-secondary bg-white px-3 py-2 text-sm text-slate-700 hover:border-accent transition-colors"
            >
              {s}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
