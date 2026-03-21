import {createShortUrlWithoutUserService, createShortUrlWithUserService} from "../services/shortUrlService.js";
import wrapAsync from "../utils/tryCatchWrapper.js";

export const createShortUrl = wrapAsync( async (req, res, next) => { //CREATING THE SHORT URL
    console.log("controller")
    const data = req.body;

    console.log("data: ", data)

    let shortUrl;
    if(req.user){ //comes from attachUser.js file
        shortUrl = await createShortUrlWithUserService(data.url, req.user._id, data.slug);
    } else{
        shortUrl = await createShortUrlWithoutUserService(data.url)
    }
    
    console.log("shortUrl: ", shortUrl)

    res.status(200).json({result: process.env.APP_URL + shortUrl});
    
})
