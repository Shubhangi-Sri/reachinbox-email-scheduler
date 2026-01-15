import express from "express";
import cors from "cors";
import emailRoutes from "./routes/email.routes";

export const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  })
);

// API routes
app.use("/api", emailRoutes);
