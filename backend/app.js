import express from "express";
const app = express();
import {nanoid} from "nanoid"; //a library for generating random unique strings
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config({path: "./.env"});
import shortUrlRouter from "./src/routes/shortUrlroute.js";
import { redirectShortUrl } from "./src/controller/redirectController.js";
import { errorHandler } from "./src/utils/errorHandler.js";


app.use(express.json());
app.use(express.urlencoded({extended:true}))


app.use("/api/create", shortUrlRouter);
app.use("/:id", redirectShortUrl);


app.use(errorHandler); //global error handler


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