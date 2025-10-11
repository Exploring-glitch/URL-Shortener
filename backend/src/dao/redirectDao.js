import shortUrlModel from "../models/shortUrlSchema.js";

export const finalRedirect =  async (shortUrl) =>{
    try{
        return await shortUrlModel.findOneAndUpdate({shortUrl: shortUrl}, {$inc: {clicks: 1}}); //incrementing the clicks by 1
    } catch(e){
        throw new Error("Error in redirecting to the full url");
    }
}