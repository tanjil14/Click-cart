import express from "express"
import { createOrder ,updateOrder} from "../controllers/order.js";
import { verifyToken, verifyTokenAndAdmin } from "../utils/verifyToken.js";
const router=express.Router()

router.post("/",verifyToken,createOrder)
router.put("/:id",verifyTokenAndAdmin,updateOrder)
export default router;