import express from "express"
import { createProduct } from "../controllers/product.js"
import { verifyTokenAndAdmin } from "../utils/verifyToken.js"
const router=express.Router()

router.post("/",verifyTokenAndAdmin,createProduct)
export default router;