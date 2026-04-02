const otpStore = {};

export const generateOtp = (phone) => {
  const otp = Math.floor(100000 + Math.random() * 900000).toString();

  otpStore[phone] = {
    otp,
    expiresAt: Date.now() + 5 * 60 * 1000, // 5 min
  };

  console.log("OTP for testing:", otp); // remove in prod
  return otp;
};

export const verifyOtp = (phone, enteredOtp) => {
  const data = otpStore[phone];

  if (!data) return false;
  if (Date.now() > data.expiresAt) return false;

  return data.otp === enteredOtp;
};