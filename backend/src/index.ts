import express from "express";
import filmsRouter from "./routes/Films.js";
import cors from "cors";
import { VercelRequest, VercelResponse } from "@vercel/node";

const app = express();

// CORS configuration
const corsOptions = {
  origin: process.env.FRONTEND_ORIGIN || "http://localhost:5173", // adjust if using React/Vite locally
  methods: ["GET", "POST"],
};
app.use(cors(corsOptions));

app.use(express.json());
app.use("/films", filmsRouter);

// --- Local development ---
if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server running locally at http://localhost:${PORT}`);
  });
}

// --- Vercel serverless handler ---
export default (req: VercelRequest, res: VercelResponse) => {
  app(req, res);
};
