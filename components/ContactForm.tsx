"use client";

import { useState, FormEvent } from "react";

const SUPPORT_EMAIL = "support@rakzlab.com";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Message from ${name || "website visitor"}`);
    const body = encodeURIComponent(
      `${message}\n\n—\n${name}\n${email}`
    );
    window.location.href = `mailto:${SUPPORT_EMAIL}?subject=${subject}&body=${body}`;
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5">
      <div className="grid gap-2">
        <label htmlFor="name" className="font-body text-sm text-ink/70">
          Name
        </label>
        <input
          id="name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="rounded-lg border border-line bg-white px-4 py-3 font-body text-sm text-ink outline-none focus:border-teal"
          placeholder="Your name"
        />
      </div>
      <div className="grid gap-2">
        <label htmlFor="email" className="font-body text-sm text-ink/70">
          Email
        </label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="rounded-lg border border-line bg-white px-4 py-3 font-body text-sm text-ink outline-none focus:border-teal"
          placeholder="you@example.com"
        />
      </div>
      <div className="grid gap-2">
        <label htmlFor="message" className="font-body text-sm text-ink/70">
          Message
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="resize-none rounded-lg border border-line bg-white px-4 py-3 font-body text-sm text-ink outline-none focus:border-teal"
          placeholder="How can we help?"
        />
      </div>
      <button
        type="submit"
        className="mt-2 w-fit rounded-full bg-teal px-6 py-3 font-body text-sm font-medium text-paper transition-colors hover:bg-teal-dark"
      >
        Send message
      </button>
      <p className="font-body text-xs text-ink/45">
        This opens your email app with the message pre-filled and addressed
        to {SUPPORT_EMAIL}.
      </p>
    </form>
  );
}
