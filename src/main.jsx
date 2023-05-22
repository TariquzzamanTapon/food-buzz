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


const router = createBrowserRouter([
  {
    path :'/',
    element : <App></App> ,
    errorElement : <Error></Error>,
    children : [
      {
        path : '/',
        element :<Home></Home>
      },
      {
        path : "/login",
        element :<Login></Login>
      },
      {
        path :"/register",
        element : <Register></Register>
      }
    ]
  }
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
