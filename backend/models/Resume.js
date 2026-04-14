import mongoose from "mongoose";

const resumeSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  filePath: String,
  fileType: String,
  fileSize: Number,
  uploadedAt: { type: Date, default: Date.now }
});

export default mongoose.model("Resume", resumeSchema);
