import { findShortUrl } from "../dao/redirectDao.js";
import wrapAsync from "../utils/tryCatchWrapper.js";


export const redirectShortUrl = wrapAsync( async (req, res) =>{ //REDIRECTING SHORT URL TO FULL URL
    const {shortUrl} = req.params;
    const url = await findShortUrl(shortUrl);
    if(!url){
        throw new Error("Short URL not found");
    }
    res.redirect(url.fullUrl);  
})
