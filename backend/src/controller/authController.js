import wrapAsync from "../utils/tryCatchWrapper.js"
import { userSignupService, userLoginService } from "../services/authService.js";
import { cookieOptions } from "../config/config.js";

export const userSignin = wrapAsync( async(req, res, next) => {
    const {name, email, password} = req.body;
    const token = await userSignupService(name, email, password);

    res.cookie("token", token, cookieOptions) 
    res.status(200).json({"message" : "sign up successful"})
})


export const userLogin = wrapAsync( async(req, res, next) => {
    const {email, password} = req.body;
    const token = await userLoginService(email, password);

    res.cookie("token", token, cookieOptions) 
    res.status(200).json({"message" : "Login successful"})
})

export const userLogout = wrapAsync( async(req, res, next) => {

})