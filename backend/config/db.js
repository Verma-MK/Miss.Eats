import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('Write your MongoDB url').then(()=>console.log("DataBase Connected"));
}