import { NextResponse } from "next/server";
import { handleContact, type ContactRequest } from "@/components/features/contact";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";

  let data: ContactRequest;
  try {
    data = (await request.json()) as ContactRequest;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const result = await handleContact(data, ip);
  if (!result.ok) {
    return NextResponse.json({ error: result.body.error }, { status: result.status });
  }
  return NextResponse.json({ message: result.body.message }, { status: result.status });
}