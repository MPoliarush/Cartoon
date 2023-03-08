import React, {useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import {createBrowserRouter,RouterProvider} from 'react-router-dom'


import Homepage from './components/Homepage'
import SingleCard from './components/SingleCard';




function App() {

const [usedata,setUseData] = useState()

const router = createBrowserRouter([
    {path:'/', element:<Homepage trans={setUseData}/> },
     {path:'/card/:id', element:<SingleCard data={usedata}/> },
  ])

  return (
    <RouterProvider router={router}>

    </RouterProvider>
    
  );
}

export default App;
