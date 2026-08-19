export async function authmiddleware(req,res,next) {

   const token =req.cookies.logintoken;

   if(!token){
    return res.status(401).json({
        message:"aunothorized person",
    })
   }
    
}