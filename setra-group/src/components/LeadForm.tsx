"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export default function LeadForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  }

  return (
    <div className="bg-white p-8 rounded-lg border border-[#C0C0C0] shadow-sm">
      <h3 className="text-2xl font-bold text-[#002147] mb-6 text-center">Ready to upgrade your surgical supplies?</h3>
      {status === "success" ? (
        <div className="text-center p-6 bg-green-50 text-green-700 rounded-md">
          <p className="font-semibold">Thank you for your inquiry!</p>
          <p>Our Scottish team will be in touch within 24 hours.</p>
          <button
            onClick={() => setStatus("idle")}
            className="mt-4 text-sm underline"
          >
            Send another inquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-bold text-[#002147] mb-1">Full Name *</label>
            <input name="name" required className="w-full p-2 border border-[#C0C0C0] rounded focus:ring-2 focus:ring-[#008080] focus:outline-none" placeholder="John Doe" />
          </div>
          <div>
            <label className="block text-sm font-bold text-[#002147] mb-1">Business Email *</label>
            <input name="email" type="email" required className="w-full p-2 border border-[#C0C0C0] rounded focus:ring-2 focus:ring-[#008080] focus:outline-none" placeholder="john@hospital.com" />
          </div>
          <div>
            <label className="block text-sm font-bold text-[#002147] mb-1">Company / Organization</label>
            <input name="company" className="w-full p-2 border border-[#C0C0C0] rounded focus:ring-2 focus:ring-[#008080] focus:outline-none" placeholder="NHS Scotland / Private Clinic" />
          </div>
          <div>
            <label className="block text-sm font-bold text-[#002147] mb-1">How can we help?</label>
            <textarea name="message" rows={4} className="w-full p-2 border border-[#C0C0C0] rounded focus:ring-2 focus:ring-[#008080] focus:outline-none" placeholder="Tell us about your surgical requirements..."></textarea>
          </div>
          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full bg-[#002147] text-white py-3 rounded font-bold hover:bg-opacity-90 flex items-center justify-center gap-2 transition-all disabled:opacity-50"
          >
            {status === "loading" ? "Sending..." : "Send Inquiry"}
            <Send className="w-4 h-4" />
          </button>
          {status === "error" && (
            <p className="text-red-600 text-sm text-center">Something went wrong. Please try again.</p>
          )}
        </form>
      )}
    </div>
  );
}
