const nodemailer = require("nodemailer");

// Create transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "meleknasri671@gmail.com", // Your Gmail address
    pass: "sincethenewwave03", // Your Gmail password
  },
});

// Define email options
const mailOptions = {
  from: "meleknasri671@gmail.com",
  to: "blackjack78@gmail.com",
  subject: "Test Email from Node.js",
  text: "Hello, this is a test email sent from Node.js!",
};

// Send email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log("Error occurred:", error);
  } else {
    console.log("Email sent successfully:", info.response);
  }
});