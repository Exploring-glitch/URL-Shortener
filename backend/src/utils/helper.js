import { nanoid } from "nanoid";

export function generateNanoid (length){ ////generating a random id of length of nanoid is 7
    return nanoid(length);
}

/* or we can also write like this: 
 export const generateNanoid = (length) => {
    return nanoid(length)
}*/ 