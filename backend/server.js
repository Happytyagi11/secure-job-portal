import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import rateLimiter from "./middleware/rateLimit.js";

dotenv.config();
connectDB();

const app = express();

// ✅ FIXED: Proper CORS middleware
app.use(cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));

// Required middleware
app.use(express.json());
app.use(rateLimiter);

// Routes
app.use("/auth", (await import("./routes/auth.js")).default);
app.use("/applications", (await import("./routes/applications.js")).default);
app.use("/admin", (await import("./routes/admin.js")).default);

// Start server
app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);
