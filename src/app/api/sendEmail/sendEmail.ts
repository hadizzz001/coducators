// app/api/sendEmail/sendEmail.ts
"use server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const firstname = formData.get("name"); 
  const interest = formData.get("interest");
  const phone = formData.get("phone");
  const message = formData.get("message");
  const age = formData.get("age"); 
  const dateStr = formData.get("date");
const dateObj = new Date(dateStr+"");

// Example: format as "June 13, 2025, 07:31 AM"
const formattedDate = dateObj.toLocaleString('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
  hour12: true
});
 


  try {
    await resend.emails.send({
      from: "noreply@noreply.hadizproductions.com",
      // to: "alihadimedlej001@gmail.com",
      to: "info@coducators.com",
      subject: "New message from your website",
      text: `Name: ${firstname}\nPhone: ${phone}\nInterest: ${interest}\nAge: ${age}\nBest Date & Time: ${formattedDate}\nMessage: ${message}`,
    });

    // ✅ Instead of redirecting
    return { success: true, message: "Your free trial session request has been received. In the meantime, you can check out our courses." };
  } catch (error) {
    console.error("Send email error:", error);
    return { success: false, message: "Failed to send message." };
  }
};
