import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// STEP 1: Role
export const selectRole = async (req, res) => {
  try {
    const user = await User.create({
      role: "user",
      registrationStep: 1
    });

    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET
    );

    res.json({ token, step: 1 });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


// STEP 2: Registration
export const registerUser = async (req, res) => {
  try {
    console.log("HEADERS:", req.headers);
    console.log("USER:", req.user);

    if (!req.user) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields required" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.findByIdAndUpdate(
      req.user.id,
      {
        name,
        email,
        password: hashedPassword,
        registrationStep: 2
      },
      { new: true }
    );

    res.json({ step: 2, user });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


// STEP 3: Add Address
export const addAddress = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);

    if (user.registrationStep < 2) {
      return res.status(400).json({
        msg: "Complete registration first"
      });
    }

    const address = req.body;

    if (address.isDefault) {
      user.addresses.forEach(a => a.isDefault = false);
    }

    user.addresses.push(address);
    user.registrationStep = 3;

    await user.save();

    res.json({ step: 3, user });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


// LOGIN (after full registration)
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) return res.status(400).json({ msg: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) return res.status(400).json({ msg: "Wrong password" });

    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET
    );

    res.json({
      token,
      step: user.registrationStep
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};