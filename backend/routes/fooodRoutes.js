import express from "express"
import auth from "../middleware/authMiddleware.js"
import { addFood } from "../controllers/food.controller.js";
import { getFoods } from "../controllers/food.controller.js";
const router = express.Router();

router.post("/", auth, addFood);
router.get("/", getFoods);

export default router;
