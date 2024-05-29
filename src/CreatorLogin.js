import React from "react";
import { Button, Navbar, Nav, Container, Modal, ButtonGroup, ToggleButton, Form, InputGroup} from "react-bootstrap";
import {Link} from 'react-router-dom';
import styled from "styled-components";
import { useState } from 'react';
import axios from "axios";

function CreatorLogin(){
    const [creatorData, setCreatorData] = useState({ creatorEmail: "", creatorPassword: "" });
    const [response, setCreatorResponse] = useState("");
    const handleChange = (event) => {
        setCreatorData({ ...creatorData, [event.target.name]: event.target.value });
    };


    const handleSubmit = (event) => {
        console.log(creatorData)
        event.preventDefault();
        axios
            .post("https://localhost:8080/api/creator/login", creatorData)
            .then((response) => {
                console.log(creatorData)
                setCreatorResponse(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return(
        <Form>
            <Form.Group className="mb-3" controlId="creatorEmail">
                <Form.Label>Эл.почта</Form.Label>
                <InputGroup>
                    <InputGroup.Text>@</InputGroup.Text>
                    {/*<Form.Control type="email" placeholder="Эл.почта" />*/}
                    <Form.Control
                        type="email"
                        placeholder="Эл.почта"
                        name="creatorEmail"
                        value={creatorData.creatorEmail}
                        onChange={handleChange}
                    />
                </InputGroup>
            </Form.Group>

            <Form.Group className="mb-3" controlId="creatorPassword">
                <Form.Label>Пароль</Form.Label>
                {/*<Form.Control type="password" placeholder="Введите пароль" />*/}
                <Form.Control
                    type="password"
                    placeholder="Введите пароль"
                    name="creatorPassword"
                    value={creatorData.creatorPassword}
                    onChange={handleChange}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox2">
                <Form.Check type="checkbox" label="Запомнить меня" />
            </Form.Group>

            <div className="text-center mb-3">
                <Button variant="primary" type='submit' onClick={handleSubmit}>
                    Войти
                </Button>
            </div>

        </Form>
    );
}

export default CreatorLogin;