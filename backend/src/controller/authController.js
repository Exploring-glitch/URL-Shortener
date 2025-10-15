import wrapAsync from "../utils/tryCatchWrapper.js"
import { userSignService } from "../services/authService.js";

export const userSignin = wrapAsync( async(req, res, next) => {
    const {name, email, password} = req.body;
    const a = userSignService(name, email, password);
    res.status(200).json({a : name})
})

export const userLogin = wrapAsync( async(req, res) => {
    
})

export const userLogout = wrapAsync( async(req, res) => {

})