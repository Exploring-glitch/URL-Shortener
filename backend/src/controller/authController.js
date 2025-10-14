import wrapAsync from "../utils/tryCatchWrapper"
import { userSignService } from "../services/authService.js";

export const userSignin = wrapAsync( async(req, res, next) => {
    const {user, email, password} = req.body;
    const a = userSignService(user, email, password);
    res.status(200).json(a)
})

export const userLogin = wrapAsync( async(req, res) => {

})

export const userLogout = wrapAsync( async(req, res) => {

})