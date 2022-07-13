const cors = require("cors");
const env=require("./config/envConfig.js")
const express = require("express");
const mongoose = require("mongoose");
const connectDb = require("./config/db.js");
const authRoutes = require("./routes/auth.js");
const userRoutes = require("./routes/user.js");
const productRoutes = require("./routes/product.js");
const cartRoutes = require("./routes/cart.js");
const orderRoutes = require("./routes/order.js");
const stripeRoute = require("./routes/stripe.js");
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
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/carts", cartRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/checkout", stripeRoute);
const port =env.PORT || 6000
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  connectDb();
});
