// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react'
import OneCard from './OneCard'
import "../styles/AllCards.css";
import { Context } from './Context';


const AllCards = () => {
  // eslint-disable-next-line no-unused-vars
  const [data,setData]=useContext(Context)
  console.log(data)
  return (
    <div>
      <h1 style={{marginLeft:"160px" ,marginTop:"25px"}}>Tools Found</h1>
      <div className='cards'>
      {data.length>0 ? data.map((e,i)=>{
        return (
            <OneCard key={i} e={e}/>
        )
      }) :<p>result not found</p>}
      </div> 
    </div>
  )
}

export default AllCards
