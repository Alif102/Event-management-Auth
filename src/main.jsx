import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from './FirbaseTest-Components/Root';
import Home from './FirbaseTest-Components/Home';
import Register from './FirbaseTest-Components/Register';
import Login from './FirbaseTest-Components/Login';
import AuthProvider from './Provider/AuthProvider';
import Explore from './Pages/Explore';
import Blogs from './Blogs/Blogs';
import About from './FirbaseTest-Components/About';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/> ,
    children : [
      {
        path : '/',
        element : <Home/>,
        loader : ()=>  fetch('/ServiceData.json')
        

      },
      {
        path : '/about-us',
        element: <About/>
      },
      {
        path: '/details/:id',
        element: <Explore></Explore>,
        loader : ()=> fetch('/ServiceData.json')
    },
    {
      path: '/blogs',
      element: <Blogs/>,
      loader : () => fetch('/BlogsData.json')
    },
      {
        path : '/register',
        element : <Register/>

      },
      {
        path : '/login',
        element : <Login/>

      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
     <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
