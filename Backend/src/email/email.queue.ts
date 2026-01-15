import { emailQueue } from "../config/bullmq";

export const addEmailJob = async (data: any) => {
  const { subject, body, emails, startTime, delayBetween } = data;

  for (let i = 0; i < emails.length; i++) {
    await emailQueue.add(
      "send-email",
      {
        email: emails[i],   // ✔ correct key name
        subject,
        body,
      },
      {
        delay: i * delayBetween,
      }
    );
  }
};
