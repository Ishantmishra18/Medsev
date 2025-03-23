import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Landing from './Pages/landing'
import Chatbot from './Pages/chatbot'
import Article from './Pages/article'


const App = () => {

  const router=createBrowserRouter([
    {
      path:'/',
      element:<>
      <Landing/>
      </>
    },{
      path:'/chatbot',
      element:<><Chatbot/></>
    },{
      path:'/article',
      element:<><Article/></>
    }])

  return (
    <>
       <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App