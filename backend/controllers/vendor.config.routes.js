import express from "express";
import auth from '../middleware/authMiddleware.js'
import {
  getVendorServiceConfig,
  upsertVendorServiceConfig,
  updatePricingVariants,
  updateWeeklyMenu,
} from "./vendor.config.controllers.js"

const router = express.Router();

router.get("/service-config", auth, getVendorServiceConfig);
router.post("/service-config", auth, upsertVendorServiceConfig);
router.put("/service-config/pricing", auth, updatePricingVariants);
router.put("/service-config/weekly-menu", auth, updateWeeklyMenu);

export default router;