import shortUrlModel from "../models/shortUrlSchema.js";

export const findShortUrl =  async (shortUrl) =>{
  return await shortUrlModel.findOneAndUpdate({shortUrl: shortUrl}, {$inc: {clicks: 1}}); //incrementing the clicks by 1
}