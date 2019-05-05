import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import SearchBar from '../components/SearchBar'
import {Link} from 'react-router-dom'

const Navigation = () => (
  <Navbar bg="dark-alpha-med" variant="dark" expand="lg" fixed="top">
    <div className="container">
      <Link className="navbar-brand" to={`/`}>
        Games Toolkit
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">        
        <Nav className="mr-auto">
          <Link className="nav-link" to={`/`}>
            Home
          </Link>
          <Link className="nav-link" to={`/Assets`}>
            Browse
          </Link>
        </Nav>        
        <SearchBar />
      </Navbar.Collapse>
    </div>
  </Navbar>
)

export default Navigation