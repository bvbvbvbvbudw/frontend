import React from 'react';
import Logo from './Logo';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap-v5/lib/Container';
import Nav from 'react-bootstrap-v5/lib/Nav';
import Navbar from 'react-bootstrap-v5/lib/Navbar';
import NavDropdown from 'react-bootstrap-v5/lib/NavDropdown';



export default function Menu() {

    return (<>

        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/"><Logo /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Головна</Nav.Link>
                        <Nav.Link href="/book">Книги</Nav.Link>
                        <Nav.Link href="/about">Про нас</Nav.Link>
                        <Nav.Link href="/blog">Блог</Nav.Link>
                        <Nav.Link href="/contact">Наші контакти</Nav.Link>
                        <Nav.Link href="/movie">Про марвел</Nav.Link>
                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>)
}