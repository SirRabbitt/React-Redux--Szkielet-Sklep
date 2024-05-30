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
     element:<Home/>,
     
    },
  ]
}

]);


function App() {
  return (
    <div>
      <Header />
      <Home />
      <Footer/>
     
    </div>
  );
}

export default App;