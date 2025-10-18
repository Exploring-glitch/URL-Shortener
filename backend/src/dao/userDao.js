import shortUrlModel from "../models/shortUrlSchema.js";
import User from "../models/userSchema.js";


export const createNewUser = async (name, email, password) =>{
    const newUser = new User({
        name: name,
        email: email,
        password: password
    })
    await newUser.save();

    return newUser;
}

export const findUserByEmail = async (email) => {
    return await User.findOne({email});
}

export const findUserByEmailAndPassword = async (email, password) => {
    return await User.findOne({email}).select("+password"); // here we are including the password while finding the user
}

export const findUserById = async (id) => {
    return await User.findById(id)
}

export const getUserUrlsDao = async (id) => {
    return await shortUrlModel.find({user : id});
}