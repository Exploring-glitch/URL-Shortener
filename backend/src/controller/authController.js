import wrapAsync from "../utils/tryCatchWrapper.js"
import { userSignupService, userLoginService } from "../services/authService.js";
import { cookieOptions } from "../config/config.js";

export const userSignup = wrapAsync( async(req, res) => {
    const {name, email, password} = req.body;
    const {token,user} = await userSignupService(name, email, password);

    req.user = user
    res.cookie("token", token, cookieOptions) 
    res.status(200).json({"message" : "Sign Up success"})
})

export const userLogin = wrapAsync( async(req, res) => {
    const {email, password} = req.body;
    const {token, user} = await userLoginService(email, password);

    req.user = user
   
    res.cookie("token", token, cookieOptions) 
    res.status(200).json({"message" : "Login success", "user" : user})
})

export const userLogout = wrapAsync( async(req, res) => {
    res.clearCookie("token", cookieOptions)
    res.status(200).json({"message" : "Logout success"})
})

export const getCurrentUser = wrapAsync(async(req, res) => {
    res.status(200).json({"user" : req.user})
})