import React, { createContext, useEffect, useState } from "react";
import useFetch from "../CustomHooks/useFetch";

export const FetchContext = createContext(null);

function ApiContext({ children }) {
    const axiosFetch = useFetch();

    const [user, setUser] = useState(null);


    const RegisterWithEmailandPassword = (obj) => {

        return axiosFetch.post("register/", obj);
    };

    const LoginWithEmailandPassword = (obj) => {

        return axiosFetch.post("login/", obj);
    };

    useEffect(() => {
        const token = localStorage.getItem("userToken");
        if (token) {
            setUser(token);

        } else {
            setUser(null);
        }


    }, [localStorage.getItem("userToken")]);

    const shareobj = {
        user,
        setUser,
        RegisterWithEmailandPassword,
        LoginWithEmailandPassword,
    };

    return (
        <FetchContext.Provider value={shareobj}>{children}</FetchContext.Provider>
    );
}

export default ApiContext;
