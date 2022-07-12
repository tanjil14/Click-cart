import express from "express";
import { update } from "../controllers/user.js";
import { verifyTokenAndAuthorization } from "../utils/verifyToken.js";
const router = express.Router();

router.put("/:id", verifyTokenAndAuthorization, update);


export default router;