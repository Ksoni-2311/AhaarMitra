import mongoose from "mongoose";

const mealTypeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      enum: ["breakfast", "lunch", "dinner", "snacks"],
      required: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { _id: false }
);

const zoneSchema = new mongoose.Schema(
  {
    address: {
      type: String,
      required: true,
    },
    city: String,
    state: String,
    pincode: String,
  },
  { _id: false }
);

const serviceWindowSchema = new mongoose.Schema(
  {
    startTime: String,
    endTime: String,
    autoCutoffEnabled: {
      type: Boolean,
      default: false,
    },
    cutoffMinutes: {
      type: Number,
      default: 0,
    },
  },
  { _id: false }
);

const pricingVariantSchema = new mongoose.Schema(
  {
    variantName: {
      type: String,
      required: true,
    },
    dailyPrice: {
      type: Number,
      default: 0,
    },
    weeklyPrice: {
      type: Number,
      default: 0,
    },
    monthlyPrice: {
      type: Number,
      default: 0,
    },
    components: [String], // optional short description
  },
  { _id: false }
);

const trialOfferSchema = new mongoose.Schema(
  {
    enabled: {
      type: Boolean,
      default: false,
    },
    standardTrialPrice: {
      type: Number,
      default: 0,
    },
    onlyFirstOrder: {
      type: Boolean,
      default: true,
    },
    lunchOnly: {
      type: Boolean,
      default: false,
    },
    applicableVariants: [String],
  },
  { _id: false }
);

const menuComponentsSchema = new mongoose.Schema(
  {
    mini: {
      type: [String],
      default: [],
    },
    normal: {
      type: [String],
      default: [],
    },
    deluxe: {
      type: [String],
      default: [],
    },
  },
  { _id: false }
);

const weeklyMenuSchema = new mongoose.Schema(
  {
    breakfast: {
      type: menuComponentsSchema,
      default: () => ({}),
    },
    lunch: {
      type: menuComponentsSchema,
      default: () => ({}),
    },
    dinner: {
      type: menuComponentsSchema,
      default: () => ({}),
    },
  },
  { _id: false }
);

const vendorServiceConfigSchema = new mongoose.Schema(
  {
    vendor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Vendor",
      required: true,
      unique: true,
    },

    mealTypes: {
      type: [mealTypeSchema],
      default: [],
    },

    zones: {
      type: [zoneSchema],
      default: [],
    },

    offerExpandedDelivery: {
      type: Boolean,
      default: false,
    },

    globalMaxExtraDistanceKm: {
      type: Number,
      default: 0,
    },

    serviceWindows: {
      lunch: {
        type: serviceWindowSchema,
        default: () => ({}),
      },
      dinner: {
        type: serviceWindowSchema,
        default: () => ({}),
      },
    },

    pricingVariants: {
      type: [pricingVariantSchema],
      default: [],
    },

    trialOffer: {
      type: trialOfferSchema,
      default: () => ({}),
    },

    weeklyMenu: {
      monday: {
        type: weeklyMenuSchema,
        default: () => ({}),
      },
      tuesday: {
        type: weeklyMenuSchema,
        default: () => ({}),
      },
      wednesday: {
        type: weeklyMenuSchema,
        default: () => ({}),
      },
      thursday: {
        type: weeklyMenuSchema,
        default: () => ({}),
      },
      friday: {
        type: weeklyMenuSchema,
        default: () => ({}),
      },
      saturday: {
        type: weeklyMenuSchema,
        default: () => ({}),
      },
      sunday: {
        type: weeklyMenuSchema,
        default: () => ({}),
      },
    },
  },
  { timestamps: true }
);

export default mongoose.model("VendorServiceConfig", vendorServiceConfigSchema);