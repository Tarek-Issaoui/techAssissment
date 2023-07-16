// eslint-disable-next-line no-unused-vars
import React from 'react'
import '../styles/Home.css'
import NavbarTest from './NavbarTest'
const Home = () => {
  return (
    <div className="home">
      <NavbarTest/>
      <hr style={{"height": "1px" ,"color":"white"}}/>
      <div className='in-home'>
        <h1>All Categories</h1>
        <p>Browse all categories at one glance</p>
      </div>
    </div>
  )
}

export default Home
