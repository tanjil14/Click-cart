const mongoose = require("mongoose");
const env=require("./envConfig")
const connectDb = async () => {
  try {
    await mongoose.connect(env.MONGO);
    console.log("Database connected");
  } catch (error) {
    console.log(error.message);
    process.exit;
  }
};

module.exports = connectDb;
