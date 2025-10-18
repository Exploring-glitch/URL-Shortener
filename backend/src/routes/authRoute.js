import express from "express";
const authRouter = express.Router();
import { userSignup, userLogin, getCurrentUser, userLogout } from "../controller/authController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

authRouter.post("/signup", userSignup);

authRouter.post("/login", userLogin);

authRouter.post("/logout", userLogout);

authRouter.get("/me", authMiddleware, getCurrentUser);

export default authRouter;