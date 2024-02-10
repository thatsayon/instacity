import React, { createContext, useEffect, useState } from "react";
import useFetch from "../CustomHooks/useFetch";
import { useLocation } from "react-router-dom";

export const FetchContext = createContext(null);

function ApiContext({ children }) {
    const axiosFetch = useFetch();
    const image_url = 'http://127.0.0.1:8000/';



    const [Token, setToken] = useState(null);
    const [user, setUser] = useState(null);


    const RegisterWithEmailandPassword = (obj) => {

        return axiosFetch.post("register/", obj);
    };

    const LoginWithEmailandPassword = (obj) => {

        return axiosFetch.post("login/", obj);
    };

    const Logout = () => {
        const headers = {
            Authorization: `Token ${Token}`,
        };
        axiosFetch.post("logout/", null, { headers })
            .then(res => {

                if (res?.data?.message == 'Logout successful' || res?.data) {
                    setToken(null)
                    localStorage.removeItem('userToken')

                }
            })
            .catch(error => {
                console.log(error)
            })
    }

    useEffect(() => {
        const token = localStorage.getItem("userToken");
        if (token) {
            setToken(token);

        } else {
            setToken(null);
        }


        const headers = {
            Authorization: `Token ${token}`,
        };

        axiosFetch.get("user-info/", { headers })
            .then(res => {

                setUser(res?.data)
            })
            .catch(error => {
                if (error.response.status == 401 || error.response.statusText == 'Unauthorized') {
                    Logout();
                }
            })


    }, [localStorage.getItem("userToken")]);



    const shareobj = {
        Token,
        user,
        image_url,
        setToken,
        setUser,
        RegisterWithEmailandPassword,
        LoginWithEmailandPassword,
        Logout,

    };

    return (
        <FetchContext.Provider value={shareobj}>{children}</FetchContext.Provider>
    );
}

export default ApiContext;
