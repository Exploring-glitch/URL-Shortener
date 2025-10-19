import { axiosInstance } from "../utils/axiosInstance.js";

export const getShortUrlFromBackend = async (url, slug) => {
    const {data} = await axiosInstance.post("api/create", {url, slug})
    return data.result; //.result because in controller we wrote result as key in json 
}