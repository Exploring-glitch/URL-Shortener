import {createShortUrlWithoutUserService, createShortUrlWithUserService} from "../services/shortUrlService.js";
import wrapAsync from "../utils/tryCatchWrapper.js";

export const createShortUrl = wrapAsync( async (req, res, next) => { //CREATING THE SHORT URL
    const {url} = req.body;

    let shortUrl;
    if(req.user){
        shortUrl = await createShortUrlWithUserService(url, req.user._id);
    } else{
        shortUrl = await createShortUrlWithoutUserService(url)
    }
    
    res.status(200).json({result: process.env.APP_URL + shortUrl});
})


export const createCustomShortUrl = wrapAsync(async (req,res)=>{
    const {url,slug} = req.body
    const shortUrl = await createShortUrlWithoutUserService(url,customUrl)
    res.status(200).json({shortUrl : process.env.APP_URL + shortUrl})
})