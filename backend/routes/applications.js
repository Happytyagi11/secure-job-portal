import express from "express";
import auth from "../middleware/auth.js";
import upload from "../middleware/upload.js";
import Application from "../models/Application.js";
import Resume from "../models/Resume.js";

const router = express.Router();

router.post("/", auth("user"), upload.single("resume"), async (req, res) => {
  const app = await Application.create({
    userId: req.user.id,
    fullName: req.body.fullName,
    position: req.body.position
  });

  await Resume.create({
    userId: req.user.id,
    filePath: req.file.path,
    fileType: req.file.mimetype,
    fileSize: req.file.size
  });

  res.json({ message: "Application submitted" });
});

export default router;
