import express from "express";
import "dotenv/config";
import { fetchFilms } from "../services/FetchFilms.ts";

const router = express.Router();

router.get("/", async (req, res) => {
  const country = req.query.country as string;
  const service = req.query.service as string;

  if (!country || !service) {
    return res.status(400).json({ error: "country and service are required" });
  }

  try {
    const data = await fetchFilms({ country, service }); //returns JSON
    res.json(data); //send it to client
  } catch (e) {
    console.error("Error: ", e);
    res.status(500).json({ error: "Failed to fetch films" });
  }
});

export default router;
