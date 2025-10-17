import express from "express";
const authRouter = express.Router();
import { userSignup, userLogin } from "../controller/authController.js";

authRouter.post("/signup", userSignup);

authRouter.post("/login", userLogin);


export default authRouter;