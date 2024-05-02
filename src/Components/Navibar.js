import React from "react";
import { Button, Navbar, Nav, Container, Modal, ButtonGroup, ToggleButton, Form, InputGroup} from "react-bootstrap";
import {Link} from 'react-router-dom';
import styled from "styled-components";
import { useState } from 'react';
// import { Row, Col } from "react-bootstrap";


const Styles = styled.div `
    a, .navbar-nav, .nav-link {
        color:  #adb1b8;
        &:hover{
            color: violet;
        }
    }
    .logo{
        color: violet;
        &:hover{
            color: blueviolet;
        }
    }
`



// let role = 0;

export default function NaviBar(){



    const [showModal1, setShowModal1] = useState(false);
    const [showModal2, setShowModal2] = useState(false);

    const handleCloseModal1 = () => setShowModal1(false);
    const handleCloseModal2 = () => setShowModal2(false);
  
    const handleShowModal1 = () => setShowModal1(true);
    const handleShowModal2 = () => setShowModal2(true);
  
   
  
    const [radioValue, setRadioValue] = useState('1');
    

    // const [startDate, setStartDate] = useState(new Date());
  
    const radios = [
      { name: 'Участник ', value: '1' },
      { name: 'Организатор', value: '2' },
      
    ];

   

    return(
    <>
    <Styles>
        <Navbar collapseOnSelect expand ="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>
                    <Link className={"text-decoration-none"} to={"/"}>SIDVERT_L1NS</Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>
                        {/*<Nav.Link>  <Link to="/" style={{ textDecoration: 'none' }}>Главное</Link>  </Nav.Link>*/}
                        <Nav.Link>  <Link to="/account" style={{ textDecoration: 'none' }}>Аккаунт</Link>   </Nav.Link>
                        <Nav.Link>  <Link to="/liked" style={{ textDecoration: 'none' }}>Избранное</Link>  </Nav.Link>
                        <Nav.Link>  <Link to="/basket" style={{ textDecoration: 'none' }}>Корзина</Link>  </Nav.Link>

                    </Nav>
                    <Nav className="ms-auto">
                    <Button variant="outline-info" onClick={handleShowModal1} >Войти</Button>
                    <Button variant="outline-info"className="ms-2" onClick={handleShowModal2} >Зарегистрироваться</Button>
                    </Nav>
                    </Navbar.Collapse>
                </Container> 
            </Navbar>
        </Styles>
        
        <Modal show={showModal1} onHide={handleCloseModal1}>
        
        <Modal.Header closeButton>
          <Modal.Title >Авторизация</Modal.Title>
        </Modal.Header>
        
        <Modal.Body>
          
          <div className="text-center">
          <ButtonGroup>
            {radios.map((radio, idx) => (
              <ToggleButton
                key={idx}
                id={`radio-${idx}`}
                type="radio"
                variant={idx % 2 ? 'outline-primary' : 'outline-primary'}
                name="radio"
                value={radio.value}
                checked={radioValue === radio.value}
                onChange={(e) => setRadioValue(e.currentTarget.value)}
              >
                {radio.name}
              </ToggleButton>
            ))}
          </ButtonGroup>
          </div>
          
         { radioValue === '1' ? (
            <Form>

              <Form.Group className="mb-3" controlId="formBasicEmail1">
              <Form.Label>Эл.почта</Form.Label>
              <InputGroup>
                <InputGroup.Text>@</InputGroup.Text>
              <Form.Control type="email" placeholder="Эл.почта" />
              </InputGroup>
            </Form.Group>


            <Form.Group className="mb-3" controlId="formBasicPassword1">
              <Form.Label>Пароль</Form.Label>
              <Form.Control type="password" placeholder="Введите пароль" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Запомнить меня" />
            </Form.Group>

            <div className="text-center mb-3">
            <Button variant="primary" type='submit'>
              Войти
            </Button>
            </div>

            </Form>

         ): (
          <Form>

            <Form.Group className="mb-3" controlId="formBasicEmail2">
            <Form.Label>Эл.почта</Form.Label>
              <InputGroup>
                <InputGroup.Text>@</InputGroup.Text>
              <Form.Control type="email" placeholder="Эл.почта" />
              </InputGroup>
            </Form.Group>


            <Form.Group className="mb-3" controlId="formBasicPassword2">
              <Form.Label>Пароль</Form.Label>
              <Form.Control type="password" placeholder="Введите пароль" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Запомнить меня" />
            </Form.Group>

            <div className="text-center mb-3">
            <Button variant="primary" type='submit'>
              Войти
            </Button>
            </div>


          </Form>

          )}

        </Modal.Body>
      </Modal>




      <Modal show={showModal2} onHide={handleCloseModal2}>
        
        <Modal.Header closeButton>
        
          <Modal.Title>Регистрация</Modal.Title>
        </Modal.Header>
        

        <Modal.Body>

        <div className="text-center">
          <ButtonGroup>
            {radios.map((radio, idx) => (
              <ToggleButton
                key={idx}
                id={`radio-${idx}`}
                type="radio"
                variant={idx % 2 ? 'outline-primary' : 'outline-primary'}
                name="radio"
                value={radio.value}
                checked={radioValue === radio.value}
                onChange={(e) => setRadioValue(e.currentTarget.value)}
              >
                {radio.name}
              </ToggleButton>
            ))}
          </ButtonGroup>
          </div>

          { radioValue === '1' ? (

          <Form>

          <Form.Group className="mb-3" controlId="formBasicEmail1">
            <Form.Label>Имя</Form.Label>
              <InputGroup hasValidation>

                <Form.Control type="name" required isInvalid placeholder="Имя" />
                <Form.Control.Feedback type="invalid"> Пожалуйста, введите имя </Form.Control.Feedback>
                </InputGroup>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail1">
              <Form.Label>Фамилия</Form.Label> 
              <Form.Control type="name" placeholder="Фамилия" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail1">
              <Form.Label>Отчество</Form.Label>
              <Form.Control type="name" placeholder="Отчество" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail1">
              <Form.Label>Дата рождения </Form.Label>

                <Form.Control type={"date"}/>

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail1">
              <Form.Label>Пол</Form.Label>
              <Form.Check
                  type="radio"
                  label="Мужской"

                />
                <Form.Check
                  type="radio"
                  label="Женский"

                />
            </Form.Group>
            

            <Form.Group className="mb-3" controlId="formBasicEmail1">
              <Form.Label>Университет</Form.Label>
              <Form.Select aria-label="Default select example">

                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Form.Group> 



             <Form.Group className="mb-3" controlId="formBasicEmail1">
                <Form.Label>Эл.почта</Form.Label>
                <InputGroup>
                  <InputGroup.Text>@</InputGroup.Text>
                <Form.Control type="email" placeholder="Эл.почта" />
                </InputGroup>
            </Form.Group>


            <Form.Group className="mb-3" controlId="formBasicPassword1">
              <Form.Label>Пароль</Form.Label>
              <Form.Control type="password" placeholder="Введите пароль" />
            </Form.Group>


            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Я ознакомлен(а) и согласен(а) с политикой конфидициальности" />
            </Form.Group>

            <div className="text-center">
              <Button variant="primary" type='submit'>
                Зарегистрироваться
              </Button>
            </div>
          </Form>

          ) : (

            <Form>

              <Form.Group className="mb-3" controlId="formBasicEmail1">
              <Form.Label>Имя</Form.Label>
                <InputGroup hasValidation>

                  <Form.Control type="name" required isInvalid placeholder="Имя" />
                  <Form.Control.Feedback type="invalid"> Пожалуйста, введите имя </Form.Control.Feedback>
                  </InputGroup>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail2">
                <Form.Label>Фамилия</Form.Label>
                <Form.Control type="name" placeholder="Фамилия" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail2">
                <Form.Label>Отчество</Form.Label>
                <Form.Control type="name" placeholder="Отчество" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail2">
                <Form.Label>Дата рождения</Form.Label>
                <Form.Control type={"date"}/>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail2">
                <Form.Label>Пол</Form.Label>
                <Form.Check
                    type="radio"
                    label="Мужской"

                  />
                  <Form.Check
                    type="radio"
                    label="Женский"

                  />

              </Form.Group>


              <Form.Group className="mb-3">
                <Form.Label>Компания</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>



               <Form.Group className="mb-3" controlId="formBasicEmail2">
                <Form.Label>Эл.почта</Form.Label>
                <InputGroup>
                  <InputGroup.Text>@</InputGroup.Text>
                <Form.Control type="email" placeholder="Эл.почта" />
                </InputGroup>
              </Form.Group>


              <Form.Group className="mb-3" controlId="formBasicPassword2">
                <Form.Label>Пароль</Form.Label>
                <Form.Control type="password" placeholder="Введите пароль" />
              </Form.Group>


              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Я ознакомлен(а) и согласен(а) с политикой конфидициальности" />
              </Form.Group>

              <div className="text-center">
              <Button variant="primary" type='submit'>
                Зарегистрироваться
              </Button>
              </div>
            </Form>

          )}

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