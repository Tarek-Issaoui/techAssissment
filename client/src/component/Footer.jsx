// eslint-disable-next-line no-unused-vars
import React from 'react'
import Nav from "react-bootstrap/Nav"
import logo from "../assets/logo.png"
import "../styles/Footer.css"
import 'bootstrap'
import linkedIn from "../assets/linkn.png"
import instagram from "../assets/insta.png"
import facebook from "../assets/fbk.png"
import whatsapp from "../assets/wwhatsapp.png"
// import Stack from 'react-bootstrap/Stack'
const Footer = () => {
  return (
    <footer>
      <img src={logo} alt='logo' style={{marginLeft:"160px",marginTop:"25px",marginBottom:"25px"}}/>
      <div style={{display:"flex", flexWrap:"nowrap",justifyContent:"space-between"}}>
      <Nav className="justify-content-start"  style={{marginLeft:"160px"}}>
        <Nav.Item>
          <Nav.Link href="/help">Help & Support</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Trust & Safety</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">About us</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Confidentiality policy</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Terms of use</Nav.Link>
        </Nav.Item>
      </Nav>
      <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li><a href='#'><img src={linkedIn} alt='linkedIn'/></a></li>
              <li><a href='#'><img src={facebook} alt='facebook'/></a></li>
              <li><a href='#'><img src={instagram} alt='instagram'/></a></li>
              <li><a href='#'><img src={whatsapp} alt='whatsapp'/></a></li>   
            </ul>
      </div>
      </div>
      <hr className='line'/>
      <p className='copyright'>©Copyright 2022-2023 Bucketly Limited All rights reserved | Designed by T.B.P</p>  
    </footer>
  )
}

export default Footer
