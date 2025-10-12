import {createShortUrlWithoutUserService} from "../services/shortUrlService.js";
import wrapAsync from "../utils/tryCatchWrapper.js";

export const createShortUrl = wrapAsync( async (req, res, next) => { //CREATING THE SHORT URL
    const {url} = req.body;
    const ShortUrl = await createShortUrlWithoutUserService(url);
    res.send(process.env.APP_URL + ShortUrl);
})

