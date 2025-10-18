import express from "express";
const userRouter = express.Router();
import { authMiddleware } from '../middleware/authMiddleware.js';
import { getAllUserUrls } from '../controller/userUrlController.js';


userRouter.get("/urls", authMiddleware, getAllUserUrls);

export default userRouter