import React from "react"
import { Navbar, Nav, Button } from "react-bootstrap"
import { Link } from "react-router-dom"

export default function NavbarComponent() {
  return (

<>
  <Navbar className="nav" bg="light">
    <Navbar.Brand href="#home">
      <img
        src="//ssl.gstatic.com/images/branding/product/1x/drive_2020q4_48dp.png"

        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
      {' '}
      <p className="nav__logo__name">Drive</p>
    </Navbar.Brand>
    <Nav.Link href="#"></Nav.Link>
    <Nav.Link href="#">  </Nav.Link>
    <Nav.Link className="profile" href="/user">
    <Button variant="warning">
    Profile
    </Button>
    </Nav.Link>

  </Navbar>

</>
)}
