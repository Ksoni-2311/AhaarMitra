import express from "express";

const router  = express.Router();
import auth from "../middleware/authMiddleware.js";
import createProvider from "../controllers/provider.controllers.js";

router.post("/", auth, createProvider);

export default router;
