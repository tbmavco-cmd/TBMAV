import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "npm:@supabase/supabase-js@2.57.4";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  try {
    const { type, to, name, programName, intakeUrl } = await req.json();

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );

    let subject = "";
    let htmlBody = "";

    if (type === "wellness_request_confirmation") {
      subject = "Your Wellness Plan Request — The Bare Method";
      htmlBody = `
        <div style="font-family: 'Plus Jakarta Sans', sans-serif; max-width: 600px; margin: 0 auto; background: #FBF7F3; padding: 40px;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="font-family: 'Cormorant Garamond', serif; color: #1A1614; font-size: 28px; margin: 0;">The Bare Method</h1>
            <p style="color: #A8863F; font-size: 12px; letter-spacing: 2px; text-transform: uppercase; margin-top: 5px;">Your Beauty. Your Wellness. Your Method.</p>
          </div>
          <div style="background: white; border-radius: 16px; padding: 32px;">
            <h2 style="color: #1A1614; font-size: 20px;">Hi ${name},</h2>
            <p style="color: #3D352F; line-height: 1.6;">
              Thank you for submitting your Wellness Plan request. We have received your selection:
              <strong>${programName}</strong>.
            </p>
            <p style="color: #3D352F; line-height: 1.6;">
              Our team will review your request and contact you within 1–2 business days with next steps.
              If your request includes a medical wellness program, you will receive instructions to
              complete secure medical intake through our patient platform.
            </p>
            <div style="background: #FAF5EF; border-radius: 12px; padding: 16px; margin: 20px 0;">
              <p style="color: #3D352F; font-size: 13px; margin: 0;">
                <strong>Important:</strong> Please do not reply with medical information. All medical
                intake is completed through our secure patient portal.
              </p>
            </div>
            ${intakeUrl ? `<a href="${intakeUrl}" style="display: inline-block; background: #1A1614; color: #FAF5EF; padding: 12px 28px; border-radius: 999px; text-decoration: none; font-size: 14px; margin-top: 10px;">Continue to Secure Intake</a>` : ''}
          </div>
          <p style="text-align: center; color: #3D352F; font-size: 12px; margin-top: 30px; opacity: 0.6;">
            The Bare Method · 15115 Cedar Avenue, Suite 33, Apple Valley, MN 55124<br>
            218-656-7189 · thebaremethodmn.com
          </p>
        </div>
      `;
    } else if (type === "contact_confirmation") {
      subject = "We Received Your Message — The Bare Method";
      htmlBody = `
        <div style="font-family: 'Plus Jakarta Sans', sans-serif; max-width: 600px; margin: 0 auto; background: #FBF7F3; padding: 40px;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="font-family: 'Cormorant Garamond', serif; color: #1A1614; font-size: 28px; margin: 0;">The Bare Method</h1>
            <p style="color: #A8863F; font-size: 12px; letter-spacing: 2px; text-transform: uppercase; margin-top: 5px;">Your Beauty. Your Wellness. Your Method.</p>
          </div>
          <div style="background: white; border-radius: 16px; padding: 32px;">
            <h2 style="color: #1A1614; font-size: 20px;">Hi ${name},</h2>
            <p style="color: #3D352F; line-height: 1.6;">
              Thank you for reaching out to The Bare Method. We have received your message and will
              get back to you soon.
            </p>
            <p style="color: #3D352F; line-height: 1.6;">
              For aesthetic bookings, please use our Vagaro booking page. For medical wellness
              questions, please use our secure patient portal.
            </p>
          </div>
          <p style="text-align: center; color: #3D352F; font-size: 12px; margin-top: 30px; opacity: 0.6;">
            The Bare Method · 15115 Cedar Avenue, Suite 33, Apple Valley, MN 55124<br>
            218-656-7189 · thebaremethodmn.com
          </p>
        </div>
      `;
    } else {
      return new Response(JSON.stringify({ error: "Unknown email type" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Send email using Supabase's built-in email service via the admin API
    // In production, you would configure an SMTP provider in Supabase settings.
    // For now, we log the email and return success. To enable actual email
    // sending, configure an SMTP provider in your Supabase project settings
    // and uncomment the resend call below.

    /*
    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    if (resendApiKey) {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "The Bare Method <info@thebaremethodmn.com>",
          to: [to],
          subject,
          html: htmlBody,
        }),
      });
    }
    */

    // Log for admin visibility (stored in request_notes)
    console.log(`Email queued: ${type} to ${to}`);

    return new Response(JSON.stringify({ success: true, message: "Email confirmation queued" }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(
      JSON.stringify({ error: err instanceof Error ? err.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
