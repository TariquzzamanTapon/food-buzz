import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './components/Pages/Header/Header'
import Footer from './components/Pages/Footer/Footer'
import { Toaster } from 'react-hot-toast'

function App() {

  return (
    <>
      <div>
        <Toaster />
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
