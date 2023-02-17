import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import AllFreshers from '../Component/Freshers/AllFreshers';
import Freshers from '../Component/Freshers/Freshers';
import About from '../Page/About/About';
import Contact from '../Page/Contact/Contact';
import Home from "../Page/Home/Home";
import SignUp from '../Page/Signup/SignUp';


const router = createBrowserRouter([
    {
        path:'/',
        element: <Home></Home>,
        children:([
            {
                path:'/',
                // loader:()=> fetch('freshers.json'),
                element: <AllFreshers></AllFreshers>
            }
        ])

    },
    {
        path:'/about',
        element: <About></About>

    },
    {
        path:'/contact',
        element: <Contact></Contact>

    },
   
    {
        path:'/signup',
        element: <SignUp></SignUp>
    }
  
])
export default router;