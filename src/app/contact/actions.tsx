"use server";
import nodemailer from "nodemailer";

export async function sendEmail(formData: FormData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  // 1. Set up the "Transporter" (The engine that sends the mail)
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "mailmeakash2@gmail.com", 
      pass: process.env.GMAIL_APP_PASSWORD, 
    },
  });

  const mailOptions = {
    from: email as string,
    to: "mailmeakash2@gmail.com",
    subject: `PORTFOLIO UPLINK from ${name}`,
    text: `Sender: ${email}\n\nMessage:\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error("Transmission Error:", error);
    return { success: false };
  }
}