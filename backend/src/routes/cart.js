import express from "express";
import {
  allCart,
  createCart,
  deleteCart,
  getUserCart,
  updateCart,
} from "../controllers/cart.js";
import {
  verifyToken,
  verifyTokenAndAdmin,
  verifyTokenAndAuthorization,
} from "../utils/verifyToken.js";
const router = express.Router();

router.post("/", verifyToken, createCart);
router.put("/:id", verifyTokenAndAuthorization, updateCart);
router.delete("/:id", verifyTokenAndAuthorization, deleteCart);
router.get("/find/:userId", verifyTokenAndAuthorization, getUserCart);
router.get("/", verifyTokenAndAdmin, allCart);
export default router;
