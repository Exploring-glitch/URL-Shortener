import { axiosInstance } from "../utils/axiosInstance.js";

export const getShortUrlFromBackend = async (url, slug) => {
    console.log("hello")

    const {data} = await axiosInstance.post("api/create", {url, slug})
    
    console.log("data", data)
    
    return data.result; //.result because in controller we wrote result as key in json 
}