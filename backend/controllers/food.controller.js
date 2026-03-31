import Food from "../models/Food.model.js";
import ProviderModel from "../models/Provider.model.js";

const provider = await Provider.findOne({ user: req.user.id });


export const addFood = async (req, res) => {
  const { name, price, category } = req.body;

  const food = await Food.create({
    name,
    price,
    category,
     provider: provider._id,
  });

  res.json(food);
};

export const getFoods = async (req, res) => {
  const foods = await Food.find().populate("provider");
  res.json(foods);
};