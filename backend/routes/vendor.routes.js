import express from "express";
import {
  saveBusiness,
  saveBank,
  registerVendorController,
  loginVendor,
} from "../controllers/vendor.controller.js";
import { vendorMiddleware } from "../middleware/vendorMiddleware.js";
import upload from "../middleware/multer.js";

const router = express.Router();

router.post("/register",upload.single("profilePic"),registerVendorController );
router.post("/business", vendorMiddleware, saveBusiness);
router.post("/bank", vendorMiddleware, saveBank);
router.post("/login", loginVendor);
// router.post("/logout", vendorMiddleware, saveBank);

export default router;