import wrapAsync from "../utils/tryCatchWrapper.js"
import { userSignService } from "../services/authService.js";
import { cookieOptions } from "../config/config.js";

export const userSignin = wrapAsync( async(req, res, next) => {
    const {name, email, password} = req.body;
    const token = await userSignService(name, email, password);
    
    res.cookie("token", token, cookieOptions) 
    res.status(200).json({"message" : "sign up successful"})
})


export const userLogin = wrapAsync( async(req, res) => {

})

export const userLogout = wrapAsync( async(req, res) => {

})