import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import { FirebaseAuth } from "./config";

const googleprovider =  new GoogleAuthProvider();

export const singInWithGoogle = async()=>{

    try {
        const result = await signInWithPopup(FirebaseAuth,googleprovider);
        const {displayName,email,photoURL,uid} =result.user;
        return{
            ok:true,
            displayName,email,photoURL,uid
        }
    } catch (error) {
        const errorMenssage = error.message;
        return{
            ok:false,
            errorMenssage
            
        }
    }

}