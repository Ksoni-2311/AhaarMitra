import vendorServiceConfig from "../models/vendor.service.config.js";

export const getVendorServiceConfig = async (req, res) => {
  try {
    const vendorId = req.user.id;

    const config = await VendorServiceConfig.findOne({ vendor: vendorId });

    if (!config) {
      return res.status(200).json({
        success: true,
        message: "No service config found yet",
        data: null,
      });
    }

    res.status(200).json({
      success: true,
      data: config,
    });
  } catch (error) {
    console.error("GET SERVICE CONFIG ERROR:", error);
    res.status(500).json({
      success: false,
      message: "Server error while fetching service config",
    });
  }
};


export const upsertVendorServiceConfig = async (req, res) => {
  try {
    const vendorId = req.user.id;

    const {
      mealTypes,
      zones,
      offerExpandedDelivery,
      globalMaxExtraDistanceKm,
      serviceWindows,
      pricingVariants,
      trialOffer,
      weeklyMenu,
    } = req.body;

    const updatedConfig = await VendorServiceConfig.findOneAndUpdate(
      { vendor: vendorId },
      {
        vendor: vendorId,
        mealTypes,
        zones,
        offerExpandedDelivery,
        globalMaxExtraDistanceKm,
        serviceWindows,
        pricingVariants,
        trialOffer,
        weeklyMenu,
      },
      {
        new: true,
        upsert: true,
        runValidators: true,
      }
    );

    res.status(200).json({
      success: true,
      message: "Service config saved successfully",
      data: updatedConfig,
    });
  } catch (error) {
    console.error("UPSERT SERVICE CONFIG ERROR:", error);
    res.status(500).json({
      success: false,
      message: "Server error while saving service config",
    });
  }
};


export const updatePricingVariants = async (req, res) => {
  try {
    const vendorId = req.user.id;
    const { pricingVariants } = req.body;

    const config = await VendorServiceConfig.findOneAndUpdate(
      { vendor: vendorId },
      { pricingVariants },
      { new: true, upsert: true, runValidators: true }
    );

    res.status(200).json({
      success: true,
      message: "Pricing updated successfully",
      data: config,
    });
  } catch (error) {
    console.error("UPDATE PRICING ERROR:", error);
    res.status(500).json({
      success: false,
      message: "Server error while updating pricing",
    });
  }
};

export const updateWeeklyMenu = async (req, res) => {
  try {
    const vendorId = req.user.id;
    const { weeklyMenu } = req.body;

    const config = await VendorServiceConfig.findOneAndUpdate(
      { vendor: vendorId },
      { weeklyMenu },
      { new: true, upsert: true, runValidators: true }
    );

    res.status(200).json({
      success: true,
      message: "Weekly menu updated successfully",
      data: config,
    });
  } catch (error) {
    console.error("UPDATE WEEKLY MENU ERROR:", error);
    res.status(500).json({
      success: false,
      message: "Server error while updating weekly menu",
    });
  }
};