import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import connectDb from "./db.js";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/user.js";
dotenv.config();
const app = express();
// middleware
app.use(cors());
app.use(express.json());

//database disconnect
mongoose.connection.on("disconnected", () => {
  console.log("Mongodb Disconnected!");
});

//API
app.get("/", (req, res, next) => {
  res.status(200).json({
    message: "Hello from Server!",
  });
});
app.use("/api/auth", authRoutes);
app.use("/api", userRoutes);
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  connectDb();
});
