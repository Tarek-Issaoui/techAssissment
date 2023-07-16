// eslint-disable-next-line no-unused-vars
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

import "../styles/navbar.css"
import logo from "../assets/logoo.png";
import 'bootstrap/dist/css/bootstrap.css'

import { Link } from 'react-router-dom';
const NavbarTest = () => {
  
  return (
    <Navbar expand="lg" >
      <Container className='container'>
        <Link to={{pathname:"/"}}>
          <Navbar.Brand href="#home">
            <img className='logo' src={logo} alt="logo" />
          </Navbar.Brand>
        </Link>
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className="ms-auto " >
            <Link to={{pathname: '/favourite'}} style={{textDecoration:"none"}}><Nav.Link href="#link" className='text-light'>Favourite</Nav.Link></Link>
            <Link to={{pathname: '/discover'}} style={{textDecoration:"none"}}><Nav.Link href="#link" className='text-light' >Discover</Nav.Link></Link>
            <Nav.Link  className='text-light'>Submit</Nav.Link>
            <Nav.Link href="#news" className='text-light'>News</Nav.Link>
            <Nav.Link className='text-light'>Blogs</Nav.Link>
            <DropdownButton title="profile" id="dropdown-variants-transparent" variant='outline-light' >
              <Dropdown.Item href="#action/3.1" >Your Favourites</Dropdown.Item>
              <Dropdown.Item href="#action/3.2" >
                Sign out
              </Dropdown.Item>
            </DropdownButton>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarTest;