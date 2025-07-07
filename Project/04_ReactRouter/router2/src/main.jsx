import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {Route, RouterProvider,createBrowserRouter} from "react-router-dom";
import Layout from './Layout.jsx';
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';



//Method-1
const router =createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[{path:"",element:<Home/>},{path:"about",element:<About/>},{path:"contact",element:<Contact/>}]
  },
  
])

// //Another Method -2 
// const route = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path= '/' element={<Layout/>}>
//     <Route path= '' element={<Home/>}/>

//     </Route>
//   )
// )


createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />
  </StrictMode>,
)
