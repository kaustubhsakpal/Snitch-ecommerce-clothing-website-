import mongoose from "mongoose";
import bcrypt from 'bcrypt';
export const usermodel=new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique: true,
        lowercase:true
    },
    password:{
        type:String,
        required:true,
        select:false
    }
},{
    timestamps:true
})

usermodel.pre("save",async function (next) {
    if(!this.isModified("password")){
        return next;
    }

    const salt =await bcrypt.genSalt(10);
    this.password= await bcrypt.hash(this.password,salt);
    next;
})

export const user = mongoose.model("user",usermodel)
