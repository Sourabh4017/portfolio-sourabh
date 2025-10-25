import Message from "../models/Message.js";
import nodemailer from "nodemailer";

export const sendMessage = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ success: false, error: "All fields required" });
    }

    // Save message to MongoDB
    const msg = new Message({ name, email, message });
    await msg.save();

    // Create Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 🧠 Create a modern HTML email template
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; background: #f4f4f4; padding: 20px;">
        <div style="max-width: 600px; margin: auto; background: #ffffff; border-radius: 10px; overflow: hidden; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
          <div style="background: #0078ff; padding: 20px; text-align: center; color: #fff;">
            <h1 style="margin: 0;">📩 New Contact Message</h1>
          </div>
          <div style="padding: 25px;">
            <p style="font-size: 16px; color: #333;">You have received a new message from your <strong>Portfolio Website</strong>:</p>
            <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
              <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Name:</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Email:</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">${email}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border: 1px solid #ddd;"><strong>Message:</strong></td>
                <td style="padding: 10px; border: 1px solid #ddd;">${message}</td>
              </tr>
            </table>
            <p style="margin-top: 25px; color: #555;">Respond directly to this email address to contact the sender.</p>
          </div>
          <div style="background: #0078ff; color: #fff; padding: 15px; text-align: center; font-size: 14px;">
            <p>© ${new Date().getFullYear()} Sourabh Mehra Portfolio</p>
          </div>
        </div>
      </div>
    `;

    // Email options
    const mailOptions = {
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.RECEIVER_EMAIL,
      subject: `New Message from ${name}`,
      html: htmlContent,
    };

    // Send email
    await transporter.sendMail(mailOptions);
    console.log(`✅ Email sent from ${name} (${email})`);

    res.json({ success: true, msg: "Message received and styled email sent!" });
  } catch (err) {
    console.error("Error sending email:", err.message);
    res.status(500).json({ success: false, error: err.message });
  }
};
