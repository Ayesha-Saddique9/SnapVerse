import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Posts from './pages/Posts'
import Navbar from './components/Navbar'
import Create from './pages/Create'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/create' element={<Create/>}/>
        <Route path='/posts' element={<Posts/>}/>
      </Routes>
    </div>
  )
}

export default App
