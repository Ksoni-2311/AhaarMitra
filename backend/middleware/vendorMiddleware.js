import jwt from "jsonwebtoken";
import Vendor from "../models/vendor.model.js";

export const vendorMiddleware = async (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(" ")[1];

        if (!token) {
            return res.status(401).json({ message: "No token" });
        }
        console.log("headers.auth");

        console.log(req.headers.authorization);
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        if (!vendor.isTemporary && vendor.registrationCompleted) {

            return res.status(400).json({ message: "Already registered" });
        }

        const vendor = await Vendor.findById(decoded.id);

        if (!vendor) {
            return res.status(404).json({ message: "Vendor not found" });
        }

        req.vendor = vendor;
        next();
    } catch (err) {
        res.status(401).json({ message: "Invalid token" });
    }
};