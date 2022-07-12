import express from "express";
import { deleteUser, updateUser,getById} from "../controllers/user.js";
import { verifyTokenAndAdmin, verifyTokenAndAuthorization } from "../utils/verifyToken.js";
const router = express.Router();

router.put("/:id", verifyTokenAndAuthorization, updateUser);
router.delete("/:id",verifyTokenAndAdmin,deleteUser)
router.get("/find/:id",verifyTokenAndAdmin,getById)


export default router;