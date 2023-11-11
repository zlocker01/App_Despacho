import jwt from "jsonwebtoken";

export const generateJWT = (id) => {
  //? jwt use obj with id of user in this case, secret word and time to expire
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "10d" });
};
