import { findUserById } from "../dao/userDao.js";
import { verifyToken } from "../utils/helper.js";


export const authMiddleware = async(req, res, next) =>{
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
        next();
    } catch(e){
        return res.status(401).json({message:"Unauthorized",error})
    }
}