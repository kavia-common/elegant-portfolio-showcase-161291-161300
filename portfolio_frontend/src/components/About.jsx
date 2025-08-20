import React from "react";

// PUBLIC_INTERFACE
/**
 * About
 * Describes the person with a short professional summary in a subtle card.
 */
function About() {
  return (
    <section id="about" className="section">
      <div className="container-custom">
        <div className="card p-6 sm:p-8">
          <h2 className="h-section">About</h2>
          <p className="mt-4 text-primary leading-relaxed">
            I’m a frontend engineer who crafts clean, maintainable interfaces.
            I value design systems, thoughtful motion, and accessible, resilient
            UX. I enjoy transforming complex problems into elegant, intuitive
            solutions using modern web technologies.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
