import express from "express";
import filmsRouter from "./routes/Films";
import cors from "cors";

const app = express();
const PORT = 3000;

app.use(cors());

app.use("/films", filmsRouter);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
