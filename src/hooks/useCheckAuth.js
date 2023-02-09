import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";

import { FirebaseAuth } from "../firebase/config";
import { login, logout } from "../store/auth";
import { startLoadingNotes } from "../store/journal";



export const useCheckAuth = () => {

    const { status } = useSelector( state => state.auth);
    const diapatch = useDispatch();

    useEffect(() => {

        onAuthStateChanged( FirebaseAuth, async( user ) => {

            if ( !user ) return diapatch( logout() );

            const { uid, email, displayName, photoURL } = user;
            diapatch( login({ uid, email, displayName, photoURL }) );
            diapatch( startLoadingNotes() );
            

        })
    }, []); 

    return status;
}
