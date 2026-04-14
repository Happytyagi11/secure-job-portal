import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  fullName: String,
  position: String,
  status: { type: String, default: "submitted" },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Application", applicationSchema);
