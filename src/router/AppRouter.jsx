import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";

import { Navigate, Route, Routes } from "react-router-dom";
import { FirebaseAuth } from "../firebase/config";

import { login, logout } from "../store/auth";
import { AuthRoutes } from "../auth/routes/AuthRoutes";

import { JournalRoutes } from "../journal/routes/JournalRoutes";
import { CheckingAuth } from "../ui/";

export const AppRouter = () => {


    const { status } = useSelector( state => state.auth);
    const diapatch = useDispatch();

    useEffect(() => {

        onAuthStateChanged( FirebaseAuth, async( user ) => {

            if ( !user ) return diapatch( logout() );

            const { uid, email, displayName, photoURL } = user;
            diapatch( login({ uid, email, displayName, photoURL }) );

        })
    }, []);
    
    if ( status === 'checking') {
        return <CheckingAuth />
    }

    return (
        <Routes>

            {
                (status === 'authenticated')
                ? <Route path="/*" element={ <JournalRoutes />} />
                : <Route path="/auth/*" element={ <AuthRoutes />} />
            
            }

            <Route path="/*" element={ <Navigate to="/auth/login" /> }/>

            {/* Loguin y Registro */}
            {/* <Route path="/auth/*" element={ <AuthRoutes />} /> */}
            {/* JournalApp */}
            {/* <Route path="/*" element={ <JournalRoutes />} /> */}
            
        </Routes>
    )
}
