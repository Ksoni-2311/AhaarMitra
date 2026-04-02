import axios from "axios";

const MSG91_AUTH_KEY = process.env.MSG91_AUTH_KEY;


export const sendOtpMSG91 = async (phone) => {
  try {
    // 🔥 generate OTP yourself
    const otp = Math.floor(100000 + Math.random() * 900000);

    console.log("Generated OTP:", otp);

    const response = await axios.post(
      "https://control.msg91.com/api/v5/flow/",
      {
        flow_id: process.env.MSG91_FLOW_ID,
        mobiles: `91${phone}`, // send only 10 digit in request
        OTP: otp, // 🔥 must match template variable
      },
      {
        headers: {
          authkey: process.env.MSG91_AUTH_KEY,
          "Content-Type": "application/json",
        },
      }
    );

    console.log("MSG91 RESPONSE:", response.data);

    return { success: true, otp }; // return otp for testing
  } catch (error) {
    console.log("❌ ERROR:", error.response?.data || error.message);
    throw error;
  }
};

// 🔹 Verify OTP from MSG91
export const verifyOtpMSG91 = async (phone, otp) => {
  try {
    const response = await axios.get(
      "https://control.msg91.com/api/v5/otp/verify",
      {
        mobile: `91${phone}`,
        otp: otp,
      },
      {
        headers: {
          authkey: process.env.MSG91_AUTH_KEY,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.log("❌ VERIFY ERROR:", error.response?.data || error.message);
    throw new Error("OTP verification failed");
  }
};