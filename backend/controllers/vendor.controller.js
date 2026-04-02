import jwt from "jsonwebtoken";
import axios from 'axios'
import Vendor from "../models/vendor.model.js";
import bcrypt from 'bcryptjs'

export const registerVendorController = async (req, res) => {
  try {
    const { name, email, phone, password } = req.body;

    // ✅ Validation
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

    const v = req.vendor.business = {
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
}