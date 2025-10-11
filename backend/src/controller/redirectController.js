import { finalRedirect } from "../dao/redirectDao.js";


export const redirectShortUrl = async (req, res) =>{ //REDIRECTING SHORT URL TO FULL URL
    try{
        const {id} = req.params;
        const url = await finalRedirect(id);
        res.redirect(url.fullUrl);
    } catch(e){
        next(e);
    }
}
