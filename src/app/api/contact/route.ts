import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { fullName, email, phone, userType, message } = await request.json();

    // Field validations
    if (!fullName || !email || !phone || !userType || !message) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Enter a valid email address." }, { status: 400 });
    }

    // Prepare email layout
    const emailBody = `New AjiraLink Contact Form Submission

Full Name: ${fullName}

Email Address: ${email}

Phone Number: ${phone}

User Type: ${userType}

Message:
${message}`;

    // Environment-driven email routing
    const formspreeFormId = process.env.FORMSPREE_FORM_ID;
    const formspreeUrl = process.env.FORMSPREE_URL || (formspreeFormId ? `https://formspree.io/f/${formspreeFormId}` : null);
    const resendApiKey = process.env.RESEND_API_KEY;

    if (formspreeUrl) {
      // Forward to Formspree
      const res = await fetch(formspreeUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          fullName,
          email,
          phone,
          userType,
          message,
          _subject: "New AjiraLink Contact Form Submission",
        }),
      });

      if (!res.ok) {
        const errText = await res.text();
        return NextResponse.json({ error: `Formspree API error: ${errText}` }, { status: res.status });
      }

      return NextResponse.json({ success: true });
    } else if (resendApiKey) {
      // Send using Resend
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${resendApiKey}`,
        },
        body: JSON.stringify({
          from: "AjiraLink Contact <onboarding@resend.dev>",
          to: "linkajira@gmail.com",
          subject: "New AjiraLink Contact Form Submission",
          text: emailBody,
        }),
      });

      if (!res.ok) {
        const errText = await res.text();
        return NextResponse.json({ error: `Resend API error: ${errText}` }, { status: res.status });
      }

      return NextResponse.json({ success: true });
    } else {
      // Fallback: If neither is configured in production, we log it and return error.
      // But for testing purposes, we can mock success if specifically requested,
      // but the prompt says: "Do NOT fake submissions. The form must actually deliver messages. Use a production-ready solution."
      // So we return a configuration error.
      console.warn("Neither RESEND_API_KEY nor FORMSPREE_FORM_ID/FORMSPREE_URL is set in environment.");
      return NextResponse.json(
        { error: "Server Configuration Error: Email API Key or Formspree ID is not configured." },
        { status: 500 }
      );
    }
} catch (error) {
  const err = error instanceof Error ? error : new Error(String(error));
  return NextResponse.json({ error: err.message || "Internal Server Error" }, { status: 500 });
}
}
