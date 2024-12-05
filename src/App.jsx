import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Zego_Cloud from './Zego_Cloud'
import Video_Room from './Video_Room'


const App = () => {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Zego_Cloud/>}/> 
    <Route path='/room/:id' element={<Video_Room/>}/> 
    </Routes>
    </BrowserRouter>
  )
}

export default App
