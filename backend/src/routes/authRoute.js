import express from "express";
const authRouter = express.Router();
import { userSignin, userLogin, userLogout } from "../controller/authController.js";

authRouter.post("/signup", userSignin);

authRouter.post("/login", userLogin);

authRouter.post("/logout", userLogout);

export default authRouter;