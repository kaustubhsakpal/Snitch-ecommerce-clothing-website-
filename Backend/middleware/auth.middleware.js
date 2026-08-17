import {user} from '../models/auth.model.js'

export async function authmiddleware(req,res,next) {

   const token =req.cookies.registertoken;
   
   if(!token){
    return res.status(401).json({
        message:"aunothorized person",
    })
   }
    
}