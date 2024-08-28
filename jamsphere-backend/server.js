const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const songsRouter = require("./routes/songs");
const authRouter = require("./routes/auth");

dotenv.config();

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(
    cors({
      origin: "*",
      methods: ["GET", "POST"],
      credentials: true,
    }),
  );
app.use(express.json());

// Routes
app.use("/api/songs", songsRouter);
app.use("/api/auth", authRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
