const packageSchema = new mongoose.Schema({
  vendorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Vendor"
  },

  title: String,
  price: Number,
  items: [String],
  serviceType: String
});

export default mongoose.model("Package", packageSchema);