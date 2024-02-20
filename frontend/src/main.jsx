import "../src/Global.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NotFound from "./Components/NotFound.jsx";
import Home from "./Components/Home.jsx";
import Explore from "./Components/Explore.jsx";
import Reels from "./Components/Reels.jsx";
import Search from "./Components/Search.jsx";
import Profile from "./Components/Profile.jsx";
import Register from "./Components/Register.jsx";
import Login from "./Components/Login.jsx";
import ApiContext from "./ContextApis/ApiContext.jsx";
import Post from "./Components/Post.jsx";
import Saved from "./Components/Saved.jsx";
import Tagged from "./Components/Tagged.jsx";
import Settings from "./Components/SettignsComponents/Settings.jsx";
import EditProfile from "./Components/SettignsComponents/EditProfile.jsx";
import Language from "./Components/SettignsComponents/Language.jsx";
import ChangePassword from "./Components/SettignsComponents/ChangePassword.jsx";
import EmailNotification from "./Components/SettignsComponents/EmailNotification.jsx";
import EmailFromInstacity from "./Components/SettignsComponents/EmailFromInstacity.jsx";
import PushNotification from "./Components/SettignsComponents/PushNotification.jsx";
import Privacy from "./Components/SettignsComponents/Privacy.jsx";
import LoginActivity from "./Components/SettignsComponents/LoginActivity.jsx";
import Help from "./Components/SettignsComponents/Help.jsx";
import Other from "./Components/SettignsComponents/EmailFromInstacity/Other.jsx";
import Security from "./Components/SettignsComponents/EmailFromInstacity/Security.jsx";
import AspectRatioImageResizer from "./Components/AspectRatioImageResizer.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Search",
        element: <Search />,
      },
      {
        path: "/Explore",
        element: <Explore />,
      },
      {
        path: "/Reels",
        element: <Reels />,
      },
      {
        path: "/Message",
        element: <Home />,
      },
      {
        path: "/Profile",
        element: <Profile />,
        children: [
          {
            path: '/Profile/Post',
            element: <Post />
          },
          {
            path: '/Profile/Saved',
            element: <Saved />
          },
          {
            path: '/Profile/Tagged',
            element: <Tagged />
          },


        ]
      },
      {
        path : '/image',
        element : <AspectRatioImageResizer/>
      },
      {
        path: '/Settings',
        element: <Settings />,
        children: [
          {
            path: '/Settings/EditProfile',
            element: <EditProfile />
          },
          {
            path: '/Settings/Language',
            element: <Language />
          },
          {
            path: '/Settings/ChangePassword',
            element: <ChangePassword />,
          },
          {
            path: '/Settings/EmailNotification',
            element: <EmailNotification />
          },
          {
            path: '/Settings/PushNotification',
            element: <PushNotification />
          },
          {
            path: '/Settings/Privacy',
            element: <Privacy />
          },
          {
            path: '/Settings/LoginActivity',
            element: <LoginActivity />
          },
          {
            path: '/Settings/Email_Sent',
            element: <EmailFromInstacity />,
            children: [

              {
                path: '/Settings/Email_Sent/Other',
                element: <Other />
              },
              {
                path: '/Settings/Email_Sent/Security',
                element: <Security />
              }
            ]
          },
          {
            path: '/Settings/Help',
            element: <Help />
          }
        ]
      },
    ],
  },

  {
    path: "/Register",
    element: <Register />,
  },
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/Notfound",
    element: <NotFound />,
  },
]);



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ApiContext>
      <RouterProvider router={router} />
    </ApiContext>
  </React.StrictMode>
);
