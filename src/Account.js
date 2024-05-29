import React, {useState} from "react";
import {Card, Button, Form, Row, Col, Container, Modal, ButtonGroup, ToggleButton, InputGroup} from "react-bootstrap";
import 'react-tabulator/lib/styles.css'; // required styles
import 'react-tabulator/lib/css/tabulator_materialize.min.css'; // theme
import { ReactTabulator } from 'react-tabulator';
import LikedCard from "./Components/LikedCard"
import {Link} from "react-router-dom";
import './GlobalInfo'
import {useGlobalContext} from "./GlobalInfo";

let rowClickHandler;

const userColumns = [
    {title: "№", field: "num", width: 30},
    { title: "Название", field: "name" },
    { title: "Дата", field: "date", width: 150 },
    { title: "Статус", field: "status", hozAlign: "center",}
];

let userData = [
    {num:1, name:"Хакатон в Сочи", date: "2024-04-04", status: "В обработке"},
    {num:2, name:"Хакатон в Самаре", date: "2024-10-14", status: "Принята"},
    {num:3, name:"Хакатон в Уфе", date: "2024-12-12", status: "Отклонена"},
];

const adminColumns = [
    {title: "№", field: "num", width: 30},
    { title: "Название", field: "name" },
    { title: "Дата", field: "date", width: 150 },
    { title: "Статус", field: "status", hozAlign: "center",},
    {
        title: "Действие",
        field: "action",
    }
];

let adminData = [
    {num:1, name:"Хакатон в Сочи", date: "2024-04-04", status: "В обработке"},
    {num:2, name:"Хакатон в Самаре", date: "2024-10-14", status: "Принята"},
    {num:3, name:"Хакатон в Уфе", date: "2024-12-12", status: "Отклонена"},
];

let role = {
    1: "User",
    2: "Admin"
}

let curRole = 1;


let modalAddPosition = (
    <Modal show={false}>

        <Modal.Header closeButton>
        <Modal.Title >Новый хакатон</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Group className="mb-3" >
                    <Form.Label>Название</Form.Label>
                    <InputGroup>
                        <Form.Control type="name" placeholder="Название" />
                    </InputGroup>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Описание</Form.Label>
                    <Form.Control type={"text"}>

                    </Form.Control>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Дата проведения</Form.Label>
                    <Form.Control type={"date"}>

                    </Form.Control>
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Ссылка на другой источник</Form.Label>
                    <InputGroup>
                        <Form.Control type="text" placeholder="ссылка" />
                    </InputGroup>
                </Form.Group>

                <div className="text-center">
                    <Button variant="primary">
                        Создать
                    </Button>
                </div>
            </Form>
        </Modal.Body>
    </Modal>
)

let userAccount = (userInfo)=> {
    return (
        <div style={{overflow: "hidden"}}>
            <h1 className="ms-4 mt-4">Доброго дня, {userInfo.firstName}</h1>
            <Container className={"pt-3 d-flex flex-wrap justify-content-center"}>
                <Card className={"m-2 w-100"}>
                    <Card.Header as="h5">Избранное</Card.Header>
                    <Card.Body>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Row className="overflow-auto">
                                <Col style={{display: 'inline-block', minWidth: '250px', padding: '10px'}}>
                                    <Link to={"/liked"} style={{textDecoration: 'none'}}>
                                        <LikedCard/>
                                    </Link>
                                </Col>
                                <Col style={{display: 'inline-block', minWidth: '250px', padding: '10px'}}>
                                    <Link to={"/liked"} style={{textDecoration: 'none'}}>
                                        <LikedCard/>
                                    </Link>
                                </Col>
                                <Col style={{display: 'inline-block', minWidth: '250px', padding: '10px'}}>
                                    <Link to={"/liked"} style={{textDecoration: 'none'}}>
                                        <LikedCard/>
                                    </Link>
                                </Col>
                            </Row>
                        </Form.Group>
                    </Card.Body>
                </Card>
                <Card className={"m-2 w-100"}>
                    <Card.Header as="h5">Заявки</Card.Header>
                    <Card.Body>
                        <ReactTabulator columns={userColumns} data={userData} events={{rowClick: rowClickHandler}}/>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    )
}

let adminAccount =(creatorInfo)=> {
    return (
        <div style={{overflow: "hidden"}}>
            <h1 className="ms-4 mt-4">Доброго дня, {creatorInfo.firstName}</h1>
            <Container className={"pt-3 d-flex flex-wrap justify-content-center"}>
                <Card className={"m-2 w-100"}>
                    <Card.Header as="h5">Мои Хакатоны</Card.Header>
                    <Card.Body>
                        <Button variant="primary">Добавить новый</Button>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Row className="overflow-auto">
                                <Col style={{display: 'inline-block', minWidth: '250px', padding: '10px'}}>
                                    <Link to={"/liked"} style={{textDecoration: 'none'}}>
                                        <LikedCard/>
                                    </Link>
                                </Col>
                                <Col style={{display: 'inline-block', minWidth: '250px', padding: '10px'}}>
                                    <Link to={"/liked"} style={{textDecoration: 'none'}}>
                                        <LikedCard/>
                                    </Link>
                                </Col>
                                <Col style={{display: 'inline-block', minWidth: '250px', padding: '10px'}}>
                                    <Link to={"/liked"} style={{textDecoration: 'none'}}>
                                        <LikedCard/>
                                    </Link>
                                </Col>
                            </Row>
                        </Form.Group>
                    </Card.Body>
                </Card>
                <Card className={"m-2 w-100"}>
                    <Card.Header as="h5">Заявки</Card.Header>
                    <Card.Body>
                        <ReactTabulator columns={adminColumns} data={adminData} events={{rowClick: rowClickHandler}}/>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    )
}


export const Account = () => {
    const {userInfo, setUserInfo} = useGlobalContext();
    const {creatorInfo, setCreatorInfo} = useGlobalContext();

    if (userInfo !== null && userInfo !== undefined && userInfo.size !== 0) {
        // return (curRole === 2) ? userAccount(userInfo) : adminAccount(creatorInfo)
        return userAccount(userInfo)
    }
    else if (creatorInfo !== null && creatorInfo !== undefined ) {
        return adminAccount(creatorInfo)
    }
    else
    {
        return (
            <div className={"d-flex justify-content-center"} style={{height: "500px"}}>
                <h1 className={"align-self-center"}>Пожалуйста, авторизуйтесь!</h1>
            </div>
        )
    }
}

