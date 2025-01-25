import { Client as WorkFlowClient } from "@upstash/workflow";
import emailjs from "@emailjs/browser"; // Ensure you have the emailjs-com package installed
import config from "./config";

export const workflowClient = new WorkFlowClient({
  baseUrl: config.env.upstash.qstashUrl,
  token: config.env.upstash.qstashToken,
});

export const sendEmail = async ({
  email,
  subject,
  message,
}: {
  email: string;
  subject: string;
  message: string;
}) => {
  try {
    // Set up loading state if needed
    // setLoading(true); // Uncomment if you want to show a loading state

    const response = await emailjs.send(
      config.env.emailjs.serviceId, // Service ID from EmailJS
      config.env.emailjs.serviceId, // Template ID from EmailJS
      {
        subject: subject,
        email: email,
        message_html: message,
      },
      { publicKey: config.env.emailjs.publicKey } // Public key from your EmailJS dashboard
    );

    // Handle success
    console.log("Email sent successfully:", response.status, response.text);

    // Reset form (if needed)
    // setForm({ name: "", email: "", message: "" });  // Reset form if necessary
    // setLoading(false); // Update loading state
  } catch (error) {
    // Handle error
    console.error("Error sending email:", error);
    // setLoading(false); // Update loading state
  }
};
