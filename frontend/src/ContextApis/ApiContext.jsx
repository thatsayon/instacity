import React, { createContext, useEffect, useState } from "react";
import useFetch from "../CustomHooks/useFetch";
import { useLocation } from "react-router-dom";

export const FetchContext = createContext(null);

function ApiContext({ children }) {
  const axiosFetch = useFetch();
  const image_url = "http://127.0.0.1:8000/";

  const [Token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const [LogoutLoading, setLogoutLoading] = useState(false);
  const [CurrentLocation, setCurrentLocation] = useState({});

  const RegisterWithEmailandPassword = (obj) => {
    return axiosFetch.post("register/", obj);
  };

  const LoginWithEmailandPassword = (obj) => {
    return axiosFetch.post("login/", obj);
  };

  const Logout = () => {
    setLogoutLoading(true);
    const headers = {
      Authorization: `Token ${Token}`,
    };

    setTimeout(() => {
      setLogoutLoading(false);

      axiosFetch
        .post("logout/", null, { headers })
        .then((res) => {
          if (res?.data?.message == "Logout successful" || res?.data) {
            setToken(null);
            localStorage.removeItem("userToken");
          }
        })
        .catch((err) => {
          if (err) {
            console.log("401 unauthorized");
          }
        });
    }, 2000);
  };

  useEffect(() => {
    const token = localStorage.getItem("userToken");
    if (token) {
      setToken(token);
    } else {
      setToken(null);
    }

    if (token) {
      const headers = {
        Authorization: `Token ${token}`,
      };

      axiosFetch
        .get("user-info/", { headers })
        .then((res) => {
          setUser(res?.data);
        })
        .catch((error) => {
          if (
            error.response.status == 401 ||
            error.response.statusText == "Unauthorized" ||
            error
          ) {
            Logout();
          }
        });
      // console.log(CurrentLocation)
    }
  }, [localStorage.getItem("userToken")]);

  const LanguageArray = [
    "English",
    "Spanish",
    "French",
    "German",
    "Chinese",
    "Japanese",
    "Korean",
    "Italian",
    "Portuguese",
    "Russian",
    "Arabic",
    "Hindi",
    "Bengali",
    "Urdu",
    "Turkish",
    "Dutch",
    "Swedish",
    "Norwegian",
    "Danish",
    "Finnish",
    "Greek",
    "Thai",
    "Vietnamese",
    "Polish",
    "Czech",
    "Hungarian",
    "Romanian",
    "Indonesian",
    "Malay",
    "Filipino",
    "Hebrew",
    "Farsi",
    "Swahili",
    "Yoruba",
    "Zulu",
  ];

  const shareobj = {
    Token,
    user,
    image_url,
    LogoutLoading,
    LanguageArray,
    setLogoutLoading,
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
