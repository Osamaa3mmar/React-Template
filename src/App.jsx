import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './Layouts/MainLayout/MainLayout'
import { ThemeContextProvidor } from './Contexts/ThemeContext'
import { LanguageProvider } from './Contexts/LanguageContext'

export default function App() {
  const router=createBrowserRouter([
    //MainLayout
    {path:"/",element:<LanguageProvider><ThemeContextProvidor><MainLayout/></ThemeContextProvidor></LanguageProvider>,children:[
      {path:"",element:<h2>start here</h2>}
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
