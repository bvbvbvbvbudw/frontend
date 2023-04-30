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
import Navbar from 'react-bootstrap-v5/lib/Navbar';
import About from './About';
import Info from './Info';
import Location from './Location';
import JavaScript from './JavaScript';
import Shop from './Shop';
import Magazin from './Magazin';
import Comfy from './Comfy';
import Nintendo from './Nintendo';
import Jquery from './Jquery';
import Keyboard from './Keyboard';
import Mouse from './Mouse';
import Pen from './Pen';
import Iphone from './Iphone';
import Poland from './Poland';
import Ukraine from './Ukraine';
import Problem from './Problem';
import Usa from './Usa';
import Last from './Last';


export default function Header() {


  return (<>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href="/logo"><Logo /></Nav.Link>
            <Nav.Link href="/menu"><Menu /></Nav.Link>
            <Nav.Link href="/search"><Search /></Nav.Link> */}


            {/* <Nav.Link href='/'><Home /></Nav.Link> */}
            {/* <Nav.Link href='/Contact'><Contact /></Nav.Link> */}
            <Nav.Link href='/About'><About /></Nav.Link>
            <Nav.Link href='/Info'><Info /></Nav.Link>
            <Nav.Link href='/Location'><Location /></Nav.Link>
            {/* <Nav.Link href='/JavaScript'><JavaScript /></Nav.Link>
            <Nav.Link href='/Shop'><Shop /></Nav.Link>
            <Nav.Link href='/Magazin'><Magazin /></Nav.Link>
            <Nav.Link href='/Comfy'><Comfy /></Nav.Link>
            <Nav.Link href='/Nintendo'><Nintendo /></Nav.Link>
            <Nav.Link href='/Jquery'><Jquery /></Nav.Link>
            <Nav.Link href='/Keyboard'><Keyboard /></Nav.Link>
            <Nav.Link href='/Mouse'><Mouse /></Nav.Link>
            <Nav.Link href='/Pen'><Pen /></Nav.Link>
            <Nav.Link href='/Iphone'><Iphone /></Nav.Link>
            <Nav.Link href='/Poland'><Poland /></Nav.Link>
            <Nav.Link href='/Ukraine'><Ukraine /></Nav.Link>
            <Nav.Link href='/Problem'><Problem /></Nav.Link>
            <Nav.Link href='/Usa'><Usa /></Nav.Link>
            <Nav.Link href='/Last'><Last /></Nav.Link> */}

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