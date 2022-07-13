import express from "express"
import { allProducts, createProduct,deleteProduct,getSingleProduct,updateProduct } from "../controllers/product.js"
import { verifyTokenAndAdmin } from "../utils/verifyToken.js"
const router=express.Router()

router.post("/",verifyTokenAndAdmin,createProduct)
router.put("/:id",verifyTokenAndAdmin,updateProduct)
router.delete("/:id",verifyTokenAndAdmin,deleteProduct)
router.get("/find/:id",getSingleProduct)
router.get("/",allProducts)
export default router;