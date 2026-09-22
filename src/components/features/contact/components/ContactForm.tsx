"use client";

import { useState } from "react";
import * as yup from "yup";
import { CheckCircle2, Loader2, Send } from "lucide-react";

type Status = { type: "idle" | "success" | "error"; message?: string };
type FormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const schema = yup.object({
  name: yup
    .string()
    .trim()
    .required("Name is required")
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be 100 characters or fewer"),
  email: yup
    .string()
    .trim()
    .required("Email is required")
    .email("Please enter a valid email address")
    .max(200, "Email must be 200 characters or fewer"),
  subject: yup
    .string()
    .trim()
    .required("Subject is required")
    .min(3, "Subject must be at least 3 characters")
    .max(200, "Subject must be 200 characters or fewer"),
  message: yup
    .string()
    .trim()
    .required("Message is required")
    .min(10, "Message must be at least 10 characters")
    .max(5000, "Message must be 5000 characters or fewer"),
});

const inputClass =
  "w-full rounded-xl border bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition-colors focus:bg-white/[0.05]";
const fieldBase = "border-white/10 focus:border-cyan-400/50";
const fieldError = "border-rose-400/50 focus:border-rose-400/60";

export function ContactForm() {
  const [status, setStatus] = useState<Status>({ type: "idle" });
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof FormValues, string>>>({});

  function clearError(name: keyof FormValues) {
    // clear the field's error as soon as the user types
    setErrors((prev) => (prev[name] ? { ...prev, [name]: undefined } : prev));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const fd = new FormData(form);
    const data: FormValues = {
      name: (fd.get("name") as string) ?? "",
      email: (fd.get("email") as string) ?? "",
      subject: (fd.get("subject") as string) ?? "",
      message: (fd.get("message") as string) ?? "",
    };

    let valid: FormValues;
    try {
      valid = await schema.validate(data, { abortEarly: false });
    } catch (err) {
      if (err instanceof yup.ValidationError) {
        const next: Partial<Record<keyof FormValues, string>> = {};
        for (const e of err.inner) {
          const field = e.path as keyof FormValues;
          if (field && !next[field]) next[field] = e.message;
        }
        setErrors(next);
        setStatus({ type: "idle" });
        // focus the first invalid field
        const first = err.inner[0]?.path;
        if (first) (form.elements.namedItem(first) as HTMLInputElement | HTMLTextAreaElement)?.focus();
      } else {
        setStatus({ type: "error", message: "Validation failed. Please try again." });
      }
      return;
    }

    setErrors({});
    setSubmitting(true);
    setStatus({ type: "idle" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(valid),
      });
      const json = await res.json();

      if (!res.ok) {
        setStatus({ type: "error", message: json.error ?? "Something went wrong. Please try again." });
        return;
      }
      setStatus({ type: "success", message: json.message });
      form.reset();
    } catch {
      setStatus({ type: "error", message: "Network error. Please try again later." });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-slate-400"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Your name"
            onChange={() => clearError("name")}
            className={`${inputClass} ${errors.name ? fieldError : fieldBase}`}
          />
          {errors.name && <p className="mt-1.5 text-xs text-rose-300">{errors.name}</p>}
        </div>

        <div>
          <label
            htmlFor="email"
            className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-slate-400"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="text"
            inputMode="email"
            autoComplete="email"
            placeholder="you@example.com"
            onChange={() => clearError("email")}
            className={`${inputClass} ${errors.email ? fieldError : fieldBase}`}
          />
          {errors.email && <p className="mt-1.5 text-xs text-rose-300">{errors.email}</p>}
        </div>
      </div>

      <div>
        <label
          htmlFor="subject"
          className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-slate-400"
        >
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          placeholder="What is this about?"
          onChange={() => clearError("subject")}
          className={`${inputClass} ${errors.subject ? fieldError : fieldBase}`}
        />
        {errors.subject && <p className="mt-1.5 text-xs text-rose-300">{errors.subject}</p>}
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-slate-400"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Tell me about your project or opportunity..."
          onChange={() => clearError("message")}
          className={`${inputClass} resize-none ${errors.message ? fieldError : fieldBase}`}
        />
        {errors.message && <p className="mt-1.5 text-xs text-rose-300">{errors.message}</p>}
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="btn-sheen inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-500 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:shadow-[0_0_28px_rgba(34,211,238,0.5)] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {submitting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
        {submitting ? "Sending..." : "Send Message"}
      </button>

      {status.type === "success" && (
        <p className="flex items-center gap-2 rounded-xl border border-emerald-400/30 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-300">
          <CheckCircle2 className="h-4 w-4" /> {status.message}
        </p>
      )}
      {status.type === "error" && (
        <p className="rounded-xl border border-rose-400/30 bg-rose-400/10 px-4 py-3 text-sm text-rose-300">
          {status.message}
        </p>
      )}
    </form>
  );
}