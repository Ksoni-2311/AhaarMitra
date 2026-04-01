import jwt from "jsonwebtoken";
import Vendor from "../models/vendor.model.js";

export const vendorMiddleware = async (req, res, next) => {
  try {
    console.log("---- MIDDLEWARE HIT ----");

    // 🔹 1. Check header
    const authHeader = req.headers.authorization;
    console.log("AUTH HEADER:", authHeader);

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "No token or wrong format" });
    }

    // 🔹 2. Extract token
    const token = authHeader.split(" ")[1];
    console.log("TOKEN:", token);

    // 🔹 3. Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("DECODED:", decoded);

    // 🔹 4. Fetch vendor
    const vendor = await Vendor.findById(decoded.id);
    console.log("VENDOR:", vendor);

    if (!vendor) {
      return res.status(404).json({ message: "Vendor not found" });
    }

    console.log("before5");
    
    // 🔹 5. Attach 
    req.vendor = vendor;
    console.log(vendor);
    console.log("MIDDLEWARE VENDOR:", vendor);

    next();
  } catch (err) {
    console.error("AUTH ERROR:", err.message);

    if (err.name === "JsonWebTokenError") {
      return res.status(401).json({ message: "Invalid token" });
    }

    if (err.name === "TokenExpiredError") {
      return res.status(401).json({ message: "Token expired" });
    }

    return res.status(500).json({ message: "Server error" });
  }
};