import express from "express";
import auth from "../middleware/authMiddleware.js";

const router = express.Router();

// 🔹 GET all meal types
router.get("/meal-types", auth, getMealTypes);

// 🔹 Replace all meal types
router.put("/meal-types", auth, updateMealTypes);

// 🔹 Toggle specific meal type (active/inactive)
router.patch("/meal-types/toggle", auth, toggleMealType);

export default router;