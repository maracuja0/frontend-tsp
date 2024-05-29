// import React from "react";
// import { Button, Navbar, Nav, Container, Modal, ButtonGroup, ToggleButton, Form, InputGroup} from "react-bootstrap";
// import {Link} from 'react-router-dom';
// import styled from "styled-components";
// import { useState } from 'react';
// import axios from "axios";
//
// function UserLogin(){
//     const [userLoginData, setUserLoginData] = useState({
//         userEmail: "",
//         userPassword: "" });
//     const [response, setResponse] = useState("");
//     // const handleChange = (event) => {
//     //     setUserLoginData({ ...userLoginData, [event.target.name]: event.target.value });
//     // };
//
//
//     const handleUserLoginSubmit = (event) => {
//         // console.log(data)
//         event.preventDefault();
//         axios
//             .post("http://localhost:8080/api/user/login", userLoginData)
//             .then((response) => {
//                 console.log(response.data)
//                 setResponse(response.data);
//             })
//             .catch((error) => {
//                 console.log(error);
//             });
//
//     };
//
//     return(
//         <Form>
//             <Form.Group className="mb-3" controlId="userEmail">
//                 <Form.Label>Эл.почта</Form.Label>
//                 <InputGroup>
//                     <InputGroup.Text>@</InputGroup.Text>
//                     {/*<Form.Control type="email" placeholder="Эл.почта" />*/}
//                     <Form.Control
//                         type="email"
//                         placeholder="Эл.почта"
//                         name="userEmail"
//                         value={userLoginData.userEmail}
//                         onChange={handleChange}
//                     />
//                 </InputGroup>
//             </Form.Group>
//
//             <Form.Group className="mb-3" controlId="userPassword">
//                 <Form.Label>Пароль</Form.Label>
//                 {/*<Form.Control type="password" placeholder="Введите пароль" />*/}
//                 <Form.Control
//                     type="password"
//                     placeholder="Введите пароль"
//                     name="userPassword"
//                     value={userLoginData.userPassword}
//                     onChange={handleChange}
//                 />
//             </Form.Group>
//
//             <Form.Group className="mb-3" controlId="formBasicCheckbox">
//                 <Form.Check type="checkbox" label="Запомнить меня" />
//             </Form.Group>
//
//             <div className="text-center mb-3">
//                 <Button variant="primary" type='submit' onClick={handleUserLoginSubmit}>
//                     Войти
//                 </Button>
//             </div>
//
//         </Form>
//     );
// }
//
// export default UserLogin;