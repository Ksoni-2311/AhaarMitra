import Order from "../models/order.model.js";
import User from "../models/user.model.js";
import vendorServiceConfig from "../models/vendor.service.config.js";

export const createOrder = async (req, res) => {
  try {
    const userId = req.user.id;

    const { vendorId, mealType, variant, addressIndex, isTrial } = req.body;

    // 🔹 1. USER
    const user = await User.findById(userId);
    const selectedAddress = user.addresses[addressIndex];

    if (!selectedAddress) {
      return res.status(400).json({ message: "Invalid address" });
    }

    // 🔹 2. VENDOR CONFIG
    const config = await vendorServiceConfig.findOne({
      vendor: vendorId,
    });

    if (!config) {
      return res.status(404).json({ message: "Vendor config not found" });
    }

    // 🔹 3. TODAY MENU
    const day = new Date()
      .toLocaleString("en-US", { weekday: "long" })
      .toLowerCase();

    const menu = config.weeklyMenu[day]?.[mealType];

    if (!menu) {
      return res.status(400).json({ message: "Meal not available today" });
    }

    const itemsIncluded = menu[variant];

    // 🔹 4. PRICING
    const pricing = config.pricingVariants.find(
      (p) => p.variantName === variant
    );

    if (!pricing) {
      return res.status(400).json({ message: "Invalid variant" });
    }

    let price = pricing.dailyPrice;

    if (isTrial && config.trialOffer.enabled) {
      price = config.trialOffer.standardTrialPrice;
    }

    // 🔥 CREATE ORDER
    const order = await Order.create({
      user: userId,
      vendor: vendorId,
      item: {
        mealType,
        variant,
        itemsIncluded,
        price,
      },
      totalAmount: price,
      deliveryAddress: selectedAddress,
      isTrial,
    });

    res.status(201).json({
      success: true,
      data: order,
    });
  } catch (error) {
    console.log("CREATE ORDER ERROR:", error);
    res.status(500).json({ message: "Server error" });
  }
};
export const getVendorOrders = async (req, res) => {
  try {
    const vendorId = req.user.id;

    const orders = await Order.find({ vendor: vendorId })
      .populate("user", "name phone")
      .sort({ createdAt: -1 });

    res.json({
      success: true,
      data: orders,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};
export const getUserOrders = async (req, res) => {
  try {
    const userId = req.user.id;

    const orders = await Order.find({ user: userId })
      .populate("vendor", "name business")
      .sort({ createdAt: -1 });

    res.json({
      success: true,
      data: orders,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};
export const updateOrderStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const order = await Order.findById(id);

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    order.status = status;

    order.statusHistory.push({ status });

    await order.save();

    res.json({
      success: true,
      data: order,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};