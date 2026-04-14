import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import rateLimiter from "./middleware/rateLimit.js";

dotenv.config();
connectDB();

const app = express();

// Required for GitHub Codespaces + rate limiter
app.set("trust proxy", 1);

// ⭐ CORS MUST be before everything else
app.use(cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));

// ⭐ Handle preflight OPTIONS requests (this fixes your error)
app.options("*", cors());

// Body parser
app.use(express.json());

// Rate limiter (must come AFTER CORS)
app.use(rateLimiter);

// Routes
app.use("/auth", (await import("./routes/auth.js")).default);
app.use("/applications", (await import("./routes/applications.js")).default);
app.use("/admin", (await import("./routes/admin.js")).default);

// Start server
app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);
