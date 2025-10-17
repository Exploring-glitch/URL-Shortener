import { createNewUser, findUserByEmail } from "../dao/userDao.js"
import { ConflictError } from "../utils/errorHandler.js";
import { signToken } from '../utils/helper.js';

export const userSignupService = async (name, email, password) =>{
    const user = await findUserByEmail(email);
    if(user){
        throw new ConflictError("User already exists");
    }

    const newUser = await createNewUser(name, email, password);
    const token = signToken({id : newUser._id})
    return {token, newUser}; 
}


export const  userLoginService = async (email, password) =>{
    const user = await findUserByEmail(email);
    if( !user || user.password !== password ) {
        throw new Error ("Incorrect credentials");
    }

    const token = signToken({id : user._id})
    return {token, user};
}
