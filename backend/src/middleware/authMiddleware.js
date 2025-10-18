import { findUserById } from "../dao/userDao.js";
import { verifyToken } from "../utils/helper.js";


export const authMiddleware = async(req, res, next) =>{
    console.log("hi from middleware")
    const token = req.cookies.token;
    if(!token){ 
        return res.status(401).json({"error" : "Unauthorized"})
    }

    try{
        const decodedId = await verifyToken(token);
        const user = await findUserById(decodedId);
        if(!user){
            return res.status(401).json({"error" : "Unauthorized"})
        }

        req.user = user
        console.log("user here " + req.user)
        next();
        console.log("after next")

    } catch(e){
        return res.status(401).json({message:"Unauthorized", "error" : e.message})
    }
}