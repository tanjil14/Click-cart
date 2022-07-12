import CryptoJS from "crypto-js";
import User from "../models/User.js";
export const updateUser = async (req, res) => {
  const { id } = req.params;
  const { password } = req.body;
  if (req.body.password) {
    req.body.password = CryptoJS.AES.encrypt(
      password,
      process.env.JWT_SECRET
    ).toString();
  }
  try {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new: true }
    ); //prevent previous data
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json(error);
  }
};
export const deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("User has been deleted...");
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (error) {
    res.status(500).json(error);
  }
};
