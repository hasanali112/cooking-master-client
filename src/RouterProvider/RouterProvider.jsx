import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import Blog from "../Pages/Blog";
import ViewRecepe from "../Pages/ViewRecepe";


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
            }
        ]
    }
])

export default router;