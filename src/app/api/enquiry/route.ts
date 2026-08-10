import { NextResponse } from "next/server";

export type EnquiryPayload = {
  name: string;
  email: string;
  journey: string;
  month: string;
  party: string;
  message: string;
  /** honeypot — must stay empty */
  fax?: string;
};

function invalid(p: Partial<EnquiryPayload>) {
  if (!p.name || p.name.trim().length < 2) return "Please give us a name to reply to.";
  if (!p.email || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(p.email))
    return "That email address does not look right.";
  if (!p.message || p.message.trim().length < 10)
    return "Tell us a little more — a sentence or two is plenty.";
  return null;
}

export async function POST(request: Request) {
  let body: Partial<EnquiryPayload>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Malformed request." }, { status: 400 });
  }

  // Bots fill hidden fields; people do not.
  if (body.fax) return NextResponse.json({ ok: true });

  const error = invalid(body);
  if (error) return NextResponse.json({ error }, { status: 422 });

  // TODO: connect a transactional email provider (Resend, Postmark, SES) and
  // forward this to book@ethiobeyondtours.com. Until then the enquiry is logged
  // so nothing is silently lost in development.
  console.info("[enquiry]", {
    at: new Date().toISOString(),
    name: body.name,
    email: body.email,
    journey: body.journey,
    month: body.month,
    party: body.party,
    message: body.message?.slice(0, 2000),
  });

  return NextResponse.json({ ok: true });
}
