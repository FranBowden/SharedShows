import express from "express";
import filmsRouter from "./routes/Films.js";
import cors from "cors";
import { VercelRequest, VercelResponse } from "@vercel/node";

const app = express();

// ✅ Configure CORS properly
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

// ✅ Allow both local & Vercel environments
if (process.env.VERCEL === undefined) {
  // Local mode
  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`Server running locally at http://localhost:${PORT}`);
  });
} else {
  // Deployed mode
  export default (req: VercelRequest, res: VercelResponse) => {
    app(req, res);
  };
}
