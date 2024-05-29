import React from "react";
import {Container} from "react-bootstrap";
import axios from 'axios'
import { useState, useEffect } from 'react';
import CardComponent from "./Components/Cart";
import _header from './_header.png'

let userId=4;

function Liked (){

    const [data, setData] = useState([]);

        useEffect(() => {
            axios
            .get(`http://localhost:8080/api/user/${userId}/liked`)
            .then((response) => {
                console.log(response.data)
                setData(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
        }, []);

    return(

        <div>
        <h1 className="ms-4 mt-4">Избранное</h1>
        <Container className={"pt-3 d-flex flex-wrap justify-content-center"}>
        {data.map((liked) => (
               <CardComponent 
                //   key={liked.user_id} 
                  title={liked.positionId.name} 
                  text={liked.positionId.description} 
                  imgUrl={_header} 
               />
            ))}
            
        </Container>
        </div>


    );
}

export default Liked;
   