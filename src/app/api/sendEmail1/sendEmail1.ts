// app/api/sendEmail/sendEmail.ts
"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const name = formData.get("name");
  const email = formData.get("email");
  const phone = formData.get("phone");
  const message = formData.get("message");
  const cvUrl = formData.get("cvUrl");

  try {
    await resend.emails.send({
      from: "noreply@noreply.hadizproductions.com",
      to: "info@coducators.com",
      subject: "New Job Application",
      text: `
Name: ${name}
Email: ${email}
Phone: ${phone}
Message: ${message}
CV: ${cvUrl}
      `,
    });

    return { success: true, message: "Application sent successfully." };
  } catch (error) {
    console.error("Send email error:", error);
    return { success: false, message: "Failed to send application." };
  }
};
