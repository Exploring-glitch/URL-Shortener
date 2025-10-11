import { saveShortUrlDao } from "../dao/shortUrlDao.js";
import { generateNanoid } from "../utils/helper.js";

export const createShortUrlWithoutUserService = async (url) =>{ //takes url as input and convert it to short url
    const shortUrl = await generateNanoid(7); //calling the generateNanoid func written inside utils
    await saveShortUrlDao(url, shortUrl); //calling the dao function to save the url to the database
    return(shortUrl);
}

export const createShortUrlWithUserService = async (url, userId) =>{ //takes url as input and convert it to short url
    const shortUrl = await generateNanoid(7); //calling the generateNanoid func written inside utils
    await saveShortUrlDao(url, shortUrl, userId); //calling the dao function to save the url to the database
    return(shortUrl);
}