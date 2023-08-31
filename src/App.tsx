import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import routes from './router/router'
import { RouterProvider } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
const App =()=> {
  return (
    <>
      <RouterProvider router={routes} />
      <ToastContainer theme='colored' />
    </>
  )
}

export default App
