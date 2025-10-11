import { finalRedirect } from "../dao/redirectDao.js";


export const redirectShortUrl = async (req, res) =>{ //REDIRECTING SHORT URL TO FULL URL
    const {id} = req.params;
    console.log("hii" + id);
    const url = await finalRedirect(id);
    res.redirect(url.fullUrl);
}
