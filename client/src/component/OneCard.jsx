/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import star from "../assets/star.png"
import Vector from "../assets/Vector.png"
import rectangle from "../assets/Rectangle 64.png"
import twitter from "../assets/twitter.png"
import Layer from "../assets/Layer.png"
import vec from "../assets/vec.png";
import Group from "../assets/Group.png"
import "../styles/Card.css";
// eslint-disable-next-line react/prop-types
const OneCard = ({e}) => {
  return (
    <Card style={{ maxWidth: '360px' ,margin:"10px"}} className='cardstyle' border='grey'>
      
      <Card.Body>
      <Stack direction="horizontal" gap={2} style={{justifyContent:"space-between"}}>
        <Stack direction='horizontal' >
          <Card.Title className='seller'>{e.title}</Card.Title>
          <Card.Img variant="none" src={twitter} />
        </Stack>
        <div>
          <Card.Img variant="none" src={star} /><span>{e.rating}</span>
        </div>
      </Stack>
      </Card.Body>
      <Card.Img variant="none" src={rectangle} />
      <Card.Body>
        <Card.Title className='seller'>Description</Card.Title>
        <Card.Text>
        I will help you to Fix your problemes<br/>
        I will help you to Fix your problemes
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Stack direction="horizontal" gap={2} style={{justifyContent:"space-between"}} >
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

              
              <Button  variant="light" style={{height:"35px",width:"79px",flexShrink: 0}}><span><Card.Img variant="none" src={Layer} />  </span>free</Button>
    
          </div>
          <div>
            <Card.Img variant="none" src={Vector} /><span>3</span>
          </div>
        </Stack>
      </Card.Body>
      <Card.Body style={{justifyContent:"center", alignContent:"center", justifyItems:"center"}}>
        <Card.Link href="#social">#Social</Card.Link><br/>
        <Button variant="primary"  style={{maxWidth:"48%", height:"33px",border:"1px solid #468FAF",flexShrink: "0"}} className='btntool'><Card.Img variant="none" src={Group} /></Button>
        <Button variant="light"  style={{maxWidth:"48%" ,border:"1px solid #468FAF",flexShrink: "0" , height:"33px"}} className='btntool'><Card.Img variant="none" src={vec} /></Button>
      </Card.Body>
    </Card>
  )
}

export default OneCard
