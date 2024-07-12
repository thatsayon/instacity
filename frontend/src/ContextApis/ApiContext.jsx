import React, { createContext, useEffect, useMemo, useState } from "react";
import useFetch from "../CustomHooks/useFetch";
import { useLocation } from "react-router-dom";
import Cookies from "js-cookie";
import { useQuery } from "@tanstack/react-query";

export const FetchContext = createContext(null);

function ApiContext({ children }) {
  const [Token, setToken] = useState(null);
  const [logoutPopup, setLogoutPopup] = useState(false);
  const [tokenLoading, setTokenloading] = useState(true);
  const axiosFetch = useFetch();
  const image_url = "http://127.0.0.1:8000/";

  const RegisterWithEmailandPassword = (obj) => {
    return axiosFetch.post("/api/register/", obj);
  };

  const LoginWithEmailandPassword = (obj) => {
    return axiosFetch.post("/api/login/", obj);
  };

  const Login = async (obj) => {
    try {
      const response = await axiosFetch.post("/api/login/", obj);

      const expireSeconds = parseFloat(response?.data?.expires_in);
      const todaydate = new Date();
      const expireTime = new Date(todaydate?.getTime() + expireSeconds * 1000);
      if (response?.data?.token) {
        setToken(response.data.token);
        Cookies.set("userToken", response.data.token, {
          secure: true,
          sameSite: "none",
          expires: expireTime,
        });
      }
      return response;
    } catch (error) {
      throw error;
    }
  };

  const Logout = async () => {
    if (!Token) return;
    setLogoutPopup(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      const headers = { Authorization: `Token ${Token}` };
      const response = await axiosFetch.post("/api/logout/", null, {
        headers,
      });
      if (response?.data?.message === "Logout successful" || response?.data) {
        setToken(null);
        Cookies.remove("userToken");
      }
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      setLogoutPopup(false);
    }
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

    return axiosFetch.patch("/api/change-password/", obj, { headers });
  };
  const update_user_info = (obj) => {
    const headers = {
      Authorization: `Token ${Token}`,
    };

    return axiosFetch.post("/profile/profiles/", obj, { headers });
  };

  useEffect(() => {
    const storedToken = Cookies.get("userToken");
    if (storedToken) {
      setToken(storedToken);
    } else {
      setToken(null);
    }

    setTokenloading(false);
  }, []);

  const {
    data: user = {},
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      if (Token) {
        try {
          const response = await axiosFetch.get("/api/user-info/", {
            headers: { Authorization: `Token ${Token}` },
          });

          return response?.data;
        } catch (error) {
          setToken(null);
          Cookies.remove("userToken");
        }
      }
      return {};
    },
    enabled: !!Token,
    onError: async () => {
      setToken(null);
      Cookies.remove("userToken");
    },
  });

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

  const shareobj = useMemo(
    () => ({
      Token,
      user: user ?? {},
      refetch,
      image_url,
      logoutPopup,
      LanguageArray,
      RegisterWithEmailandPassword,
      LoginWithEmailandPassword,
      Login,
      Logout,
      report,
      changePassword,
      update_user_info,
    }),
    [user, isLoading, Token, tokenLoading, logoutPopup]
  );

  return (
    <FetchContext.Provider value={shareobj}>{children}</FetchContext.Provider>
  );
}

export default ApiContext;
