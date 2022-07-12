import express from "express"
import { createCart } from "../controllers/cart.js";
import { verifyToken } from "../utils/verifyToken.js";
const router=express.Router()

router.post("/",verifyToken,createCart)
// router.put("/:id")
// router.delete("/:id")
// router.get("/")
export default router;