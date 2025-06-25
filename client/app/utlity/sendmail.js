import nodemailer from "nodemailer";

const sendmail = async (recipients, subject, message) => {
  if (!recipients || recipients.length === 0) {
    return { success: false, message: "No recipients defined" };
  }

 // Check for missing environment variables
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS || !process.env.SMTP_HOST || !process.env.SMTP_PORT) {
      return { success: false, message: "Email credentials or SMTP settings are missing" };
    }

  
  // Create a transporter using the SMTP service for cPanel Webmail
   const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST, // SMTP host (e.g., mail.yourdomain.com)
    port: process.env.SMTP_PORT, // SMTP port (usually 465 for SSL or 587 for TLS)
    secure: true,
    auth: {
      user: process.env.EMAIL_USER, // Your Webmail email address
      pass: process.env.EMAIL_PASS, // Your Webmail email password
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: recipients.join(", "),
    subject,
    text: message,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info);
    return { success: true, message: "Email sent successfully", info };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, message: error.message };
  }
};

export default sendmail;
