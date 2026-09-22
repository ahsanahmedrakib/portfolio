import { mkdir, appendFile } from "node:fs/promises";
import path from "node:path";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 5;
const submissions = new Map<string, number[]>();

export type ContactRequest = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
};

export type ContactResult =
  | { ok: true; status: 200; body: { message: string } }
  | { ok: false; status: 400 | 429 | 500; body: { error: string } };

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export async function handleContact(data: ContactRequest, ip: string): Promise<ContactResult> {
  const now = Date.now();
  const recent = (submissions.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  if (recent.length >= MAX_PER_WINDOW) {
    submissions.set(ip, recent);
    return {
      ok: false,
      status: 429,
      body: { error: "Too many requests. Please wait a minute and try again." },
    };
  }
  recent.push(now);
  submissions.set(ip, recent);

  const name = clean(data.name);
  const email = clean(data.email).toLowerCase();
  const subject = clean(data.subject);
  const message = clean(data.message);

  if (name.length < 2 || name.length > 100) {
    return { ok: false, status: 400, body: { error: "Please provide a valid name." } };
  }
  if (!EMAIL_RE.test(email) || email.length > 200) {
    return { ok: false, status: 400, body: { error: "Please provide a valid email address." } };
  }
  if (subject.length < 3 || subject.length > 200) {
    return { ok: false, status: 400, body: { error: "Please provide a subject (min 3 characters)." } };
  }
  if (message.length < 10 || message.length > 5000) {
    return { ok: false, status: 400, body: { error: "Please write a longer message (min 10 characters)." } };
  }

  const entry = {
    id: `${now}-${Math.random().toString(36).slice(2, 8)}`,
    name,
    email,
    subject,
    message,
    ip,
    createdAt: new Date(now).toISOString(),
  };

  try {
    const dir = path.join(process.cwd(), "data");
    await mkdir(dir, { recursive: true });
    await appendFile(path.join(dir, "contact-messages.jsonl"), `${JSON.stringify(entry)}\n`, "utf8");
  } catch {
    return {
      ok: false,
      status: 500,
      body: { error: "Message could not be stored right now. Please try again later." },
    };
  }

  return {
    ok: true,
    status: 200,
    body: { message: "Thanks for reaching out! I'll get back to you soon." },
  };
}