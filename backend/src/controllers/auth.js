import bcrypt from "bcrypt";
import UserModel from "../models/user.js";
export const register = async (req, res) => {
  try {
    const { email, password, firstName, lastName } = req.body;
    const emailExist = await UserModel.findOne({ email });
    if (emailExist) {
      return res.status(400).json({ message: "User already registered!" });
    } else {
      const salt = bcrypt.genSaltSync(10);
      const hashed = bcrypt.hashSync(password, salt);
      const response = await UserModel.create({
        firstName,
        lastName,
        email,
        password: hashed,
        username: Math.random().toString(),
      });
      return res
        .status(200)
        .json({ message: "User created Successfully..!", response });
    }
  } catch (error) {
    return res.status(500).json({ message: "Server internal error!" });
  }
};
