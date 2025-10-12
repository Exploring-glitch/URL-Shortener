import shortUrlModel from "../models/shortUrlSchema.js";
import { ConflictError } from "../utils/errorHandler.js";

export const saveShortUrlDao = async (url, shortUrl, userId) => {
    try{
        const newUrl = new shortUrlModel({
            fullUrl: url,
            shortUrl: shortUrl
        })

        if(userId){
            newUrl.user = userId;
        }
        await newUrl.save(); //saving the new url to the database
    }
    catch(err){
        if(err.code === 11000){
            throw new ConflictError(err);
        }
        else{
            throw new Error(err);
        }
    }
}