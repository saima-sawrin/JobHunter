import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Home from "../Page/Home/Home";
import SignUp from '../Page/Signup/SignUp';


const router = createBrowserRouter([
    {
        path:'/',
        element: <Home></Home>

    },
    {
        path:'/signup',
        element: <SignUp></SignUp>
    }
  
])
export default router;