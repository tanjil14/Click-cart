import User from "../models/User.js";
import CryptoJS from "crypto-js";
export const update = async (req, res) => {
  const { id } = req.params;
  const {password}=req.body
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
