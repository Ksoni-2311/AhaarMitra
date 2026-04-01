import mongoose from "mongoose";

const vendorSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: { type: String, unique: true },

  isOtpVerified: { type: Boolean, default: false },

  business: {
  type: {
    businessName: String,
    type: String,
    address: String,
    gstNumber: String,
    fssaiNumber: String,
  },
  default: {},
},

  bank: {
    accountHolderName: String,
    bankName: String,
    accountNumber: String,
    ifscCode: String,
  },

  registrationCompleted: {
    type: Boolean,
    default: false,
  }, isTemporary: {
    type: Boolean,
    default: true,
  },
},{ timestamps: true });

export default mongoose.model("Vendor", vendorSchema);


