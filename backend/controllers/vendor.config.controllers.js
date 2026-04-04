// import VendorServiceConfig from "../models/vendorServiceConfig.model.js";

// ✅ GET SERVICE CONFIG
export const getVendorServiceConfig = async (req, res) => {
  try {
    const vendorId = req.vendor?._id || req.query.vendorId;

    if (!vendorId) {
      return res.status(400).json({ message: "Vendor ID missing" });
    }

    const config = await VendorServiceConfig.findOne({ vendor: vendorId });

    if (!config) {
      return res.status(200).json({ message: "No config found", data: null });
    }

    return res.status(200).json(config);
  } catch (error) {
    console.error("GET CONFIG ERROR:", error);
    return res.status(500).json({ message: "Server error" });
  }
};



// ✅ CREATE / UPDATE FULL CONFIG
export const upsertVendorServiceConfig = async (req, res) => {
  try {
    const vendorId = req.vendor._id;
    const payload = req.body;

    let config = await VendorServiceConfig.findOne({ vendor: vendorId });

    if (config) {
      // 🔁 Update existing
      config = await VendorServiceConfig.findOneAndUpdate(
        { vendor: vendorId },
        payload,
        { new: true }
      );
    } else {
      // 🆕 Create new
      config = await VendorServiceConfig.create({
        vendor: vendorId,
        ...payload,
      });
    }

    return res.status(200).json({
      message: "Service config saved successfully",
      data: config,
    });
  } catch (error) {
    console.error("UPSERT ERROR:", error);
    return res.status(500).json({ message: "Server error" });
  }
};



// ✅ UPDATE PRICING VARIANTS ONLY
export const updatePricingVariants = async (req, res) => {
  try {
    const vendorId = req.vendor._id;
    const { pricingVariants } = req.body;

    if (!pricingVariants) {
      return res.status(400).json({ message: "Pricing variants required" });
    }

    const config = await VendorServiceConfig.findOneAndUpdate(
      { vendor: vendorId },
      { pricingVariants },
      { new: true, upsert: true }
    );

    return res.status(200).json({
      message: "Pricing updated successfully",
      data: config.pricingVariants,
    });
  } catch (error) {
    console.error("PRICING ERROR:", error);
    return res.status(500).json({ message: "Server error" });
  }
};



// ✅ UPDATE WEEKLY MENU ONLY
export const updateWeeklyMenu = async (req, res) => {
  try {
    const vendorId = req.vendor._id;
    const { weeklyMenu } = req.body;

    if (!weeklyMenu) {
      return res.status(400).json({ message: "Weekly menu required" });
    }

    const config = await VendorServiceConfig.findOneAndUpdate(
      { vendor: vendorId },
      { weeklyMenu },
      { new: true, upsert: true }
    );

    return res.status(200).json({
      message: "Weekly menu updated successfully",
      data: config.weeklyMenu,
    });
  } catch (error) {
    console.error("MENU ERROR:", error);
    return res.status(500).json({ message: "Server error" });
  }
};