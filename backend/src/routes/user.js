import express from "express";
import { deleteUser, updateUser,getById, allUsers, stats} from "../controllers/user.js";
import { verifyTokenAndAdmin, verifyTokenAndAuthorization } from "../utils/verifyToken.js";
const router = express.Router();

router.put("/:id", verifyTokenAndAuthorization, updateUser);
router.delete("/:id",verifyTokenAndAdmin,deleteUser)
router.get("/find/:id",verifyTokenAndAdmin,getById)
router.get("/",verifyTokenAndAdmin,allUsers)
router.get("/stats",verifyTokenAndAdmin,stats)


export default router;