import mongoose from "mongoose";

const vendorSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: { type: String, unique: true },

  isOtpVerified: { type: Boolean, default: false },

  business: {
    businessName: String,
    type: String,
    address: String,
    gstNumber: String,
    fssaiNumber: String,
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




// const vendorSchema = new mongoose.Schema({
//   name: String,
//   email: {
//     type: String,
//     unique: true
//   },
//   password: String,

//   businessName: String,

//   addresses: [
//     {
//       label: String,
//       street: String,
//       city: String,
//       state: String,
//       pincode: String,
//       isDefault: {
//         type: Boolean,
//         default: false
//       }
//     }
//   ],

//   registrationStep: {
//     type: Number,
//     default: 1
//   },

//   subscriptionType: {
//     type: String,
//     enum: ["trial", "premium"],
//     default: "trial"
//   },

//   isActive: {
//     type: Boolean,
//     default: false
//   }
// });