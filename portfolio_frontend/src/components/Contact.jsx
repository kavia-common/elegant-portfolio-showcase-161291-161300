import React, { useState } from "react";

// PUBLIC_INTERFACE
/**
 * Contact
 * Simple contact form that opens a mailto link, plus a direct email option.
 */
function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const onChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name} <${form.email}>`);
    window.location.href = `mailto:youremail@example.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section bg-secondary/40 border-t border-secondary">
      <div className="container-custom">
        <h2 className="h-section">Contact</h2>
        <p className="mt-2 h-subtle">Let’s connect. I’d love to hear from you.</p>

        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <form onSubmit={onSubmit} className="card p-6">
            <div className="grid gap-4">
              <div>
                <label htmlFor="name" className="block text-sm text-primary">Name</label>
                <input
                  id="name"
                  name="name"
                  className="mt-1 w-full rounded-md border border-secondary px-3 py-2 focus:border-accent focus:outline-none"
                  placeholder="Jane Doe"
                  value={form.name}
                  onChange={onChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm text-primary">Email</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  className="mt-1 w-full rounded-md border border-secondary px-3 py-2 focus:border-accent focus:outline-none"
                  placeholder="jane@example.com"
                  value={form.email}
                  onChange={onChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm text-primary">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="mt-1 w-full rounded-md border border-secondary px-3 py-2 focus:border-accent focus:outline-none"
                  placeholder="Hello!"
                  value={form.message}
                  onChange={onChange}
                  required
                />
              </div>
              <div>
                <button type="submit" className="btn btn-primary w-full">Send Email</button>
              </div>
            </div>
          </form>

          <div className="card p-6">
            <h3 className="text-lg font-semibold text-slate-900">Prefer email?</h3>
            <p className="mt-2 text-primary">
              You can also email me directly. I typically reply within 1–2 business days.
            </p>
            <a
              href="mailto:youremail@example.com"
              className="mt-4 inline-flex text-accent hover:underline"
            >
              youremail@example.com
            </a>
            <div className="mt-6">
              <a href="/resume.pdf" download className="btn btn-ghost">
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
