import React, {useEffect, useState} from "react";
import { Button, Navbar, Nav, Container, Modal, ButtonGroup, ToggleButton, Form, InputGroup } from "react-bootstrap";
import { Link } from 'react-router-dom';
import styled from "styled-components";
// import UserLogin from '../UserLogin';
import CreatorLogin from "../CreatorLogin";
// import UserRegister from "../UserRegister";
import CreatorRegister from "../creatorRegister";
import axios from "axios";
import '../GlobalInfo'
import {useGlobalContext} from "../GlobalInfo";

const Styles = styled.div`
    a, .navbar-nav, .nav-link {
        color: #adb1b8;
        &:hover {
            color: violet;
        }
    }
    .logo {
        color: violet;
        &:hover {
            color: blueviolet;
        }
    }
`;

export default function NaviBar() {
    const [showModal1, setShowModal1] = useState(false);
    const [showModal2, setShowModal2] = useState(false);

    const handleCloseModal1 = () => setShowModal1(false);
    const handleCloseModal2 = () => setShowModal2(false);

    const handleShowModal1 = () => setShowModal1(true);
    const handleShowModal2 = () => setShowModal2(true);

    const [radioValue, setRadioValue] = useState('1');

    const radios = [
        { name: 'Участник ', value: '1' },
        { name: 'Организатор', value: '2' },
    ];


    //-------------------------------------------

    const [userRegistrationData, setUserRegistrationData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        gender: "",
        bday: "",
        phone: "",
        universityID: {
            id: ""
        }
    });

    const [adminRegistrationData, setAdminRegistrationData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        gender: "",
        bday: "",
        phone: "",
        company: "",
        }
    );

    const [universities, setUniversities] = useState([])
    const [response, setResponse] = useState("");
    const handleUserChange = (event) => {
        const { id, value } = event.target;
        setUserRegistrationData((prevData) => ({
            ...prevData,
            [id]: value
        }));
    };
    const handleAdminChange = (event) => {
        const { id, value } = event.target;
        setAdminRegistrationData((prevData) => ({
            ...prevData,
            [id]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(userRegistrationData)
        axios
            .post("http://localhost:8080/api/user/registration", userRegistrationData)
            .then((response) => {
                setResponse(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
        handleCloseModal2()
    };

    const handleCreatorRegistrationSubmit = (event) => {
        event.preventDefault();
        console.log(adminRegistrationData)
        axios
            .post("http://localhost:8080/api/creator/registration", adminRegistrationData)
            .then((response) => {
                setResponse(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
        handleCloseModal2()
    };

    const getUniversities = ()=>{
        axios
            .get("http://localhost:8080/api/university")
            .then((response) => {
                // console.log(response.data)
                setUniversities(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    useEffect(() => {
        getUniversities();
    }, []);

    const [selectedUniversity, setSelectedUniversity] = useState('');


    const handleUniversityChange = (event) => {
        const { value } = event.target;
        setUserRegistrationData(prevData => ({
            ...prevData,
            universityID: {
                ...prevData.universityID,
                id: value
            }
        }));
    };

    const handleUserGenderChange = (event) => {
        const { name, value } = event.target;
        setUserRegistrationData(prevData => ({
            ...prevData,
            [name]: value === 'true' // если value 'true', то сохраняем true, иначе false
        }));
    };

    const handleAdminGenderChange = (event) => {
        const { name, value } = event.target;
        setAdminRegistrationData(prevData => ({
            ...prevData,
            [name]: value === 'true' // если value 'true', то сохраняем true, иначе false
        }));
    };

    //------------------------------------------------------------------------

    const [userLoginData, setUserLoginData] = useState({
        userEmail: "",
        userPassword: "" });

    const [adminLoginData, setAdminLoginData] = useState({
        userEmail: "",
        userPassword: "" });

    const handleUserLoginChange = (event) => {
        setUserLoginData({ ...userLoginData, [event.target.name]: event.target.value });
    };

    const handleAdminLoginChange = (event) => {
        setAdminLoginData({ ...adminLoginData, [event.target.name]: event.target.value });
    };

    const { setUserInfo } = useGlobalContext();
    const { setCreatorInfo } = useGlobalContext();

    const handleUserLoginSubmit = (event) => {
        event.preventDefault();
        axios
            .post("http://localhost:8080/api/user/login", userLoginData)
            .then((response) => {
                if(response.data.length !== 0 ){
                    setUserInfo(response.data);
                    handleCloseModal1();
                }else{
                    console.log("Данных нет")
                }
            })
            .catch((error) => {
                console.log(error);
            });

        handleCloseModal1();
    };

    const handleAdminLoginSubmit = (event) => {
        event.preventDefault();
        axios
            .post("http://localhost:8080/api/creator/login", adminLoginData)
            .then((response) => {
                // console.log(response.data)
                // console.log("CreatorInfo", response.data)
                if(response.data.length !== 0 ){
                    setCreatorInfo(response.data);
                    handleCloseModal1();
                }else{
                    console.log("Данных нет")
                }
            })
            .catch((error) => {
                console.log(error);
            });

        handleCloseModal1();
    };

    return (
        <>
            <Styles>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                        <Link className={"navbar-brand text-decoration-none"} to="/">SIDVERT_L1NS</Link>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav>
                                <Nav.Link as={Link} to="/account" className="text-decoration-none">Аккаунт</Nav.Link>
                                <Nav.Link as={Link} to="/liked" className="text-decoration-none">Избранное</Nav.Link>
                                {/*<Nav.Link as={Link} to="/basket" className="text-decoration-none">Корзина</Nav.Link>*/}
                            </Nav>
                            <Nav className="ms-auto">
                                <Button variant="outline-info" onClick={handleShowModal1}>Войти</Button>
                                <Button variant="outline-info" className="ms-2" onClick={handleShowModal2}>Зарегистрироваться</Button>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Styles>

            <Modal show={showModal1} onHide={handleCloseModal1}>
                <Modal.Header closeButton>
                    <Modal.Title>Авторизация</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="text-center">
                        <ButtonGroup>
                            {radios.map((radio, idx) => (
                                <ToggleButton
                                    key={idx}
                                    id={`radio-${idx}`}
                                    type="radio"
                                    variant='outline-primary'
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
                    {radioValue === '1' ? (
                        // <UserLogin />
                        <Form>
                            <Form.Group className="mb-3" controlId="userEmail">
                                <Form.Label>Эл.почта</Form.Label>
                                <InputGroup>
                                    <InputGroup.Text>@</InputGroup.Text>
                                    {/*<Form.Control type="email" placeholder="Эл.почта" />*/}
                                    <Form.Control
                                        type="email"
                                        placeholder="Эл.почта"
                                        name="userEmail"
                                        value={userLoginData.userEmail}
                                        onChange={handleUserLoginChange}
                                    />
                                </InputGroup>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="userPassword">
                                <Form.Label>Пароль</Form.Label>
                                {/*<Form.Control type="password" placeholder="Введите пароль" />*/}
                                <Form.Control
                                    type="password"
                                    placeholder="Введите пароль"
                                    name="userPassword"
                                    value={userLoginData.userPassword}
                                    onChange={handleUserLoginChange}
                                />
                            </Form.Group>

                            {/*<Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Запомнить меня" />
                            </Form.Group>*/}

                            <div className="text-center mb-3">
                                <Button variant="primary" type='submit' onClick={handleUserLoginSubmit}>
                                    Войти
                                </Button>
                            </div>

                        </Form>
                    ) : (
                        // <CreatorLogin/>

                        <Form>
                            <Form.Group className="mb-3" controlId="userEmail">
                                <Form.Label>Эл.почта</Form.Label>
                                <InputGroup>
                                    <InputGroup.Text>@</InputGroup.Text>
                                    {/*<Form.Control type="email" placeholder="Эл.почта" />*/}
                                    <Form.Control
                                        type="email"
                                        placeholder="Эл.почта"
                                        name="userEmail"
                                        value={adminLoginData.userEmail}
                                        onChange={handleAdminLoginChange}
                                    />
                                </InputGroup>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="userPassword">
                                <Form.Label>Пароль</Form.Label>
                                {/*<Form.Control type="password" placeholder="Введите пароль" />*/}
                                <Form.Control
                                    type="password"
                                    placeholder="Введите пароль"
                                    name="userPassword"
                                    value={adminLoginData.userPassword}
                                    onChange={handleAdminLoginChange}
                                />
                            </Form.Group>

                            {/*<Form.Group className="mb-3" controlId="formBasicCheckbox2">
                                <Form.Check type="checkbox" label="Запомнить меня" />
                            </Form.Group>*/}

                            <div className="text-center mb-3">
                                <Button variant="primary" type='submit' onClick={handleAdminLoginSubmit}>
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
                                    variant='outline-primary'
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
                    {radioValue === '1' ? (
                        // <UserRegister/>
                        <Form>
                            <Form.Group className="mb-3" controlId="firstName">
                                <Form.Label>Имя</Form.Label>
                                <Form.Control type="name"
                                              placeholder={"Имя"}
                                              name="firstName"
                                              value={userRegistrationData.firstName}
                                              onChange={handleUserChange}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="lastName">
                                <Form.Label>Фамилия</Form.Label>
                                <Form.Control type="name"
                                              placeholder="Фамилия"
                                              name={"lastName"}
                                              value={userRegistrationData.lastName}
                                              onChange={handleUserChange}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="bday">
                                <Form.Label>Дата рождения </Form.Label>
                                <Form.Control type={"date"}
                                              name ="bday"
                                              value={userRegistrationData.bday}
                                              onChange={handleUserChange}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="gender1">
                                <Form.Label>Пол</Form.Label>
                                <Form.Check type="radio"
                                            label="Мужской"
                                            name={"gender"}
                                            value={false}
                                            checked={userRegistrationData.gender === false}
                                            onChange={handleUserGenderChange}

                                />
                                <Form.Check type="radio"
                                            label="Женский"
                                            name={"gender"}
                                    // value={data.gender}
                                            value={true}
                                            checked={userRegistrationData.gender === true}
                                            onChange={handleUserGenderChange}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="name">
                                <Form.Label>Университет</Form.Label>
                                <Form.Select aria-label="Default select example" name="universityId" onChange={handleUniversityChange} value={userRegistrationData.universityID.id}>
                                    {universities
                                        .map((university) => (
                                            <option key={university.id} value={university.id} name={"id"}>
                                                {university.name}
                                            </option>
                                        ))}
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="email">
                                <Form.Label>Эл.почта</Form.Label>
                                <InputGroup>
                                    <InputGroup.Text>@</InputGroup.Text>
                                    <Form.Control type="email"
                                                  placeholder="Эл.почта"
                                                  value={userRegistrationData.email}
                                                  onChange={handleUserChange}
                                    />
                                </InputGroup>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="phone">
                                <Form.Label>Номер телефона</Form.Label>
                                <InputGroup>
                                    <InputGroup.Text>+7</InputGroup.Text>
                                    <Form.Control type="tel"
                                                  placeholder={"Введите номер телефона"}
                                                  value={userRegistrationData.phone}
                                                  onChange={handleUserChange}
                                    />
                                </InputGroup>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="password">
                                <Form.Label>Пароль</Form.Label>
                                <Form.Control type="password"
                                              placeholder="Введите пароль"
                                              value={userRegistrationData.password}
                                              onChange={handleUserChange}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Я ознакомлен(а) и согласен(а) с политикой конфидициальности" />
                            </Form.Group>
                            <div className="text-center">
                                <Button variant="primary"
                                        type="submit"
                                        onClick={handleSubmit}>
                                    Зарегистрироваться
                                </Button>
                            </div>
                        </Form>
                    ) : (
                        // <CreatorRegister/>
                        <Form>
                            <Form.Group className="mb-3" controlId="firstName">
                                <Form.Label>Имя</Form.Label>
                                <Form.Control type="name"
                                              placeholder={"Имя"}
                                              name="firstName"
                                              value={adminRegistrationData.firstName}
                                              onChange={handleAdminChange}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="lastName">
                                <Form.Label>Фамилия</Form.Label>
                                <Form.Control type="name"
                                              placeholder="Фамилия"
                                              name={"lastName"}
                                              value={adminRegistrationData.lastName}
                                              onChange={handleAdminChange}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="bday">
                                <Form.Label>Дата рождения </Form.Label>
                                <Form.Control type={"date"}
                                              name ="bday"
                                              value={adminRegistrationData.bday}
                                              onChange={handleAdminChange}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="gender1">
                                <Form.Label>Пол</Form.Label>
                                <Form.Check type="radio"
                                            label="Мужской"
                                            name={"gender"}
                                            value={false}
                                            checked={adminRegistrationData.gender === false}
                                            onChange={handleAdminGenderChange}

                                />
                                <Form.Check type="radio"
                                            label="Женский"
                                            name={"gender"}
                                    // value={data.gender}
                                            value={true}
                                            checked={adminRegistrationData.gender === true}
                                            onChange={handleAdminGenderChange}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="company">
                                <Form.Label>Компания</Form.Label>
                                <Form.Control as="textarea"
                                              name={"company"}
                                              rows={3}
                                              value={adminRegistrationData.company}
                                              onChange={handleAdminChange}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="email">
                                <Form.Label>Эл.почта</Form.Label>
                                <InputGroup>
                                    <InputGroup.Text>@</InputGroup.Text>
                                    <Form.Control type="email"
                                                  placeholder="Эл.почта"
                                                  value={adminRegistrationData.email}
                                                  onChange={handleAdminChange}
                                    />
                                </InputGroup>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="phone">
                                <Form.Label>Номер телефона</Form.Label>
                                <InputGroup>
                                    <InputGroup.Text>+7</InputGroup.Text>
                                    <Form.Control type="tel"
                                                  placeholder={"Введите номер телефона"}
                                                  value={adminRegistrationData.phone}
                                                  onChange={handleAdminChange}
                                    />
                                </InputGroup>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="password">
                                <Form.Label>Пароль</Form.Label>
                                <Form.Control type="password"
                                              placeholder="Введите пароль"
                                              value={adminRegistrationData.password}
                                              onChange={handleAdminChange}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Я ознакомлен(а) и согласен(а) с политикой конфидициальности" />
                            </Form.Group>
                            <div className="text-center">
                                <Button variant="primary"
                                        type="submit"
                                        onClick={handleCreatorRegistrationSubmit}>
                                    Зарегистрироваться
                                </Button>
                            </div>
                        </Form>
                    )}
                </Modal.Body>
            </Modal>
        </>
    );
}
