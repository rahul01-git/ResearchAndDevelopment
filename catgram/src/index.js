import React from 'react';
import ReactDOM from 'react-dom/client';
import Dashboard from './views/Dashboard';
import Login from './views/Login';
import Post from './views/Post';
import Root from './views/Root';

import { createBrowserRouter, RouterProvider } from 'react-router-dom'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Dashboard />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/post',
        element: <Post />,
        children: [
          {
            path: '/post/login',
            element: <Login/>
          }
        ]
      },
    ]
  },

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

