const express = require("express")
const { createPayment }=require("../controllers/stripe.js");
const router =express.Router()
router.post("/payment",createPayment)
module.exports= router;