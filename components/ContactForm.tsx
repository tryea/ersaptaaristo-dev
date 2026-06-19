"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "ok" | "error";

// Static-export friendly: posts straight from the browser to FormSubmit.co.
// No backend, no API key. First real submission triggers a one-time email
// activation (FormSubmit sends a confirm link to the owner inbox).
const ENDPOINT = "https://formsubmit.co/ajax/aristoersapta@gmail.com";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    if (fd.get("_honey")) return; // honeypot tripped, silently drop
    setStatus("sending");
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: fd.get("name"),
          email: fd.get("email"),
          message: fd.get("message"),
          _subject: "New message from ersaptaaristo.dev",
          _template: "table",
        }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("ok");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "ok") {
    return (
      <div className="card w-full max-w-[420px] p-6">
        <div className="eyebrow flex items-center gap-2">
          <span className="h-1 w-1 rounded-full bg-accent" />
          Message sent
        </div>
        <p className="mt-3 text-[15px] leading-relaxed text-ink-2">
          Thanks for reaching out. I&apos;ll get back to you over email soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-[420px]">
      {/* honeypot: real people leave it empty */}
      <input
        type="text"
        name="_honey"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />
      <div className="grid gap-4">
        <div>
          <label htmlFor="name" className="field-label">
            Name
          </label>
          <input id="name" name="name" type="text" required placeholder="Your name" className="field" />
        </div>
        <div>
          <label htmlFor="email" className="field-label">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@company.com"
            className="field"
          />
        </div>
        <div>
          <label htmlFor="message" className="field-label">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            placeholder="What are you building, and where does AI fit?"
            className="field"
          />
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <button type="submit" disabled={status === "sending"} className="btn btn-accent disabled:opacity-70">
            {status === "sending" ? "Sending…" : "Send message"}
          </button>
          {status === "error" && (
            <span className="text-[13px] text-ink-2">
              Didn&apos;t send.{" "}
              <a href="mailto:aristoersapta@gmail.com" className="text-accent hover:underline">
                Email me
              </a>{" "}
              instead?
            </span>
          )}
        </div>
      </div>
    </form>
  );
}
