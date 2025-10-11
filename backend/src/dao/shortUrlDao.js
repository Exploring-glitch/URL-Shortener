import shortUrlModel from "../models/shortUrlSchema.js";

export const saveShortUrlDao = async (url, shortUrl, userId) => {
    const newUrl = new shortUrlModel({
        fullUrl: url,
        shortUrl: shortUrl
    })
    if(userId){
        newUrl.userId = userId;
    }
    newUrl.save(); //saving the new url to the database
}