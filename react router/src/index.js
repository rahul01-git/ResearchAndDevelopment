import React from "react";
import ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
    },
    {
        path: '/about',
        element: <About/>,
    },
    {
        path: '/contact',
        element: <Contact/>
    },
]);

import App from "./App";
import About from "./views/about";
import Contact from "./views/contact";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <RouterProvider router={router}/>
)