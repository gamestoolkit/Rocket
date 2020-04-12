import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import SearchBar from '../components/SearchBar'
import Link from 'next/link'

const Navigation = () => (
  <Navbar bg="dark-alpha-med" variant="dark" expand="lg" fixed="top">
    <div className="container">
      <Link href='/'>
        <a className="navbar-brand">
          Games Toolkit
        </a>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">        
        <Nav className="mr-auto">
          <Link to='/'>
            <a className="nav-link">
              Home
            </a>
          </Link>
          <Link href='/Assets'>
            <a className="nav-link">
              Browse
            </a>
          </Link>
        </Nav>        
        <SearchBar />
      </Navbar.Collapse>
    </div>
  </Navbar>
)

export default Navigation