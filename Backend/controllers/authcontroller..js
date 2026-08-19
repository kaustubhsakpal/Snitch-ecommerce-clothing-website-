import { usermodel } from "../models/auth.model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
export const authcontroller = async (req, res) => {
  const { username, email, password } = req.body;

  const userallreadyexits = await usermodel.findOne({
    username,
    email,
    password,
  });
  if (userallreadyexits) {
    return res.status(401).json({
      message: "user allreday exits",
    });
  }

  const newuser = await usermodel.create({
    username,
    email,
    password,
  });

  const registertoken =  jwt.sign({id:newuser._id}, process.env.JWT_SECRETS);
  return res.status(200).json({
    message: "user created scuessfully",
    success: true,
    newuser,
    registertoken,
  });
};

export const logincontroller = async (req, res) => {
  const { username, email, password } = req.body;
  const user = await usermodel.findOne({
    $or: [{username}, {email}],
  }).select("+password");
  if (!user) {
    return res.status(401).json({
      message: "unathorized or crendital wrong",
    });
  }

  const logintoken = jwt.sign({id:user._id}, process.env.JWT_SECRETS);
  res.cookie("logintoken",logintoken);
  const ismatch = await bcrypt.compare(password, (user.password));
  if (ismatch) {
    return res.status(200).json({
      user,
      message: "scessfully login",
      logintoken,
    });
  }
};
