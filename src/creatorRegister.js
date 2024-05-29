import React from "react";
import { Button, Navbar, Nav, Container, Modal, ButtonGroup, ToggleButton, Form, InputGroup} from "react-bootstrap";
import {Link} from 'react-router-dom';
import styled from "styled-components";
import { useState } from 'react';
import axios from "axios";

function CreatorRegister(){
    const [data, setData] = useState({ userEmail: "", userPassword: "" });
    const [response, setResponse] = useState("");
    const handleChange = (event) => {
        setData({ ...data, [event.target.name]: event.target.value });
    };


    const handleSubmit = (event) => {
        console.log(data)
        event.preventDefault();
        axios
            .post("https://localhost:8080/api/user/login", data)
            .then((response) => {
                console.log(data)
                setResponse(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return(
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
                <Form.Control type={"date"} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail2">
                <Form.Label>Пол</Form.Label>
                <Form.Check type="radio" label="Мужской" />
                <Form.Check type="radio" label="Женский" />
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
    );
}

export default CreatorRegister;