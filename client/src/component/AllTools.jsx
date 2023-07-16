// eslint-disable-next-line no-unused-vars
import React from 'react'
import Tools from './Tools'
import '../styles/AllTools.css'
const AllTools = () => {
  return (
    <div>
      <h1 className='title'>Text</h1>
      <Tools/>
      <div className="second">
        <Tools />
      </div>
      <h1 className='title'>Images</h1>
      <Tools/>
      <div className="second">
        <Tools />
      </div>
    </div>
  )
}

export default AllTools
