import express from "express";
import {
  allOrders,
  createOrder,
  deleteOrder,
  updateOrder,
  userOrder,
} from "../controllers/order.js";
import {
  verifyToken,
  verifyTokenAndAdmin,
  verifyTokenAndAuthorization,
} from "../utils/verifyToken.js";
const router = express.Router();

router.post("/", verifyToken, createOrder);
router.put("/:id", verifyTokenAndAdmin, updateOrder);
router.delete("/:id", verifyTokenAndAdmin, deleteOrder);
router.get("/find/:userId", verifyTokenAndAuthorization, userOrder);
router.get("/", verifyTokenAndAdmin, allOrders);
export default router;
