import { checkCustomUrlDao, saveShortUrlDao } from "../dao/shortUrlDao.js";
import { generateNanoid } from "../utils/helper.js";


export const createShortUrlWithoutUserService = async (url, baseUrl) => { //takes url as input and convert it to short url
    const shortUrl = generateNanoid(7); //calling the generateNanoid func written inside utils
    if (!shortUrl) throw new Error("Short URL not generated")

    const full_short_url = baseUrl + shortUrl

    await saveShortUrlDao(url, shortUrl, full_short_url); //calling the dao function to save the url to the database
    
    return (full_short_url);
}

export const createShortUrlWithUserService = async (url, userId, slug = null, baseUrl) => {
    const shortUrl = slug || generateNanoid(7); //if slug exists then slug or else call the  generateNanoid func
    if (!shortUrl) throw new Error("Short URL not generated")

    const exists = await checkCustomUrlDao(slug)
    if (exists) { throw new Error("This custom Url already exists") }

    const full_short_url = baseUrl + shortUrl

    await saveShortUrlDao(url, shortUrl, userId, full_short_url);

    return (full_short_url);
}

