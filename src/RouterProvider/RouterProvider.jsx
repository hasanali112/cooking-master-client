import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import Blog from "../Pages/Blog";
import ViewRecepe from "../Pages/ViewRecepe";
import Login from "../Pages/Login";
import Register from "../Pages/Register";


const router = createBrowserRouter ([
    {
        path:'/',
        element:<Main></Main>,
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
                element:<ViewRecepe></ViewRecepe>,
                loader:({params})=> fetch(`http://localhost:5000/cook/${params.id}`)
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