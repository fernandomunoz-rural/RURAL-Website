"use client";

import { FormEvent, useState } from "react";
import {
  Building2,
  Loader2,
  Mail,
  MessageSquareText,
  Send,
  UserRound,
} from "lucide-react";

import { Button } from "@/components/ui/button";

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setMessage("");

    const form = event.currentTarget;
    const data = new FormData(form);

    const payload = {
      name: String(data.get("name") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      organization: String(data.get("organization") ?? "").trim(),
      reason: String(data.get("reason") ?? "").trim(),
      details: String(data.get("details") ?? "").trim(),
      website: String(data.get("website") ?? "").trim(),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const body = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(body.message || "Unable to send your message.");
      }

      form.reset();
      setStatus("success");
      setMessage("Message sent. We usually reply within 1-2 business days.");
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again in a moment.",
      );
    }
  }

  const fieldClassName =
    "h-12 w-full rounded-xl border border-zinc-700/80 bg-zinc-900/90 pl-11 pr-3 text-sm text-zinc-100 outline-none transition placeholder:text-zinc-500 focus:border-purple-400/70 focus:ring-2 focus:ring-purple-400/30";

  return (
    <form
      onSubmit={onSubmit}
      className="space-y-6 rounded-3xl border border-zinc-700/80 bg-gradient-to-b from-zinc-900/95 via-zinc-900/90 to-zinc-950 p-5 shadow-[0_18px_60px_-30px_rgba(147,51,234,0.6)] md:p-7"
    >
      <div className="flex items-center justify-between gap-4 border-b border-zinc-800/90 pb-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-purple-200/90">
            Direct Message
          </p>
          <h4 className="mt-2 text-xl font-semibold text-zinc-100">Start The Conversation</h4>
        </div>
        <div className="rounded-full border border-purple-300/30 bg-purple-500/10 px-3 py-1 text-xs text-purple-100">
          Response in 1-2 business days
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="space-y-2">
          <span className="text-sm font-medium text-zinc-200">Full Name</span>
          <div className="relative">
            <UserRound className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-zinc-500" />
            <input
              name="name"
              type="text"
              required
              autoComplete="name"
              placeholder="Jane Smith"
              className={fieldClassName}
            />
          </div>
        </label>

        <label className="space-y-2">
          <span className="text-sm font-medium text-zinc-200">Email</span>
          <div className="relative">
            <Mail className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-zinc-500" />
            <input
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="you@company.com"
              className={fieldClassName}
            />
          </div>
        </label>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="space-y-2">
          <span className="text-sm font-medium text-zinc-200">Organization (Optional)</span>
          <div className="relative">
            <Building2 className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-zinc-500" />
            <input
              name="organization"
              type="text"
              autoComplete="organization"
              placeholder="Rural College Network"
              className={fieldClassName}
            />
          </div>
        </label>

        <label className="space-y-2">
          <span className="text-sm font-medium text-zinc-200">Reason</span>
          <div className="relative">
            <MessageSquareText className="pointer-events-none absolute left-3 top-1/2 z-10 size-4 -translate-y-1/2 text-zinc-500" />
            <select
              name="reason"
              required
              defaultValue=""
              className={`${fieldClassName} appearance-none`}
            >
              <option value="" disabled>
                Select one
              </option>
              <option value="Partnership">Partnership</option>
              <option value="Product">Product Inquiry</option>
              <option value="Support">Support</option>
              <option value="General">General Message</option>
            </select>
          </div>
        </label>
      </div>

      <label className="space-y-2">
        <span className="text-sm font-medium text-zinc-200">Message</span>
        <textarea
          name="details"
          required
          rows={6}
          maxLength={2000}
          placeholder="Tell us what you are building and how we can help."
          className="w-full rounded-xl border border-zinc-700/80 bg-zinc-900/90 px-3 py-3 text-sm text-zinc-100 outline-none transition placeholder:text-zinc-500 focus:border-purple-400/70 focus:ring-2 focus:ring-purple-400/30"
        />
      </label>

      <input
        name="website"
        type="text"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="flex flex-col gap-3 border-t border-zinc-800/90 pt-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-zinc-400">
          Sent to contact@ruraltechnologies.co. We only use this information to respond.
        </p>
        <Button
          type="submit"
          disabled={status === "submitting"}
          className="h-11 rounded-xl bg-purple-500 px-5 text-white hover:bg-purple-400 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "submitting" ? (
            <>
              <Loader2 className="size-4 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              Send message
              <Send className="size-4" />
            </>
          )}
        </Button>
      </div>

      {status !== "idle" && (
        <p className={`text-sm ${status === "success" ? "text-emerald-400" : "text-red-300"}`}>
          {message}
        </p>
      )}
    </form>
  );
}
