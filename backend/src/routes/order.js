const express = require("express");
const {
  allOrders,
  createOrder,
  deleteOrder,
  monthlyIncome,
  updateOrder,
  userOrder,
} = require("../controllers/order.js");
const {
  verifyToken,
  verifyTokenAndAdmin,
  verifyTokenAndAuthorization,
} = require("../utils/verifyToken.js");
const router = express.Router();

router.post("/", verifyToken, createOrder);
router.put("/:id", verifyTokenAndAdmin, updateOrder);
router.delete("/:id", verifyTokenAndAdmin, deleteOrder);
router.get("/find/:userId", verifyTokenAndAuthorization, userOrder);
router.get("/", verifyTokenAndAdmin, allOrders);
router.get("/income", verifyTokenAndAdmin, monthlyIncome);
module.exports = router;
