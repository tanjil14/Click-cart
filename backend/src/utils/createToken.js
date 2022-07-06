import jwt from "jsonwebtoken";

export const createSingInToken = (id) => {
  return jwt.sign({ id: id }, process.env.JWT_SECRET, { expiresIn: "1d" });
};
