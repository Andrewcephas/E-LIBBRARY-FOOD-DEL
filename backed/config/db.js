import mongoose from "mongoose";

export const connectDB = async()=>{
    await mongoose.connect('mongodb+srv://andrew:41513501@cluster0.gz1og.mongodb.net/food-del').then(()=>console.log("DB connected"));
}

