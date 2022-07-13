const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  PORT: process.env.PORT,
  MONGO: process.env.MONGO,
  JWT_SECRET: process.env.JWT_SECRET,
  STRIPE_KEY: process.env.STRIPE_KEY,
};
