import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import AllNations from '../components/AllNations'

const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/allnations' element={<AllNations/>}/>
    </Routes>
  )
}

export default AllRoutes
