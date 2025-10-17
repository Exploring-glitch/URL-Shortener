import {createShortUrlWithoutUserService, createShortUrlWithUserService} from "../services/shortUrlService.js";
import wrapAsync from "../utils/tryCatchWrapper.js";

export const createShortUrl = wrapAsync( async (req, res, next) => { //CREATING THE SHORT URL
    const data = req.body;

    let shortUrl;
    if(req.user){ //comes from attachUser.js file
        shortUrl = await createShortUrlWithUserService(data.url, req.user._id, data.slug);
    } else{
        shortUrl = await createShortUrlWithoutUserService(data.url)
    }
    
    res.status(200).json({result: process.env.APP_URL + shortUrl});
})
