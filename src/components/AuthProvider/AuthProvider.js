import React, { createContext } from 'react';
import useFirebase from '../hook/useFirebase';


export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const  useFirebasr__allContext = useFirebase()
    return (
        <AuthContext.Provider value={ useFirebasr__allContext}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;