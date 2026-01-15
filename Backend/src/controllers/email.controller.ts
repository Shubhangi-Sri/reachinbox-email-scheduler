import { Request, Response } from "express";
import { db } from "../config/db";
import { addEmailJob } from "../email/email.queue";

export const scheduleEmail = async (req: Request, res: Response) => {
  try {
    await addEmailJob(req.body);

    // Save schedule request to DB
    const { emails, subject, body, startTime, delayBetween } = req.body;

    await db.query(
      "INSERT INTO scheduled_emails (email, subject, body, start_time, delay_between) VALUES (?, ?, ?, ?, ?)",
      [emails[0], subject, body, startTime, delayBetween]
    );

    res.status(200).json({ message: "Emails scheduled successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to schedule emails" });
  }
};

export const getScheduledEmails = async (req: Request, res: Response) => {
  const [rows] = await db.query("SELECT * FROM scheduled_emails ORDER BY id DESC");
  res.json(rows);
};

export const getSentEmails = async (req: Request, res: Response) => {
  const [rows] = await db.query("SELECT * FROM sent_emails ORDER BY id DESC");
  res.json(rows);
};
