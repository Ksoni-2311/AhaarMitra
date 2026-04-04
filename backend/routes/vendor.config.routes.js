import express from "express";
import auth from '../middleware/authMiddleware.js'
import { getVendorServiceConfig} from "../controllers/vendor.config.controllers.js";

const router = express.Router();

// router.get("/service-config", getVendorServiceConfig);
// router.post("/service-config", auth, upsertVendorServiceConfig);
// router.put("/service-config/pricing", auth, updatePricingVariants);
// router.put("/service-config/weekly-menu", auth, updateWeeklyMenu);

router.get("/service-config", auth, getVendorServiceConfig);
export default router;