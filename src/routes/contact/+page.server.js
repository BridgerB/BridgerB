// src/routes/contact/+page.server.js
import { fail } from "@sveltejs/kit";
import { EMAIL_FROM, EMAIL_TO, SENDGRID_API_KEY } from "$env/static/private";
import sgMail from "@sendgrid/mail";
import { v4 as uuidv4 } from "uuid";

// Set SendGrid API key
sgMail.setApiKey(SENDGRID_API_KEY);

// Structured logger
const logger = {
  info: (message, context = {}) => {
    console.log(
      JSON.stringify({
        timestamp: new Date().toISOString(),
        level: "INFO",
        message,
        ...context,
      }),
    );
  },
  error: (message, context = {}) => {
    console.error(
      JSON.stringify({
        timestamp: new Date().toISOString(),
        level: "ERROR",
        message,
        ...context,
      }),
    );
  },
};

export const actions = {
  default: async ({ request }) => {
    const requestId = uuidv4();
    const startTime = Date.now();

    logger.info("Processing contact form submission", { requestId });

    const formData = await request.formData();
    const name = formData.get("name")?.toString().trim();
    const email = formData.get("email")?.toString().trim();
    const message = formData.get("message")?.toString().trim();

    // Validation
    if (!name || name.length < 2) {
      logger.error("Validation failed: Invalid name", {
        requestId,
        nameLength: name?.length,
      });
      return fail(400, {
        error: "Name must be at least 2 characters long",
        email,
        message,
      });
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      logger.error("Validation failed: Invalid email", { requestId, email });
      return fail(400, {
        error: "Please provide a valid email address",
        name,
        message,
      });
    }

    if (!message || message.length < 10) {
      logger.error("Validation failed: Invalid message", {
        requestId,
        messageLength: message?.length,
      });
      return fail(400, {
        error: "Message must be at least 10 characters long",
        name,
        email,
      });
    }

    // Prepare email
    const msg = {
      to: EMAIL_TO,
      from: EMAIL_FROM,
      subject: `New Contact Form Submission from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    try {
      logger.info("Sending email via SendGrid", {
        requestId,
        to: msg.to,
        from: msg.from,
      });
      await sgMail.send(msg);
      logger.info("Email sent successfully", {
        requestId,
        duration: Date.now() - startTime,
      });
      return { success: true }; // Return success object instead of redirect
    } catch (error) {
      const errorDetails = {
        requestId,
        duration: Date.now() - startTime,
        code: error.code || "UNKNOWN",
        message: error.message || "Unknown error",
        response: error.response
          ? {
            status: error.response.status,
            headers: error.response.headers,
            body: error.response.body,
          }
          : null,
      };
      logger.error("Failed to send email via SendGrid", errorDetails);
      return fail(500, {
        error: "Failed to send message. Please try again later.",
        name,
        email,
        message,
      });
    }
  },
};
