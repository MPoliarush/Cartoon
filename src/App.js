import React, {useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
// import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Homepage from './components/Homepage'
import SingleCard from './components/SingleCard';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {

const [usedata,setUseData] = useState()

// const router = createBrowserRouter([
//     {path:'/', element:<Homepage trans={setUseData} /> },
//     {path:'/card/:id', element:<SingleCard data={usedata}/> },
//   ])

  return (
    
    <Routes>
        <Route exact path='/' element={ <Homepage trans={setUseData} /> }></Route>
        <Route path='/Cartoon/card/:id' element={ <SingleCard data={usedata} /> }></Route>
    </Routes>
    
  );
}

export default App;
