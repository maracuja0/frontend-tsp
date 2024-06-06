import {Card, Button} from 'react-bootstrap';
// import {Link} from 'react'
import _header from '../_header.png'
//import heartIcon from './HeartIcon'
//import styled from "styled-components";
import { Link } from 'react-router-dom';

import axios from 'axios'
import { useState, useEffect } from 'react';
import {useGlobalContext} from "../GlobalInfo";

function CardComponent({id, title, text, imgUrl }) {
    const { userInfo, setUserInfo } = useGlobalContext();

    const handleAddLiked = (event) => {
        event.preventDefault();
        if (userInfo && userInfo.id) {
            axios
                .post(`http://localhost:8080/api/user/${userInfo.id}/addLiked/${id}`)
                .then((response) => {
                    console.log("DOBAVLENO")
                    // if(response.data.length !== 0 ){
                    //     setUserInfo(response.data);
                    // }else{
                    //     console.log("Данных нет")
                    // }
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    };
        const handleAddBooking = (event) => {
            event.preventDefault();
            if (userInfo && userInfo.id) {
                axios
                    .post(`http://localhost:8080/api/user/${userInfo.id}/addBooking/${id}`)
                    .then((response) => {
                        console.log("DOBAVLENO2")
                        // if(response.data.length !== 0 ){
                        //     setUserInfo(response.data);
                        // }else{
                        //     console.log("Данных нет")
                        // }
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            }
        };

    return (
        // <Link to={`/position_page/${id}`} className='text-decoration-none'>
            <Card className="m-2" style={{ width: '18rem',height: '25rem'  }}>
                <Link to={`/position_page/${id}`} className='text-decoration-none'>
                <Card.Img variant="top" src={imgUrl} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {text}
                    </Card.Text>
                </Card.Body>
                </Link>
                <Card.Body>
                    <Button variant="outline-primary" onClick={handleAddLiked}>
                        Сохранить
                    </Button>
                    <Button variant="outline-primary" className="ms-2" onClick={handleAddBooking}> Записаться</Button>
                </Card.Body>

            </Card>
        // </Link>
    );
}

export default CardComponent;