import React from "react";
import {Card, Button, Form, Row, Col, Container, Modal, ButtonGroup, ToggleButton, InputGroup} from "react-bootstrap";
import 'react-tabulator/lib/styles.css'; // required styles
import 'react-tabulator/lib/css/tabulator_materialize.min.css'; // theme
import { ReactTabulator } from 'react-tabulator';

import {Link} from "react-router-dom";

import axios from 'axios';
import { useState, useEffect } from 'react';
import _header from './_header.png';

import LikedCard from "./Components/LikedCard";
// import CardComponent from "./Components/Cart";


let rowClickHandler;


const userColumns = [
    {title: "№", field: "num", width: 30},
    { title: "Название", field: "name" },
    { title: "Дата", field: "date", width: 150 },
    { title: "Статус", field: "status", hozAlign: "center",}
];

// let userData = [
//     {num:1, name:"Хакатон в Сочи", date: "2024-04-04", status: "В обработке"},
//     {num:2, name:"Хакатон в Самаре", date: "2024-10-14", status: "Принята"},
//     {num:3, name:"Хакатон в Уфе", date: "2024-12-12", status: "Отклонена"},
// ];

const adminColumns = [
    {title: "№", field: "num", width: 30},
    { title: "Название", field: "name" },
    { title: "Дата", field: "date", width: 150 },
    { title: "Статус", field: "status"},
    {
        title: "Действие",
        field: "action",
    }
];



let role = {
    1: "User",
    2: "Admin"
}

let curRole = 2;


let userId=4;

function UserAccount ({ role, curRole }) {
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8080/api/user/${userId}/booking`) 
            .then(response => {
                const fetchedData = response.data;
                console.log(response.data)
                const formattedData = fetchedData.map((booking, index) => ({
                    num: index + 1,
                    name:  booking.positionId.name,
                    date: booking.date,
                    status: booking.bookingStatusId.name

                }));
                setUserData(formattedData);
            })
            .catch(error => {
                console.error('Ошибка при загрузке данных:', error);
            });
    }, []);

    const rowClickHandler = (e, row) => {
        console.log('Row clicked:', row);
    };

    return (
        <div style={{ overflow: "hidden" }}>
            <h1 className="ms-4 mt-4">Доброго дня, {role[curRole]}</h1>
            <Container className={"pt-3 d-flex flex-wrap justify-content-center"}>
                <Card className={"m-2 w-100"}>
                    <Card.Header as="h5">Заявки</Card.Header>
                    <Card.Body>
                        <ReactTabulator columns={userColumns} data={userData} events={{ rowClick: rowClickHandler }} />
                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
};

let creatorId=1;

function AdminAccount({ role, curRole }){ //ДОДЕЛАТЬ
    const [showModal, setShowModal] = useState(false);

    const handleCloseModal = () => setShowModal(false);
    const handleShowModal = () => setShowModal(true);

    const [creatorPositionsData, setCreatorPositionsData] = useState([]);

        useEffect(() => {//для позиций
            axios
            .get(`http://localhost:8080/api/creator/${creatorId}/positions`)
            .then((response) => {
                console.log(response.data)
                setCreatorPositionsData(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
        }, []);


        const [creatorTableData, setCreatorTableData] = useState([]);

        useEffect(() => {//для таблицы
            axios
            .get(`http://localhost:8080/api/creator/${creatorId}/positions`)
            .then((response) => {
                console.log(response.data)
                setCreatorTableData(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
        }, []);


        const [formData, setFormData] = useState({//для дообавления хаакатона
            name: "",
            description: "",
            type: false,
            link: "",
            creatorId: {},
            date: "",
            categories: []
          });
        
          const handleChange = (event) => {
            const { name, value } = event.target;
            setFormData(prevData => ({
              ...prevData,
              [name]: value
            }));
          };
        
          const handleSubmit = async () => {
            try {
              const response = await axios.post('/api/hackathons', formData);
              console.log('Хакатон успешно добавлен в базу данных:', response.data);
              // Очистить форму после успешной отправки
              setFormData({
                name: "",
                description: "",
                type: false,
                link: "",
                creatorId: {},
                date: "",
                categories: []
              });
              handleCloseModal();
            } catch (error) {
              console.error('Произошла ошибка при добавлении хакатона:', error);
            }
        }

            const handleCreatorIdChange = (event) => {
                const { value } = event.target;
                setFormData(prevData => ({
                    ...prevData,
                    creatorId: {
                        ...prevData.universityID,
                        id: value
                    }
                }));
            };

       
        return(
        
            <div style={{overflow: "hidden"}}>
            <h1 className="ms-4 mt-4">Доброго дня, {role[curRole]}</h1>
            <Container className={"pt-3 d-flex flex-wrap justify-content-center"}>
                <Card className={"m-2 w-100"}>
                    <Card.Header as="h5">Мои Хакатоны</Card.Header>
                        <Container className={"pt-3 d-flex flex-wrap justify-content-center"}>
                            {creatorPositionsData.map((position) => (
                                <LikedCard
                                    //   key={liked.user_id} 
                                    title={position.name} 
                                    text={position.description} 
                                    imgUrl={_header}
                                    
                                    
                                />
                                ))}
                        </Container>
    
                    <Button variant="outline-primary" onClick={handleShowModal}>Добавить новый</Button>
    
                    <Modal  show={showModal} onHide={handleCloseModal}>
    
                        <Modal.Header closeButton>
                        <Modal.Title >Новый хакатон</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form>
                                <Form.Group className="mb-3" >
                                    <Form.Label>Название</Form.Label>
                                    <InputGroup>
                                        {/* <Form.Control type="name" placeholder="Название" /> */}
                                        <Form.Control type="name" name="name" value={formData.name} onChange={handleChange} placeholder="Название" />
                                    </InputGroup>
                                </Form.Group>
    
                                <Form.Group className="mb-3">
                                    <Form.Label>Описание</Form.Label>
                                    {/* <Form.Control type={"text"}> */}
                                    <Form.Control type={"text"} name="description" value={formData.description} onChange={handleChange} placeholder="Описание" />
                                   
                                </Form.Group>
    
                                <Form.Group className="mb-3">
                                    <Form.Label>Дата проведения</Form.Label>
                                    {/* <Form.Control type={"date"}/> */}
                                    <Form.Control type={"date"} name="date" value={formData.date} onChange={handleChange} />
                                    
                                </Form.Group>
    
                                <Form.Group className="mb-3" >
                                    <Form.Label>Ссылка на другой источник</Form.Label>
                                    <InputGroup>
                                        {/* <Form.Control type="text" placeholder="ссылка" /> */}
                                        <Form.Control type="text" name="link" value={formData.link} onChange={handleChange} placeholder="Ссылка" />
                                    </InputGroup>
                                </Form.Group>
                                


                                <div className="text-center">
                                    <Button variant="primary" onClick={handleSubmit}>
                                        Создать
                                    </Button>
                                </div>
                                    </Form>
                                </Modal.Body>
                    </Modal>
    
                </Card>
    
                <Card className={"m-2 w-100"}>
                    <Card.Header as="h5">Заявки</Card.Header>
                    <Card.Body>
                        <ReactTabulator columns={adminColumns} data={creatorTableData} events={{rowClick: rowClickHandler}}/>
                    </Card.Body>
                </Card>
            </Container>
            </div>
    
        )
    // }
    
}




// let adminAccount = (
//     <div style={{overflow: "hidden"}}>
//         <h1 className="ms-4 mt-4">Доброго дня, {role[curRole]}</h1>
//         <Container className={"pt-3 d-flex flex-wrap justify-content-center"}>
//             <Card className={"m-2 w-100"}>
//                 <Card.Header as="h5">Мои Хакатоны</Card.Header>
//                 <Card.Body>
//                     {/* <Button variant="primary">Добавить новый</Button>
//                     <Form.Group className="mb-3" controlId="formBasicEmail">
//                         <Row className="overflow-auto">
//                             <Col style={{display: 'inline-block', minWidth: '250px', padding: '10px'}}>
//                                 <Link to={"/liked"} style={{textDecoration: 'none'}}>
//                                     <LikedCard/>
//                                 </Link>
//                             </Col>
//                             <Col style={{display: 'inline-block', minWidth: '250px', padding: '10px'}}>
//                                 <Link to={"/liked"} style={{textDecoration: 'none'}}>
//                                     <LikedCard/>
//                                 </Link>
//                             </Col>
//                             <Col style={{display: 'inline-block', minWidth: '250px', padding: '10px'}}>
//                                 <Link to={"/liked"} style={{textDecoration: 'none'}}>
//                                     <LikedCard/>
//                                 </Link>
//                             </Col>
//                         </Row>
//                     </Form.Group> */}
//                 </Card.Body>
//             </Card>
//             <Card className={"m-2 w-100"}>
//                 <Card.Header as="h5">Заявки</Card.Header>
//                 <Card.Body>
//                     <ReactTabulator columns={adminColumns} data={adminData} events={{rowClick: rowClickHandler}}/>
//                 </Card.Body>
//             </Card>
//         </Container>
//     </div>
// )


// export const Account = () => (
    
//     (curRole === 1) ? userAccount : adminAccount
// )

export const Account = () => (
    (curRole === 1) ? <UserAccount role={role} curRole={curRole} /> : <AdminAccount role={role} curRole={curRole}/>
);

