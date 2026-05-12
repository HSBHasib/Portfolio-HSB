import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Palette: #27374D, #526D82, #9DB2BF, #DDE6ED

    // --- ১. Admin Mail (Responsive) ---
    const adminMailOptions = {
      from: `"Portfolio Alert" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `📧 New Inquiry from ${name}`,
      html: `
        <div style="background-color: #DDE6ED; padding: 20px; font-family: 'Inter', Helvetica, Arial, sans-serif; color: #27374D; min-height: 100%;">
          <div style="background-color: #ffffff; padding: 25px; border-radius: 16px; border: 1px solid #9DB2BF; max-width: 600px; margin: 20px auto; box-shadow: 0 4px 15px rgba(39, 55, 77, 0.05);">
            <h2 style="color: #27374D; font-size: 20px; margin-bottom: 25px; border-left: 4px solid #526D82; padding-left: 12px; line-height: 1.2;">New Project Inquiry</h2>

            <div style="margin-bottom: 15px;">
              <p style="margin: 0; font-size: 10px; color: #526D82; font-weight: bold; text-transform: uppercase; letter-spacing: 1px;">From</p>
              <p style="margin: 4px 0; font-size: 16px; color: #27374D; font-weight: 600;">${name}</p>
            </div>

            <div style="margin-bottom: 15px;">
              <p style="margin: 0; font-size: 10px; color: #526D82; font-weight: bold; text-transform: uppercase; letter-spacing: 1px;">Reply Email</p>
              <p style="margin: 4px 0; font-size: 15px; color: #526D82; word-break: break-all;">${email}</p>
            </div>

            <div style="margin-top: 20px;">
              <p style="margin: 0; font-size: 10px; color: #526D82; font-weight: bold; text-transform: uppercase; letter-spacing: 1px;">Message Body</p>
              <div style="margin-top: 8px; padding: 15px; background-color: #f8fafc; border-radius: 12px; border: 1px solid #DDE6ED; line-height: 1.6; color: #27374D; font-size: 14px; white-space: pre-wrap;">
                ${message}
              </div>
            </div>
          </div>
          <p style="text-align: center; font-size: 10px; color: #526D82; margin-top: 20px;">Hasibur's Portfolio Automation</p>
        </div>
      `,
    };

    // --- ২. User Mail (Optimized for All Screens) ---
    const userMailOptions = {
      from: `"Hasibur Rahman" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `Hello ${name}, I've received your message!`,
      html: `
        <div style="background-color: #DDE6ED; padding: 15px; font-family: 'Inter', Helvetica, Arial, sans-serif; min-height: 100%;">
          <div style="background-color: #ffffff; padding: 30px 20px; border-radius: 24px; text-align: center; max-width: 500px; margin: 20px auto; border: 1px solid #9DB2BF; box-shadow: 0 10px 25px rgba(39, 55, 77, 0.08);">

            <div style="font-size: 40px; margin-bottom: 15px;">✉️</div>

            <h1 style="color: #27374D; font-size: 22px; margin-bottom: 12px; font-weight: 700; line-height: 1.2;">Hi ${name},</h1>

            <div style="text-align: left; color: #526D82;">
              <p style="font-size: 15px; line-height: 1.6; margin-bottom: 20px;">Hi <strong>${name}</strong>, thank you for reaching out! I have successfully received your message.</p>

              <div style="margin: 20px 0; background-color: #f8fafc; border-left: 4px solid #526D82; padding: 12px; font-style: italic; color: #526D82; font-size: 13px; line-height: 1.5;">I am currently reviewing the details you’ve shared. Please expect a follow-up from me within <strong>24 hours</strong> to discuss this further.</div>

              <p style="font-size: 13px; color: #9DB2BF; margin-bottom: 20px; text-align: center;">Explore my latest updates:</p>

              <div style="text-align: center; margin: 20px 0;">
                <a href="https://github.com/HSBHasib" style="background-color: #27374D; color: #ffffff; padding: 12px 18px; text-decoration: none; border-radius: 10px; font-weight: bold; font-size: 12px; display: inline-block; margin: 5px; min-width: 100px;">GitHub</a>
                <a href="https://www.linkedin.com/in/hasibur-rahman19/" style="border: 2px solid #27374D; color: #27374D; padding: 10px 18px; text-decoration: none; border-radius: 10px; font-weight: bold; font-size: 12px; display: inline-block; margin: 5px; min-width: 100px;">LinkedIn</a>
              </div>
            </div>

            <div style="margin-top: 40px; border-top: 1px solid #DDE6ED; padding-top: 25px; text-align: left;">
              <p style="margin: 0; font-size: 16px; font-weight: bold; color: #27374D;">Hasibur Rahman</p>
              <p style="margin: 2px 0 0 0; font-size: 13px; color: #526D82; letter-spacing: 0.5px;">Frontend Developer</p>
            </div>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(userMailOptions);

    return NextResponse.json({ message: "Success" }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Failed" }, { status: 500 });
  }
}
