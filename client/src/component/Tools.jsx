// eslint-disable-next-line no-unused-vars
import React from 'react'
import Button from 'react-bootstrap/Button'
import '../styles/Tool.css';
const data=[0,1,2,3]
const  Tools = () => {

  return (
    <div className='tool'>
      {data.map((e,i)=>{
        return (<Button key={i} size="lg" variant="outline-primary " className='btntool'>Copywriting<span> 60 tools</span></Button>)
      })}
    </div>
  )
}

export default Tools
