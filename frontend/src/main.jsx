import React from 'react'
import '../src/App.css'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import NotFound from './Components/NotFound.jsx'
import Home from './Components/Home.jsx'
import Explore from './Components/Explore.jsx'
import Reels from './Components/Reels.jsx'
import Search from './Components/Search.jsx'
import Profile from './Components/Profile.jsx'
import More from './Components/More.jsx'
import Notification from './Components/Notification.jsx'
import Register from './Components/Register.jsx'
import Login from './Components/Login.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/Search',
        element: <Search />
      },
      {
        path: '/Explore',
        element: <Explore />
      },
      {
        path: '/Reels',
        element: <Reels />
      },
      {
        path: '/Message',
        element: <Home />
      },
      {
        path: '/Notification',
        element: <Notification />
      },
      {
        path: '/Profile',
        element: <Profile />
      },
      {
        path: '/More',
        element: <More />

      }
    ]
  },
  {
    path: '/Register',
    element: <Register />
  },
  {
    path : '/Login',
    element : <Login/>
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
