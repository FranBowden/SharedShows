import express from "express";
import filmsRouter from "./routes/Films.js";
import cors from "cors";
import { VercelRequest, VercelResponse } from "@vercel/node";

const app = express();

// ✅ Allow both local and production origins
const allowedOrigins = [
  "http://localhost:3000",
  "https://shared-shows.vercel.app",
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
  })
);

app.use("/films", filmsRouter);

// ✅ Local dev mode
if (!process.env.VERCEL) {
  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`Server running locally at http://localhost:${PORT}`);
  });
}

// ✅ Always export for Vercel
export default function handler(req: VercelRequest, res: VercelResponse) {
  app(req, res);
}
