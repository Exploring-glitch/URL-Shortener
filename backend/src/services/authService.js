import { createNewUser, findUserByEmail } from "../dao/userDao.js"
import { ConflictError } from "../utils/errorHandler.js";

export const userSignService = async (name, email, password) =>{
    const user = await findUserByEmail({email});
    if(user){
        throw new ConflictError("User already exists");
    }

    const newUser = await createNewUser(name, email, password);
    return newUser; 
}