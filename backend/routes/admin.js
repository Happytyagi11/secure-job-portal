import express from "express";
import auth from "../middleware/auth.js";
import Application from "../models/Application.js";

const router = express.Router();

router.get("/search", auth("admin"), async (req, res) => {
  const q = req.query.q || "";
  const results = await Application.find({
    fullName: { $regex: q, $options: "i" }
  });

  res.json(results);
});

export default router;
