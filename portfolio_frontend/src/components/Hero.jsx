import React from "react";

// PUBLIC_INTERFACE
/**
 * Hero
 * Centered hero header with user's name, tagline, and primary calls-to-action.
 */
function Hero() {
  return (
    <section id="top" className="hero-wrap border-b border-secondary">
      <div className="container-custom section min-h-[70vh] flex items-center">
        <div className="w-full text-center max-w-3xl mx-auto">
          <p className="text-sm uppercase tracking-widest text-primary mb-3">
            Portfolio
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900">
            Your Name
          </h1>
          <p className="mt-4 text-lg text-primary">
            Building elegant, performant web experiences with a focus on clarity,
            accessibility, and subtle aesthetics.
          </p>

          <div className="mt-8 flex items-center justify-center gap-3">
            <a href="#projects" className="btn btn-ghost">
              View Projects
            </a>
            <a href="/resume.pdf" download className="btn btn-primary">
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
