import CryptoJS from "crypto-js";
import jwt from "jsonwebtoken";
import UserModel from "../models/user.js";
export const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const cipherText = CryptoJS.AES.encrypt(
      password,
      process.env.JWT_SECRET
    ).toString();
    const emailExist = await UserModel.findOne({ email });
    if (emailExist) {
      return res.status(400).json({ message: "User already registered!" });
    } else {
      const response = await UserModel.create({
        username,
        email,
        password: cipherText,
      });
      return res
        .status(200)
        .json({ message: "User created Successfully..!", response });
    }
  } catch (error) {
    return res.status(500).json({ message: "Server internal error!" });
  }
};
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });
    if (user) {
      const bytes = CryptoJS.AES.decrypt(user.password, process.env.JWT_SECRET);
      const originalPass = bytes.toString(CryptoJS.enc.Utf8);
      const isPasswordCorrect = password === originalPass;
      if (isPasswordCorrect) {
        const { password, ...others } = user._doc;
        const token = jwt.sign(
          {
            id: user._id,
            admin: user.isAdmin,
          },
          process.env.JWT_SECRET,
          { expiresIn: "3d" }
        );
        // res.status(200).json({ others, token }); // "others":{} to prevent this use spread operator
        res.status(200).json({ ...others, token });
      } else {
        res.status(400).json({ message: "invalid Password" });
      }
    } else {
      res.status(400).json({ message: "User not found!" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server internal error!" });
  }
};
