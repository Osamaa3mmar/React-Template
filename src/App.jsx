import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './Layouts/MainLayout/MainLayout'
import HomePage from './Pages/HomePage/HomePage'

export default function App() {
  const router=createBrowserRouter([
    //MainLayout
    {path:"/",element:<MainLayout/>,children:[
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
