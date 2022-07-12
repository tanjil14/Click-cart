import express from "express";
import { deleteUser, updateUser } from "../controllers/user.js";
import { verifyTokenAndAdmin, verifyTokenAndAuthorization } from "../utils/verifyToken.js";
const router = express.Router();

router.put("/:id", verifyTokenAndAuthorization, updateUser);
router.delete("/:id",verifyTokenAndAuthorization,deleteUser)


export default router;