const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const songsRouter = require("./routes/songs");
const authRouter = require("./routes/auth");
const firebaseRouter = require("./firebaseRoute"); // Import Firebase route

dotenv.config();

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(
    cors({
      origin: "*",
      methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
      credentials: true,
    }),
);
app.use(express.json());

// Routes
app.use("/api/songs", songsRouter);
app.use("/api/auth", authRouter);
app.use("/api", firebaseRouter); // Register Firebase route

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

