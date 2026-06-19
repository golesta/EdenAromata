import { NextResponse } from "next/server";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: { email?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const email = body.email?.trim().toLowerCase();
  if (!email || !EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Valid email required" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "Not configured" }, { status: 500 });
  }

  const audienceId = process.env.RESEND_AUDIENCE_ID;

  if (audienceId) {
    const res = await fetch(`https://api.resend.com/audiences/${audienceId}/contacts`, {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({ email, unsubscribed: false }),
    });
    if (!res.ok) {
      return NextResponse.json({ error: "Could not store subscription" }, { status: 500 });
    }
  } else {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: "Eden Aromate <onboarding@resend.dev>",
        to: ["sal@salaro.com"],
        subject: "New Eden Aromate subscriber",
        text: `New subscriber: ${email}`,
      }),
    });
    if (!res.ok) {
      return NextResponse.json({ error: "Could not store subscription" }, { status: 500 });
    }
  }

  return NextResponse.json({ success: true });
}
