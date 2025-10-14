import userModel from "../models/userSchema"


export const createNewUser = async (name, email, password) =>{
    const newUser = new userModel({
        name: name,
        email: email,
        password: password
    })
    await newUser.save();

    return newUser;
}

export const findUserByEmail = async (email) => {
    const a = await userModel.findOne({email});
    return a;
}