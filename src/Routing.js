import React from 'react'
import {Routes ,Route} from 'react-router-dom'
import App from './App'
import About from './component/About'
import Training from './component/Training'





export default function Routing(){
  return(
    <>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/training' element={<Training/>}/>
      
 
      

    </Routes>

    </>
  )
}