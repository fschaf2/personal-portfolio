"use client";

import { FormEvent, useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8000";

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");
    setError(null);

    try {
      const response = await fetch(`${API_URL}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const body = await response.json().catch(() => ({}));
        throw new Error(body.detail || "Something went wrong. Please try again.");
      }

      setStatus("success");
      setFormData({ name: "", email: "", project: "", message: "" });
    } catch (err) {
      const fallback = err instanceof Error ? err.message : "Unable to send your message.";
      setError(fallback);
      setStatus("error");
    }
  };

  const disabled = status === "submitting";

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#f7f2ff] via-[#fdf7ec] to-[#ece3ff] text-slate-900">
      <div className="max-w-4xl mx-auto px-6 py-12 flex flex-col gap-10">
        <header className="space-y-3">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Contact</p>
          <h1 className="text-4xl font-bold">Let’s Talk!</h1>
          <p className="text-slate-700 max-w-2xl">
            Tell me about your project, product, challenge, or idea. I’ll follow up quickly with next steps
            and the best way to collaborate.
          </p>
        </header>

        <div className="rounded-2xl bg-white/85 backdrop-blur p-6 shadow-lg shadow-purple-200/50 ring-1 ring-purple-100">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid gap-6 md:grid-cols-2">
              <label className="flex flex-col gap-2 text-sm font-medium text-slate-800">
                Name
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                  required
                  className="w-full rounded-xl border border-purple-100 bg-white/80 px-3 py-2 text-base text-slate-900 placeholder:text-slate-400 focus:border-[#7c3aed] focus:outline-none focus:ring-2 focus:ring-[#c4a5ff]"
                />
              </label>
              
              <label className="flex flex-col gap-2 text-sm font-medium text-slate-800">
                Email
                <input
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                  required
                  className="w-full rounded-xl border border-purple-100 bg-white/80 px-3 py-2 text-base text-slate-900 placeholder:text-slate-400 focus:border-[#7c3aed] focus:outline-none focus:ring-2 focus:ring-[#c4a5ff]"
                />
              </label>
            </div>

            <label className="flex flex-col gap-2 text-sm font-medium text-slate-800">
              Project/Idea
              <input
                type="text"
                placeholder="Your Fabulous Idea"
                value={formData.project}
                onChange={(e) => setFormData((prev) => ({ ...prev, project: e.target.value }))}
                className="w-full rounded-xl border border-purple-100 bg-white/80 px-3 py-2 text-base text-slate-900 placeholder:text-slate-400 focus:border-[#7c3aed] focus:outline-none focus:ring-2 focus:ring-[#c4a5ff]"
              />
            </label>

            <label className="flex flex-col gap-2 text-sm font-medium text-slate-800">
              Message
              <textarea
                rows={5}
                placeholder="Enter Your Message"
                value={formData.message}
                onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                required
                className="w-full rounded-xl border border-purple-100 bg-white/80 px-3 py-2 text-base text-slate-900 placeholder:text-slate-400 focus:border-[#7c3aed] focus:outline-none focus:ring-2 focus:ring-[#c4a5ff]"
              />
            </label>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-2">
              <p className="text-sm text-slate-600">
                I reply within 1 business day. Prefer email? Ping{" "}
                <a href="mailto:felixrobertschafer@gmail.com" className="font-semibold text-[#4c1d95]">
                  felixrobertschafer@gmail.com
                </a>
              </p>
              <button
                type="submit"
                disabled={disabled}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#2f1b52] px-6 py-3 text-white font-semibold shadow-md transition hover:-translate-y-0.5 disabled:translate-y-0 disabled:opacity-70"
              >
                {status === "submitting" ? "Sending…" : "Send message"} <span aria-hidden>→</span>
              </button>
            </div>
            
            {status === "success" && (
              <p className="text-sm text-green-700 bg-green-50 border border-green-100 rounded-xl px-4 py-3">
                Thanks! Your message has been sent.
              </p>
            )}
            {status === "error" && (
              <p className="text-sm text-red-700 bg-red-50 border border-red-100 rounded-xl px-4 py-3">
                {error || "Something went wrong while sending your message."}
              </p>
            )}
          </form>
        </div>
      </div>
    </main>
  );
}
