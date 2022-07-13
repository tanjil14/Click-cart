const express = require("express");
const {
  allProducts,
  createProduct,
  deleteProduct,
  getSingleProduct,
  updateProduct,
} = require("../controllers/product.js");
const { verifyTokenAndAdmin } = require("../utils/verifyToken.js");
const router = express.Router();

router.post("/", verifyTokenAndAdmin, createProduct);
router.put("/:id", verifyTokenAndAdmin, updateProduct);
router.delete("/:id", verifyTokenAndAdmin, deleteProduct);
router.get("/find/:id", getSingleProduct);
router.get("/", allProducts);
module.exports = router;
