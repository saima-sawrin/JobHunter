import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import AllFreshers from '../Component/Freshers/AllFreshers';
import AllJobs from '../Component/Freshers/AllJobs';
import Freshers from '../Component/Freshers/Freshers';
import Header from '../Component/Header/Header';
import About from '../Page/About/About';
import Contact from '../Page/Contact/Contact';
import Home from "../Page/Home/Home";
import Login from '../Page/login/Login';
import SignUp from '../Page/Signup/SignUp';


const router = createBrowserRouter([
    {
        path:'/',
        element: <Home></Home>,
        children:([
            {
              path:'/',
              element:<Header></Header>
            },
            {
                path:'/',
                element: <AllFreshers></AllFreshers>
            }
        ])

    },
    {
      path:'/FreshersAllJobs',
      loader:()=> fetch('freshers,json'),
      element:<AllJobs></AllJobs>
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
    },
    {
        path:'/login',
        element: <Login></Login>
    }
  
])
export default router;