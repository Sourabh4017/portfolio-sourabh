import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const mailOptions = {
  from: `"Portfolio Test" <${process.env.EMAIL_USER}>`,
  to: process.env.RECEIVER_EMAIL,
  subject: "✅ Test Email from Portfolio",
  text: "If you see this, Nodemailer works correctly!",
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error("Error sending test email:", error);
  } else {
    console.log("Email sent:", info.response);
  }
});
