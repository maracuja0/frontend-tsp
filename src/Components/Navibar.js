import React from "react";
import { Button, Navbar, Nav } from "react-bootstrap";
import {Link} from 'react-router-dom';


export default function NaviBar(){
    return(
    <>
    <Navbar collapseOnSelect expand ="lg" bg="dark" variant="dark">
        <Navbar.Brand className="ms-4">SIDVERT_L1NS</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
                <Nav.Link><Link to="/">Home</Link></Nav.Link>
                <Nav.Link><Link to="/account">Account</Link> </Nav.Link>
                <Nav.Link><Link to="/liked">Liked</Link></Nav.Link>
                <Nav.Link><Link to="/basket">Basket</Link></Nav.Link>

            </Nav>
            <Nav className="ms-auto">
            <Button variant="outline-primary" >Log In</Button>
            <Button variant="outline-primary"className="ms-2 me-4" >Sign Up</Button>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
    </>

    )
}