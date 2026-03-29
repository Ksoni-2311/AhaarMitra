import mongoose from "mongoose";
const ProviderSchema = new mongoose.Schema({
    user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  businessName: String,
  location: String,
  phone: String,
  rating: {
    type: Number,
    default: 0,
  },
});

export default mongoose.model("Provider",ProviderSchema);