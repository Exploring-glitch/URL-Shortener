import mongoose from "mongoose";

export const connectDb = async ()=> {
    try{
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("Connected to mongoose");
    } 
    catch(e){
        console.log("Error connecting to mongoose. Error:", e.message);
    }
}