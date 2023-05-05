import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import Blog from "../Pages/Blog";
import ViewRecepe from "../Pages/ViewRecepe";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivateRoute from "./PrivateRoute";
import Error from "../Pages/Error";
import LoadSpin from "../Pages/LoadSpin";


const router = createBrowserRouter ([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<Error></Error>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/cookdetail/:id',
                element:<PrivateRoute><ViewRecepe></ViewRecepe></PrivateRoute>,
                loader:({params})=> fetch(`https://cook-master-server.vercel.app/cook/${params.id}`)
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            }
            
        ]
    }
])

export default router;