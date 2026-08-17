
import { user } from "../models/auth.model.js";
import jwt from 'jsonwebtoken';

export const authcontroller= async (req,res)=>{    
     const {username,email,password}=req.body;

     const userallreadyexits= await user.find({
        username,email,password
     })
     if(userallreadyexits){
        return res.status(401).json({
            message:"user allreday exits"
        })
     }

     const newuser = await user.create({
        username,email,password
     })

     const registertoken =jwt.sign("registertoken",process.env.JWT_SECRETS);
     res.status(200).json({
        message:"user created scuessfully",
        success:true,
        newuser,
        registertoken
     })

}

