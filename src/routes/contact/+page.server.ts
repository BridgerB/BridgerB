import { fail } from "@sveltejs/kit";
import {
  AWS_ACCESS_KEY_ID,
  AWS_REGION,
  AWS_SECRET_ACCESS_KEY,
  EMAIL_FROM,
  EMAIL_TO,
} from "$env/static/private";
import { SendEmailCommand, SESClient } from "@aws-sdk/client-ses";
import { v4 as uuidv4 } from "uuid";
import type { Actions } from "./$types";

const ses = new SESClient({
  region: AWS_REGION,
  credentials: {
    accessKeyId: AWS_ACCESS_KEY_ID,
    secretAccessKey: AWS_SECRET_ACCESS_KEY,
  },
});

interface LogContext {
  [key: string]: unknown;
}

const logger = {
  info: (message: string, context: LogContext = {}) => {
    console.log(
      JSON.stringify({
        timestamp: new Date().toISOString(),
        level: "INFO",
        message,
        ...context,
      }),
    );
  },
  error: (message: string, context: LogContext = {}) => {
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

export const actions: Actions = {
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

    const command = new SendEmailCommand({
      Source: EMAIL_FROM,
      Destination: {
        ToAddresses: [EMAIL_TO],
      },
      Message: {
        Subject: {
          Data: `New Contact Form Submission from ${name}`,
          Charset: "UTF-8",
        },
        Body: {
          Text: {
            Data: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
            Charset: "UTF-8",
          },
          Html: {
            Data: `
              <h2>New Contact Form Submission</h2>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Message:</strong> ${message}</p>
            `,
            Charset: "UTF-8",
          },
        },
      },
    });

    try {
      logger.info("Sending email via AWS SES", {
        requestId,
        to: EMAIL_TO,
        from: EMAIL_FROM,
      });
      const response = await ses.send(command);
      logger.info("Email sent successfully", {
        requestId,
        messageId: response.MessageId,
        duration: Date.now() - startTime,
      });
      return { success: true };
    } catch (error) {
      const err = error as Error & { Code?: string; $metadata?: unknown };
      logger.error("Failed to send email via AWS SES", {
        requestId,
        duration: Date.now() - startTime,
        code: err.Code || "UNKNOWN",
        message: err.message || "Unknown error",
        metadata: err.$metadata,
      });
      return fail(500, {
        error: "Failed to send message. Please try again later.",
        name,
        email,
        message,
      });
    }
  },
};
