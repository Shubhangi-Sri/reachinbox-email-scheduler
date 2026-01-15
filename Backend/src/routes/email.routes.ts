import { Router } from "express";
import {
  scheduleEmail,
  getScheduledEmails,
  getSentEmails,
} from "../controllers/email.controller";

const router = Router();

router.post("/schedule", scheduleEmail);
router.get("/scheduled-emails", getScheduledEmails);
router.get("/sent-emails", getSentEmails);

export default router;
