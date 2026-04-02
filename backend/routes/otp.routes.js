import express from 'express'
import { resendOtp, sendOtp, verifyOtp } from '../controllers/otp.controllers.js';
const router = express.Router();

router.post('/send', sendOtp);
router.post('/verify', verifyOtp);
router.post('/resend', resendOtp);

export default router;