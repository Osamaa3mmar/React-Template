import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NotFound from './Pages/NotFound/NotFound'

export default function App() {
  const router=createBrowserRouter([
    {path:"/",element:<>Start Bulid From Here </>},
    {path:"*",element:<NotFound/>}
  ])
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}
