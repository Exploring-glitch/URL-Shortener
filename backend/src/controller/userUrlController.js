import { deleteUrlById, getUserUrlsDao } from "../dao/userDao.js";
import wrapAsync from "../utils/tryCatchWrapper.js";


export const getAllUserUrls = wrapAsync(async(req,res) => {
    const {_id} = req.user;
    const urls = await getUserUrlsDao(_id);
    res.status(200).json({"message" : "success" , "urls" : urls})
})

export const deleteUrl = wrapAsync(async(req, res)=> {
    const {id} = req.params;
    const deleted = await deleteUrlById(id); 
    
    if(!deleted){
        res.status(500).json({"message" : "Failed to delete URL"})
    }
    res.status(200).json({"message" : "URL deleted successfully"})
})