console.log("WORKER LOADED!!!!");

import { Worker } from "bullmq";
import nodemailer from "nodemailer";
import { redis } from "../config/redis";
import { db } from "../config/db";
import dotenv from "dotenv";
dotenv.config();

// Create Ethereal transporter
const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  auth: {
    user: process.env.ETHEREAL_USER,
    pass: process.env.ETHEREAL_PASS,
  },
});

// BullMQ Worker
export const emailWorker = new Worker(
  "email-queue",
  async (job) => {
    const { email, subject, body } = job.data;

    // Send email using Ethereal
    await transporter.sendMail({
      from: "test@example.com",
      to: email,
      subject,
      text: body,
    });

    // Insert sent record into DB
    await db.query(
      "INSERT INTO sent_emails (email, subject, body) VALUES (?, ?, ?)",
      [email, subject, body]
    );

    return true;
  },
  {
    connection: {
      host: process.env.REDIS_HOST || "127.0.0.1",
      port: 6379,
      maxRetriesPerRequest: null,
    },
  }
);

emailWorker.on("completed", () => console.log("Email sent successfully"));
emailWorker.on("failed", (err) => console.log("Email failed:", err));
