import React, { useState } from "react";

// PUBLIC_INTERFACE
/**
 * Navbar
 * Top navigation bar with links to sections and a resume download button.
 * Responsive with a compact mobile menu.
 */
function Navbar() {
  const [open, setOpen] = useState(false);
  const navItems = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-secondary">
      <div className="container-custom flex items-center justify-between h-16">
        <a href="#top" className="inline-flex items-center gap-2">
          <span className="h-8 w-8 rounded-md bg-accent/20 grid place-items-center text-slate-900 font-bold">
            A
          </span>
          <span className="sr-only">Home</span>
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-primary hover:text-slate-900 transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="/resume.pdf"
            className="btn btn-primary"
            download
            title="Download Resume"
          >
            Download Resume
          </a>
        </nav>

        <button
          className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md border border-secondary text-slate-700"
          aria-label="Toggle menu"
          onClick={() => setOpen((s) => !s)}
        >
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            {open ? (
              <path strokeWidth="2" strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeWidth="2" strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-secondary bg-white">
          <div className="container-custom py-3 flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm py-2 text-primary hover:text-slate-900"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="/resume.pdf"
              download
              className="btn btn-primary mt-2"
              onClick={() => setOpen(false)}
            >
              Download Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
