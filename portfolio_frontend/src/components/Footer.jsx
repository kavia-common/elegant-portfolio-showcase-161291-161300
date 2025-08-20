import React from "react";

// PUBLIC_INTERFACE
/**
 * Footer
 * Minimal footer with copyright text.
 */
function Footer() {
  return (
    <footer className="border-t border-secondary">
      <div className="container-custom py-6 text-center text-sm text-primary">
        © {new Date().getFullYear()} Your Name. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
