import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    orderId: {
      type: String,
      unique: true,
    },

    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    vendor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Vendor",
      required: true,
    },

    item: {
      mealType: {
        type: String,
        enum: ["breakfast", "lunch", "dinner", "snacks"],
      },
      variant: String,
      itemsIncluded: [String],
      price: Number,
    },

    quantity: {
      type: Number,
      default: 1,
    },

    totalAmount: Number,

    deliveryAddress: {
      street: String,
      city: String,
      state: String,
      pincode: String,
      instructions: String,
      label: String,
    },

    status: {
      type: String,
      enum: [
        "placed",
        "confirmed",
        "preparing",
        "out_for_delivery",
        "delivered",
        "cancelled",
      ],
      default: "placed",
    },

    statusHistory: [
      {
        status: String,
        updatedAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],

    isTrial: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

// 🔥 AUTO ORDER ID + HISTORY
orderSchema.pre("save", function (next) {
  if (!this.orderId) {
    const random = Math.floor(1000 + Math.random() * 9000);
    this.orderId = `#AM-${random}`;
  }

  this.statusHistory.push({
    status: this.status,
  });

  next();
});

export default mongoose.model("Order", orderSchema);