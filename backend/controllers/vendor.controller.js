import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
import Vendor from "../models/vendor.model.js";
import { generateOtp, verifyOtp } from "../utils/otpStore.js";

// 🔹 Send OTP
export const sendOtp = async (req, res) => {
    const { phone } = req.body;

    generateOtp(phone);

    res.json({ message: "OTP sent (check console for now)" });
};

// 🔹 Verify OTP
export const verifyOtpController = async (req, res) => {
    const { phone, otp, name, email } = req.body;

    const isValid = verifyOtp(phone, otp);

    if (!isValid) {
        return res.status(400).json({ message: "Invalid OTP" });
    }

    // ❗ Delete old incomplete entry if exists
    await Vendor.deleteOne({ phone, isTemporary: true });

    const vendor = await Vendor.create({
        name,
        email,
        phone,
        isOtpVerified: true,
        isTemporary: true,
    });

    const token = jwt.sign(
        {
            id: vendor._id,
            isOtpVerified: true,
        },
        process.env.JWT_SECRET,
        { expiresIn: "30m" }
    );
    
    res.json({ token });
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