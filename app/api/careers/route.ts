import { NextResponse } from "next/server";

const CAREERS_RECIPIENT =
  process.env.CAREERS_RECIPIENT_EMAIL || "careers@ruraltechnologies.co";
const RESEND_API_URL = "https://api.resend.com/emails";
const MAX_RESUME_SIZE = 5 * 1024 * 1024;

function sanitize(value: FormDataEntryValue | null): string {
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
    const formData = await request.formData();

    if (sanitize(formData.get("website"))) {
      return NextResponse.json({ message: "Application received." }, { status: 200 });
    }

    const name = sanitize(formData.get("name"));
    const email = sanitize(formData.get("email"));
    const position = sanitize(formData.get("position"));
    const area = sanitize(formData.get("area"));
    const experience = sanitize(formData.get("experience"));
    const location = sanitize(formData.get("location"));
    const motivation = sanitize(formData.get("motivation"));
    const impact = sanitize(formData.get("impact"));
    const profile = sanitize(formData.get("profile"));
    const timeline = sanitize(formData.get("timeline"));
    const compensationAck = sanitize(formData.get("compensationAck"));
    const resume = formData.get("resume");

    if (!name || !email || !position || !area || !experience || !location || !motivation || !impact || !timeline) {
      return NextResponse.json(
        { message: "Please complete all required fields." },
        { status: 400 },
      );
    }

    if (compensationAck !== "yes") {
      return NextResponse.json(
        { message: "Please acknowledge the early-stage compensation notice." },
        { status: 400 },
      );
    }

    if (!isEmail(email)) {
      return NextResponse.json(
        { message: "Please enter a valid email address." },
        { status: 400 },
      );
    }

    if (!(resume instanceof File) || resume.size === 0) {
      return NextResponse.json(
        { message: "Please upload your resume file." },
        { status: 400 },
      );
    }

    if (resume.size > MAX_RESUME_SIZE) {
      return NextResponse.json(
        { message: "Resume must be 5MB or smaller." },
        { status: 400 },
      );
    }

    const allowedMimeTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    if (!allowedMimeTypes.includes(resume.type)) {
      return NextResponse.json(
        { message: "Resume must be a PDF, DOC, or DOCX file." },
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
    const text = [
      "New RURAL job application",
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      `Position Interest: ${position}`,
      `Area Of Interest: ${area}`,
      `Experience: ${experience}`,
      `Location/Time Zone: ${location}`,
      `Start Timeline: ${timeline}`,
      `Profile Link: ${profile || "N/A"}`,
      "Compensation Acknowledgment: Yes",
      `Submitted: ${submittedAt}`,
      "",
      "Why join RURAL?",
      motivation,
      "",
      "First 90-day impact:",
      impact,
    ].join("\n");

    const html = `
      <div style="font-family:Arial,sans-serif;line-height:1.6;color:#111;">
        <h2 style="margin:0 0 12px;">New quick job application</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Position Interest:</strong> ${escapeHtml(position)}</p>
        <p><strong>Area Of Interest:</strong> ${escapeHtml(area)}</p>
        <p><strong>Experience:</strong> ${escapeHtml(experience)}</p>
        <p><strong>Location/Time Zone:</strong> ${escapeHtml(location)}</p>
        <p><strong>Start Timeline:</strong> ${escapeHtml(timeline)}</p>
        <p><strong>Profile Link:</strong> ${escapeHtml(profile || "N/A")}</p>
        <p><strong>Compensation Acknowledgment:</strong> Yes</p>
        <p><strong>Submitted:</strong> ${escapeHtml(submittedAt)}</p>
        <hr style="margin:16px 0;border:none;border-top:1px solid #ddd;" />
        <p style="white-space:pre-wrap;"><strong>Why join RURAL?</strong><br />${escapeHtml(motivation)}</p>
        <p style="white-space:pre-wrap;"><strong>First 90-day impact:</strong><br />${escapeHtml(impact)}</p>
      </div>
    `;

    const bytes = await resume.arrayBuffer();
    const content = Buffer.from(bytes).toString("base64");
    const safeFilename = resume.name || "resume";

    const resendResponse = await fetch(RESEND_API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [CAREERS_RECIPIENT],
        reply_to: email,
        subject: `Application: ${position} (${area}) - ${name}`,
        text,
        html,
        attachments: [
          {
            filename: safeFilename,
            content,
          },
        ],
      }),
    });

    if (!resendResponse.ok) {
      const resendError = await resendResponse.text();
      return NextResponse.json(
        { message: `Email provider error: ${resendError}` },
        { status: 502 },
      );
    }

    return NextResponse.json({ message: "Application submitted successfully." }, { status: 200 });
  } catch {
    return NextResponse.json(
      { message: "Unable to process your application right now. Please try again." },
      { status: 500 },
    );
  }
}
