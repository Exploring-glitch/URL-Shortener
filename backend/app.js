import express from "express";
const app = express();
import {nanoid} from "nanoid"; //a library for generating random unique strings
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config({path: "./.env"});
import shortUrlModel from "./src/models/shortUrlSchema.js";


app.use(express.json());
app.use(express.urlencoded({extended:true}))


app.post("/api/create", async function(req, res){
    const {url} = req.body;
    const shortUrl = nanoid(7) //generating a random id of length of nanoid is 7

    const newUrl = await shortUrlModel.create({
        fullUrl: url,
        shortUrl: shortUrl
    })
    newUrl.save()
    res.send("Your short url is: " + shortUrl)
})

app.get("/api/:shortUrl", async function(req, res){
    const {shortUrl} = req.params;
    const x = await shortUrlModel.findOne({shortUrl: shortUrl})
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