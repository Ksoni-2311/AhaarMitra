import express from "express";
import {
  selectRole,
  registerUser,
  addAddress,
  loginUser
} from "../controllers/user.controllers.js";

import auth from "../middleware/authMiddleware.js";

const router = express.Router();


router.post("/role", selectRole);
router.post("/register", auth, registerUser); // ✅ FIXED
router.post("/address", auth, addAddress);
router.post("/login", loginUser);

export default router;