import { NextResponse } from "next/server";
import { createTransport } from "nodemailer";

const transporter = createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: true,
  auth: {
    user: process.env.USER_EMAIL,
    pass: process.env.USER_PASS,
  },
});

export const POST = async (req) => {
  try {
    const { firstName, lastName, email, contactNumber, message } = await req.json();

    await new Promise((resolve, reject) => {
      transporter.sendMail(
        {
          from: email,
          to: "drasthasoni111@gmail.com",
          subject: "Online Booking",
          text: `Name: ${firstName} ${lastName}
Contact number: ${contactNumber} 
Email ID: ${email}

${message}`,
        },
        (err, info) => {
          if (err || info.rejected.length) {
            console.error(err);
            reject(new Error("Failed to send email"));
          } else {
            resolve();
          }
        },
      );
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error processing the form:", error);
    return NextResponse.json({ success: false });
  }
};
