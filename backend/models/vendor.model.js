const vendorSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    unique: true
  },
  password: String,

  businessName: String,

  addresses: [
    {
      label: String,
      street: String,
      city: String,
      state: String,
      pincode: String,
      isDefault: {
        type: Boolean,
        default: false
      }
    }
  ],

  registrationStep: {
    type: Number,
    default: 1
  },

  subscriptionType: {
    type: String,
    enum: ["trial", "premium"],
    default: "trial"
  },

  isActive: {
    type: Boolean,
    default: false
  }
});