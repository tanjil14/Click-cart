import express from "express"
import { createProduct,updateProduct } from "../controllers/product.js"
import { verifyTokenAndAdmin } from "../utils/verifyToken.js"
const router=express.Router()

router.post("/",verifyTokenAndAdmin,createProduct)
router.put("/:id",verifyTokenAndAdmin,updateProduct)
export default router;