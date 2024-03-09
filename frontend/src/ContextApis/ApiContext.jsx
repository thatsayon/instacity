import React, { createContext, useEffect, useState } from "react";
import useFetch from "../CustomHooks/useFetch";
import { useLocation } from "react-router-dom";

export const FetchContext = createContext(null);

function ApiContext({ children }) {
  const [Token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const [LogoutLoading, setLogoutLoading] = useState(false);
  const [isuserToken, setisuserToken] = useState(false);
  const axiosFetch = useFetch();
  const image_url = "http://127.0.0.1:8000/";

  const RegisterWithEmailandPassword = (obj) => {
    return axiosFetch.post("api/register/", obj);
  };

  const LoginWithEmailandPassword = (obj) => {
    return axiosFetch.post("api/login/", obj);
  };

  const Logout = () => {
    setLogoutLoading(true);
    const headers = {
      Authorization: `Token ${Token}`,
    };

    setTimeout(() => {
      setLogoutLoading(false);

      axiosFetch
        .post("api/logout/", null, { headers })
        .then((res) => {
          if (res?.data?.message == "Logout successful" || res?.data) {
            setToken(null);
            localStorage.removeItem("userToken");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }, 2000);
  };

  const report = (obj) => {
    const headers = {
      Authorization: `Token ${Token}`,
    };

    return axiosFetch.post("profile/report/", obj, { headers });
  };

  const changePassword = (obj) => {
    const headers = {
      Authorization: `Token ${Token}`,
    };

    return axiosFetch.patch("api/change-password/", obj, { headers });

  }
  const update_user_info = (obj) => {
    const headers = {
      Authorization: `Token ${Token}`,
    };

    return axiosFetch.post("profile/profiles/", obj, { headers });

  }

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
        .get("api/user-info/", { headers })
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
    }

  }, [localStorage.getItem("userToken")]);



  setInterval(() => {
    const userToken = localStorage.getItem("userToken");
    if (!userToken) {
      setisuserToken(true)
    }
    else {
      setisuserToken(false)
    }
  }, 50000);

  useEffect(() => {
    if (isuserToken) {
      Logout();
    }
  }, [isuserToken])

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
    report,
    changePassword,
    update_user_info
  };

  return (
    <FetchContext.Provider value={shareobj}>{children}</FetchContext.Provider>
  );
}

export default ApiContext;
