const orderSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },

  vendorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Vendor"
  },

  packageId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Package"
  },

  deliveryAddress: String,
  totalAmount: Number,
  status: {
    type: String,
    enum: ["pending", "confirmed", "delivered"],
    default: "pending"
  }
});

export default mongoose.model("Order", orderSchema);