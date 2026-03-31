import mongoose from 'mongoose'

const foodSchema = new mongoose.Schema({
  name: String,
  price: Number,
  category: String, 
  image: String,
  provider: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Provider",
  },
  rating: {
    type: Number,
    default: 0,
  },
});

export default mongoose.model('Food',foodSchema);

