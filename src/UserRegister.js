import React, {useEffect, useState} from "react";
import {Button, Form, InputGroup} from "react-bootstrap";
import axios from "axios";

function UserRegister(){
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        gender: "",
        bday: "",
        phone: "",
        universityID: {
            id: ""}}
    );

    const [universities, setUniversities] = useState([])
    const [response, setResponse] = useState("");
    // const handleChange = (event) => {
    //     setData({ ...data, [event.target.name]: event.target.value });
    // };

    const handleChange = (event) => {
        const { id, value } = event.target;
        setData((prevData) => ({
            ...prevData,
            [id]: value
        }));
    };

    const handleSubmit = (event) => {
        console.log(data)
        event.preventDefault();
        axios
            .post("https://localhost:8080/api/user/registration", data)
            .then((response) => {
                setResponse(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const getUniversities = ()=>{
        axios
            .get("http://localhost:8080/api/university")
            .then((response) => {
                console.log(response.data)
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
    // const handleUniversityChange = (event) => {
    //      // Получаем выбранное значение (id университета)
    //     data.universityID.id = event.target.value; // Обновляем состояние выбранного университета
    // };

    const handleUniversityChange = (event) => {
        setSelectedUniversity(event.target.value); // Установка выбранного университета
        setData(prevData => ({
            ...prevData,
            universityID: {
                id: event.target.value
            }
        }));
    };


    return(
        <Form>
            <Form.Group className="mb-3" controlId="firstName">
                <Form.Label>Имя</Form.Label>
                <Form.Control type="name"
                              placeholder={"Имя"}
                              name="firstName"
                              value={data.firstName}
                              onChange={handleChange}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="lastName">
                <Form.Label>Фамилия</Form.Label>
                <Form.Control type="name"
                              placeholder="Фамилия"
                              name={"lastName"}
                              value={data.lastName}
                              onChange={handleChange}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="bday">
                <Form.Label>Дата рождения </Form.Label>
                <Form.Control type={"date"}
                              name ="bday"
                              value={data.bday}
                              onChange={handleChange}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="gender">
                <Form.Label>Пол</Form.Label>
                <Form.Check type="radio"
                            label="Мужской"
                            value={data.gender}
                            onChange={handleChange}

                />
                <Form.Check type="radio"
                            label="Женский"
                            value={data.gender}
                            onChange={handleChange}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="name">
                <Form.Label>Университет</Form.Label>
                <Form.Select aria-label="Default select example" onChange={handleUniversityChange} value={data.universityID.id}>
                    {universities
                        .map((university) => (
                        <option key={university.id} value={university.id}>
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
                                  value={data.email}
                                  onChange={handleChange}
                    />
                </InputGroup>
            </Form.Group>
            <Form.Group className="mb-3" controlId="phone">
                <Form.Label>Номер телефона</Form.Label>
                <InputGroup>
                    <InputGroup.Text>+7</InputGroup.Text>
                    <Form.Control type="tel"
                                  placeholder={"Введите номер телефона"}
                                  value={data.phone}
                                  onChange={handleChange}
                    />
                </InputGroup>
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
                <Form.Label>Пароль</Form.Label>
                <Form.Control type="password"
                              placeholder="Введите пароль"
                              value={data.password}
                              onChange={handleChange}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Я ознакомлен(а) и согласен(а) с политикой конфидициальности" />
            </Form.Group>
            <div className="text-center">
                <Button variant="primary"
                        type='submit'
                        onClick={handleSubmit}>
                    Зарегистрироваться
                </Button>
            </div>
        </Form>
    );
}

export default UserRegister;