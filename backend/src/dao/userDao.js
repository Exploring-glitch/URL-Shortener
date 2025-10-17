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

export const findUserById = async (id) => {
    return await User.findById(id)
}