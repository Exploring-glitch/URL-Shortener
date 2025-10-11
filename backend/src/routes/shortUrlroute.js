import express from "express";
import { createShortUrl } from "../controller/shortUrlController.js";
const Router = express.Router();
const shortUrlRouter = Router();

shortUrlRouter.post("/", createShortUrl); //initial home page

export default shortUrlRouter;