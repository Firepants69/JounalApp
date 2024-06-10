import { singInWithGoogle } from "../../firebase/providers";
import { checkingCredentials } from "./authSlice";

export const checkingAuthentication = (email,Password) =>{
    return async(dispatch)=>{

        dispatch(checkingCredentials());

    }
}

export const startGoogleSingIn = () =>{
    return async(dispatch)=>{
        dispatch(checkingCredentials());
        
        const result =await singInWithGoogle();
        console.log(result)
    }
}