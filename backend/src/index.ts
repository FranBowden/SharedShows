import express from "express";
import filmsRouter from "./routes/Films";
import cors from "cors";
import { VercelRequest, VercelResponse } from "@vercel/node";
const app = express();
const PORT = 3000;

app.use(cors());

app.use("/films", filmsRouter);

/*
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
*/

export default (req: VercelRequest, res: VercelResponse) => {
  app(req, res);
};
