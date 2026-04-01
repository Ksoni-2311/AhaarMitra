import express from "express";
import {
  sendOtp,
  verifyOtpController,
  saveBusiness,
  saveBank,
} from "../controllers/vendor.controller.js";
import { vendorMiddleware } from "../middleware/vendorMiddleware.js";

const router = express.Router();

router.post("/send-otp", sendOtp);
router.post("/verify-otp", verifyOtpController);

router.post("/business", vendorMiddleware, saveBusiness);
router.post("/bank", vendorMiddleware, saveBank);

export default router;