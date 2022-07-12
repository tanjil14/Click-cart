import express from "express"
import { createProduct,deleteProduct,getSingleProduct,updateProduct } from "../controllers/product.js"
import { verifyTokenAndAdmin } from "../utils/verifyToken.js"
const router=express.Router()

router.post("/",verifyTokenAndAdmin,createProduct)
router.put("/:id",verifyTokenAndAdmin,updateProduct)
router.delete("/:id",verifyTokenAndAdmin,deleteProduct)
router.get("/:id",verifyTokenAndAdmin,getSingleProduct)
export default router;