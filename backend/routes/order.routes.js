import express from "express";
import {
  createOrder,
  getVendorOrders,
  getUserOrders,
  updateOrderStatus,
} from "../controllers/order.controllers.js";
import auth from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", auth, createOrder);
router.get("/vendor", auth, getVendorOrders);
router.get("/user", auth, getUserOrders);
router.put("/:id/status", auth, updateOrderStatus);

export default router;