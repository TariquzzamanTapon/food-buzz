import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Pages/Home/Home.jsx';
import Error from './components/Pages/Error/Error.jsx';
import Login from './components/Pages/Login/Login.jsx';
import Register from './components/Pages/Register/Register.jsx';
import ChefDetails from './components/Pages/ChefDetails/ChefDetails.jsx';
import AuthProvider from './AuthProvider/AuthProvider.jsx';
import PrivateRoute from './PrivateRoute/PrivateRoute.jsx';
import Blog from './components/Pages/Blog/Blog.jsx';
import OurMenu from './components/Pages/OurMenu/OurMenu.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/chefs')
      },
      {
        path: ':id',
        element: <PrivateRoute><ChefDetails></ChefDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/chefs/${params.id}`)
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: '/our-menu',
        element: <OurMenu></OurMenu>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      }
    ]
  }
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
