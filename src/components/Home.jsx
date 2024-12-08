import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div>
      <h2>Welcome to the Home Page...</h2>
      <h3><Link to='/allnations'>Click Here </Link>to See all countries</h3>
    </div>
  )
}

export default Home
