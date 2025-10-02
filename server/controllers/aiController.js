import OpenAI from "openai";
import sql from "../configs/db.js";
import { clerkClient } from "@clerk/express";

const AI = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const generateArticle = async (req, res) => {
  try {
    const { userId } = req.auth || {};
    const { prompt, length } = req.body;
    const plan = req.plan || "free";

    if (!userId) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized: userId missing",
      });
    }

    if (!prompt || !length) {
      return res.status(400).json({
        success: false,
        message: "Prompt and length are required",
      });
    }

    // ✅ Fetch actual free usage from Clerk
    const user = await clerkClient.users.getUser(userId);
    const free_usage = user.privateMetadata?.free_usage ?? 0;

    // Free plan limit
    if (plan !== "premium" && free_usage >= 10) {
      return res.json({
        success: false,
        message: "Limit reached. Upgrade to continue.",
      });
    }

    let content = "";

    try {
      // Attempt OpenAI request
      const response = await AI.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [{ role: "user", content: prompt }],
        temperature: 0.7,
        max_tokens: Math.min(Number(length), 1000), // safe max tokens
      });

      // Safely get content, fallback to mock if undefined
      content =
        response.choices?.[0]?.message?.content?.trim() ||
        `Mock article for: "${prompt}"`;
    } catch (err) {
      console.warn("OpenAI API error, returning mock content:", err.message);
      content = `Mock article for: "${prompt}"`;
    }

    // Save content to database
    await sql`
      INSERT INTO creations (user_id, prompt, content, type) 
      VALUES (${userId}, ${prompt}, ${content}, 'article')
    `;

    // Update free usage in Clerk
    if (plan !== "premium") {
      await clerkClient.users.updateUserMetadata(userId, {
        privateMetadata: {
          ...user.privateMetadata,
          free_usage: free_usage + 1,
        },
      });
    }

    // Return content
    res.json({ success: true, content });
  } catch (error) {
    console.error("AI Controller Error:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};
