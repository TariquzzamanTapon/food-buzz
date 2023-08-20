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
        <div className='px-1 sm:px-2 md:px-7 lg:px-10'>
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
