// eslint-disable-next-line no-unused-vars
import React, { useContext ,useState} from 'react'
import "../styles/page.css"
import Button from 'react-bootstrap/Button'
import NavbarTest from "./NavbarTest"
import DropdownButton from "react-bootstrap/DropdownButton"
// import Image from 'react-bootstrap/Image';
// import origin from "../assets/origin.png"
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Context } from './Context'

const Page = () => {
  const [title,setTitle]=useState("")
  const [data,setData]=useContext(Context)
  const handleClick=()=>{
    const searchedData=data.filter(e=>{
      return e.title.toLowerCase()===title.toLowerCase()
    })
    console.log(searchedData)
    setData(searchedData)
  }
  return (
    <div className='page'>
      <NavbarTest/>
      <hr style={{color:"white"}}/>
      <div className='collection'>
        <h1 id='title'>Discover Best AI Website</h1>
        <p className='desc'>1200+ Best AI Companies and Tools, Updated Daily.</p>
      </div>
      <div className='buttons' >
        <Button variant="outline-light" className='btnn'>Filters</Button>{' '}
        <Button variant="light" className='btnn'>Tools Added Today</Button>{' '}
        <Button variant="primary" className='btnn'>News Added Today</Button>{' '}
        <DropdownButton variant="outline-light" title="verified" className='btnn'></DropdownButton>
      </div>
      <InputGroup className="mb-3" style={{width:"46%", marginLeft:"358px" ,marginTop:"25px"}}>
        <Form.Control
          name='title'
          placeholder="Search Ai tools by keyword"
          aria-label="Search Ai tools by keyword"
          aria-describedby="basic-addon2"
          onChange={(e)=>setTitle(e.target.value)}
        />
        <Button variant="outline-light" id="button-addon2" onClick={handleClick}>
          Search
        </Button>
      </InputGroup>
      <div style={{display:"flex" ,justifyContent:"space-between" ,width:"46%",marginLeft:"358px" ,marginTop:"25px",alignContent:"center"}}>
        <p>popular:</p>
        {["Copywriting","Email assistant","General writing","Summarizer"].map((e,i)=>{
            return (
                <Button variant="outline-light"  key={i}>{e}</Button>
            )
        })}
      </div>
    </div>
  )
}

export default Page
