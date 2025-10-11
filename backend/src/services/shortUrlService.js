import { generateNanoid } from "../utils/helper.js";

export const createShortUrlService = (url) =>{ //takes url as input and convert it to short url
    const shortUrl = generateNanoid(7); //calling the generateNanoid func written inside utils
    const newUrl = shortUrlModel.create({
        fullUrl: url,
        shortUrl: shortUrl
    })
    newUrl.save()
    
    return(shortUrl);
}