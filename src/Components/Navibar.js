import React from "react";
import { Button, Navbar, Nav, Container, Modal } from "react-bootstrap";
import {Link} from 'react-router-dom';
import styled from "styled-components";
import { useState } from 'react'; 


const Styles = styled.div `
    a, navbar-brand, .navbar-nav, .nav-link {
        color:  #adb1b8;
        &:hover{
            color: violet
        }
    }
`

export default function NaviBar(){



    const [showModal1, setShowModal1] = useState(false);
    const [showModal2, setShowModal2] = useState(false);

    const handleCloseModal1 = () => setShowModal1(false);
    const handleCloseModal2 = () => setShowModal2(false);
  
    const handleShowModal1 = () => setShowModal1(true);
    const handleShowModal2 = () => setShowModal2(true);
  
   



    return(
    <>
    <Styles>
        <Navbar collapseOnSelect expand ="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand  style={{ color: ' violet' }}>SIDVERT_L1NS</Navbar.Brand> 
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>
                        <Nav.Link>  <Link to="/" style={{ textDecoration: 'none' }}>Home</Link>  </Nav.Link>
                        <Nav.Link>  <Link to="/account" style={{ textDecoration: 'none' }}>Account</Link>   </Nav.Link>
                        <Nav.Link>  <Link to="/liked" style={{ textDecoration: 'none' }}>Liked</Link>  </Nav.Link>
                        <Nav.Link>  <Link to="/basket" style={{ textDecoration: 'none' }}>Basket</Link>  </Nav.Link>

                    </Nav>
                    <Nav className="ms-auto">
                    <Button variant="outline-info" onClick={handleShowModal1} >Log In</Button>
                    <Button variant="outline-info"className="ms-2" onClick={handleShowModal2} >Sign Up</Button>
                    </Nav>
                    </Navbar.Collapse>
                </Container> 
            </Navbar>
        </Styles>

        <Modal show={showModal1} onHide={handleCloseModal1}>
        <Modal.Header closeButton>
          <Modal.Title>Модальное окно 1</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Содержимое модального окна 1
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal1}>
            Закрыть
          </Button>
        </Modal.Footer> */}
      </Modal>

      <Modal show={showModal2} onHide={handleCloseModal2}>
        <Modal.Header closeButton>
          <Modal.Title>Модальное окно 2</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Содержимое модального окна 2
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal2}>
            Закрыть
          </Button>
        </Modal.Footer> */}
      </Modal>
    </>

    )
}