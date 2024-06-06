import React, {useEffect} from "react";
import {Card, Button, Form, Row, Col, Container, Modal, ButtonGroup, ToggleButton, InputGroup} from "react-bootstrap";
import 'react-tabulator/lib/styles.css'; // required styles
import 'react-tabulator/lib/css/tabulator_materialize.min.css'; // theme
import { ReactTabulator } from 'react-tabulator';

import {Link} from "react-router-dom";
import './GlobalInfo'
import {useGlobalContext} from "./GlobalInfo";

import axios from 'axios';
import { useState} from 'react';
import _header from './_header.png';

import LikedCard from "./Components/LikedCard";
import CardComponent from "./Components/Cart";


let rowClickHandler;

const userColumns = [
    {title: "№", field: "num", width: 30},
    { title: "Название", field: "name" },
    { title: "Дата", field: "date", width: 150 },
    { title: "Статус", field: "status", hozAlign: "center",}
];

//
// let modalAddPosition = (
//     <Modal show={false}>
//
//         <Modal.Header closeButton>
//         <Modal.Title >Новый хакатон</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//             <Form>
//                 <Form.Group className="mb-3" >
//                     <Form.Label>Название</Form.Label>
//                     <InputGroup>
//                         <Form.Control type="name" placeholder="Название" />
//                     </InputGroup>
//                 </Form.Group>
//
//                 <Form.Group className="mb-3">
//                     <Form.Label>Описание</Form.Label>
//                     <Form.Control type={"text"}>
//
//                     </Form.Control>
//                 </Form.Group>
//
//                 <Form.Group className="mb-3">
//                     <Form.Label>Дата проведения</Form.Label>
//                     <Form.Control type={"date"}>
//
//                     </Form.Control>
//                 </Form.Group>
//
//                 <Form.Group className="mb-3" >
//                     <Form.Label>Ссылка на другой источник</Form.Label>
//                     <InputGroup>
//                         <Form.Control type="text" placeholder="ссылка" />
//                     </InputGroup>
//                 </Form.Group>
//
//                 <div className="text-center">
//                     <Button variant="primary" onClick={handleAddHack}>
//                         Создать
//                     </Button>
//                 </div>
//             </Form>
//         </Modal.Body>
//     </Modal>
// )*/

function UserAccount({userInfo}){
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8080/api/user/${userInfo.id}/booking`)
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
        <div style={{overflow: "hidden"}}>
            <h1 className="ms-4 mt-4">Доброго дня, {userInfo.firstName}</h1>
            <Container className={"pt-3 d-flex flex-wrap justify-content-center"}>
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

function AdminAccount({creatorInfo, bookingStatuses}){
    const [showModal, setShowModal] = useState(false);

    const handleCloseModal = () => setShowModal(false);
    const handleShowModal = () => setShowModal(true);

    const [creatorPositionsData, setCreatorPositionsData] = useState([]);

    const [adminColumns, setAdminColumns] = useState([]);

    useEffect(() => {
        // Проверяем, что bookingStatuses не пустой
        if (bookingStatuses.length !== 0) {
            let statuses = []
            bookingStatuses.map(status => statuses.push({
                    label:status.name,
                    value:status.id,
                }))
            console.log(statuses)
            const columns = [
                { title: "№", field: "num", width: 30 },
                { title: "Название", field: "positionId.name" },
                { title: "Дата", field: "date", width: 150 },
                { title: "Пользователь", field: "userId.email" },
                { title: "Статус", field: "bookingStatusId.name" },
                {

                    editor: "select",
                    editorParams: {
                        allowEmpty: false,
                        showListOnEmpty: true,
                        showListOnUpDownKeys: true,
                        freetext: false,
                        sortValuesList: "asc",
                        values: statuses,
                    },
                    field: "newStatus",
                    title: "Новый статус",
                    width: 150
                },
                {
                    title: "Действие",
                    field: "action",
                    formatter: cell => {
                        const button = document.createElement("button");
                        button.innerText = "Отправить";
                        // button.addEventListener("click", () => handleAction(cell.getRow().getData()));
                        return button;
                    },
                }
            ];
            setAdminColumns(columns);
        }
    }, [bookingStatuses]);
    /*const [bookingStatuses, setBookingStatuses] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/api/booking-status')
            .then(response => {
                // console.log(response.data)
                setBookingStatuses(response.data); // Установка полученного списка статусов в состояние компонента
            })
            .catch(error => {
                console.error('Error fetching booking statuses:', error);
            })
    }, []);*/


    useEffect(() => {//для позиций
        axios
            .get(`http://localhost:8080/api/creator/${creatorInfo.id}/positions`)
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
            .get(`http://localhost:8080/api/creator/${creatorInfo.id}/bookings`)
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



    const [addHackData, setAddHackData] = useState(
{
            name: "",
            description: "",
            type: false,
            link: "",
            creatorId:
                {
                    id: creatorInfo.id
                },
            date: "",
            categories: []
        }
    )

    const handleChange = (event) => {
        const { name, value } = event.target;
        setAddHackData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };
    const handleAddHack = (event) => {
        console.log(addHackData)
        event.preventDefault();
        axios
            .post("http://localhost:8080/api/positions/create", addHackData)
            .then((response) => {
                // console.log(response.data)
                // console.log("CreatorInfo", response.data)
                if(response.data.length !== 0 ){
                    // setCreatorInfo(response.data);
                    handleCloseModal();
                }else{
                    console.log("Данных нет")
                }
            })
            .catch((error) => {
                console.log(error);
            });
        handleCloseModal();
    };

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

    // const adminColumns = [
    //     {title: "№", field: "num", width: 30},
    //     { title: "Название", field: "positionId.name" },
    //     { title: "Дата", field: "date", width: 150 },
    //     { title: "Пользователь", field: "userId.email"},
    //     { title: "Статус", field: "bookingStatusId.name"},
    //     {
    //         editor: "select",
    //         editorParams: {
    //             values: bookingStatuses.map(status => status.id)
    //         },
    //         field: "newStatus",
    //         title: "Новый статус",
    //         width: 150
    //     },
    //     {
    //         title: "Действие",
    //         field: "action",
    //         formatter: cell => {
    //             const button = document.createElement("button");
    //             button.innerText = "Отправить";
    //             // button.addEventListener("click", () => handleAction(cell.getRow().getData()));
    //             return button;
    //         },
    //     }
    // ];

    if(bookingStatuses.length !== 0){
        return (
            <div style={{overflow: "hidden"}}>
                <h1 className="ms-4 mt-4">Доброго дня, {creatorInfo.firstName}</h1>
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
                        <Button variant={"outline-primary"} onClick={handleShowModal}>Добавить новый</Button>

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
                                            <Form.Control type="name" name="name" value={addHackData.name} onChange={handleChange} placeholder="Название" />
                                        </InputGroup>
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label>Описание</Form.Label>
                                        {/* <Form.Control type={"text"}> */}
                                        <Form.Control type={"text"} name="description" value={addHackData.description} onChange={handleChange} placeholder="Описание" />

                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label>Дата проведения</Form.Label>
                                        {/* <Form.Control type={"date"}/> */}
                                        <Form.Control type={"date"} name="date" value={addHackData.date} onChange={handleChange} />

                                    </Form.Group>

                                    <Form.Group className="mb-3" >
                                        <Form.Label>Ссылка на другой источник</Form.Label>
                                        <InputGroup>
                                            {/* <Form.Control type="text" placeholder="ссылка" /> */}
                                            <Form.Control type="text" name="link" value={addHackData.link} onChange={handleChange} placeholder="Ссылка" />
                                        </InputGroup>
                                    </Form.Group>



                                    <div className="text-center">
                                        <Button variant="primary" onClick={handleAddHack}>
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
    }
}


export const Account = () => {
    const {userInfo, setUserInfo} = useGlobalContext();
    const {creatorInfo, setCreatorInfo} = useGlobalContext();
    const [loading, setLoading] = useState(true); // Добавлено локальное состояние для отслеживания загрузки данных
    const [bookingStatuses, setBookingStatuses] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/api/booking-status')
            .then(response => {
                // console.log(response.data)
                setBookingStatuses(response.data); // Установка полученного списка статусов в состояние компонента
            })
            .catch(error => {
                console.error('Error fetching booking statuses:', error);
            })
            .finally(() => {
                setLoading(false); // Устанавливаем loading в false после получения данных
            });
    }, []);


    if (userInfo !== null && userInfo !== undefined && userInfo.size !== 0) {
        // return (curRole === 2) ? userAccount(userInfo) : adminAccount(creatorInfo)
        return <UserAccount userInfo={userInfo}/>
    }
    else if (creatorInfo !== null && creatorInfo !== undefined && !loading) {
        return <AdminAccount creatorInfo = {creatorInfo} bookingStatuses={bookingStatuses}/>
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

