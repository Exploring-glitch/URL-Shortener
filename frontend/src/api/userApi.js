import { axiosInstance } from "../utils/axiosInstance"


export const signup_User = async (name,email, password) => {
    const {data} = await axiosInstance.post("api/auth/signup", {name, email, password})
    return data;
}

export const login_User = async (email, password) => {
    const {data} = await axiosInstance.post("api/auth/login", {email, password})
    return data;
}


export const logout_User = async () => {
    const {data} = await axiosInstance.post("api/auth/logout")
    return data;
}

export const Current_User = async () => {
    const {data} = await axiosInstance.get("api/auth/me")
    return data;
}

export const GetAllUrls_User = async() => {
    const {data} = await axiosInstance.get("api/user/urls");
    console.log(data.urls)
    return data
}

export const DeleteUser_Url = async(id) => {
    const {data}  = await axiosInstance.delete(`api/user/urls/delete/${id}`, {withCredentials : true})
    return data;
}