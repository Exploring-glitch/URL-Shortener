import { nanoid } from "nanoid";
import jsonwebtoken from 'jsonwebtoken';


export function generateNanoid (length){ ////generating a random id of length of nanoid is 7
    return nanoid(length);
}

export const signToken = (payload) => { //generate the token
    return jsonwebtoken.sign(payload, process.env.JWT_SECRET, {expiresIn: "5m"}); 
}

export const verifyToken = (token) => { //verify the token
    const decoded = jsonwebtoken.verify(token, process.env.JWT_SECRET);
    return (decoded.id);
}
