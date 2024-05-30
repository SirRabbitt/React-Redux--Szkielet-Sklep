import React from 'react';
import Header from './componets/Header';
import Home from './pages/Home';
import { Footer } from './componets/Footer';
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";
import { Cart } from './pages/Cart';

const Layout =()=>{
  return (
    <div>
    <Header/>
    <Outlet/>
    <Footer/>
    </div>
  )
}

const router = createBrowserRouter([
{
  path:"/",
  element:<Layout/>,
  children:[
   { path:"/",
     element:<Home/>
     
    },
    {
      path:"/cart",
      element:<Cart/>
     }
  ]
}

]);


function App() {
  return (
    <div>
     <RouterProvider router={router}/>
    </div>
  );
}

export default App;