import express from "express";

const router = express.Router();

// SEND OTP
router.post("/send-otp", (req, res) => {
  const { phone } = req.body;

  console.log("OTP is 123456 for:", phone);

  return res.json({
    success: true,
    message: "OTP sent",
  });
});

// VERIFY OTP
router.post("/verify-otp", (req, res) => {
  const { otp } = req.body;

  if (otp === "123456") {
    return res.json({
      success: true,
      message: "OTP verified",
    });
  } else {
    return res.json({
      success: false,
      message: "Invalid OTP",
    });
  }
});

export default router;