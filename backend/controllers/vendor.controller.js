import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
import axios from 'axios'
import Vendor from "../models/vendor.model.js";
// import { generateOtp, verifyOtp } from "../utils/otpStore.js";
import { sendOtpMSG91 } from "../utils/msg91.js";

export const sendOtpController = async (req, res) => {
  const { phone } = req.body;

  const data = await sendOtpMSG91(phone);

  res.json({
    success: true,
    message: "OTP sent",
    otp: data.otp, // ⚠️ only for testing (remove later)
  });
};
// TEMP storage (hackathon friendly)
const verifiedPhones = new Set();

// export const verifyOtpController = async (req, res) => {
//   try {
//     const { phone, otp } = req.body;

//     const response = await verifyOtpMSG91(phone, otp);

//     if (response.data.type !== "success") {
//       return res.status(400).json({ message: "Invalid OTP" });
//     }

//     // ✅ Mark as verified
//     verifiedPhones.add(phone);

//     res.json({ message: "OTP verified" });
//   } catch (err) {
//     res.status(500).json({ message: "Verify OTP error" });
//   }
// };

export const registerVendorController = async (req, res) => {
  try {
    const { name, email, phone } = req.body;

    // 🔒 Check OTP verified
    if (!verifiedPhones.has(phone)) {
      return res.status(403).json({ message: "Verify OTP first" });
    }

    const vendor = await Vendor.create({
      name,
      email,
      phone,
      isOtpVerified: true,
    });

    const token = jwt.sign(
      { id: vendor._id },
      process.env.JWT_SECRET,
      { expiresIn: "30m" }
    );

    // 🧹 Remove from set
    verifiedPhones.delete(phone);

    res.json({ token, vendor });
  } catch (err) {
    res.status(500).json({ message: "Registration failed" });
  }
};

// 🔹 Save Business Details
export const saveBusiness = async (req, res) => {
    try {
        console.log("buss");
        
        if (!req.vendor.isTemporary) {
            return res.status(400).json({ message: "Invalid flow" });
        }
        console.log("saveBcall");
        console.log(req.vendor.isTemporary);
        
        
        const { businessName, type, address, gstNumber, fssaiNumber } = req.body;
        console.log("reqbdy");
        console.log(req.body);
        console.log("reqvndr");
        console.log(req.vendor);
        
        const v=req.vendor.business = {
            businessName,
            type,
            address,
            gstNumber,
            fssaiNumber,
        };
        console.log("req.vendor");
        console.log(v);
        console.log(req.vendor.business);

        await req.vendor.save();

        res.json({ message: "Business saved (temporary)" });
    } catch (error) {
        console.log("error in save bussiess", error);

    }
};

// 🔹 Save Bank Details
export const saveBank = async (req, res) => {
    if (!req.vendor.isTemporary) {
        return res.status(400).json({ message: "Invalid flow" });
    }

    const { accountHolderName, bankName, accountNumber, ifscCode } = req.body;

    req.vendor.bank = {
        accountHolderName,
        bankName,
        accountNumber,
        ifscCode,
    };

    // ✅ FINAL COMMIT
    req.vendor.isTemporary = false;
    req.vendor.registrationCompleted = true;

    await req.vendor.save();

    res.json({ message: "Registration completed ✅" });
};