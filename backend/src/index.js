import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
dotenv.config();
const app = express();
// middleware
app.use(cors());
app.use(express.json());
//database connection
const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Database connected");
  } catch (error) {
    console.log(error.message);
    process.exit;
  }
};
mongoose.connection.on("disconnected", () => {
  console.log("Mongodb Disconnected!");
});
app.get("/", (req, res, next) => {
  res.status(200).json({
    message: "Hello from Server!",
  });
});
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  connectDb();
});
