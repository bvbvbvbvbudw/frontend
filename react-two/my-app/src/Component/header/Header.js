import React from 'react';
import Logo from './Logo';
import Menu from './Menu';
import Search from './Search';
import 'bootstrap/dist/css/bootstrap.min.css'
import Row from 'react-bootstrap-v5/lib/Row';
import Col from 'react-bootstrap-v5/lib/Col';
import NavDropdown from 'react-bootstrap-v5/lib/NavDropdown';
import Container from 'react-bootstrap-v5/lib/Container'
import Nav from 'react-bootstrap-v5/lib/Nav';
import Navbar from 'react-bootstrap-v5/lib/Navbar'

export default function Header () {


    return(<>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/logo"><Logo /></Nav.Link>
            <Nav.Link href="/menu"><Menu /></Nav.Link>
            <Nav.Link href="/search"><Search /></Nav.Link>

          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    
    
    </>)
}