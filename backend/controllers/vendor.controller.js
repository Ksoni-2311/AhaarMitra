import jwt from "jsonwebtoken";
import axios from 'axios'
import Vendor from "../models/vendor.model.js";
import bcrypt from 'bcryptjs'

export const registerVendorController = async (req, res) => {
  try {
    const { name, email, phone, password } = req.body;
    console.log(req.body);
    
    //  Validation
    if (!name || !email || !phone || !password) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    // ✅ Check existing vendor
    const existingVendor = await Vendor.findOne({
      $or: [{ email }, { phone }],
    });

    if (existingVendor) {
      return res.status(400).json({
        message: "Vendor already exists",
      });
    }

    // ✅ Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // ✅ Create vendor
    const vendor = await Vendor.create({
      name,
      email,
      phone,
      password: hashedPassword,
    });

    // ✅ Generate token
    const token = jwt.sign(
      { id: vendor._id },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    const safeVendor = await Vendor.findById(vendor._id).select("-password");

    res.status(201).json({
      message: "Registered successfully",
      token,
      vendor: safeVendor,
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "Registration failed",
    });
  }
};

// 🔹 Save Business Details
export const saveBusiness = async (req, res) => {
  try {
    if (!req.vendor.isTemporary) {
      return res.status(400).json({ message: "Invalid flow" });
    }

    const { businessName, type, address, gstNumber, fssaiNumber } = req.body;

    // ✅ Save business data
    req.vendor.business = {
      businessName,
      type,
      address,
      gstNumber,
      fssaiNumber,
    };

    await req.vendor.save();

    res.status(200).json({
      message: "Business saved (temporary)",
      vendor: req.vendor,
    });

  } catch (error) {
    console.log("error in save business", error);

    res.status(500).json({
      message: "Failed to save business",
    });
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
}