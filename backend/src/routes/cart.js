const express = require("express");
const {
  allCart,
  createCart,
  deleteCart,
  getUserCart,
  updateCart,
} = require("../controllers/cart.js");
const {
  verifyToken,
  verifyTokenAndAdmin,
  verifyTokenAndAuthorization,
} = require("../utils/verifyToken.js");
const router = express.Router();

router.post("/", verifyToken, createCart);
router.put("/:id", verifyTokenAndAuthorization, updateCart);
router.delete("/:id", verifyTokenAndAuthorization, deleteCart);
router.get("/find/:userId", verifyTokenAndAuthorization, getUserCart);
router.get("/", verifyTokenAndAdmin, allCart);
module.exports = router;
