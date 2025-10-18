import { getUserUrlsDao } from "../dao/userDao.js";
import wrapAsync from "../utils/tryCatchWrapper.js";


export const getAllUserUrls = wrapAsync(async(req,res) => {
    console.log("hello from controller")
    const {_id} = req.user;
    console.log({_id})
    const urls = await getUserUrlsDao(_id);
    console.log(urls)
    res.status(200).json({"message" : "success" , urls})
})