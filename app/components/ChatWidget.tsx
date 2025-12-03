"use client";

import { FormEvent, useEffect, useRef, useState } from "react";

type ChatMessage = {
  role: "user" | "model";
  content: string;
};

const formatMessage = (text: string) => {
  const escaped = text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
  const withMarkdownLinks = escaped.replace(
    /\[([^\]]+)\]\((https?:\/\/[^\s<)]+)\)/g,
    (_m, text, url) =>
      `<a href="${url}" target="_blank" rel="noreferrer" class="text-[#2f1b52] underline underline-offset-2">${text}</a>`
  );

  const linkifiedSegments = withMarkdownLinks
    .split(/(<a[^>]*>.*?<\/a>)/)
    .map((segment) => {
      if (segment.startsWith("<a")) return segment;
      return segment.replace(
        /(https?:\/\/[^\s<]+)|(mailto:[^\s<]+)/g,
        (match) =>
          `<a href="${match}" target="_blank" rel="noreferrer" class="text-[#2f1b52] underline underline-offset-2">${match}</a>`
      );
    })
    .join("");

  const withBold = linkifiedSegments.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");

  const lines = withBold.split(/\r?\n/);
  let inList = false;
  const chunks: string[] = [];

  for (const line of lines) {
    const trimmed = line.trim();
    const bulletMatch = /^[-*]\s+(.+)$/.exec(trimmed);

    if (bulletMatch) {
      if (!inList) {
        chunks.push('<ul class="list-disc pl-5 space-y-1">');
        inList = true;
      }
      chunks.push(`<li>${bulletMatch[1]}</li>`);
    } else {
      if (inList) {
        chunks.push("</ul>");
        inList = false;
      }
      if (trimmed.length > 0) {
        chunks.push(`<p>${trimmed}</p>`);
      }
    }
  }

  if (inList) {
    chunks.push("</ul>");
  }

  return chunks.join("");
};

const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8000";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "model",
      content: "Hi! I’m Felix’s AI helper. Ask about projects or tech.",
    },
  ]);
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  const sendMessage = async (evt: FormEvent) => {
    evt.preventDefault();
    const text = input.trim();
    if (!text || loading) return;

    const newMessages = [...messages, { role: "user" as const, content: text }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const apiHistory = messages.slice(1).map((msg) => ({
        role: msg.role,
        parts: [{ text: msg.content }],
      }));

      apiHistory.push({
        role: "user",
        parts: [{ text: text }],
      });

      const res = await fetch(`${API_URL}/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ contents: apiHistory }),
      });

      if (!res.ok) {
        throw new Error(await res.text());
      }

      const data = await res.json();


      const replyText =
        data.candidates?.[0]?.content?.parts?.[0]?.text ||
        "Sorry, I couldn't generate a response.";

      setMessages((prev) => [...prev, { role: "model", content: replyText }]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { role: "model", content: "I hit an error reaching the AI. Check the API server/key." },
      ]);
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {!open && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="group relative flex items-center gap-3 rounded-full bg-[#2f1b52] px-5 py-3 text-white shadow-xl shadow-purple-300/50 transition-all duration-300 hover:shadow-2xl active:scale-95 cursor-pointer"
          aria-expanded={open}
        >
          <span className="absolute inset-0 rounded-full bg-white/10 opacity-0 transition group-hover:opacity-100" />
          <span className="relative font-semibold">Chat with AI</span>
          <span
            className="relative h-7 w-7 rounded-full bg-white/90 text-[#2f1b52] text-xs font-bold flex items-center justify-center transition"
            aria-hidden
          >
            +
          </span>
        </button>
      )}

      {open && (
        <div className="mt-3 w-[360px] max-w-[calc(100vw-40px)] overflow-hidden rounded-2xl border border-purple-100 bg-white/90 backdrop-blur shadow-2xl shadow-purple-200/70">
          <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-white via-[#f7f2ff] to-white">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-[#2f1b52] text-white flex items-center justify-center text-xs font-semibold">
                AI
              </div>
              <div>
                <p className="text-sm font-semibold text-[#2f1b52]">AI Felix</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="rounded-full p-1 text-slate-500 transition hover:bg-purple-50 hover:text-[#2f1b52] cursor-pointer"
              aria-label="Close chat"
            >
              ✕
            </button>
          </div>

          <div className="max-h-80 overflow-y-auto px-4 py-3 space-y-3">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`rounded-2xl px-4 py-2 text-sm shadow-sm ${
                    msg.role === "user"
                      ? "bg-[#2f1b52] text-white rounded-tr-sm"
                      : "bg-white border border-purple-100 text-slate-800 rounded-tl-sm"
                  }`}
                >
                  <span
                    dangerouslySetInnerHTML={{ __html: formatMessage(msg.content) }}
                  />
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="rounded-2xl bg-white border border-purple-100 px-3 py-2 text-sm text-slate-600 shadow-sm">
                  Typing…
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          <form onSubmit={sendMessage} className="border-t border-purple-100 bg-white/80">
            <div className="flex items-center gap-2 px-3 py-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about projects or tech..."
                className="flex-1 rounded-xl border border-purple-100 bg-white px-3 py-2 text-base outline-none ring-0 focus:border-[#7c3aed]"
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                className="inline-flex items-center gap-2 rounded-xl bg-[#2f1b52] px-3 py-2 text-base font-semibold text-white shadow-md transition hover:-translate-y-[1px] disabled:opacity-50"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
