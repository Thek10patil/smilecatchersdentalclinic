import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface AppointmentRequest {
  name: string;
  phone: string;
  service: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, phone, service, message }: AppointmentRequest = await req.json();

    console.log("Received appointment request:", { name, phone, service, message });

    const emailResponse = await resend.emails.send({
      from: "Smile Catchers <onboarding@resend.dev>",
      to: ["smilecatchers22@gmail.com"],
      subject: `New Appointment Request from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #0ea5e9, #06b6d4); padding: 30px; border-radius: 12px 12px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 24px;">🦷 New Appointment Request</h1>
          </div>
          
          <div style="background: #f8fafc; padding: 30px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 12px 12px;">
            <h2 style="color: #334155; margin-top: 0;">Patient Details</h2>
            
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #64748b; width: 140px;">
                  <strong>Name:</strong>
                </td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #1e293b;">
                  ${name}
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #64748b;">
                  <strong>Phone:</strong>
                </td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #1e293b;">
                  <a href="tel:${phone}" style="color: #0ea5e9; text-decoration: none;">${phone}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #64748b;">
                  <strong>Service:</strong>
                </td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #1e293b;">
                  ${service || "Not specified"}
                </td>
              </tr>
              ${message ? `
              <tr>
                <td style="padding: 12px 0; color: #64748b; vertical-align: top;">
                  <strong>Message:</strong>
                </td>
                <td style="padding: 12px 0; color: #1e293b;">
                  ${message}
                </td>
              </tr>
              ` : ""}
            </table>
            
            <div style="margin-top: 24px; padding: 16px; background: #dbeafe; border-radius: 8px;">
              <p style="margin: 0; color: #1e40af; font-size: 14px;">
                📞 Quick actions: 
                <a href="tel:${phone}" style="color: #1e40af; margin-left: 8px;">Call Patient</a> | 
                <a href="https://wa.me/${phone.replace(/[^0-9]/g, '')}" style="color: #1e40af; margin-left: 8px;">WhatsApp</a>
              </p>
            </div>
          </div>
          
          <p style="text-align: center; color: #94a3b8; font-size: 12px; margin-top: 20px;">
            This email was sent from your Smile Catchers Dental Clinic website.
          </p>
        </div>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true, data: emailResponse }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-appointment-email function:", error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
