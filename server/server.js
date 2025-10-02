import express from "express";
import cors from "cors";
import "dotenv/config";
import { clerkMiddleware, requireAuth } from "@clerk/express";
import aiRouter from "./routes/aiRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

// 👇 Only set up Clerk globally
app.use(clerkMiddleware());

// Public route (no auth needed)
app.get("/", (req, res) => res.send("Server is Live!"));

// Protected AI routes
app.use("/api/ai", requireAuth(), aiRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
