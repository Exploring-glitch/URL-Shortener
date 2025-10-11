import { finalRedirect } from "../dao/redirectDao.js";
import wrapAsync from "../utils/tryCatchWrapper.js";


export const redirectShortUrl = wrapAsync( async (req, res) =>{ //REDIRECTING SHORT URL TO FULL URL
    const {id} = req.params;
    const url = await finalRedirect(id);
    res.redirect(url.fullUrl);  
})
