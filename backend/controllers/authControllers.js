import User from "../models/Users.models.js";

const register =  async (req,res) => {
    const {name} = req.body;
    const user = await User.create({
   name,
    });

    res.json(user);

}
export default register;