import {user} from '../models/auth.model.js'

export async function authmiddleware(req,res,next) {

   const token =req.cookies.login;
    
}