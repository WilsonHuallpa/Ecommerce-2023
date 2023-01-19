import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";

import { login, logout } from "../store/auth";
import { FirebaseAuth } from "../firebase/config";

export const useCheckAuth = () => {

    const { status } = useSelector(state => state.auth);
    const dispatch = useDispatch();
  
    useEffect(() => {
      onAuthStateChanged( FirebaseAuth, async(user) => {
          //Aca nos damos cuenta si tenemos o no un usuario. 
          if( !user ) return dispatch( logout() );
          const {uid, email, displayName, photoURl} = user;
          dispatch( login({ uid, email, displayName, photoURl }) );
      } );
    
    }, [])
    
   return {
    status
   }
  
}