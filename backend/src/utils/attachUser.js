import { findUserById } from "../dao/userDao.js"
import { verifyToken } from "./helper.js"


export const attachUser = async (req, res, next) => {

    // Skip OPTIONS requests (preflight)
    if (req.method === "OPTIONS") return next();

    
    const token = req.cookies.token
    if(!token) return next()

    try {
        const decodedId = verifyToken(token)
        const user = await findUserById(decodedId)
        
        if(!user) return next()
        req.user = user
        next()
    } catch (error) {
        console.log(error)
        next()
    }
}