import { findUserById } from "../dao/userDao";
import { verifyToken } from "../utils/helper";


export const authMiddleware = async(req, res, next) =>{
    const user = req.cookies.token;
    if(!user){ 
        return res.status(401).json({"error" : "Unauthorized"})
    }

    try{
        const decodedId = verifyToken(token);
        const user = findUserById(decodedId);
        if(!user){
            return res.status(401).json({"error" : "Unauthorized"})
        }
        req.user = user
        next();
    } catch(e){
        return res.status(401).json({message:"Unauthorized",error})
    }
}