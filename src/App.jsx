import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './Layouts/MainLayout/MainLayout'
import HomePage from './Pages/HomePage/HomePage'
import { ThemeContextProvidor } from './Contexts/ThemeContext'

export default function App() {
  const router=createBrowserRouter([
    //MainLayout
    {path:"/",element:<ThemeContextProvidor><MainLayout/></ThemeContextProvidor>,children:[
      {path:"",index:true,element:<HomePage/>},
      {path:"home",element:<HomePage/>},
    ]},


    //NotFound Page
    {path:"*",element:<>Your Not Found Page Here</>}
  ])
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}
