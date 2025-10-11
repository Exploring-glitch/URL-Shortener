import {createShortUrlWithoutUserService} from "../services/shortUrlService.js";

export const createShortUrl = async function(req, res){ //CREATING THE SHORT URL
    try{
        const {url} = req.body;
        const ShortUrl = await createShortUrlWithoutUserService(url);
        res.send("Your short url is: " + process.env.APP_URL + ShortUrl);
    }
    catch(e){
        next(e);
    }
}

