import { Queue } from "bullmq";
import { redis } from "./redis";

export const emailQueue = new Queue("email-queue", {
  connection: {
    host: process.env.REDIS_HOST || "127.0.0.1",
    port: 6379,
    maxRetriesPerRequest: null
  }
});
