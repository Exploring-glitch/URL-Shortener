import express from "express";
const app = express();
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config({path: "./.env"});
import shortUrlRouter from "./src/routes/shortUrlroute.js";
import { redirectShortUrl } from "./src/controller/redirectController.js";
import { errorHandler } from "./src/utils/errorHandler.js";
import { connectDb } from "./src/config/mongoConfig.js";

app.use(express.json());
app.use(express.urlencoded({extended:true}))


app.use("/api/create", shortUrlRouter);
app.use("/:id", redirectShortUrl);


app.use(errorHandler); //global error handler


app.listen(3000, () => {
    connectDb();
    console.log("Server is running on port 3000");
})
