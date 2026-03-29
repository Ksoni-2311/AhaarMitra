import ProviderModel from "../models/Provider.model.js";

const createProvider = async (req,res) => {
const { businessName, location, phone } = req.body;
  const provider = await ProviderModel.create({
    user:req.user.id,
    businessName,
    location,
    phone,
 });
 res.json(provider);
}

export default createProvider;

