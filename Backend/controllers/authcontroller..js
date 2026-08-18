import { user } from "../models/auth.model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
export const authcontroller = async (req, res) => {
  const { username, email, password } = req.body;

  const userallreadyexits = await user.findOne({
    username,
    email,
    password,
  });
  if (userallreadyexits) {
    return res.status(401).json({
      message: "user allreday exits",
    });
  }

  const newuser = await user.create({
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
  const userexits = await user.findOne({
    $or: [{username}, {email}],
  }).select("+password");
  if (!userexits) {
    return res.status(401).json({
      message: "unathorized or crendital wrong",
    });
  }
  console.log(userexits.password);

  const logintoken = jwt.sign({id:userexits._id}, process.env.JWT_SECRETS);
  res.cookie("logintoken",logintoken);
  const ismatch = await bcrypt.compare(password, (userexits.password));
  if (ismatch) {
    return res.status(200).json({
      userexits,
      message: "scessfully login",
      logintoken,
    });
  }
};
