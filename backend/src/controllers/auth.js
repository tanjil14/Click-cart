import bcrypt from "bcrypt";
import UserModel from "../models/user.js";
import { createSingInToken } from "../utils/createToken.js";
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
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });
    if (user) {
      const isPasswordCorrect = bcrypt.compareSync(password, user.password);
      if (isPasswordCorrect) {
        const token = createSingInToken(user._id);
        const { _id,firstName, lastName, email, role, fullName } = user;
        res.status(200).json({
          token,
          user: {_id,
            firstName,
            lastName,
            email,
            role,
            fullName,
          },
        });
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
