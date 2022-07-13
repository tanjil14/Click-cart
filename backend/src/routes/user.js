const express = require("express");
const {
  deleteUser,
  updateUser,
  getById,
  allUsers,
  stats,
} = require("../controllers/user.js");
const {
  verifyTokenAndAdmin,
  verifyTokenAndAuthorization,
} = require("../utils/verifyToken.js");
const router = express.Router();

router.put("/:id", verifyTokenAndAuthorization, updateUser);
router.delete("/:id", verifyTokenAndAdmin, deleteUser);
router.get("/find/:id", verifyTokenAndAdmin, getById);
router.get("/", verifyTokenAndAdmin, allUsers);
router.get("/stats", verifyTokenAndAdmin, stats);

module.exports = router;
