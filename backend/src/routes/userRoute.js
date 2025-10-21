import express from "express";
const userRouter = express.Router();
import { authMiddleware } from '../middleware/authMiddleware.js';
import { deleteUrl, getAllUserUrls } from '../controller/userUrlController.js';


userRouter.get("/urls", authMiddleware, getAllUserUrls);

userRouter.delete("/urls/delete/:id", authMiddleware, deleteUrl);

export default userRouter