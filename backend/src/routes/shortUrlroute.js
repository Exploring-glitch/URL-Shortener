import express from "express";
import { createShortUrl } from "../controller/shortUrlController.js";
const shortUrlRouter = express.Router();


shortUrlRouter.post("/", createShortUrl); //initial home page 


export default shortUrlRouter;