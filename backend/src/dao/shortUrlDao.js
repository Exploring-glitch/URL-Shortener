import shortUrlModel from "../models/shortUrlSchema.js";

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
    catch(e){
        throw new Error(err);
    }
    
}