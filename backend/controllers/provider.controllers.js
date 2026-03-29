import ProviderModel from "../models/Provider.model.js";

const createProvider = (req,res) => {
const { businessName, location, phone } = req.body;
  const provider = ProviderModel.create({
    user:req.user.id,
    businessName,
    location,
    phone,
 });
 res.json(provider);
}

export default createProvider;

