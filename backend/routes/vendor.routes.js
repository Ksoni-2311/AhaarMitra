import express from "express";
import {
  saveBusiness,
  saveBank,
  sendOtpController,
  registerVendorController,
} from "../controllers/vendor.controller.js";
import { vendorMiddleware } from "../middleware/vendorMiddleware.js";

const router = express.Router();

router.post("/send-otp", sendOtpController);
// router.post("/verify-otp",verifyOtpController);
router.post("/register", registerVendorController);
router.post("/business", vendorMiddleware, saveBusiness);
router.post("/bank", vendorMiddleware, saveBank);

export default router;