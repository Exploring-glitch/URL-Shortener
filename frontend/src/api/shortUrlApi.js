import axios from "axios";
import { axiosInstance } from "../utils/axiosInstance.js";

export const getShortUrlFromBackend = async (url) => {
    const {data} = await axiosInstance.post("api/create", {url})
    return data.result; //we wrote .result because in controller we wrote result as key in json 
}