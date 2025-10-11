import express from "express";
const app = express();
import {nanoid} from "nanoid"; //a library for generating random unique strings
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config({path: "./.env"});
import shortUrlModel from "./src/models/shortUrlSchema.js";
import shortUrlRouter from "./src/routes/shortUrlroute.js";

app.use(express.json());
app.use(express.urlencoded({extended:true}))


app.use("/api/create", shortUrlRouter);


app.get("/api/:shortUrl", async function(req, res){ //REDIRECTING SHORT URL TO FULL URL
    const {shortUrl} = req.params;
    const url = await shortUrlModel.findOne({shortUrl: shortUrl})
    if(url){
        res.redirect(url.fullUrl);
    } else{
        res.status(404).send("Url not found");
    }
})




async function main(){
    try{
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("Connected to mongoose");
        app.listen(3000)
    } 
    catch(e){
        console.log("Error connecting to mongoose", e.message);
    }
}
main();