import express from "express";
import "dotenv/config";
import { fetchFilms } from "../services/FetchFilms";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const data = await fetchFilms(); //returns JSON
    res.json(data); //send it to client
  } catch (e) {
    console.error("Error: ", e);
    res.status(500).json({ error: "Failed to fetch films" });
  }
});

export default router;
