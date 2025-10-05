import express from "express";
import films from "./routes/Films";

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/films", films);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
