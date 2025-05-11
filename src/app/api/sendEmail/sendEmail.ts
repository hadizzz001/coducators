// app/api/sendEmail/sendEmail.ts
"use server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const firstname = formData.get("name"); 
  const email = formData.get("email");
  const phone = formData.get("phone");
  const message = formData.get("message");

  try {
    await resend.emails.send({
      from: "noreply@noreply.hadizproductions.com",
      to: "info@coducators.com",
      subject: "New message from your website",
      text: `Name: ${firstname}\nEmail: ${email}\nPhone: ${phone}\n${message}`,
    });

    // ✅ Instead of redirecting
    return { success: true, message: "Message sent successfully." };
  } catch (error) {
    console.error("Send email error:", error);
    return { success: false, message: "Failed to send message." };
  }
};
