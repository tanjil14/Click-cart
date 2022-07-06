import mongoose from "mongoose";
const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Database connected");
  } catch (error) {
    console.log(error.message);
    process.exit;
  }

};

export default connectDb;
