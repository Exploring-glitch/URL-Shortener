
import {createShortUrlService} from "../services/shortUrlService";

export const createShortUrl = async function(req, res){ //CREATING THE SHORT URL
    const {url} = req.body;
    const ShortUrl = await createShortUrlService(url);

    res.send("Your short url is: " + ShortUrl);
}