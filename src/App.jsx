import { useState,useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import First from './components/First'
import Second from './components/Second'
import Third from './components/Third'
import Fourth from './components/Fourth'
import Fifth from './components/Fifth'
import Footer from './components/Footer'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Login from './components/Login'

function App() {
  let router = createBrowserRouter([
    {
      path:'/',
      element:
      <>
      <div className='internee max-w-[100vw] overflow-hidden'>
      <Navbar/>
       <First />
       <Second/>
       <Third />
       <Fourth/>
       <Fifth />
       <Footer/>
       </div>
       </>  
   },
    {
       path:'/login',
       element:<Login/>
    },
    {
      path:'/internships',
      element:<><Navbar/> <Third/></>
   },
   {
    path:'/reviews',
    element:<div className='overflow-hidden'><Navbar/> <Fifth/></div>
 },
 {
  path:'/contact',
  element:<><Navbar/> <Footer/></>
}
])
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
