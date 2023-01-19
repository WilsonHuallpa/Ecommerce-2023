
import { loginWithEmailPassword, logoutFirebase, registerUser, singInWithGoogle } from "../../firebase/providers";
//import { clearNotesLogout } from "../journal";
import { checkingCredentials, login, logout } from "./";

export const checkingAuthentication = (email, password) =>{
    return async( dispatch ) => {
        dispatch( checkingCredentials() );
    }
}

export const startGoogleSignIn = () => {
    return async(dispatch) => {
        dispatch ( checkingCredentials() );
        const result = await singInWithGoogle();

        if( !result.ok ) return dispatch( logout( result.errorMessage ) );
        
        dispatch( login( result ) );

    }
}

export const startCreatingUserWithEmailPassword = ({email, password, lastName, firstName}) => {
    return async( dispatch ) => {
        dispatch( checkingCredentials() );
        const displayName = `${firstName} ${lastName}`;

        const {ok, uid, photoURL, errorMessage } = await registerUser({email, password, displayName}); 

        if( !ok ) return dispatch( logout({errorMessage}) );
       
        dispatch( login({ uid, displayName, email, photoURL }) )
    }
}

export const startLoginWithEmailPassword = ({ email, password }) =>{

    return async( dispatch ) => {
        dispatch( checkingCredentials() );
        const result = await loginWithEmailPassword({email, password});
        if( !result.ok ) return dispatch( logout( result ) );
        
        dispatch( login( result ) );
    } 
}

export const startLogout = () => {
    return async( dispatch ) => {
        await logoutFirebase(); 
        //En este punto podemos hacer otro dispatch para limpiar las notas. 
        
        dispatch(logout());
        dispatch(clearNotesLogout());
    }
}