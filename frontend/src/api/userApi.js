import { axiosInstance } from "../utils/axiosInstance"


export const signupUser = async (name,email, password) => {
    const {data} = axiosInstance.post("api/auth/signup", {name,email, password})
    return data;
}

export const loginUser = async (email, password) => {
    const {data} = axiosInstance.post("api/auth/login", {email, password})
    return data;
}

export const logoutUser = async () => {
    const {data} = axiosInstance.post("api/auth/logout")
    return data;
}