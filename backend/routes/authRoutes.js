import express from 'express';
const router = express.Router();
import authControllers from '../controllers/authControllers.js';

router.post('/register',authControllers.register);
router.post("/login", authControllers.login);

export default router;
