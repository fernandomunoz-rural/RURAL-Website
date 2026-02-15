import { NextResponse } from "next/server";

const CONTACT_RECIPIENT = "contact@ruraltechnologies.co";
const RESEND_API_URL = "https://api.resend.com/emails";

type ContactRequest = {
  name?: string;
  email?: string;
  organization?: string;
  reason?: string;
  details?: string;
  website?: string;
};

function sanitize(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function isEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactRequest;

    if (sanitize(body.website)) {
      return NextResponse.json({ message: "Thanks for contacting us." }, { status: 200 });
    }

    const name = sanitize(body.name);
    const email = sanitize(body.email);
    const organization = sanitize(body.organization);
    const reason = sanitize(body.reason);
    const details = sanitize(body.details);

    if (!name || !email || !reason || !details) {
      return NextResponse.json(
        { message: "Please complete all required fields." },
        { status: 400 },
      );
    }

    if (!isEmail(email)) {
      return NextResponse.json(
        { message: "Please enter a valid email address." },
        { status: 400 },
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const from = process.env.RESEND_FROM_EMAIL;

    if (!apiKey || !from) {
      return NextResponse.json(
        {
          message:
            "Email sending is not configured yet. Add RESEND_API_KEY and RESEND_FROM_EMAIL to enable delivery.",
        },
        { status: 503 },
      );
    }

    const submittedAt = new Date().toISOString();
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeOrganization = escapeHtml(organization || "N/A");
    const safeReason = escapeHtml(reason);
    const safeSubmittedAt = escapeHtml(submittedAt);
    const safeDetails = escapeHtml(details);
    const text = [
      "New contact form submission",
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      `Organization: ${organization || "N/A"}`,
      `Reason: ${reason}`,
      `Submitted: ${submittedAt}`,
      "",
      "Message:",
      details,
    ].join("\n");

    const html = `
      <div style="font-family:Arial,sans-serif;line-height:1.6;color:#111;">
        <h2 style="margin:0 0 12px;">New contact form submission</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Organization:</strong> ${safeOrganization}</p>
        <p><strong>Reason:</strong> ${safeReason}</p>
        <p><strong>Submitted:</strong> ${safeSubmittedAt}</p>
        <hr style="margin:16px 0;border:none;border-top:1px solid #ddd;" />
        <p style="white-space:pre-wrap;"><strong>Message:</strong><br />${safeDetails}</p>
      </div>
    `;

    const resendResponse = await fetch(RESEND_API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [CONTACT_RECIPIENT],
        reply_to: email,
        subject: `New ${reason} inquiry from ${name}`,
        text,
        html,
      }),
    });

    if (!resendResponse.ok) {
      const resendError = await resendResponse.text();
      return NextResponse.json(
        { message: `Email provider error: ${resendError}` },
        { status: 502 },
      );
    }

    return NextResponse.json({ message: "Message sent successfully." }, { status: 200 });
  } catch {
    return NextResponse.json(
      { message: "Unable to process your request right now. Please try again." },
      { status: 500 },
    );
  }
}
