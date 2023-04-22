import React from 'react';
import Nav from 'react-bootstrap-v5/lib/Nav';
import { NavLink, Link } from 'react-router-dom';

export default function Menu() {


    return (<>

        <Nav defaultActiveKey="/" as="ul">
            <Nav.Item as="li">
                <Nav.Link href="/">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
                <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav.Item>
        </Nav>

        {/* <Link to='/'>Home</Link>
        <Link to='/contact'>Contact</Link> */}

    </>)
}