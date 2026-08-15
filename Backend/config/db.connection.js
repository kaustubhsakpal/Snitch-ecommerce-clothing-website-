import mongoose from 'mongoose';

export  async function dbconnection() {
    
   await mongoose.connect(process.env.MONGO_URI).then(()=>{
        console.log("database connected");
        
    })
}
