import { createShortUrlWithoutUserService, createShortUrlWithUserService } from "../services/shortUrlService.js";
import wrapAsync from "../utils/tryCatchWrapper.js";

export const createShortUrl = wrapAsync(async (req, res, next) => { //CREATING THE SHORT URL
    const data = req.body;

    const baseUrl = process.env.APP_URL.endsWith("/")
        ? process.env.APP_URL
        : process.env.APP_URL + "/";

    let shortUrl;
    if (req.user) { //comes from attachUser.js file
        full_short_url = await createShortUrlWithUserService(data.url, req.user._id, data.slug, baseUrl);
    } else {
        full_short_url = await createShortUrlWithoutUserService(data.url, baseUrl);
    }

    res.status(200).json({ result: full_short_url });
})
